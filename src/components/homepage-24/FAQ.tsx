import faqData from '@/data/json/faq/faq.json';
import gradient23 from '@public/images/gradient/gradient-23.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import LinkButton from '../ui/button/LinkButton';

const FAQ = () => {
  return (
    <section className="lg:pt-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16 bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-3 text-center lg:text-left mb-8">
              <RevealAnimation delay={0.1}>
                <h2>Frequently Asked Questions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>Have questions? just ask</p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <div className="lg:text-left text-center">
                <LinkButton
                  href="/faq-01"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent w-[85%] md:w-auto mx-auto md:mx-0">
                  Read more
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion
                  className="w-full max-w-[850px] space-y-4"
                  defaultValue="1"
                  enableScrollAnimation={true}
                  animationDelay={0.1}>
                  {faqData.map((item) => (
                    <AccordionItem
                      className="group bg-white dark:bg-background-5 border border-stroke-4 dark:border-stroke-8 rounded-[8px] px-6 overflow-hidden relative z-10"
                      key={item.id}
                      value={item.id.toString()}>
                      <figure className="-z-10 absolute -top-[150%] sm:-top-[220%] md:-top-[300%] lg:-top-[190%] xl:-top-[290%] -right-[10%] sm:-right-[50%] size-[708px] pointer-events-none group-hover:opacity-100 transition-opacity duration-300 opacity-0 select-none">
                        <Image src={gradient23} alt="gradient" />
                      </figure>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                        className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                        value={item.id.toString()}
                        iconType="plus">
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
      </div>
    </section>
  );
};

export default FAQ;
