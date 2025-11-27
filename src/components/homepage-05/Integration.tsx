import RevealAnimation from '../animation/RevealAnimation';
import IntegrationMarquee from './IntegrationMarquee';

const Integration = () => {
  return (
    <section className="py-[100px] lg:py-[150px] xl:py-[200px]" aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* integration heading  */}
          <div className="mx-auto max-w-[1028px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Integration</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Enhance your productivity effortlessly with over 50 integrations.</h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[582px]">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                  Latin though it looks like nothing.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* marquee  */}
          <IntegrationMarquee />
        </div>
      </div>
    </section>
  );
};

Integration.displayName = 'Integration';
export default Integration;
