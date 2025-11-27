import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const whyChooseFeatures = [
  {
    id: 1,
    icon: 'ns-shape-34',
    title: 'Simple, user-friendly interface',
    description: 'No confusing menus or step for learning curves.',
  },
  {
    id: 2,
    icon: 'ns-shape-38',
    title: 'Personalized tips based',
    description: 'Special tips for learning.',
  },
  {
    id: 3,
    icon: 'ns-shape-35',
    title: 'Private and secure',
    description: 'Your data&apos;s safety is our top priority.',
  },
  {
    id: 4,
    icon: 'ns-shape-25',
    title: 'Built to empower',
    description: 'NextSaaS simplifies the complex.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-y-10 sm:gap-y-16 md:gap-x-8 lg:gap-x-16 xl:gap-x-[140px] justify-center md:justify-between">
          {/* Left: Intro */}
          <div className="lg:sticky lg:top-28 text-center md:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">Why choose nextsaas?</span>
            </RevealAnimation>
            <div className="space-y-2 md:max-w-[595px]">
              <RevealAnimation delay={0.2}>
                <h2>
                  The smarter way to
                  <br />
                  manage your finances
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[512px]">
                  Empower your financial journey with Fanwise smart, secure, and crafted to simplify your budgeting and
                  savings.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="mt-10 md:mt-14">
                <LinkButton
                  href="/integration-01"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-transparent w-[85%] md:w-auto mx-auto md:mx-0">
                  Learn more
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right: Features List */}
          <StackCardWrapper topOffset="10vh" gap="24px" initDelay={100} className="w-full max-w-xl">
            {whyChooseFeatures.map((feature) => (
              <StackCardItem key={feature.id}>
                <div className="bg-background-2 dark:bg-background-6 border border-stroke-4 dark:border-stroke-5 min-h-[170px] rounded-[20px] space-y-4 p-8 max-sm:min-h-[245px]">
                  <div className="inline-block mx-auto">
                    <span className={`${feature.icon} text-[48px] text-secondary dark:text-accent`} />
                  </div>
                  <div>
                    <h3 className="text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </StackCardItem>
            ))}
          </StackCardWrapper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
