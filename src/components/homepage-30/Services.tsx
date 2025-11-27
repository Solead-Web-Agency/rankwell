import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = getMarkDownData('src/data/services').slice(0, 5);

const Services = () => {
  return (
    <section className="xl:pt-[100px] lg:pt-0 md:pt-[75px] pt-[50px] lg:pb-[150px] md:pb-[100px] pb-[75px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Resources &amp; support</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[490px] mx-auto">
              We&apos;re here to help you every step of the way. Whether you&apos;re looking for detailed documentation,
              community forums
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-5 justify-center">
          {data?.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.3 + index * 0.1}>
              <div className={cn('col-span-12 md:col-span-6 xl:col-span-4 flex', index === 3 && 'xl:col-start-3')}>
                <div className="flex-1 hover:translate-y-[-10px] transition-transform duration-500 ease-in-out p-8 rounded-[20px] bg-background-2 dark:bg-background-5 flex flex-col items-center text-center min-h-[200px] space-y-6">
                  <div className="mx-auto">
                    <span className={cn('text-[52px] text-secondary dark:text-accent', item.icon)} />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="sm:text-heading-5 text-heading-6">{item.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-2">{item.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/our-services/${item.slug}`}
                      className="btn btn-white-v2 hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
                      View service
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
