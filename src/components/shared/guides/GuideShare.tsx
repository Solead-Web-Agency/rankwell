'use client';

/**
 * GUIDE SHARE — Boutons de partage réseaux sociaux
 */

import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';

interface GuideShareProps {
  url: string;
  title: string;
  locale: string;
}

const BASE_URL = 'https://rankwell.agency';

export default function GuideShare({ url, title, locale }: GuideShareProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `${BASE_URL}${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const label = locale === 'fr' ? 'Partager' : 'Share';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback silencieux */
    }
  };

  const channels = [
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
    {
      name: 'X',
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
  ];

  return (
    <RevealAnimation>
      <div className="relative flex flex-col items-center gap-5">
        <p className="text-tagline-2 font-semibold uppercase tracking-widest text-secondary/35 dark:text-white/30">
          {label}
        </p>

        <div className="flex items-center gap-3">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} sur ${ch.name}`}
              className="flex h-12 w-12 items-center justify-center rounded-full text-secondary/40 dark:text-white/35 transition-all duration-200 hover:text-secondary dark:hover:text-white hover:bg-background-2 dark:hover:bg-background-9"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {ch.icon}
              </svg>
            </a>
          ))}

          {/* Copier le lien — icône clipboard */}
          <button
            onClick={copyLink}
            aria-label={locale === 'fr' ? 'Copier le lien' : 'Copy link'}
            className="flex h-12 w-12 items-center justify-center rounded-full text-secondary/40 dark:text-white/35 transition-all duration-200 hover:text-secondary dark:hover:text-white hover:bg-background-2 dark:hover:bg-background-9"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m0 0a2.625 2.625 0 115.25 0" />
            </svg>
          </button>
        </div>

        {/* Toast "Lien copié" */}
        <div
          className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rw-blue px-4 py-1.5 text-tagline-3 font-medium text-white shadow-lg transition-all duration-300 ${
            copied
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0 pointer-events-none'
          }`}
        >
          {locale === 'fr' ? 'Lien copié !' : 'Link copied!'}
        </div>
      </div>
    </RevealAnimation>
  );
}
