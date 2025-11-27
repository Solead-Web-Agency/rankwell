import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'Web & mobile apps',
    icon: 'ns-shape-32',
    description: 'Engage visitors with real-time chat on your website and mobile apps.',
    link: '#',
  },
  {
    id: 2,
    title: 'Social media',
    icon: 'ns-shape-35',
    description: 'Provide instant support on WhatsApp, Facebook Messenger, Instagram',
    link: '#',
  },
  {
    id: 3,
    title: 'Business tools',
    icon: 'ns-shape-52',
    description: 'Connect messaging with Slack, Microsoft Teams, and CRM platforms for seamless',
    link: '#',
  },
];

const CaseStudy = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] text-center lg:text-left">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">use cases</span>
          </RevealAnimation>
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-end">
            <RevealAnimation delay={0.3}>
              <h2>
                How we connect with <br />
                customers
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[518px]">
                Explore the ways our innovative solutions improve communication and boost efficiency in your
                organization. From streamlined workflows to enhanced collaboration tools, we provide everything you need
                to succeed.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="md:mb-14 grid grid-cols-12 md:gap-x-8 max-sm:gap-y-12 items-center">
          {data.map((item) => (
            <RevealAnimation key={item.id} delay={0.5 + item.id * 0.1}>
              <div className="col-span-12 md:col-span-4 flex flex-col items-start space-y-6">
                <span className={cn('text-[52px] text-secondary dark:text-accent', item.icon)}> </span>
                <div className="space-y-1">
                  <h5 className="max-md:text-heading-6">{item.title}</h5>
                  <p className="max-w-[337px]">{item.description}</p>
                </div>
                <LinkButton
                  href={item.link}
                  className="btn btn-white btn-md inline-block dark:btn-transparent hover:btn-primary w-[90%] md:w-auto">
                  Read More
                </LinkButton>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
