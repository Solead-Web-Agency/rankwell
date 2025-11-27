import faqImgDark from '@public/images/home-page-5/faq-img-01-dark.png';
import faqImg from '@public/images/home-page-5/faq-img-01.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section
      className="py-[50px] md:py-[70px] lg:py-[85px] xl:pb-[100px] xl:pt-[200px]"
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex items-center flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
          <div className="space-y-14 text-center lg:text-left flex-1">
            <div className="space-y-5">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="lg:max-w-[439px] mx-auto lg:mx-0" id="faq-heading">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>

            {/* faq accordion  */}
            <RevealAnimation delay={0.4}>
              <Accordion className="max-w-[576px] mx-auto lg:mx-0 w-full" defaultValue="1">
                <AccordionItem value="1">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="1"
                    iconType="arrow">
                    What is the primary role of a business agency?
                  </AccordionTrigger>

                  <AccordionContent value="1">
                    When collaborating with a business agency, you can generally expect an extensive array of services
                    designed to not only support your current operations but also to foster growth and innovation within
                    your business. These services often include strategic planning, marketing solutions, financial
                    consulting, and operational improvements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="2"
                    iconType="arrow">
                    What kinds of services should I anticipate ?
                  </AccordionTrigger>

                  <AccordionContent value="2">
                    When working with a business agency, you can typically anticipate a wide range of services tailored
                    to support and grow your business.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="3"
                    iconType="arrow">
                    How often should I consider updating my website?
                  </AccordionTrigger>

                  <AccordionContent value="3">
                    When collaborating with a business agency, you can generally expect an extensive array of services
                    designed to not only support your current operations but also to foster growth and innovation within
                    your business. These services often include strategic planning, marketing solutions, financial
                    consulting, and operational improvements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="4">
                  <AccordionTrigger
                    className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                    titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    value="4"
                    iconType="arrow">
                    How often is it recommended to refresh my website?
                  </AccordionTrigger>

                  <AccordionContent value="4">
                    When collaborating with a business agency, you can generally expect an extensive array of services
                    designed to not only support your current operations but also to foster growth and innovation within
                    your business. These services often include strategic planning, marketing solutions, financial
                    consulting, and operational improvements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </RevealAnimation>
          </div>

          {/* <!-- faq image --> */}
          <RevealAnimation delay={0.3}>
            <figure className="w-full relative max-w-[684px] overflow-hidden flex-1">
              <Image
                className="size-full object-cover dark:hidden"
                src={faqImg}
                alt="Business agency services illustration"
                loading="lazy"
              />
              <Image
                className="size-full object-cover dark:inline-block hidden"
                src={faqImgDark}
                alt="Business agency services illustration"
                loading="lazy"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
