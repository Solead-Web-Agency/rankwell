/**
 * LEADMODAL - Modale formulaire de contact (landing pages conversion)
 *
 * - Formulaire court : nom, email, téléphone, site web, budget mensuel
 * - Honeypot anti-spam, consentement RGPD
 * - Envoi : POST JSON vers /api/lead (route API du site) qui transmet
 *   au webhook LEAD_WEBHOOK_URL (Make, Zapier, n8n...)
 * - Événement dataLayer `generate_lead` en cas de succès (suivi conversions Ads)
 * - Fermeture : bouton, clic sur le fond, touche Échap
 * - `data-lenis-prevent` : le smooth scroll Lenis ignore la modale
 */

'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

// ============================================
// TYPES
// ============================================
export interface LeadModalContent {
  title: string;
  subtitle: string;
  reassurance: string[];
  labels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    website: string;
    websitePlaceholder: string;
    budget: string;
    budgetPlaceholder: string;
    consent: string;
    /** Libellé du lien vers la politique de confidentialité (absent = pas de lien) */
    consentLink?: string;
    submit: string;
    sending: string;
    close: string;
  };
  budgetOptions: string[];
  success: {
    title: string;
    text: string;
    button: string;
  };
  error: string;
}

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: LeadModalContent;
  /** Identifiant du CTA à l'origine de l'ouverture */
  source?: string;
  /** Identifiant de la page pour le payload et le tracking */
  formId: string;
  accentColor?: RwColor;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

/** Route API du site qui transmet le lead au webhook (voir src/app/api/lead/route.ts) */
const LEAD_API_PATH = '/api/lead';

const inputClass =
  'w-full px-[18px] py-3 h-[48px] rounded-full border border-stroke-3 bg-background-1 text-tagline-2 text-secondary placeholder:text-secondary/60 placeholder:font-normal font-normal focus:outline-none focus:border-secondary dark:bg-background-6 dark:border-stroke-7 dark:text-accent dark:placeholder:text-accent/60 dark:focus:border-stroke-4/20';

// ============================================
// COMPOSANT
// ============================================
const LeadModal = ({
  isOpen,
  onClose,
  content,
  source = 'cta',
  formId,
  accentColor = 'rw-cyan',
}: LeadModalProps) => {
  const colors = colorVariants[accentColor];
  const [status, setStatus] = useState<Status>('idle');
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Verrouillage du scroll + focus + touche Échap
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      window.clearTimeout(focusTimer);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  // Réinitialiser le statut à la réouverture (sauf si succès : on le garde)
  useEffect(() => {
    if (isOpen && status === 'error') setStatus('idle');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);

      setStatus('sending');

      const payload = {
        formId,
        source,
        page: typeof window !== 'undefined' ? window.location.pathname : '',
        locale: 'fr',
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        phone: String(data.get('phone') || ''),
        website: String(data.get('website') || ''),
        budget: String(data.get('budget') || ''),
        consent: data.get('consent') === 'on',
        // Honeypot : vérifié côté serveur
        company_website: String(data.get('company_website') || ''),
      };

      try {
        const res = await fetch(LEAD_API_PATH, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        // Tracking conversion (GTM / GA4 / Google Ads)
        if (typeof window !== 'undefined') {
          const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({ event: 'generate_lead', form_id: formId, lead_source: source });
        }

        form.reset();
        setStatus('success');
      } catch {
        setStatus('error');
      }
    },
    [formId, source]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      {/* Fond */}
      <button
        type="button"
        aria-label={content.labels.close}
        onClick={onClose}
        className="absolute inset-0 bg-secondary/70 backdrop-blur-sm cursor-default"
      />

      {/* Panneau */}
      <div
        className={cn(
          'relative w-full sm:max-w-[560px] max-h-[92vh] overflow-y-auto scroll-bar',
          'bg-white dark:bg-background-6 rounded-t-[28px] sm:rounded-[28px] shadow-11',
          'p-6 sm:p-8 md:p-10 animate-[lead-modal-in_.3s_ease-out]'
        )}
      >
        {/* Fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label={content.labels.close}
          className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center text-secondary/60 hover:text-secondary hover:bg-background-3 dark:text-accent/60 dark:hover:text-accent dark:hover:bg-background-7 transition-colors"
        >
          <Icon name="X" className="size-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 space-y-5">
            <span className={`mx-auto size-14 rounded-full ${colors.bg} flex items-center justify-center`}>
              <Icon name="Check" className="size-7 text-white" strokeWidth={2.5} />
            </span>
            <h3 id="lead-modal-title" className="text-heading-5 md:text-heading-4">
              {content.success.title}
            </h3>
            <p className="text-secondary/70 dark:text-accent/70 max-w-[400px] mx-auto">
              {content.success.text}
            </p>
            <button
              type="button"
              onClick={onClose}
              className={`btn btn-md ${colors.bg} text-white hover:opacity-90`}
            >
              <span>{content.success.button}</span>
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-2 mb-6 pr-8">
              <h3 id="lead-modal-title" className="text-heading-5 md:text-heading-4">
                {content.title}
              </h3>
              <p className="text-secondary/70 dark:text-accent/70">{content.subtitle}</p>
            </div>

            {/* Réassurance */}
            <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
              {content.reassurance.map((item) => (
                <li key={item} className="flex items-center gap-2 text-tagline-3 text-secondary dark:text-accent">
                  <span className={`size-4 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
                    <Icon name="Check" className="size-2.5 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
              {/* Honeypot */}
              <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="lead-company-website">Website</label>
                <input id="lead-company-website" type="text" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lead-name" className="block text-tagline-2 font-medium text-secondary dark:text-accent">
                  {content.labels.name}
                </label>
                <input
                  ref={firstFieldRef}
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={content.labels.namePlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="lead-email" className="block text-tagline-2 font-medium text-secondary dark:text-accent">
                    {content.labels.email}
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={content.labels.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lead-phone" className="block text-tagline-2 font-medium text-secondary dark:text-accent">
                    {content.labels.phone}
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={content.labels.phonePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lead-website" className="block text-tagline-2 font-medium text-secondary dark:text-accent">
                  {content.labels.website}
                </label>
                <input
                  id="lead-website"
                  name="website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  placeholder={content.labels.websitePlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lead-budget" className="block text-tagline-2 font-medium text-secondary dark:text-accent">
                  {content.labels.budget}
                </label>
                <select id="lead-budget" name="budget" defaultValue="" className={cn(inputClass, 'appearance-none cursor-pointer')}>
                  <option value="" disabled>
                    {content.labels.budgetPlaceholder}
                  </option>
                  {content.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Consentement */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="lead-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className={`mt-0.5 size-4 shrink-0 rounded border-stroke-3 dark:border-stroke-7 accent-[#19c8dc] cursor-pointer`}
                />
                <label htmlFor="lead-consent" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                  {content.labels.consent}
                  {content.labels.consentLink && (
                    <>
                      {' '}
                      <Link href="/confidentialite" target="_blank" className={`${colors.text} underline`}>
                        {content.labels.consentLink}
                      </Link>
                    </>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`btn btn-md md:btn-xl w-full ${colors.bg} text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                <span>{status === 'sending' ? content.labels.sending : content.labels.submit}</span>
              </button>

              {status === 'error' && (
                <p className="text-center text-tagline-2 text-red-600 dark:text-red-400 font-medium" role="alert">
                  {content.error}
                </p>
              )}
            </form>
          </>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            '@keyframes lead-modal-in{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}',
        }}
      />
    </div>
  );
};

LeadModal.displayName = 'LeadModal';
export default LeadModal;
