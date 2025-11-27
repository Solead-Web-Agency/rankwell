import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const processStepsData = [
  {
    id: 1,
    stepNumber: 'Step 1',
    iconClass: 'ns-shape-35',
    title: 'Sign up',
    description:
      'Sign up is the initial process through which users register or create an account on a platform, website, or application.',
    titleId: 'process-step1-title',
  },
  {
    id: 2,
    stepNumber: 'Step 2',
    iconClass: 'ns-shape-12',
    title: 'Set up analytic process',
    description:
      'This process typically begins with defining clear objectives and identifying the key metrics or data sources needed to achieve them.',
    titleId: 'process-step2-title',
  },
  {
    id: 3,
    stepNumber: 'Step 3',
    iconClass: 'ns-shape-6',
    title: 'Reset data after solutions',
    description:
      'Resetting data after solutions is an important step in maintaining system integrity, ensuring privacy, and preparing for future use.',
    titleId: 'process-step3-title',
  },
];

const Process = () => {
  return (
    <section className="dark:bg-background-5 py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* process heading  */}
          <div className="mx-auto w-full max-w-[736px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Process</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Adhere to the straight forward installation steps.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>Adhering to the straightforward installation steps is essential for ensuring a smooth</p>
              </RevealAnimation>
            </div>
          </div>
          {/* process cards  */}
          <div className="flex flex-wrap items-center justify-center gap-4 pb-14" role="list">
            {processStepsData.map((step, idx) => (
              <RevealAnimation key={step.id} delay={0.4 + idx * 0.1}>
                <div
                  className="dark:bg-background-6 w-full max-w-[403px] space-y-3.5 rounded-[20px] bg-white p-8 text-left"
                  role="listitem">
                  {/* step number and logo  */}
                  <div className="space-y-11">
                    <p aria-label="Step number">{step.stepNumber}</p>
                    <span className={`${step.iconClass} text-secondary dark:text-accent text-[54px]`}> </span>
                  </div>
                  {/* process card heading and description  */}
                  <div className="space-y-3">
                    <h3 id={step.titleId} className="text-heading-5">
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        {/* process cta btn  */}
        <RevealAnimation delay={0.7}>
          <div className="flex w-full items-center justify-center">
            <LinkButton
              href="/process-01"
              className="btn btn-primary btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-white w-full sm:w-auto"
              aria-label="Start free trial for 30 days">
              Try it for 30 days, no credit card required
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Process;
