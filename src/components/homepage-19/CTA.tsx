import gradient43 from '@public/images/gradient/gradient-43.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="relative z-20 ">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-8 py-[76px] rounded-4xl space-y-6 relative overflow-hidden">
            {/* bg img  */}
            <RevealAnimation delay={0.3} direction="left">
              <figure className="absolute max-[376px]:-top-[80%] -top-[88%] md:-top-[78%] lg:-top-[71%] xl:-top-[84%] -left-[65%] md:-left-[35%] lg:-left-[28%] xl:-left-[27%] 2xl:-left-[26%] opacity-80 select-none xl:size-[700px] size-[500px] pointer-events-none">
                <Image src={gradient43} className="w-full h-full object-cover" alt="NextSass" />
              </figure>
            </RevealAnimation>
            {/* cta content  */}
            <div className="text-center mx-2 sm:mx-0">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-blur mb-5" id="cta-badge">
                  Get started
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="max-w-[649px] mx-auto text-white mb-3">Ready to transform your workflow?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-accent/60">Download NextSaaS and start making smarter decisions today.</p>
              </RevealAnimation>
            </div>
            {/* cta btn  */}
            <RevealAnimation delay={0.5}>
              <div className="text-center">
                <LinkButton
                  href="/pricing-01"
                  className="btn btn-primary btn-md hover:btn-white w-[85%] md:w-auto border-0 dark:hover:btn-accent"
                  aria-label="Get started with NextSaaS">
                  Get started now
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
