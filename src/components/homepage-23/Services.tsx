import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: '1',
    title: 'Portfolio management',
    description: 'Customized, diversified portfolios are monitored and adjusted in real-time.',
    icon: 'ns-shape-34',
  },
  {
    id: '2',
    title: 'Financial planning',
    description: 'Goal-based strategies to help you plan for life&apos;s biggest financial milestones.',
    icon: 'ns-shape-12',
  },
  {
    id: '3',
    title: 'Retirement planning',
    description: 'Simulate your retirement journey and stay on track with automated tools.',
    icon: 'ns-shape-5',
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="inline-block badge badge-cyan" id="services-badge">
                Our services
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  Smarter Investing,
                  <span className="text-primary-500"> brilliantly personalized </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[628px] md:w-ful mx-auto">
                  At the heart of our approach lies a commitment to delivering smart, tailored financial solutions that
                  align with your unique goals.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="space-y-12 md:space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-9">
              {data.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                  <div className="bg-white dark:bg-background-6 p-8 rounded-[20px] max-w-[406px] space-y-2 md:space-y-6">
                    <div className="overflow-auto inline-block">
                      <span className={cn('text-[40px] md:text-[52px] text-secondary dark:text-accent', item.icon)} />
                    </div>
                    <div className="space-y-2">
                      <h3 id="portfolio-management-heading" className="text-heading-6 md:text-heading-5">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/contact-us"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto mx-auto md:mx-0"
                  aria-label="Schedule a consultation with a financial expert">
                  Talk to an expert
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
