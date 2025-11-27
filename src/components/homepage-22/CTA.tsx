import { cn } from '@/utils/cn';
import Gradient18 from '@public/images/gradient/gradient-18.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = ({ badgeClassName = '' }: { badgeClassName?: string }) => {
  return (
    <section className="relative lg:py-0 py-[50px]">
      <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] mx-auto w-full lg:-mb-14 relative max-md:px-5 z-10">
        <div className="lg:py-[76px] py-[50px] sm:px-0 px-6 bg-secondary dark:bg-background-8 lg:rounded-4xl rounded-2xl relative z-10 overflow-hidden">
          <RevealAnimation delay={0.1} direction="left" offset={100}>
            <figure className="absolute top-[-83%] md:top-[-77%] xl:-top-[65%] max-[376px]:left-[-152%] left-[-132%] md:left-[-73%] lg:left-[-51%] xl:left-[-39%] 2xl:-left-[34%] rotate-[276deg] max-w-[700px] -z-10">
              <Image src={Gradient18} alt="cta-bg.png" />
            </figure>
          </RevealAnimation>
          <div className="text-center space-y-5">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge badge-blur', badgeClassName)}>Get started</span>
            </RevealAnimation>
            <div className="space-y-6">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="lg:max-w-[830px] sm:max-w-[500px] max-w-[280px] mx-auto text-white">
                    Control all devices from one dashboard!
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-accent/60 max-md:px-2">
                    Join thousands of businesses securing their mobile ecosystems with NextSaaS.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-primary border-0 btn-md hover:btn-white w-[85%] md:w-auto mx-auto md:mx-0">
                    Book a demo
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
