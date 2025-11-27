import { cn } from '@/utils/cn';
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
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: number;
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: 1,
    lightSrc: clientLogo6,
    darkSrc: clientLogo6Dark,
    alt: 'Client company logo',
  },
  {
    id: 2,
    lightSrc: clientLogo7,
    darkSrc: clientLogo7Dark,
    alt: 'Client company logo',
  },
  {
    id: 3,
    lightSrc: clientLogo8,
    darkSrc: clientLogo8Dark,
    alt: 'Client company logo',
  },
  {
    id: 4,
    lightSrc: clientLogo9,
    darkSrc: clientLogo9Dark,
    alt: 'Client company logo',
  },
  {
    id: 5,
    lightSrc: clientLogo10,
    darkSrc: clientLogo10Dark,
    alt: 'Client company logo',
  },
];

const Clients = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[150px] py-10 md:py-[75px] mt-14 xl:mt-[250px] lg:mt-[200px] sm:mt-[150px]">
        <div className="main-container">
          <div className="relative max-w-[1000px] mx-auto">
            <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
            <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
            <Marquee>
              <div className="flex items-center justify-center gap-8">
                {clientLogos.map((logo, index) => (
                  <figure
                    key={logo.id}
                    aria-label="Client brand logo"
                    className={cn('min-w-[140px] md:min-w-[201px]', index === 0 && 'ml-8')}>
                    <Image src={logo.lightSrc} alt={logo.alt} className="block dark:hidden" />
                    <Image src={logo.darkSrc} alt={logo.alt} className="hidden dark:block" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Clients;
