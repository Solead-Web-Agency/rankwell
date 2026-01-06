'use client';

import { useState, useEffect, useCallback } from 'react';
import type { PageComponentData } from './page';
import { ALL_COMPONENTS, renderPreview, type ComponentDefinition } from './previews';
import { X } from 'lucide-react';

interface ComposantsClientProps {
  data: PageComponentData[];
}

export default function ComposantsClient({ data }: ComposantsClientProps) {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  // Compter le total de composants uniques utilisés dans les pages
  const usedComponents = new Set<string>();
  data.forEach(page => page.components.forEach(c => usedComponents.add(c.name)));

  // Grouper les composants UTILISÉS par catégorie
  const componentsByCategory = ALL_COMPONENTS
    .filter(comp => usedComponents.has(comp.name))
    .reduce((acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = [];
      acc[comp.category].push(comp);
      return acc;
    }, {} as Record<string, ComponentDefinition[]>);

  const categoryLabels: Record<string, string> = {
    global: 'Global',
    homepage: 'Homepage',
    services: 'Services',
  };

  const categoryColors: Record<string, string> = {
    global: 'text-rw-purple',
    homepage: 'text-rw-coral',
    services: 'text-rw-blue',
  };

  // Ouvrir le modal avec un composant
  const openModal = (componentName: string) => {
    setSelectedComponent(componentName);
    setIsModalOpen(true);
  };

  // Fermer le modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  }, []);

  // Fermer le modal avec Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  // Bloquer le scroll quand modal ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="bg-[#0f0f13] text-gray-200 min-h-screen p-8">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-medium text-white">Composants du site</h1>
          <p className="text-sm text-gray-500 mt-1">
            {usedComponents.size} composants utilisés • {data.length} pages
          </p>
        </div>

        {/* Layout 2 colonnes */}
        <div className="flex gap-8">

          {/* ============================================ */}
          {/* COLONNE GAUCHE - Liste des composants */}
          {/* ============================================ */}
          <div className="w-[280px] shrink-0">
            <div className="sticky top-8">
              <h2 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                Composants utilisés ({usedComponents.size})
              </h2>

              <div className="space-y-6">
                {Object.entries(componentsByCategory).map(([category, components]) => (
                  <div key={category}>
                    <h3 className={`text-xs font-medium mb-2 ${categoryColors[category]}`}>
                      {categoryLabels[category]} ({components.length})
                    </h3>
                    <div className="space-y-0.5">
                      {components.map((comp) => {
                        const isHighlighted = hoveredComponent === comp.name;
                        const isOtherHovered = hoveredComponent && hoveredComponent !== comp.name;

                        return (
                          <button
                            key={comp.name}
                            onClick={() => openModal(comp.name)}
                            onMouseEnter={() => setHoveredComponent(comp.name)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-150
                              ${isHighlighted
                                ? 'bg-cyan-400/20 text-cyan-300 ring-1 ring-cyan-400/50'
                                : isOtherHovered
                                  ? 'bg-transparent text-gray-600 opacity-40'
                                  : 'bg-white/[0.03] text-gray-300 hover:bg-white/[0.08]'
                              }`}
                            title={`${comp.description} - Cliquer pour preview`}
                          >
                            <span className="font-mono text-xs">{comp.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-gray-600 mt-6">
                Cliquez pour preview • Survolez pour voir les pages
              </p>
            </div>
          </div>

          {/* ============================================ */}
          {/* COLONNE DROITE - Composants par page */}
          {/* ============================================ */}
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              Utilisation par page
            </h2>

            <div className="space-y-4">
              {data.map((page) => (
                <div
                  key={page.url}
                  className="bg-white/[0.02] rounded-lg border border-gray-800/50 overflow-hidden"
                >
                  {/* En-tête de la page */}
                  <div className="px-4 py-3 border-b border-gray-800/50 flex items-center justify-between">
                    <div>
                      <span className="font-medium text-white text-sm">{page.name}</span>
                      <span className="text-xs text-gray-500 font-mono ml-3">{page.url}</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      page.components.length === 0
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {page.components.length}
                    </span>
                  </div>

                  {/* Liste des composants */}
                  <div className="px-4 py-3">
                    {page.components.length > 0 ? (
                      <div className="space-y-1">
                        {page.components.map((comp, index) => {
                          const isHighlighted = hoveredComponent === comp.name;
                          const isOtherHovered = hoveredComponent && hoveredComponent !== comp.name;

                          return (
                            <div
                              key={`${comp.name}-${index}`}
                              onMouseEnter={() => setHoveredComponent(comp.name)}
                              className={`font-mono text-xs py-1 px-2 rounded transition-all duration-150 cursor-default
                                ${isHighlighted
                                  ? 'bg-cyan-400/20 text-cyan-300'
                                  : isOtherHovered
                                    ? 'text-gray-600 opacity-40'
                                    : 'text-gray-400'
                                }`}
                            >
                              {comp.name}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <span className="text-red-400/60 text-xs">Aucun composant</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MODAL - Preview du composant */}
      {/* ============================================ */}
      {isModalOpen && selectedComponent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative w-[95vw] h-[90vh] bg-white dark:bg-background-7 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-background-8/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {selectedComponent}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {ALL_COMPONENTS.find(c => c.name === selectedComponent)?.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Preview content */}
            <div className="h-full pt-20 overflow-y-auto bg-background-1 dark:bg-background-6">
              <div className="min-h-full">
                {renderPreview(selectedComponent)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
