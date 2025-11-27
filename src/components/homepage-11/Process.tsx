import RevealAnimation from '../animation/RevealAnimation';

const processSteps = [
  {
    id: 1,
    step: 'Step 1',
    shape: 'ns-shape-36',
    title: 'Connect your platform',
    description: 'Easy integration with Shopify, WooCommerce, Zapier, HubSpot, and more.',
  },
  {
    id: 2,
    step: 'Step 2',
    shape: 'ns-shape-8',
    title: 'Design & automate',
    description: 'Use our AI-powered email builder and pre-made automation templates.',
  },
  {
    id: 3,
    step: 'Step 3',
    shape: 'ns-shape-2',
    title: 'Optimize & scale',
    description: 'Monitor email performance with real-time analytics and predictive insights.',
  },
];
const Process = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] dark:bg-background-7 max-md:overflow-x-hidden">
      <div className="main-container">
        <div className="text-center mx-auto space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green"> Process </span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[540px] mx-auto">Follow the minimalistic steps of installation</h2>
          </RevealAnimation>
        </div>
        <article className="flex flex-col justify-center items-center md:flex-row max-lg:flex-wrap md:gap-8 gap-4">
          {processSteps.map((step) => (
            <RevealAnimation key={step.id} delay={0.3 + step.id * 0.1}>
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 max-w-[408px] flex-1">
                <div className="flex items-center justify-between mb-5 sm:mb-8">
                  <span className="tagline-2 dark:text-accent">{step.step}</span>
                  <span className={`${step.shape} text-[48px] text-secondary dark:text-accent`}> </span>
                </div>
                <h3 className="text-heading-6 sm:text-heading-5 mb-1">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Process;
