import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Experience = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row xl:gap-[100px]">
          <div className="text-center lg:text-left md:max-w-[650px] max-lg:mx-auto max-lg:mb-[70px] lg:max-w-[442px] space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Number</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Over a decade of experience in this.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  This extensive experience not only reflects our commitment to excellence but also equips us with the
                  insight and skills necessary to meet.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grow-1">
            <RevealAnimation delay={0.2}>
              <div className="rounded-xl p-8 bg-background-2 dark:bg-background-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h5 className="max-w-[200px]">Relied upon by businesses</h5>
                  <div className="shrink-0">
                    <span className="ns-shape-47 text-[52px] text-secondary dark:text-accent" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="flex items-center gap-1">
                    <NumberAnimation number={83} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                      83
                    </NumberAnimation>
                    %
                  </h3>
                  <p>Avg. Completed</p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="rounded-xl p-8 bg-background-2 dark:bg-background-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h5 className="max-w-[200px]">The team at NexSaaS bank</h5>
                  <div className="shrink-0">
                    <span className="ns-shape-57 text-[52px] text-secondary dark:text-accent" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="flex items-center gap-1">
                    <NumberAnimation number={56} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2}>
                      56
                    </NumberAnimation>
                    %
                  </h3>
                  <p>Avg. Completed</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
