'use client';

import { useState } from 'react';
import type { PageData } from './page';

interface MaillageClientProps {
  frData: PageData[];
  enData: PageData[];
}

export default function MaillageClient({ frData, enData }: MaillageClientProps) {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const data = lang === 'fr' ? frData : enData;
  const totalLinks = data.reduce((sum, p) => sum + p.count, 0);

  return (
    <div className="bg-[#0f0f13] text-gray-200 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-medium text-white">Maillage Interne</h1>
            <p className="text-sm text-gray-500 mt-1">
              {totalLinks} liens • {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Toggle FR / EN */}
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setLang('fr')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                lang === 'fr'
                  ? 'bg-white text-gray-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-white text-gray-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

        {/* Tableau */}
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-left text-gray-400">
              <th className="pb-3 font-medium">Page</th>
              <th className="pb-3 font-medium text-center w-20">Liens</th>
              <th className="pb-3 font-medium text-center w-16">%</th>
              <th className="pb-3 font-medium text-center w-20">Menu</th>
              <th className="pb-3 font-medium text-center w-20">Footer</th>
              <th className="pb-3 font-medium">Provenance → &quot;ancre&quot;</th>
            </tr>
          </thead>
          <tbody>
            {data.map((page) => (
              <tr key={page.url} className="border-b border-gray-800/50 hover:bg-white/[0.02] align-top">
                {/* URL */}
                <td className="py-4 pr-4">
                  <div className="font-medium text-white">{page.name}</div>
                  <div className="text-xs text-gray-500 font-mono">{page.url}</div>
                </td>

                {/* Nombre */}
                <td className="py-4 text-center">
                  <span className={`font-medium ${page.count === 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {page.count}
                  </span>
                </td>

                {/* Pourcentage */}
                <td className="py-4 text-center text-gray-400">
                  {page.percent.toFixed(1)}%
                </td>

                {/* Dans menu */}
                <td className="py-4 text-center">
                  <span className={page.inMenu ? 'text-emerald-400' : 'text-gray-600'}>
                    {page.inMenu ? 'Oui' : 'Non'}
                  </span>
                </td>

                {/* Dans footer */}
                <td className="py-4 text-center">
                  <span className={page.inFooter ? 'text-emerald-400' : 'text-gray-600'}>
                    {page.inFooter ? 'Oui' : 'Non'}
                  </span>
                </td>

                {/* Liste des liens */}
                <td className="py-4">
                  {page.incomingLinks.length > 0 ? (
                    <div className="space-y-1">
                      {page.incomingLinks.map((link, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-gray-500">{link.fromUrl}</span>
                          <span className="text-gray-600 mx-1">→</span>
                          <span className="text-cyan-400">&quot;{link.anchor}&quot;</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-red-400/60 text-xs">Aucun lien entrant</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Note */}
        <p className="text-xs text-gray-600 mt-8">
          Liens du contenu uniquement (CTA, services, etc.) • Hors menu, footer, breadcrumb
        </p>

      </div>
    </div>
  );
}
