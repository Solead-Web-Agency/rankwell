import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { route, pageName, pageCode, metadata, menuSelection } = await request.json();

    if (!route || !pageName || !pageCode) {
      return NextResponse.json(
        { error: 'Missing required fields: route, pageName, pageCode' },
        { status: 400 }
      );
    }

    // Nettoyer la route
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    const routeParts = cleanRoute.split('/').filter(Boolean);
    
    // Créer le dossier de la page
    const appDir = path.join(process.cwd(), 'src/app');
    const pageDir = path.join(appDir, ...routeParts);
    
    // Vérifier si la page existe déjà
    const pageFilePath = path.join(pageDir, 'page.tsx');
    if (fs.existsSync(pageFilePath)) {
      return NextResponse.json(
        { error: `Page already exists at ${route}` },
        { status: 400 }
      );
    }

    // Créer les dossiers nécessaires
    fs.mkdirSync(pageDir, { recursive: true });

    // Écrire le fichier de la page
    fs.writeFileSync(pageFilePath, pageCode, 'utf-8');

    // Mettre à jour le menu si nécessaire
    if (menuSelection && menuSelection.menuType !== 'none') {
      try {
        const headerPath = path.join(process.cwd(), 'src/data/header.ts');
        if (fs.existsSync(headerPath)) {
          let headerContent = fs.readFileSync(headerPath, 'utf-8');
          const cleanRoute = route.startsWith('/') ? route : `/${route}`;
          const menuItemId = cleanRoute.replace(/\//g, '-').replace(/[^a-z0-9-]/gi, '').toLowerCase();
          const menuItem = `{ id: '${menuItemId}', label: '${pageName.replace(/'/g, "\\'")}', href: '${cleanRoute}' }`;

          if (menuSelection.menuType === 'aboutMenuItems' || 
              menuSelection.menuType === 'servicesMenuItems' || 
              menuSelection.menuType === 'blogMenuItems') {
            // Menu simple - ajouter à la fin de la liste
            const menuItemsRegex = new RegExp(
              `(export const ${menuSelection.menuType}: MegaMenuItem\\[\\] = \\[)([\\s\\S]*?)(\\];)`,
              'm'
            );
            
            const match = headerContent.match(menuItemsRegex);
            if (match) {
              const items = match[2];
              const updatedItems = items.trim() + '\n  ' + menuItem + ',\n';
              headerContent = headerContent.replace(menuItemsRegex, `$1${updatedItems}$3`);
            }
          } else if (menuSelection.menuType === 'pageMegaMenuColumns' || 
                     menuSelection.menuType === 'homeMegaMenuColumns') {
            // Mega Menu avec colonnes
            const columnId = `column-${menuSelection.column}`;
            const columnRegex = new RegExp(
              `(\\{\\s*id: '${columnId}',\\s*items: \\[)([\\s\\S]*?)(\\s*\\],\\s*\\})`,
              'm'
            );
            
            const match = headerContent.match(columnRegex);
            if (match) {
              const items = match[2];
              if (menuSelection.position === 'start') {
                // Ajouter au début
                const updatedItems = `      ${menuItem},\n` + items;
                headerContent = headerContent.replace(columnRegex, `$1${updatedItems}$3`);
              } else {
                // Ajouter à la fin
                const updatedItems = items.trim() + '\n      ' + menuItem;
                headerContent = headerContent.replace(columnRegex, `$1${updatedItems}$3`);
              }
            }
          }

          // Écrire le fichier mis à jour
          fs.writeFileSync(headerPath, headerContent, 'utf-8');
        }
      } catch (menuError) {
        console.warn('Could not update menu:', menuError);
        // Ne pas échouer si le menu ne peut pas être mis à jour
      }
    }

    return NextResponse.json({
      success: true,
      route,
      message: `Page created successfully at ${route}`,
    });
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create page',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

