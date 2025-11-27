import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureCards = [
  {
    id: 1,
    shape: 'ns-shape-9',
    title: 'Real-time sales tracking',
    description:
      'Easily monitor your transactions and revenue from anywhere, ensuring you stay updated on your financial performance while on the move.',
  },
  {
    id: 2,
    shape: 'ns-shape-3',
    title: 'Smart inventory management',
    description:
      'Effortlessly track your stock levels and leverage AI-driven insights to automate the reordering process, keeping your inventory optimized.',
  },
  {
    id: 3,
    shape: 'ns-shape-12',
    title: 'Integrated payment processing',
    description:
      'Securely accept a variety of payment methods, making transactions smooth and hassle-free for your customers.',
  },
  {
    id: 4,
    shape: 'ns-shape-2',
    title: 'Cloud-based reporting',
    description:
      'Gain access to comprehensive reports at any time and from any location, empowering you to make informed decisions.',
  },
  {
    id: 5,
    shape: 'ns-shape-7',
    title: 'Multi-location support',
    description:
      'Enjoy seamless management of operations across multiple locations, ensuring consistency and efficiency in your business.',
  },
];

const Services = () => {
  return (
    <section className="py-[100px] bg-background-3 dark:bg-background-7">
      <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[380px] max-w-full mx-5 sm:mx-auto space-y-14">
        <div className="min-[425px]:bg-[url('/images/home-page-26/services-bg.png')] px-2 sm:px-0 bg-cover bg-bottom lg:py-[100px] min-[425px]:py-[60px] rounded-4xl relative overflow-hidden bg-secondary py-8">
          <div className="text-center space-y-5 mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Empowering your next leap with smart</span>
            </RevealAnimation>
            <div className="space-y-3 mx-1 sm:mx-0">
              <RevealAnimation delay={0.2}>
                <h2 className="lg:max-w-[602px] sm:max-w-[500px] max-w-[400px] mx-auto text-white">
                  Designed for Growth-Oriented Businesses
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60">Your Complete Retail Management System</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 xl:gap-8 lg:gap-6 gap-y-6 justify-center lg:px-[74px] sm:px-10 px-5">
            {featureCards.map((item, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                <div
                  className={cn(
                    item.id === 4 ? 'xl:col-start-3' : 'xl:col-start-auto',
                    'col-span-12 lg:col-span-4 xl:col-span-4 flex',
                  )}>
                  <div className="flex-1 md:p-8 p-6 rounded-[20px] bg-white/15 backdrop-blur-[25px] flex flex-col items-center text-center min-h-[200px] sm:space-y-6 space-y-4">
                    <div className="mx-auto">
                      <span className={`${item.shape} sm:text-[52px] text-[40px] text-accent`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="sm:text-heading-5 text-heading-6 text-accent">{item.title}</h3>
                      <p className="text-accent/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <div className="text-center">
          <RevealAnimation delay={0.9}>
            <LinkButton
              href="/contact-us"
              className="btn md:btn-xl btn-lg dark:hover:btn-accent btn-primary hover:btn-secondary w-[90%] md:w-auto mx-auto md:mx-0">
              Get a Free Demo
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
