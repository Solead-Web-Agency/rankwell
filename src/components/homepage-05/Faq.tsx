import faqImgDark from '@public/images/home-page-5/faq-img-01-dark.png';
import faqImg from '@public/images/home-page-5/faq-img-01.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <section
      className="dark:bg-background-6 bg-white py-[100px] lg:py-[150px] xl:py-[200px]"
      aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
          {/* faq content */}
          <div className="space-y-14 text-center lg:text-left">
            {/* faq heading  */}
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green uppercase">FAQ</span>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto lg:mx-0 lg:max-w-[439px]" id="faq-heading">
                  Common inquiries from clients
                </h2>
              </RevealAnimation>
            </div>
            {/* faq accordion  */}

            <FaqAccordion />
          </div>
          {/* faq image */}
          <RevealAnimation delay={0.5}>
            <figure className="relative w-full max-w-[684px] overflow-hidden lg:max-w-[500px] xl:max-w-[684px]">
              <Image
                className="size-full object-cover dark:hidden"
                src={faqImg}
                alt="Business agency services illustration"
                loading="lazy"
              />
              <Image
                className="hidden size-full object-cover dark:inline-block"
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
