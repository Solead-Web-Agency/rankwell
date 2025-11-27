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
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const clientLogos = [
  {
    id: 1,
    lightLogo: clientLogo6,
    darkLogo: clientLogo6Dark,
    alt: 'Client 1 logo',
  },
  {
    id: 2,
    lightLogo: clientLogo7,
    darkLogo: clientLogo7Dark,
    alt: 'Client 2 logo',
  },
  {
    id: 3,
    lightLogo: clientLogo8,
    darkLogo: clientLogo8Dark,
    alt: 'Client 3 logo',
  },
  {
    id: 4,
    lightLogo: clientLogo9,
    darkLogo: clientLogo9Dark,
    alt: 'Client 4 logo',
  },
  {
    id: 5,
    lightLogo: clientLogo10,
    darkLogo: clientLogo10Dark,
    alt: 'Client 5 logo',
  },
];

const Clients = () => {
  return (
    <section>
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-white to-transparent dark:from-background-5 z-40" />
          <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-white to-transparent dark:from-background-5 z-40" />
          <Marquee autoFill speed={40}>
            <div className="flex items-center gap-8 justify-center py-20 md:py-25">
              {clientLogos.map((logo, index) => (
                <figure key={logo.id} className={cn('min-w-[140px] md:min-w-[201px]', index === 0 && 'ml-8')}>
                  <Image src={logo.lightLogo} alt={logo.alt} className="size-full object-contain" />
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Clients;
