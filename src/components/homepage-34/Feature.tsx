import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = getMarkDownData('src/data/services').slice(0, 4);

const Feature = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-20 md:py-[100px] bg-[url('/images/gradient/gradient-39.png')] bg-no-repeat bg-bottom bg-cover">
        <div className="main-container">
          <div className="">
            <div className="space-y-3 text-center md:mb-[70px] mb-13">
              <RevealAnimation delay={0.1}>
                <h2 className="text-accent">All-in-one wealth management</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[472px] mx-auto text-accent/60">
                  From trade execution to education, we provide everything you need to grow as a trader.
                </p>
              </RevealAnimation>
            </div>
            <div className="space-y-14">
              <div className="grid grid-cols-12 md:gap-8 gap-y-5">
                {data.map((feature, index) => (
                  <RevealAnimation key={feature.slug} delay={0.3 + index * 0.1}>
                    <div className="col-span-12 md:col-span-6">
                      <div className="bg-white hover:-translate-y-2 duration-500 ease-in-out dark:bg-black rounded-[20px] lg:p-8 p-6 lg:space-y-8 space-y-6">
                        <div className="space-y-4 lg:space-y-6">
                          <div>
                            <span
                              className={cn(
                                'text-4xl lg:text-[52px] text-secondary dark:text-accent',
                                feature.icon,
                              )}></span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="lg:text-heading-5 text-heading-6">{feature.title}</h3>
                            <p className="line-clamp-2">{feature.description}</p>
                          </div>
                        </div>
                        <div>
                          <LinkButton
                            href={`/our-services/${feature.slug}`}
                            className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
                            View service
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              <RevealAnimation delay={0.7}>
                <div className="text-center">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-md border-0 btn-green hover:btn-secondary w-[90%] md:w-auto mx-auto md:mx-0">
                    Talk to sales
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Feature;
