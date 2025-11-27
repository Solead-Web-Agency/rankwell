import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data: IService[] = getMarkDownData('src/data/services').slice(5, 10);

const Services = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[850px] mx-auto mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our services</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">All-in-one wealth management</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[520px] mx-auto">Manage your money with guidance that evolves with your goals.</p>
            </RevealAnimation>
          </div>
        </div>
        {/* Services Items */}
        <div className="grid grid-cols-12 max-md:space-y-8 md:gap-8 mb-14">
          {data?.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.4 + index * 0.1}>
              <Link
                href={`/our-services/${item?.slug}`}
                className={cn(
                  'col-span-12 md:col-span-6 lg:col-span-4 px-8 py-8 xl:py-13 rounded-[20px] bg-white border border-stroke-4 dark:bg-background-5 dark:border-stroke-6 space-y-6 block',
                  index >= 3 && 'col-span-12 md:col-span-6 lg:col-span-6',
                )}>
                <div>
                  <span className={cn('text-[52px] text-secondary dark:text-accent', item?.icon)} />
                </div>
                <div className="space-y-2">
                  <h5>{item?.title}</h5>
                  <p className="line-clamp-2">{item?.description}</p>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.9}>
          <div className="text-center">
            <LinkButton
              href="/our-services-02"
              className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md inline-block">
              Start managing my wealth
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
