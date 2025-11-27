import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NewsLetter = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[76px] lg:pt-[76px] bg-secondary dark:bg-background-6">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur dark:!text-accent/60 dark:!bg-accent/10 mb-5">Let&apos;s start</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">Finance is evolving. are you ready?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">
                &nbsp;Sign up for free and experience secure, decentralized financial tools with no borders and no
                limits
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="/pricing-01"
                  className="btn btn-primary border-0 hover:btn-accent btn-md w-[90%] md:w-auto mx-auto md:mx-0">
                  Book your free strategy call
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default NewsLetter;
