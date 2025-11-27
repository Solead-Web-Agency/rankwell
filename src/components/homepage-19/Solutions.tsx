import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const solutionsData = [
  {
    id: 'portfolio-management',
    icon: 'ns-shape-3',
    title: 'Portfolio management',
    description: 'Custom, diversified portfolios that adapt to market changes.',
  },
  {
    id: 'financial-planning',
    icon: 'ns-shape-35',
    title: 'Financial planning',
    description: 'Get a plan that grows with you—automated and advisor-reviewed.',
  },
  {
    id: 'growth-assist',
    icon: 'ns-shape-1',
    title: 'Growth assist',
    description: 'Smart tools that help optimize savings, interest, and tax efficiency.',
  },
];
const Solutions = () => {
  return (
    <section className="py-[50px] md:py-[80px] lg:py-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-[35px] md:space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>All-in-one wealth management</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Manage your money with guidance that evolves with your goals.</p>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            {/* cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
              {solutionsData.map((solution, index) => (
                <RevealAnimation key={solution.id} delay={0.4 + index * 0.1}>
                  <div className="max-w-[405px] w-full p-8 bg-white dark:bg-background-8 rounded-[20px] space-y-6">
                    <span className={`${solution.icon} text-[52px] text-secondary dark:text-accent inline-block`} />
                    <div className="space-y-2">
                      <h3 className="text-heading-5">{solution.title}</h3>
                      <p className="max-w-[275px] w-full">{solution.description}</p>
                    </div>
                    <div>
                      <LinkButton
                        href="/our-services/business-analysis"
                        className="btn btn-white hover:btn-primary btn-md dark:btn-transparent">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* btn  */}
            <RevealAnimation delay={0.8}>
              <div className="text-center flex justify-center">
                <LinkButton
                  href="/our-services-02"
                  className="btn btn-primary btn-md w-[85%] md:w-auto hover:btn-secondary dark:hover:btn-accent">
                  View all solutions
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
