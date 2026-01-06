/**
 * FAQHOMEPAGE - Section FAQ spécifique à la page d'accueil
 * Design: Accordion avec questions/réponses pré-définies
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface FAQHomepageItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQHomepageProps {
  badge: string;
  title: string;
  description: string;
  items: FAQHomepageItem[];
}

const FAQHomepage = ({
  badge,
  title,
  description,
  items,
}: FAQHomepageProps) => {
  return (
    <section className="py-[100px] lg:py-[150px]">
      <div className="main-container">
        {/* Header */}
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-rw-purple-light text-rw-purple">{badge}</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[600px] mx-auto">{description}</p>
            </RevealAnimation>
          </div>
        </div>

        {/* Accordion */}
        <RevealAnimation delay={0.4}>
          <Accordion
            className="mx-auto w-full max-w-[850px] space-y-4"
            defaultValue="1"
            enableScrollAnimation={true}
            animationDelay={0.1}>
            {items.map((item) => (
              <AccordionItem
                className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8 shadow-1"
                key={item.id}
                value={item.id}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left"
                  className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                  value={item.id}
                  iconType="arrow">
                  <h3 className="sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent value={item.id}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

FAQHomepage.displayName = 'FAQHomepage';
export default FAQHomepage;
