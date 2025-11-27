import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = getMarkDownData('src/data/services').slice(0, 6);

const Services = () => {
  return (
    <section className="dark:bg-background-6 py-28 lg:py-[156px]">
      <div className="main-container">
        {/* Service Header Section*/}
        <div className="mx-auto mb-[70px] max-w-[880px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5">Our Services</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Leading companies around the globe rely on NexSaas.</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-14 lg:max-w-[600px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div>
              <LinkButton
                href="/our-services-01"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-white btn-md text-tagline-2 mx-auto w-[90%] md:mx-0 md:w-auto">
                Explore all services
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>
              <div>
                <div className="bg-background-2 dark:bg-background-5 flex flex-col items-center justify-center gap-6 rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                  <div>
                    <span className={`${service.icon} text-secondary dark:text-accent text-[54px]`}> </span>
                  </div>
                  <div className="text-center">
                    <h5 className="mb-2 line-clamp-1">{service.title}</h5>
                    <p className="text-secondary/60 dark:text-accent/60 line-clamp-3">{service.description}</p>
                  </div>
                  <LinkButton
                    href={`/our-services/${service.slug}`}
                    className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent mx-auto w-[90%] md:mx-0 md:w-auto">
                    Read More
                  </LinkButton>
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
