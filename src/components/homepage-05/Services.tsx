{
  /* =========================
Services section
===========================*/
}
import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const servicesData: IService[] = getMarkDownData('src/data/services').slice(4, 9);

  return (
    <section className="dark:bg-background-6 bg-white pt-[50px] pb-[100px] md:pt-[85px] xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          {/* service section heading  */}
          <div className="mx-auto max-w-[810px] space-y-5 text-center lg:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Our Services</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Leading companies around the globe rely on NextSaaS.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[582px] sm:w-full">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                  Latin, though it looks like it
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* service cards  */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {servicesData.map((service, idx) => (
              <RevealAnimation key={service.slug} delay={0.4 + idx * 0.1}>
                <article>
                  <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[403px] flex-col items-center gap-6 rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                    {/* logo  */}
                    <span className={`${service.icon} text-secondary dark:text-accent text-[54px]`}> </span>
                    {/* heading  */}
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    {/* btn  */}
                    <div>
                      <LinkButton
                        href={`/our-services/${service.slug}`}
                        className="btn btn-md btn-white-v2 hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                        rel="noopener noreferrer">
                        View Services
                      </LinkButton>
                    </div>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
