import faqData from '@/data/json/faq/faq.json';
import gradient24Img from '@public/images/gradient/gradient-24.png';
import holdMobileImg from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const WhyUs = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] dark:bg-background-6">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[620px] mx-auto mb-[70px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Why choose NextSaaS?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                At NextSaaS, we combine innovation, reliability, and user-centric design to deliver powerful solutions
                that scale.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 md:gap-y-18 lg:gap-x-[97px]">
          <RevealAnimation delay={0.3}>
            <div className="space-y-6 pt-[30px] order-2 lg:order-none">
              <Accordion
                className="w-full max-w-[850px] space-y-4"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="px-8 border border-stroke-4 dark:border-stroke-6 rounded-[20px]"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
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
          <RevealAnimation delay={0.4} offset={100}>
            <div className="rounded-[30px] bg-secondary dark:bg-background-7 relative flex flex-col item-end justify-end overflow-hidden">
              <RevealAnimation delay={0.4} direction="right" offset={100}>
                <figure className="absolute max-w-[1250px] w-full top-[-20%] right-[-35%] rotate-[-19deg] select-none pointer-events-none">
                  <Image src={gradient24Img} alt="gradient bg" className="size-full object-cover" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.5} offset={100}>
                <figure className="order-1 lg:order-none">
                  <Image src={holdMobileImg} alt="why us image" className="w-full h-full object-cover" />
                </figure>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
