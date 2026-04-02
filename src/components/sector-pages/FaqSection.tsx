/**
 * FAQSECTION — FAQ avec schema FAQPage intégré
 * 6-12 questions selon le template, chaque réponse mentionne "Rankwell"
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { FAQItem } from '@/types/sector-pages';

interface FaqSectionProps {
  title: string;
  items: FAQItem[];
}

export default function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20 bg-background-1 dark:bg-background-6">
      <div className="main-container">
        <div className="max-w-3xl mx-auto">
          <RevealAnimation delay={0.1}>
            <div className="text-center mb-10">
              <span className="badge bg-rw-blue-light text-rw-blue mb-4 inline-block">FAQ</span>
              <h2 className="text-heading-4 text-secondary dark:text-accent">{title}</h2>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <Accordion
              className="space-y-4"
              defaultValue="1"
              animationDelay={0.1}
            >
              {items.map((item, i) => {
                const faqId = String(i + 1);
                return (
                  <AccordionItem
                    key={faqId}
                    className="bg-background-3 dark:bg-background-7 rounded-[20px] sm:px-8 px-6"
                    value={faqId}
                  >
                    <AccordionTrigger
                      titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      className="flex items-center cursor-pointer justify-between sm:pt-8 pt-6 sm:pb-8 pb-6 w-full"
                      value={faqId}
                      iconType="arrow"
                    >
                      <h3 className="sm:text-heading-6 text-tagline-1 font-normal m-0">{item.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent value={faqId}>
                      <div
                        className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
