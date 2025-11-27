import faqData from '@/data/json/faq/faq.json';
import { cn } from '@/utils/cn';
import faqDark from '@public/images/home-page-12/faq-dark.png';
import faqImg from '@public/images/home-page-5/faq-img-01.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn('bg-background-1 xl:py-[200px] lg:py-[100px] py-16 md:py-20 dark:bg-background-6', className)}
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex items-center lg:flex-row flex-col justify-between lg:gap-0 gap-y-10">
          <div className="lg:space-y-14 md:space-y-10 space-y-8 flex-1">
            <div className="space-y-5 lg:text-left text-center">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="max-w-[439px]" id="faq-heading">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>
            {/* faq  */}
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion
                  className="w-full max-w-[576px] space-y-2"
                  defaultValue="1"
                  enableScrollAnimation={true}
                  animationDelay={0.1}>
                  {faqData.map((item) => (
                    <AccordionItem
                      className="dark:bg-background-7 rounded-[20px] bg-white px-4"
                      key={item.id}
                      value={item.id.toString()}>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
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
          </div>
          <RevealAnimation delay={0.4}>
            <figure className="relative lg:max-w-[684px] max-w-[450px] mx-auto flex-1">
              <Image
                src={faqImg}
                alt="Business agency services illustration"
                className="dark:hidden size-full object-cover"
              />
              <Image
                src={faqDark}
                alt="Business agency services illustration"
                className="hidden dark:block size-full object-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
