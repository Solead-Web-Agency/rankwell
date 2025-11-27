import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import faqItems from '@/data/json/faq/faq.json';

const ProcessFaq = () => {
  return (
    <section className="md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[620px] mx-auto mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Commonly asked questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                By offering concise and informative responses, this section helps users find solutions without the need
                to contact customer support, saving time
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <Accordion className="sm:max-w-[850px] max-w-full sm:mx-auto space-y-4" defaultValue="1" animationDelay={0.1}>
            {faqItems.map((faq) => (
              <AccordionItem
                key={faq.id}
                className="bg-background-1 dark:bg-background-6 rounded-[20px] sm:px-8 px-6"
                value={faq.id.toString()}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className=" flex items-center cursor-pointer justify-between sm:pt-8 pt-6 sm:pb-8 pb-6 w-full"
                  value={faq.id.toString()}
                  iconType="arrow">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={faq.id.toString()}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProcessFaq;
