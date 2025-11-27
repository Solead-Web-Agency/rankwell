'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const stackCards = [
  {
    icon: 'ns-shape-19',
    title: 'Startups',
    description: 'Launch your MVP quickly and validate your idea',
  },
  {
    icon: 'ns-shape-35',
    title: 'Business teams',
    description: 'Automate workflows and streamline operations',
  },
  {
    icon: 'ns-shape-4',
    title: 'Freelancers & agencies',
    description: 'Deliver custom apps to your clients with ease',
  },
  {
    icon: 'ns-shape-21',
    title: 'Educators & creators',
    description: 'Build tools, portals, and learning apps fast',
  },
];

const Integration = () => {
  return (
    <section className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green mb-5"> Integration </span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal">
                Designed for makers,<span className="text-primary-500"> teams &amp; entrepreneurs</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">
                Built to support ambitious founders, agile teams, and visionary entrepreneurs. We turn ideas into
                strategic, user-first digital products.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div>
                <LinkButton
                  href="/integration-01"
                  className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto">
                  See use cases
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <StackCardWrapper
            topOffset="15vh"
            gap="24px"
            initDelay={100}
            className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
            {stackCards.map((card, index) => (
              <StackCardItem key={index + 1}>
                <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                  <span className={`block ${card.icon} text-heading-2 text-secondary dark:text-accent`} />
                  <div className="space-y-1">
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
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

export default Integration;
