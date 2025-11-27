import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import { clientLogos } from '../homepage-08/Clients';

const ClientsMarquee = () => {
  return (
    <RevealAnimation delay={0.6} instant>
      <section className="py-14" aria-label="Trusted partners">
        <div className="main-container">
          <div className="text-center space-y-[22px]">
            <h2 className="text-heading-6">Trusted by Industry leaders</h2>
            {/* marquee */}
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
              <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
              <Marquee autoFill speed={45}>
                <div className="flex items-center gap-8 justify-center py-2.5">
                  {clientLogos.map((logo) => (
                    <figure key={logo.id} className="min-w-[140px] md:min-w-[201px] first:ml-8">
                      <Image
                        src={logo.light}
                        alt="Client 1 logo"
                        loading="lazy"
                        className="dark:hidden"
                        width={201}
                        height={60}
                      />
                      <Image
                        src={logo.dark}
                        alt="Client 1 logo"
                        loading="lazy"
                        className="hidden dark:inline-block"
                        width={201}
                        height={60}
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default ClientsMarquee;
