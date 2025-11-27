import faqData from '@/data/json/faq/faq.json';
import { ClockIcon, MessageIcon, UserIcon } from '@/icons';
import avatar10 from '@public/images/avatar/avatar-10.png';
import avatar11 from '@public/images/avatar/avatar-11.png';
import avatar9 from '@public/images/avatar/avatar-9.png';
import faqThumbnail from '@public/images/home-page-11/faq-thumbnail.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pb-28 pt-14 md:pb-32 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="space-y-10 lg:space-y-14 flex-1">
            <div className="space-y-3.5 md:space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">FAQ</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary dark:text-accent max-w-full md:max-w-[429px]">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>
            {/* faq  */}
            <RevealAnimation delay={0.3}>
              <Accordion
                className="max-w-[576px] w-full space-y-2"
                defaultValue="1"
                enableScrollAnimation={true}
                animationDelay={0.1}>
                {faqData.map((item) => (
                  <AccordionItem
                    className="bg-background-1 w-full dark:bg-background-6 rounded-[20px] px-6"
                    key={item.id}
                    value={item.id.toString()}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left text-tagline-1 font-medium text-secondary dark:text-accent"
                      className="flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                      value={item.id.toString()}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>
          </div>
          {/* faq image */}
          <RevealAnimation delay={0.4} offset={70}>
            <figure className="relative flex-1 flex justify-end">
              <Image src={faqThumbnail} alt="Business agency services illustration" />
              <div className="absolute bottom-9 right-[7%]">
                <RevealAnimation delay={0.5} offset={50} rotation={14} duration={1} direction="right">
                  <article className="relative opacity-0">
                    <div className="min-h-[188px] shadow-4 max-h-[188px] max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] bg-background-1 dark:bg-background-9 rounded-xl border border-dashed border-stroke-1 dark:border-stroke-8 marketing-hero-asset-inner" />
                    <div className="space-y-4 absolute inset-0 max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] min-h-[188px] max-h-[188px] bg-background-1 dark:bg-background-6 shadow-4 rounded-xl p-6 -rotate-[10deg] marketing-hero-asset-content">
                      <div>
                        <h2 className="text-xl font-normal leading-[1.5]">E-learning website</h2>
                        <p className="flex items-center gap-1 text-tagline-3">
                          <span aria-hidden="true">
                            <ClockIcon />
                          </span>
                          15 january 2025
                        </p>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="px-4 py-1 rounded-[4px] text-tagline-3 bg-ns-yellow"
                          aria-label="View design category">
                          Design
                        </Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-1 " role="list" aria-label="Team members">
                          <Image
                            className="inline-block size-6 object-cover object-center rounded-full ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                            src={avatar9}
                            alt="Team member 1"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                          <Image
                            className="inline-block size-6 obje rounded-full ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                            src={avatar10}
                            alt="Team member 2"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                          <Image
                            className="inline-block size-6 obje rounded-full relative z-0 ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                            src={avatar11}
                            alt="Team member 3"
                            width={24}
                            height={24}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="flex items-center gap-1">
                            <span aria-hidden="true">
                              <UserIcon />
                            </span>
                            <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">5</span>
                          </p>
                          <p className="flex items-center gap-1">
                            <span aria-hidden="true">
                              <MessageIcon />
                            </span>
                            <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">7</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealAnimation>
              </div>
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
