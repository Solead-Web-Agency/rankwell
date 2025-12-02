import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const templatesDir = path.join(process.cwd(), 'ai-components/templates');
    
    if (!fs.existsSync(templatesDir)) {
      return NextResponse.json({ templates: [] });
    }

    const templateFiles = fs.readdirSync(templatesDir).filter(file => file.endsWith('.json'));
    
    const templates = templateFiles.map((file) => {
      const filePath = path.join(templatesDir, file);
      const templateData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return {
        id: templateData.id,
        name: templateData.name,
        description: templateData.description,
        category: templateData.category,
        minComponents: templateData.minComponents,
        maxComponents: templateData.maxComponents,
        componentCount: templateData.components?.length || 0,
      };
    });

    return NextResponse.json({ templates });
  } catch (error) {
    console.error('Error loading templates:', error);
    return NextResponse.json(
      { error: 'Failed to load templates' },
      { status: 500 }
    );
  }
}

