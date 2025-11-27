{
  /* =========================
process Steps section
===========================*/
}
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
const ProcessStep = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'create-account',
      stepNumber: 'Step 1',
      title: 'Create your account',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-36',
      features: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    },
    {
      id: 'customize-workspace',
      stepNumber: 'Step 2',
      title: 'Customize your workspace',
      description: 'Use templates to set up your team, workflows, integrations, and brand.',
      icon: 'ns-shape-8',
      features: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    },
    {
      id: 'automate-collaborate',
      stepNumber: 'Step 3',
      title: 'Automate & collaborate',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-2',
      features: ['Drag-and-drop automation', 'Task routing & approvals', 'Notifications & real-time sync'],
    },
    {
      id: 'create-account-2',
      stepNumber: 'Step 4',
      title: 'Create your account',
      description: 'Choose a plan that fits your needs and start exploring the platform with a free trial.',
      icon: 'ns-shape-36',
      features: ['Quick signup process', 'No setup fees', 'Instant access to your dashboard'],
    },
    {
      id: 'customize-workspace-2',
      stepNumber: 'Step 5',
      title: 'Customize your workspace',
      description: 'Use templates or build your own dashboards, workflows, and integrations that reflect',
      icon: 'ns-shape-8',
      features: ['Choose what to track', 'Add users and set permissions', 'Connect your favorite tools'],
    },
  ];

  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[72px]">
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[552px] mx-auto">From sign-up to success in just a few steps</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[692px] mx-auto">
              We make it easy to Get started, simple to scale, and seamless to succeed. Whether you&apos;re using one
              feature or the full suite, NextSaaS is built to support you every step of the way.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-5">
          {processSteps.map((step, index) => {
            // Special layout for steps 4 and 5 (bottom row)
            const isBottomRow = index >= 3;
            const colClass =
              isBottomRow && index === 3
                ? 'col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3'
                : 'col-span-12 md:col-span-6 lg:col-span-4';

            return (
              <div key={step.id} className={colClass}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <p className="text-tagline-2 text-secondary dark:text-accent">{step.stepNumber}</p>
                      <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p>{step.description}</p>
                      <ul className="text-tagline-1 font-normal text-secondary/60 space-y-2 list-disc list-inside dark:text-accent/60">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
