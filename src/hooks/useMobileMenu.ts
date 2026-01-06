'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseMobileMenuReturn {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  activeSubmenu: string | null;
  toggleSubmenu: (menuId: string) => void;
  activeSubSubmenu: string | null;
  toggleSubSubmenu: (menuId: string) => void;
  closeAllSubmenus: () => void;
}

export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState<string | null>(null);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add('overflow-hidden');
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
  }, []);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, closeMenu, openMenu]);

  const toggleSubmenu = useCallback((menuId: string) => {
    setActiveSubmenu((current) => (current === menuId ? null : menuId));
    setActiveSubSubmenu(null); // Reset sub-submenu when changing submenu
  }, []);

  const toggleSubSubmenu = useCallback((menuId: string) => {
    setActiveSubSubmenu((current) => (current === menuId ? null : menuId));
  }, []);

  const closeAllSubmenus = useCallback(() => {
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    activeSubmenu,
    toggleSubmenu,
    activeSubSubmenu,
    toggleSubSubmenu,
    closeAllSubmenus,
  };
};
