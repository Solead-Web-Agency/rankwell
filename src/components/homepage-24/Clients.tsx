import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import { clientLogos } from '../homepage-23/Clients';

const Clients = () => {
  return (
    <section className="md:py-[100px] py-[50px] space-y-4 md:space-y-8 text-center">
      <RevealAnimation delay={0.1}>
        <h5>Trusted by thousands</h5>
      </RevealAnimation>
      {/* Client Logos */}
      <RevealAnimation delay={0.2}>
        <div className="relative max-w-[1100px] mx-auto">
          <div className="absolute hidden sm:block left-0 top-0 h-full w-[10%] bg-gradient-to-r from-background-3 to-transparent dark:!from-background-7 z-40" />
          <div className="absolute hidden sm:block right-0 top-0 h-full w-[10%] bg-gradient-to-l from-background-3 to-transparent dark:!from-background-7 z-40" />
          <Marquee>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo) => (
                <figure className="min-w-[140px] md:min-w-[201px] ml-8" key={logo.id}>
                  <Image src={logo.image} alt="Client logo" className="lg:w-auto dark:hidden" />
                  <Image src={logo.imageDark} alt="Client logo" className="lg:w-auto hidden dark:block" />
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
