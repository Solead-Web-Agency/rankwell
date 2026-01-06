/**
 * FAQSERVICE - Section FAQ générique pour pages services
 *
 * Design basé sur process-01/ProcessFaq.tsx avec fond background-1
 *
 * Props:
 * - badge: Texte du badge (défaut: "FAQ")
 * - badgeClassName: Classes CSS du badge
 * - title: Titre de la section
 * - subtitle: Sous-titre descriptif
 * - items: Tableau de questions/réponses [{id, question, answer}]
 * - defaultOpen: ID de l'item ouvert par défaut (défaut: "1")
 *
 * Usage:
 * import { FAQService } from '@/components/shared/services';
 *
 * <FAQService
 *   badge="FAQ"
 *   badgeClassName="bg-rw-purple-light text-rw-purple"
 *   title="Questions fréquentes"
 *   subtitle="Tout ce que vous devez savoir..."
 *   items={[{id: '1', question: '...', answer: '...'}]}
 * />
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// ============================================
// TYPES
// ============================================
export interface FAQServiceItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQServiceProps {
  sectionId?: string;
  badge?: string;
  badgeClassName?: string;
  title: string;
  subtitle?: string;
  items: FAQServiceItem[];
  defaultOpen?: string;
  /** Couleur d'accent (ex: 'rw-blue', 'rw-cyan', 'rw-purple', 'rw-coral', 'rw-pink') */
  accentColor?: RwColor;
}

const FAQService = ({
  sectionId = 'faq',
  badge = 'FAQ',
  badgeClassName,
  title,
  subtitle,
  items,
  defaultOpen = '1',
  accentColor = 'rw-purple',
}: FAQServiceProps) => {
  // Récupère les classes depuis le color mapping
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeClassName || colors.badge;
  return (
    <section id={sectionId} className="bg-background-1 dark:bg-background-6 md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[620px] mx-auto mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${badgeClasses}`}>{badge}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            {subtitle && (
              <RevealAnimation delay={0.3}>
                <p>{subtitle}</p>
              </RevealAnimation>
            )}
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <Accordion
            className="sm:max-w-[850px] max-w-full sm:mx-auto space-y-4"
            defaultValue={defaultOpen}
            animationDelay={0.1}>
            {items.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="bg-background-3 dark:bg-background-7 rounded-[20px] sm:px-8 px-6"
                value={faq.id}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className="flex items-center cursor-pointer justify-between sm:pt-8 pt-6 sm:pb-8 pb-6 w-full"
                  value={faq.id}
                  iconType="arrow">
                  <h3 className="sm:text-heading-6 text-tagline-1 font-normal m-0">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent value={faq.id}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

FAQService.displayName = 'FAQService';
export default FAQService;
