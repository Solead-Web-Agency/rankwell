import faqData from '@/data/json/faq/faq.json';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem } from '../ui/accordion';

import { AccordionTrigger } from '../ui/accordion';
const Faq = () => {
  return (
    <section className="py-[100px]" aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="space-y-[96px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span
                className="badge badge-primary uppercase"
                id="faq-heading"
                aria-label="Frequently Asked Questions Section">
                FAQ
              </span>
            </RevealAnimation>
            <div className="space-y-8">
              <RevealAnimation delay={0.2}>
                <h2>Commonly Asked Questions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary dark:text-accent max-w-[596px] md:w-full mx-auto">
                  Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean
                  suspendisse eget est pulvinar. Fames eget eget nascetur ornare
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* faq accordion  */}

          <RevealAnimation delay={0.4}>
            <div>
              <Accordion
                className=" max-w-[786px] mx-auto"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
