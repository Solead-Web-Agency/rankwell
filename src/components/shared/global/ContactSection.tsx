/**
 * CONTACTSECTION - Section contact avec formulaire et infos
 * Basé sur contact-page/ContactInfo.tsx du thème
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// ============================================
// TYPES
// ============================================
export interface ContactInfoItem {
  id: number;
  icon: string;
  title: string;
  content: string;
  link?: string;
}

export interface OfficeContactInfo {
  title: string;
  items: ContactInfoItem[];
}

export interface ContactFormLabels {
  name: string;
  namePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  terms: string;
  termsLink: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export interface ContactSectionProps {
  sectionId?: string;
  title: string;
  subtitle: string;
  parisOffice: OfficeContactInfo;
  dubaiOffice: OfficeContactInfo;
  formLabels: ContactFormLabels;
  accentColor?: RwColor;
}

// ============================================
// COMPOSANT
// ============================================
const ContactSection = ({
  sectionId = 'contact',
  title,
  subtitle,
  parisOffice,
  dubaiOffice,
  formLabels,
  accentColor = 'rw-blue',
}: ContactSectionProps) => {
  const colors = colorVariants[accentColor];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simuler l'envoi du formulaire (à remplacer par votre logique d'envoi)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={sectionId} className="pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* Header */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/80 dark:text-accent/80">{subtitle}</p>
            </RevealAnimation>
          </div>

          <div className="flex lg:items-start flex-col justify-center items-center gap-10 xl:flex-row xl:gap-8 2xl:gap-[50px]">
            {/* Paris office cards */}
            <div className="flex flex-col gap-6 md:flex-row xl:flex-col shrink-0">
              <RevealAnimation delay={0.3}>
                <h3 className="text-heading-6 text-center mb-2 text-secondary dark:text-accent">{parisOffice.title}</h3>
              </RevealAnimation>
              {parisOffice.items.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-8 space-y-4 w-full md:max-w-[280px] text-center relative overflow-hidden">
                    <div className={`size-10 ${colors.bg} rounded-full flex items-center justify-center mx-auto`}>
                      <Icon name={item.icon as any} className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-tagline-1 font-medium text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-sm text-accent/60">
                          <Link href={item.link} className="hover:text-accent transition-colors">
                            {item.content}
                          </Link>
                        </p>
                      ) : (
                        <p className="text-sm text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* Contact form */}
            <RevealAnimation
              delay={0.3}
              className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Company */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="fullname"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                    >
                      {formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder={formLabels.namePlaceholder}
                      required
                      autoComplete="name"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="company"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                    >
                      {formLabels.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={formLabels.companyPlaceholder}
                      autoComplete="organization"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="email"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                    >
                      {formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={formLabels.emailPlaceholder}
                      required
                      autoComplete="email"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="phone"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                    >
                      {formLabels.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={formLabels.phonePlaceholder}
                      autoComplete="tel"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                  >
                    {formLabels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={formLabels.subjectPlaceholder}
                    required
                    className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-tagline-2 text-secondary dark:text-accent font-medium"
                  >
                    {formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder={formLabels.messagePlaceholder}
                    required
                    className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>

                {/* Terms checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-rw-blue after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-rw-blue cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60"
                  >
                    {formLabels.terms}{' '}
                    <Link href="/mentions-legales" className="text-rw-blue underline text-tagline-3">
                      {formLabels.termsLink}
                    </Link>
                  </label>
                </fieldset>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-md w-full ${colors.bg} text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? formLabels.sending : formLabels.submit}
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <p className="text-center text-green-600 dark:text-green-400 font-medium">
                    {formLabels.success}
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-center text-red-600 dark:text-red-400 font-medium">
                    {formLabels.error}
                  </p>
                )}
              </form>
            </RevealAnimation>

            {/* Dubai office cards */}
            <div className="flex flex-col gap-6 md:flex-row xl:flex-col shrink-0">
              <RevealAnimation delay={0.3}>
                <h3 className="text-heading-6 text-center mb-2 text-secondary dark:text-accent">{dubaiOffice.title}</h3>
              </RevealAnimation>
              {dubaiOffice.items.map((item) => (
                <RevealAnimation key={item.id} delay={0.5}>
                  <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-8 space-y-4 w-full md:max-w-[280px] text-center relative overflow-hidden">
                    <div className={`size-10 ${colors.bg} rounded-full flex items-center justify-center mx-auto`}>
                      <Icon name={item.icon as any} className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-tagline-1 font-medium text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-sm text-accent/60">
                          <Link href={item.link} className="hover:text-accent transition-colors">
                            {item.content}
                          </Link>
                        </p>
                      ) : (
                        <p className="text-sm text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactSection.displayName = 'ContactSection';
export default ContactSection;
