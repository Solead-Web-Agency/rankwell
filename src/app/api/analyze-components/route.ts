import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const aiComponentsDir = path.join(process.cwd(), 'ai-components');
    
    // Lire index.json
    const indexPath = path.join(aiComponentsDir, 'index.json');
    if (!fs.existsSync(indexPath)) {
      return NextResponse.json(
        { error: 'Components database not found. Please run the scanner first.' },
        { status: 404 }
      );
    }
    
    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    
    // Lire tous les composants
    const componentsDir = path.join(aiComponentsDir, 'components');
    const componentFiles = fs.readdirSync(componentsDir);
    const components = componentFiles.map((file) => {
      const filePath = path.join(componentsDir, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    });
    
    // Lire tous les templates
    const templatesDir = path.join(aiComponentsDir, 'templates');
    const templateFiles = fs.readdirSync(templatesDir);
    const templates = templateFiles.map((file) => {
      const filePath = path.join(templatesDir, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    });
    
    return NextResponse.json({
      components,
      templates,
      statistics: indexData.statistics,
    });
  } catch (error) {
    console.error('Error analyzing components:', error);
    return NextResponse.json(
      { error: 'Failed to analyze components' },
      { status: 500 }
    );
  }
}

