import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { route, pageName, menuSelection } = await request.json();

    if (!route || !pageName || !menuSelection) {
      return NextResponse.json(
        { error: 'Missing required fields: route, pageName, menuSelection' },
        { status: 400 }
      );
    }

    const headerPath = path.join(process.cwd(), 'src/data/header.ts');
    if (!fs.existsSync(headerPath)) {
      return NextResponse.json(
        { error: 'Header file not found' },
        { status: 404 }
      );
    }

    let headerContent = fs.readFileSync(headerPath, 'utf-8');
    const cleanRoute = route.startsWith('/') ? route : `/${route}`;
    const menuItemId = cleanRoute.replace(/\//g, '-').replace(/[^a-z0-9-]/gi, '').toLowerCase();
    const menuItem = `{ id: '${menuItemId}', label: '${pageName.replace(/'/g, "\\'")}', href: '${cleanRoute}' }`;

    // Générer le nouvel item de menu
    const newMenuItem = `      ${menuItem},\n`;

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
      } else {
        return NextResponse.json(
          { error: `Could not find ${menuSelection.menuType} in header file` },
          { status: 400 }
        );
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
          const updatedItems = newMenuItem + items;
          headerContent = headerContent.replace(columnRegex, `$1${updatedItems}$3`);
        } else {
          // Ajouter à la fin
          const updatedItems = items.trim() + '\n      ' + menuItem;
          headerContent = headerContent.replace(columnRegex, `$1${updatedItems}$3`);
        }
      } else {
        return NextResponse.json(
          { error: `Could not find column ${menuSelection.column} in ${menuSelection.menuType}` },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: `Unknown menu type: ${menuSelection.menuType}` },
        { status: 400 }
      );
    }

    // Écrire le fichier mis à jour
    fs.writeFileSync(headerPath, headerContent, 'utf-8');

    return NextResponse.json({
      success: true,
      message: `Menu updated successfully`,
      menuType: menuSelection.menuType,
    });
  } catch (error) {
    console.error('Error updating menu:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to update menu',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

