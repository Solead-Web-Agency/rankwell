{
  /* ===========================
  integration process section
  =========================== */
}
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

const Process = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'connect-platform',
      stepNumber: 'Step 1',
      title: 'Connect Your Platform',
      description: 'Easy integration with Shopify, WooCommerce, Zapier, HubSpot, and more.',
      icon: 'ns-shape-36',
    },
    {
      id: 'design-automate',
      stepNumber: 'Step 2',
      title: 'Design & Automate',
      description: 'Use our AI-powered email builder and pre-made automation templates.',
      icon: 'ns-shape-8',
    },
    {
      id: 'optimize-scale',
      stepNumber: 'Step 3',
      title: 'Optimize & Scale',
      description: 'Monitor email performance with real-time analytics and predictive insights.',
      icon: 'ns-shape-2',
    },
  ];

  return (
    <section className="pb-24 pt-14 md:pb-36 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px] bg-background-1 dark:bg-background-6">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-5 text-center max-w-[540px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">process</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Follow the minimalistic steps of installation</h2>
          </RevealAnimation>
        </div>
        <div className="grid gap-8 grid-cols-12 justify-center">
          {processSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.3 + index * 0.1}>
              <article className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5">
                <div className="flex items-center justify-between">
                  <span className="text-tagline-2 dark:text-accent">{step.stepNumber}</span>
                  <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-heading-5">{step.title}</h3>
                  <p className="max-w-[344px]">{step.description}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
