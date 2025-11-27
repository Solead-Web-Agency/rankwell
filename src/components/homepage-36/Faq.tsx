import { faqData } from '@/data/faq';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section className="max-[1920px]:px-5">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-12 max-w-[1880px] mx-auto lg:py-25 md:py-20 py-18 xl:py-28 rounded-2xl md:rounded-4xl">
          <div className="main-container">
            <div className="text-center space-y-3 md:space-y-5 max-w-[720px] mx-auto lg:mb-[70px] mb-12">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-white-v2 uppercase">FAQ</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>All the essential information you need to understand.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    By offering concise and informative responses, this section helps users find solutions without the
                    need to contact customer support, saving time
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Accordion
              className=" max-w-[770px] mx-auto space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {faqData.map((item) => (
                <AccordionItem
                  className="bg-white rounded-2xl md:rounded-4xl px-6 md:px-8"
                  key={item.id}
                  value={item.id.toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left lg:text-heading-6 text-tagline-1 font-normal text-secondary"
                    className="flex items-center cursor-pointer justify-between py-6 md:py-8 w-full"
                    value={item.id.toString()}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Faq;
