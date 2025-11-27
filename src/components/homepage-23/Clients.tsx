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

export const clientLogos = [
  {
    id: 1,
    image: clientLogo6,
    imageDark: clientLogo6Dark,
  },
  {
    id: 2,
    image: clientLogo7,
    imageDark: clientLogo7Dark,
  },
  {
    id: 3,
    image: clientLogo8,
    imageDark: clientLogo8Dark,
  },
  {
    id: 4,
    image: clientLogo9,
    imageDark: clientLogo9Dark,
  },

  {
    id: 5,
    image: clientLogo10,
    imageDark: clientLogo10Dark,
  },
];

const Clients = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-8 md:space-y-14">
          <RevealAnimation delay={0.1}>
            <h2 className="text-center xl:text-heading-3">
              Trusted by
              <span className="text-primary-500"> 100K+ Global Investors </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-4 md:space-y-8">
              <article className="relative max-w-[1200px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[8%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
                <Marquee pauseOnHover={true} autoFill={true}>
                  <div className="flex items-center justify-center gap-8">
                    {clientLogos.map((logo) => (
                      <figure key={logo.id} className="min-w-[140px] md:min-w-[201px] ml-8">
                        <Image src={logo.image} alt="Client company logo" className="dark:hidden" />
                        <Image src={logo.imageDark} alt="Client company logo" className="hidden dark:block" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
              <article className="relative max-w-[900px] mx-auto">
                <div className="absolute left-0 top-0 h-full w-[3%] bg-gradient-to-r from-background-2 to-transparent dark:!from-background-5 z-40" />
                <div className="absolute right-0 top-0 h-full w-[3%] bg-gradient-to-l from-background-2 to-transparent dark:!from-background-5 z-40" />
                <Marquee pauseOnHover={true} autoFill={true} direction="right">
                  <div className="flex items-center justify-center gap-8">
                    {clientLogos.map((logo) => (
                      <figure key={logo.id} className="min-w-[140px] md:min-w-[201px] ml-8">
                        <Image src={logo.image} alt="Client company logo" className="dark:hidden" />
                        <Image src={logo.imageDark} alt="Client company logo" className="hidden dark:block" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </article>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Clients;
