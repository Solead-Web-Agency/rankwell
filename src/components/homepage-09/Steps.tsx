import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const steps = [
  {
    id: 1,
    title: 'Sign up for free',
    description: "Try our services commitment-free! Explore all we offer without a credit card—it's a risk-free",
  },
  {
    id: 2,
    title: 'Customize your setup',
    description: 'Customize NextSaaS to perfectly align with the unique requirements of your business.',
  },
  {
    id: 3,
    title: 'Start scaling',
    description: 'Streamline your processes, enhance efficiency, and expand your business horizons.',
    extraClass: 'md:col-start-4 lg:col-start-auto', // to match your original grid offset
  },
];

export default function Steps() {
  return (
    <section className="py-[60px] md:py-[90px] lg:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="space-y-5 text-center mb-[35px] lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-white">Steps</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 id="steps-heading">
              Get started in <br className="sm:hidden" />3 simple steps
            </h2>
          </RevealAnimation>
        </div>

        {/* steps cards */}
        <div className="grid grid-cols-12 gap-8 items-center justify-center">
          {steps.map((step, idx) => (
            <RevealAnimation key={step.id} delay={0.3 + idx * 0.1}>
              <div
                className={`md:max-w-[408px] w-full py-10 space-y-6 col-span-12 md:col-span-6 lg:col-span-4 ${
                  step.extraClass || ''
                }`}
                role="region"
                aria-label={`Step ${step.id}`}>
                <p className="text-center">
                  <span
                    className="text-heading-6 px-9 py-2.5 rounded-[34px] bg-secondary dark:bg-accent dark:text-secondary text-accent"
                    aria-hidden="true">
                    {step.id}
                  </span>
                </p>
                <div className="space-y-1 text-center px-5">
                  <h3 className="text-heading-5">{step.title}</h3>
                  <p className="mx-auto">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.6}>
          <div className="text-center mt-9 md:mt-14">
            <LinkButton
              href="/process-01"
              className="btn btn-secondary hover:btn-primary dark:btn-accent btn-md w-[90%] md:w-auto mx-auto md:mx-0"
              aria-label="Learn more about our process">
              See our process
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
