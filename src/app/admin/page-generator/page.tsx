'use client';

import { useState, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PageGeneration {
  pageCode?: string;
  suggestedComponents?: string[];
  metadata?: {
    title: string;
    description: string;
  };
  menuSuggestion?: {
    menu: string;
    column: number;
    position: string;
  };
}

// Le mot de passe sera vérifié côté serveur via une API route

export default function PageGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageGeneration, setPageGeneration] = useState<PageGeneration | null>(null);
  const [route, setRoute] = useState('');
  const [pageName, setPageName] = useState('');
  const [menuSelection, setMenuSelection] = useState({
    menuType: 'pageMegaMenuColumns',
    column: 1,
    position: 'end' as 'start' | 'end',
  });

  useEffect(() => {
    // Vérifier l'authentification au chargement
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async () => {
    const password = prompt('Entrez le mot de passe administrateur:');
    if (!password) return;
    
    try {
      const response = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_authenticated', 'true');
      } else {
        alert(data.error || 'Mot de passe incorrect');
      }
    } catch (error) {
      alert('Erreur de connexion');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setMessages([]);
    setPageGeneration(null);
  };

  const handleSend = async () => {
    if (!input.trim() || !route.trim() || !pageName.trim()) {
      alert('Veuillez remplir tous les champs (prompt, route et nom de page)');
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/generate-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          route: route.startsWith('/') ? route : `/${route}`,
          pageName,
          category: route.split('/')[1] || 'page',
        }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: `J'ai analysé vos composants disponibles et généré une page pour "${pageName}".\n\nComposants suggérés: ${data.suggestedComponents?.join(', ') || 'Aucun'}\n\nRoute: ${data.route}\n\nVoulez-vous valider cette génération ?`,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setPageGeneration({
          pageCode: data.pageCode,
          suggestedComponents: data.suggestedComponents,
          metadata: data.metadata,
          menuSuggestion: data.menuSuggestion,
        });
      } else {
        const errorMessage: Message = {
          role: 'assistant',
          content: `Erreur: ${data.error || 'Une erreur est survenue'}`,
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: `Erreur de connexion: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleValidate = async () => {
    if (!pageGeneration?.pageCode) return;

    setLoading(true);
    try {
      const response = await fetch('/api/create-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          route: route.startsWith('/') ? route : `/${route}`,
          pageName,
          pageCode: pageGeneration.pageCode,
          metadata: pageGeneration.metadata,
          menuSelection: menuSelection.menuType !== 'none' ? menuSelection : null,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Page créée avec succès ! Route: ${data.route}`);
        setPageGeneration(null);
        setRoute('');
        setPageName('');
        setMessages([]);
      } else {
        alert(`Erreur: ${data.error || 'Impossible de créer la page'}`);
      }
    } catch (error) {
      alert(`Erreur: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-2 dark:bg-background-5">
        <div className="bg-background-1 dark:bg-background-8 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">🔒 Accès Administrateur</h1>
          <p className="text-body-text mb-6 text-center">Générateur de Pages IA</p>
          <button
            onClick={handleLogin}
            className="w-full btn-primary py-3 rounded-lg font-semibold"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-2 dark:bg-background-5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-background-1 dark:bg-background-8 rounded-lg p-6 mb-6 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">🤖 Générateur de Pages IA</h1>
              <p className="text-body-text">Créez des pages Next.js optimisées SEO avec l'IA Gemini</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary px-4 py-2 rounded-lg"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chat Messages */}
            <div className="bg-background-1 dark:bg-background-8 rounded-lg p-6 shadow-lg h-[500px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-body-text">
                  <div className="text-center">
                    <p className="text-xl mb-2">👋 Bienvenue !</p>
                    <p>Décrivez la page que vous souhaitez créer et l'IA générera le code pour vous.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          msg.role === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-background-3 dark:bg-background-7 text-body-text'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-background-3 dark:bg-background-7 rounded-lg p-4">
                        <p className="text-body-text">⏳ Génération en cours...</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input Section */}
            <div className="bg-background-1 dark:bg-background-8 rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Route de la page</label>
                  <input
                    type="text"
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    placeholder="/ma-page"
                    className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom de la page</label>
                  <input
                    type="text"
                    value={pageName}
                    onChange={(e) => setPageName(e.target.value)}
                    placeholder="Ma Page"
                    className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Menu dans la navigation</label>
                  <select
                    value={menuSelection.menuType}
                    onChange={(e) => setMenuSelection({ ...menuSelection, menuType: e.target.value, column: 1 })}
                    className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5 mb-2"
                  >
                    <option value="pageMegaMenuColumns">Pages (Mega Menu - 4 colonnes)</option>
                    <option value="homeMegaMenuColumns">Home (Mega Menu - 3 colonnes)</option>
                    <option value="aboutMenuItems">About (Menu simple)</option>
                    <option value="servicesMenuItems">Services (Menu simple)</option>
                    <option value="blogMenuItems">Blog (Menu simple)</option>
                    <option value="none">Ne pas ajouter au menu</option>
                  </select>
                  {(menuSelection.menuType === 'pageMegaMenuColumns' || menuSelection.menuType === 'homeMegaMenuColumns') && (
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs font-semibold mb-1">Colonne</label>
                        <select
                          value={menuSelection.column}
                          onChange={(e) => setMenuSelection({ ...menuSelection, column: parseInt(e.target.value) })}
                          className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5"
                        >
                          {menuSelection.menuType === 'pageMegaMenuColumns' ? (
                            <>
                              <option value={1}>Colonne 1</option>
                              <option value={2}>Colonne 2</option>
                              <option value={3}>Colonne 3</option>
                              <option value={4}>Colonne 4</option>
                            </>
                          ) : (
                            <>
                              <option value={1}>Colonne 1</option>
                              <option value={2}>Colonne 2</option>
                              <option value={3}>Colonne 3</option>
                            </>
                          )}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1">Position</label>
                        <select
                          value={menuSelection.position}
                          onChange={(e) => setMenuSelection({ ...menuSelection, position: e.target.value as 'start' | 'end' })}
                          className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5"
                        >
                          <option value="end">À la fin</option>
                          <option value="start">Au début</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Description de la page</label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.ctrlKey) {
                        handleSend();
                      }
                    }}
                    placeholder="Ex: Créer une page contact avec formulaire, carte et section CTA..."
                    rows={4}
                    className="w-full px-4 py-2 border border-stroke-2 dark:border-stroke-6 rounded-lg bg-background-2 dark:bg-background-5 resize-none"
                  />
                  <p className="text-xs text-body-text mt-1">Ctrl + Enter pour envoyer</p>
                </div>
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim() || !route.trim() || !pageName.trim()}
                  className="w-full btn-primary py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Génération...' : '🚀 Générer la page'}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            {pageGeneration && (
              <div className="bg-background-1 dark:bg-background-8 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">📋 Prévisualisation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Composants suggérés:</h3>
                    <div className="flex flex-wrap gap-2">
                      {pageGeneration.suggestedComponents?.map((comp, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/20 text-primary rounded text-sm"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                  {pageGeneration.metadata && (
                    <div>
                      <h3 className="font-semibold mb-2">Métadonnées SEO:</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Title:</strong> {pageGeneration.metadata.title}</p>
                        <p><strong>Description:</strong> {pageGeneration.metadata.description}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={handleValidate}
                      disabled={loading}
                      className="flex-1 btn-primary py-2 rounded-lg font-semibold disabled:opacity-50"
                    >
                      ✓ Valider et créer
                    </button>
                    <button
                      onClick={() => setPageGeneration(null)}
                      className="flex-1 btn-secondary py-2 rounded-lg font-semibold"
                    >
                      ✗ Annuler
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Code Preview */}
            {pageGeneration?.pageCode && (
              <div className="bg-background-1 dark:bg-background-8 rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-4">💻 Code généré</h2>
                <div className="bg-background-2 dark:bg-background-5 rounded p-4 overflow-x-auto max-h-[400px] overflow-y-auto">
                  <pre className="text-xs">
                    <code>{pageGeneration.pageCode}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

