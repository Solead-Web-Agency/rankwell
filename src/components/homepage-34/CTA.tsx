import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:py-16 py-20 lg:py-[76px] bg-secondary dark:bg-background-6">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow mb-5">Let&apos;s start</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">Take Control of Your Trading Future</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">
                No hidden fees. no steep learning curves. just a platform built for your growth.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="/pricing-01"
                  className="btn btn-primary btn-md hover:btn-green w-[90%] md:w-auto mx-auto md:mx-0">
                  Start free today
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
