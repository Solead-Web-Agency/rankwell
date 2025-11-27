import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const featureCards = [
  {
    id: 'risk-assessments',
    title: 'Risk assessments',
    description: 'Built with modern business challenges in mind',
    icon: 'ns-shape-35',
  },
  {
    id: 'business-continuity-planning',
    title: 'Business continuity planning',
    description: "Only what you need, nothing you don't",
    icon: 'ns-shape-34',
  },
  {
    id: 'vendor-due-diligence',
    title: 'Vendor due diligence',
    description: 'Designed to impress, built to perform',
    icon: 'ns-shape-8',
  },
  {
    id: 'claims-incident-management',
    title: 'Claims & incident management',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-10',
  },
  {
    id: 'financial-risk-planning',
    title: 'Financial risk planning',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-45',
  },
  {
    id: 'data-governance-compliance',
    title: 'Data governance & compliance',
    description: 'No fluff, just functionality',
    icon: 'ns-shape-35',
  },
];

const FeatureV3 = () => {
  return (
    <section className="relative xl:py-[200px] md:py-[100px] py-16">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[100px] items-start lg:gap-y-20 gap-y-10">
          <div className="col-span-12 xl:col-span-6 lg:sticky lg:top-28">
            <div className="lg:space-y-14 md:space-y-10 space-y-8">
              <div className="space-y-3 xl:text-left text-center">
                <RevealAnimation delay={0.1}>
                  <h2 className="xl:mx-0 mx-auto lg:max-w-[598px] md:max-w-[500px] max-w-[450px] w-full">
                    End-to-end risk management across functions
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="xl:mx-0 mx-auto lg:max-w-[505px] md:max-w-[500px] max-w-[450px] w-full">
                    What distinguishes us is our commitment to empowering bold founders, dynamic teams, and innovative
                    entrepreneurs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="xl:text-left text-center">
                  <LinkButton
                    href="/case-study"
                    className="btn btn-secondary hover:btn-primary dark:btn-transparent btn-md w-[90%] md:w-auto mx-auto">
                    Browse all use cases
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <StackCardWrapper
              topOffset="12vh"
              gap="24px"
              initDelay={100}
              className="w-full lg:flex-1 lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full">
              {featureCards.map((card) => (
                <StackCardItem key={card.id}>
                  <div className="xl:max-w-[562px] max-w-full max-sm:min-h-[200px]">
                    <div className="border border-stroke-8/10 dark:border-stroke-5 w-full lg:p-8 md:p-6 p-5 sm:rounded-[20px] rounded-xl bg-background-2 md:space-y-6 space-y-3 dark:bg-background-5">
                      <div>
                        <span
                          className={`${card.icon} text-[52px] text-secondary dark:text-accent inline-block sm:mx-0 mx-auto`}
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1">{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV3;
