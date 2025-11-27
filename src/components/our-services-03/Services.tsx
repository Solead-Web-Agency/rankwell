import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const servicesData: IService[] = getMarkDownData('src/data/services').slice(0, 9);

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
              Leading companies around the globe rely on nexSaas.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="xl:max-w-[700px] max-w-[500px] mx-auto">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-12 md:gap-14 lg:gap-[72px]">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6">
                  <div className="flex items-center md:items-start md:justify-start justify-center">
                    <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2 md:text-left text-center">
                    <h3 className="text-heading-5">{service.title}</h3>
                    <p className="line-clamp-3">{service.description}</p>
                  </div>
                  <div className="md:text-left text-center">
                    <LinkButton
                      href={`/our-services/${service.slug}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      {index === 0 ? 'Sign up free' : 'Read more'}
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
