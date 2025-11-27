import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center max-w-[649px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Get started</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-3">
              Ready yo build
              <span className="text-primary-500">something amazing?</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mb-6">Let’s turn your idea into a product users can’t live without.</p>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="md:inline-block text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent btn-md w-[85%] md:w-auto">
                Schedule your free call
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
