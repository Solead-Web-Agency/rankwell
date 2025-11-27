import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const servicesData: IService[] = getMarkDownData('src/data/services').slice(7, 12);

  return (
    <section className="bg-background-2 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 md:mb-[70px] text-center lg:text-left">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Our Services</span>
          </RevealAnimation>
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <RevealAnimation delay={0.3}>
              <h2>Explore our solutions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[518px] text-center lg:text-left mx-auto lg:mx-0">
                Explore the ways our innovative solutions significantly improve communication and boost overall
                efficiency in your organization.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          {servicesData.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.5 + index * 0.1}>
              <div
                className={cn(
                  'col-span-12 sm:col-span-6  px-6 py-8 rounded-[20px] bg-white dark:bg-background-6 flex flex-col items-start space-y-6',
                  index >= 3 ? 'lg:col-span-6' : 'lg:col-span-4',
                )}>
                <span className={cn('text-[52px] text-secondary dark:text-accent', item.icon)}> </span>
                <div>
                  <h5 className="mb-2 max-md:text-heading-6">{item.title}</h5>
                  <p className="">{item.description}</p>
                </div>
                <LinkButton
                  href={`/our-services/${item.slug}`}
                  className="btn btn-white hover:btn-secondary btn-md inline-block dark:btn-transparent dark:hover:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
                  Read more
                </LinkButton>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={1}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/our-services-02"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0">
              More services
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
