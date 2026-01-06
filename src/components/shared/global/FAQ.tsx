/**
 * FAQ - Section questions fréquentes avec accordéon
 * Composant global utilisable sur toutes les pages
 *
 * Props:
 * - sectionId: ID pour l'ancre
 * - title: Titre de la section
 * - items: Tableau de questions [{id, question, answer}]
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Accordion from '@/components/ui/accordion/Accordion';
import AccordionContent from '@/components/ui/accordion/AccordionContent';
import AccordionItem from '@/components/ui/accordion/AccordionItem';
import AccordionTrigger from '@/components/ui/accordion/AccordionTrigger';

// ============================================
// TYPES
// ============================================
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  sectionId: string;
  title: string;
  items: FAQItem[];
}

const FAQ = ({
  sectionId,
  title,
  items,
}: FAQProps) => {
  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-1 dark:bg-background-6">
      <div className="main-container">
        <div className="text-center space-y-3 mb-12">
          <RevealAnimation delay={0.1}>
            <h2>{title}</h2>
          </RevealAnimation>
        </div>

        <div className="max-w-[800px] mx-auto">
          <Accordion defaultValue={items[0]?.id} enableScrollAnimation={false}>
            {items.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-stroke-1 dark:border-stroke-6"
              >
                <AccordionTrigger
                  value={faq.id}
                  className="flex items-center justify-between w-full py-5 sm:py-6 text-left"
                  titleClassName="text-heading-6 font-normal text-secondary dark:text-accent"
                  iconType="arrow"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={faq.id}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

FAQ.displayName = 'FAQ';
export default FAQ;
