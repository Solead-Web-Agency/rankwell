import clientLogo10Dark from '@public/images/icons/client-logo-10-dark.svg';
import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6Dark from '@public/images/icons/client-logo-6-dark.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7Dark from '@public/images/icons/client-logo-7-dark.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8Dark from '@public/images/icons/client-logo-8-dark.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import clientLogo9Dark from '@public/images/icons/client-logo-9-dark.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const clientLogos = [
  {
    light: clientLogo6,
    dark: clientLogo6Dark,
    alt: 'Client company logo',
  },
  {
    light: clientLogo7,
    dark: clientLogo7Dark,
    alt: 'Client company logo',
  },
  {
    light: clientLogo8,
    dark: clientLogo8Dark,
    alt: 'Client company logo',
  },
  {
    light: clientLogo9,
    dark: clientLogo9Dark,
    alt: 'Client company logo',
  },
  {
    light: clientLogo10,
    dark: clientLogo10Dark,
    alt: 'Client company logo',
  },
];
const Clients = () => {
  return (
    <section className="py-[50px] md:py-[80px] lg:py-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-14">
          <RevealAnimation delay={0.2}>
            <h2 id="trusted-businesses-heading" className="text-center text-heading-5 md:text-heading-3">
              Trusted by 10k+ fast-growing businesses
            </h2>
          </RevealAnimation>
          {/* clients marquee  */}
          <div className="space-y-7">
            <RevealAnimation delay={0.3}>
              <article className="relative max-w-[1200px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[8%] bg-gradient-to-r from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-l from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <Marquee pauseOnHover autoFill speed={40}>
                  <div className="flex items-center justify-center gap-8">
                    {clientLogos.map((logo, index) => (
                      <figure className="min-w-[140px] md:min-w-[201px] first:ml-8" key={index}>
                        <Image src={logo.light} alt={logo.alt} className="dark:hidden" />
                        <Image src={logo.dark} alt={logo.alt} className="hidden dark:block" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <article className="relative max-w-[900px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[3%] bg-gradient-to-r from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[3%] bg-gradient-to-l from-background-2 to-background-2/20 dark:to-background-5/20 dark:from-background-5 z-40" />
                <div>
                  <Marquee pauseOnHover autoFill direction="right" speed={40}>
                    <div className="flex items-center justify-center gap-8">
                      {clientLogos.map((logo, index) => (
                        <figure className="min-w-[140px] md:min-w-[201px] first:ml-8" key={index}>
                          <Image src={logo.light} alt={logo.alt} className="dark:hidden" />
                          <Image src={logo.dark} alt={logo.alt} className="hidden dark:block" />
                        </figure>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
