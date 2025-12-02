import fs from 'fs';
import path from 'path';

interface ComponentProp {
  name: string;
  type: string;
  optional: boolean;
  default?: any;
  description: string;
}

interface ComponentChild {
  component: string;
  usage: string;
}

interface ComponentExample {
  code: string;
  description: string;
}

interface ComponentDoc {
  name: string;
  path: string;
  description: string;
  category: string;
  props: ComponentProp[];
  children: ComponentChild[];
  examples: ComponentExample[];
  relatedComponents: string[];
  templates: string[];
}

interface PageComponent {
  name: string;
  path: string;
  props: Record<string, any>;
}

interface PageDoc {
  route: string;
  title: string;
  components: PageComponent[];
  metadata: {
    title?: string;
    description?: string;
  };
}

interface IndexDoc {
  pages: PageDoc[];
  statistics: {
    totalPages: number;
    totalComponents: number;
    mostUsedComponents: Array<{ name: string; count: number }>;
  };
}

// Catégories de composants
const getCategory = (componentPath: string): string => {
  if (componentPath.includes('header') || componentPath.includes('navbar')) return 'header';
  if (componentPath.includes('footer')) return 'footer';
  if (componentPath.includes('hero')) return 'hero';
  if (componentPath.includes('cta')) return 'cta';
  if (componentPath.includes('testimonial') || componentPath.includes('review')) return 'testimonial';
  if (componentPath.includes('pricing')) return 'pricing';
  if (componentPath.includes('blog')) return 'blog';
  if (componentPath.includes('team')) return 'team';
  if (componentPath.includes('about')) return 'about';
  if (componentPath.includes('service')) return 'service';
  if (componentPath.includes('faq')) return 'faq';
  if (componentPath.includes('animation')) return 'animation';
  if (componentPath.includes('shared')) return 'shared';
  return 'other';
};

// Extraire les props d'une interface TypeScript
function extractPropsFromInterface(content: string, interfaceName: string): ComponentProp[] {
  const props: ComponentProp[] = [];
  
  // Chercher l'interface
  const interfaceRegex = new RegExp(`interface\\s+${interfaceName}\\s*\\{([^}]+)\\}`, 's');
  const match = content.match(interfaceRegex);
  
  if (!match) return props;
  
  const interfaceBody = match[1];
  // Extraire chaque propriété
  const propRegex = /(\w+)(\?)?\s*:\s*([^;]+);/g;
  let propMatch;
  
  while ((propMatch = propRegex.exec(interfaceBody)) !== null) {
    const [, name, optional, type] = propMatch;
    props.push({
      name: name.trim(),
      type: type.trim(),
      optional: !!optional,
      description: '',
    });
  }
  
  return props;
}

// Extraire les imports de composants depuis un fichier
function extractComponentImports(content: string): Array<{ name: string; path: string }> {
  const imports: Array<{ name: string; path: string }> = [];
  
  // Pattern pour les imports: import ComponentName from '@/components/...'
  const importRegex = /import\s+(\w+)(?:\s+as\s+(\w+))?\s+from\s+['"](@\/components\/[^'"]+)['"]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const [, defaultName, alias, importPath] = match;
    imports.push({
      name: alias || defaultName,
      path: importPath,
    });
  }
  
  return imports;
}

// Scanner un composant et extraire ses informations
function scanComponent(componentPath: string): ComponentDoc | null {
  try {
    const fullPath = path.join(process.cwd(), componentPath.replace('@/', 'src/'));
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    const fileName = path.basename(fullPath, '.tsx');
    const dirName = path.dirname(fullPath).split(path.sep).pop() || '';
    
    // Extraire le nom du composant (généralement le nom du fichier)
    const componentName = fileName;
    
    // Chercher l'interface des props
    let props: ComponentProp[] = [];
    const propsInterfaceMatch = content.match(/interface\s+(\w+Props)\s*\{/);
    if (propsInterfaceMatch) {
      props = extractPropsFromInterface(content, propsInterfaceMatch[1]);
    }
    
    // Extraire les composants enfants utilisés
    const children: ComponentChild[] = [];
    const childImports = extractComponentImports(content);
    childImports.forEach(imp => {
      if (imp.name !== componentName) {
        children.push({
          component: imp.name,
          usage: 'child',
        });
      }
    });
    
    // Générer une description basique
    const description = `Component ${componentName} from ${dirName}`;
    
    return {
      name: componentName,
      path: componentPath,
      description,
      category: getCategory(componentPath),
      props,
      children,
      examples: [],
      relatedComponents: [],
      templates: [],
    };
  } catch (error) {
    console.error(`Error scanning component ${componentPath}:`, error);
    return null;
  }
}

// Scanner toutes les pages
function scanPages(): PageDoc[] {
  const pages: PageDoc[] = [];
  const appDir = path.join(process.cwd(), 'src/app');
  
  function scanDirectory(dir: string, routePrefix: string = ''): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Ignorer les dossiers spéciaux
        if (entry.name.startsWith('[') || entry.name.startsWith('_')) {
          continue;
        }
        const newRoute = routePrefix ? `${routePrefix}/${entry.name}` : `/${entry.name}`;
        scanDirectory(fullPath, newRoute);
      } else if (entry.name === 'page.tsx') {
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const route = routePrefix || '/';
          
          // Extraire les imports de composants
          const componentImports = extractComponentImports(content);
          
          // Extraire les métadonnées
          const metadataMatch = content.match(/export\s+const\s+metadata[^=]*=\s*\{([\s\S]+?)\}/);
          let metadata: { title?: string; description?: string } = {};
          if (metadataMatch) {
            const metadataContent = metadataMatch[1];
            const titleMatch = metadataContent.match(/title:\s*['"]([^'"]+)['"]/);
            const descMatch = metadataContent.match(/description:\s*['"]([^'"]+)['"]/);
            if (titleMatch) metadata.title = titleMatch[1];
            if (descMatch) metadata.description = descMatch[1];
          }
          
          // Extraire le titre de la page depuis le nom du dossier ou metadata
          const title = metadata.title || route.split('/').pop() || 'Page';
          
          // Filtrer les imports qui sont des composants (pas next, react, etc.)
          const pageComponents: PageComponent[] = componentImports
            .filter(imp => imp.path.includes('@/components'))
            .map(imp => ({
              name: imp.name,
              path: imp.path,
              props: {},
            }));
          
          pages.push({
            route,
            title,
            components: pageComponents,
            metadata,
          });
        } catch (error) {
          console.error(`Error scanning page ${fullPath}:`, error);
        }
      }
    }
  }
  
  scanDirectory(appDir);
  return pages;
}

// Scanner tous les composants
function scanAllComponents(): ComponentDoc[] {
  const components: ComponentDoc[] = [];
  const componentsDir = path.join(process.cwd(), 'src/components');
  
  function scanDirectory(dir: string, basePath: string = '@/components'): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const newBasePath = `${basePath}/${entry.name}`;
        scanDirectory(fullPath, newBasePath);
      } else if (entry.name.endsWith('.tsx') && !entry.name.includes('.test.') && !entry.name.includes('.spec.')) {
        const componentPath = `${basePath}/${entry.name}`;
        const componentDoc = scanComponent(componentPath);
        if (componentDoc) {
          components.push(componentDoc);
        }
      }
    }
  }
  
  scanDirectory(componentsDir);
  return components;
}

// Générer les statistiques
function generateStatistics(pages: PageDoc[], components: ComponentDoc[]): IndexDoc['statistics'] {
  const componentUsage = new Map<string, number>();
  
  pages.forEach(page => {
    page.components.forEach(comp => {
      const count = componentUsage.get(comp.name) || 0;
      componentUsage.set(comp.name, count + 1);
    });
  });
  
  const mostUsedComponents = Array.from(componentUsage.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
  
  return {
    totalPages: pages.length,
    totalComponents: components.length,
    mostUsedComponents,
  };
}

// Générer les templates basiques
function generateTemplates(pages: PageDoc[]): any[] {
  const templates: any[] = [];
  const templateMap = new Map<string, any>();
  
  // Grouper les pages par type (homepage, about, etc.)
  pages.forEach(page => {
    const routeParts = page.route.split('/').filter(Boolean);
    if (routeParts.length === 0) return;
    
    const pageType = routeParts[0];
    const templateId = `${pageType}-template`;
    
    if (!templateMap.has(templateId)) {
      templateMap.set(templateId, {
        id: templateId,
        name: `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Template`,
        description: `Template pour pages de type ${pageType}`,
        category: pageType,
        components: [],
        seoTemplate: {
          title: `{pageName} - NextSaaS`,
          description: `Description optimisée SEO pour {pageName}`,
        },
      });
    }
    
    const template = templateMap.get(templateId)!;
    page.components.forEach(comp => {
      if (!template.components.find((c: any) => c.component === comp.name)) {
        template.components.push({
          component: comp.name,
          required: comp.name.includes('Navbar') || comp.name.includes('Footer'),
          order: template.components.length + 1,
        });
      }
    });
  });
  
  return Array.from(templateMap.values());
}

// Fonction principale
async function main() {
  console.log('🔍 Scanning pages...');
  const pages = scanPages();
  console.log(`✅ Found ${pages.length} pages`);
  
  console.log('🔍 Scanning components...');
  const components = scanAllComponents();
  console.log(`✅ Found ${components.length} components`);
  
  console.log('📊 Generating statistics...');
  const statistics = generateStatistics(pages, components);
  
  console.log('📝 Generating index.json...');
  const indexDoc: IndexDoc = {
    pages,
    statistics,
  };
  
  const aiComponentsDir = path.join(process.cwd(), 'ai-components');
  if (!fs.existsSync(aiComponentsDir)) {
    fs.mkdirSync(aiComponentsDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(aiComponentsDir, 'index.json'),
    JSON.stringify(indexDoc, null, 2)
  );
  console.log('✅ Created ai-components/index.json');
  
  console.log('📝 Generating component JSON files...');
  const componentsDir = path.join(aiComponentsDir, 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  // Créer un map pour gérer les composants avec le même nom
  const componentMap = new Map<string, ComponentDoc>();
  
  components.forEach(component => {
    // Utiliser le chemin complet comme clé pour éviter les collisions
    const key = component.path.replace('@/components/', '').replace('.tsx', '').replace(/\//g, '-');
    componentMap.set(key, component);
  });
  
  componentMap.forEach((component, key) => {
    const fileName = `${key}.json`;
    fs.writeFileSync(
      path.join(componentsDir, fileName),
      JSON.stringify(component, null, 2)
    );
  });
  console.log(`✅ Created ${components.length} component JSON files`);
  
  console.log('📝 Generating templates...');
  const templates = generateTemplates(pages);
  const templatesDir = path.join(aiComponentsDir, 'templates');
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }
  
  templates.forEach(template => {
    const fileName = `${template.id}.json`;
    fs.writeFileSync(
      path.join(templatesDir, fileName),
      JSON.stringify(template, null, 2)
    );
  });
  console.log(`✅ Created ${templates.length} template JSON files`);
  
  console.log('\n✨ Scan completed successfully!');
  console.log(`📄 Pages: ${pages.length}`);
  console.log(`🧩 Components: ${components.length}`);
  console.log(`📋 Templates: ${templates.length}`);
}

main().catch(console.error);

