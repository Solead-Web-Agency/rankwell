import faqData from '@/data/json/faq/faq.json';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FaqAccordion = () => {
  return (
    <RevealAnimation delay={0.3}>
      <div>
        <Accordion
          className="mx-auto w-full max-w-[576px] lg:mx-0"
          defaultValue="1"
          enableScrollAnimation={true}
          animationDelay={0.1}>
          {faqData.map((item) => (
            <AccordionItem
              className="dark:bg-background-6 rounded-[20px] bg-white"
              key={item.id}
              value={item.id.toString()}>
              <AccordionTrigger
                titleClassName="flex-1 text-left !text-heading-6 font-normal text-secondary dark:text-accent"
                className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
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
  );
};

export default FaqAccordion;
