import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import gradient6Img from '@public/images/gradient/gradient-6.png';
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

{
  /* =========================
Client Feedback section
===========================*/
}
const Client = () => {
  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="main-container text-center rounded-4xl py-[100px] -z-0 bg-background-3 dark:bg-background-5 overflow-hidden relative">
          <div
            className="absolute -top-[164%] rotate-[21deg] -left-[35%] w-full h-full -z-10 select-none pointer-events-none"
            aria-hidden="true">
            <Image src={gradient6Img} alt="Decorative gradient background overlay" className="scale-[60%]" />
          </div>
          {/* Customer Testimonial */}
          <article className="text-center space-y-4 pb-10">
            {/* Customer Avatars */}
            <div className="flex justify-center -space-x-2.5 cursor-pointer" role="group" aria-label="Customer avatars">
              <Image
                className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-yellow"
                src={avatar1Img}
                alt="Customer avatar 1"
                width={38}
                height={38}
              />
              <Image
                className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-red"
                src={avatar2Img}
                alt="Customer avatar 2"
                width={38}
                height={38}
              />
              <Image
                className="inline-block size-[38px] rounded-full relative z-0 ring-2 ring-accent dark:ring-black bg-ns-green"
                src={avatar3Img}
                alt="Customer avatar 3"
                width={38}
                height={38}
              />
              <div className="inline-flex items-center relative z-10 justify-center size-[38px] bg-ns-cyan rounded-full ring-2 ring-accent dark:ring-black text-secondary/80 dark:text-accent/80 text-tagline-3 font-medium">
                99+
              </div>
            </div>
            {/* Trust Metrics */}
            <div>
              <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Tushed by 20k+</p>
              <p className="text-tagline-3">Customers Across the Globe</p>
            </div>
          </article>
          {/* Client Logos */}
          <div className="max-w-[1130px] mx-auto relative">
            <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-5 z-40" />
            <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-5 z-40" />
            <Marquee autoFill speed={60}>
              <div
                className="flex items-center justify-center border-t border-secondary/10 dark:border-accent/10 pt-10 gap-8"
                role="group">
                <figure className="min-w-[140px] md:min-w-[201px] ml-8">
                  <Image
                    src={clientLogo6}
                    alt="Client company logo 1"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo6Dark}
                    alt="Client company logo 1"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo7}
                    alt="Client company logo 2"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo7Dark}
                    alt="Client company logo 2"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo8}
                    alt="Client company logo 3"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo8Dark}
                    alt="Client company logo 3"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo9}
                    alt="Client company logo 4"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo9Dark}
                    alt="Client company logo 4"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
                <figure className="min-w-[140px] md:min-w-[201px]">
                  <Image
                    src={clientLogo10}
                    alt="Client company logo 5"
                    className="lg:w-auto inline-block dark:hidden"
                    width={120}
                    height={40}
                  />
                  <Image
                    src={clientLogo10Dark}
                    alt="Client company logo 5"
                    className="lg:w-auto hidden dark:block"
                    width={120}
                    height={40}
                  />
                </figure>
              </div>
            </Marquee>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Client;
