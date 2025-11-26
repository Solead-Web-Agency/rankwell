'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-black">
            <span className="gradient-text">Rank</span>
            <span className="text-slate-900">Well</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-primary-600 transition font-medium">
              Accueil
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-primary-600 transition font-medium">
              Services
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary-600 transition font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-primary-600 transition font-medium">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Démarrer →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <Link href="/" className="block py-3 text-slate-700 hover:text-primary-600 font-medium transition">
              Accueil
            </Link>
            <Link href="/services" className="block py-3 text-slate-700 hover:text-primary-600 font-medium transition">
              Services
            </Link>
            <Link href="/about" className="block py-3 text-slate-700 hover:text-primary-600 font-medium transition">
              À propos
            </Link>
            <Link href="/contact" className="block py-3 text-slate-700 hover:text-primary-600 font-medium transition">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="block mt-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-center font-semibold shadow-lg"
            >
              Démarrer →
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
