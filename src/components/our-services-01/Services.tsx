import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const servicesData: IService[] = getMarkDownData('src/data/services').slice(0, 6);

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Our Services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">Leading companies around the globe rely on nexSaas.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                Latin, though it looks like it, and it actually has no meaning.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {servicesData.map((service, index) => (
            <RevealAnimation key={'service-id-' + index + 1} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{service.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/our-services/${service.slug}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Read more
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
