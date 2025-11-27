import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[112px] xl:pt-[100px] border-t border-stroke-4 dark:border-stroke-6 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center max-w-[649px] mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Let&apos;s start</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Ready to grow smarter?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6">
                Let&apos;s make your marketing budget work harder—not bigger. Book your strategy call today and take the
                first step toward predictable growth.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center">
                <LinkButton
                  href="/pricing-01"
                  className="btn btn-secondary hover:btn-white btn-md dark:btn-accent dark:hover:btn-white-dark">
                  Book your free strategy call.
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
