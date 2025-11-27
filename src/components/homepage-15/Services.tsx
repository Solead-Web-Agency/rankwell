import services1Dark from '@public/images/home-page-15/services-1-dark.png';
import services1 from '@public/images/home-page-15/services-1.png';
import services2 from '@public/images/home-page-15/services-2.png';
import services3 from '@public/images/home-page-15/services-3.png';
import services4Dark from '@public/images/home-page-15/services-4-dark.png';
import services4 from '@public/images/home-page-15/services-4.png';
import services5Dark from '@public/images/home-page-15/services-5-dark.png';
import services5 from '@public/images/home-page-15/services-5.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>What I can help you with</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[776px] mx-auto">
              Whether you need a new visual identity, a high-performing website, or a design system, I offer creative
              services tailored to help your brand grow with clarity and confidence.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-[72px]">
          <div className="grid grid-cols-12 sm:gap-8 gap-y-8">
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 lg:col-span-4 sm:col-span-6">
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Web design &amp; front-end development</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full rounded-2xl overflow-hidden">
                      <Image src={services1} alt="services" className="w-full h-full object-cover dark:hidden" />
                      <Image
                        src={services1Dark}
                        alt="services"
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 lg:col-span-4 sm:col-span-6">
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Ui/ux design for saas and products</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full">
                      <Image src={services5} alt="services" className="w-full h-full object-cover dark:hidden" />
                      <Image
                        src={services5Dark}
                        alt="services"
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 lg:col-span-4 sm:col-span-6">
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Brand identity design</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full">
                      <Image src={services2} alt="services" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <div className="col-span-12 lg:col-span-4 sm:col-span-6">
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Framer, webflow &amp; next.js development</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full overflow-hidden rounded-2xl">
                      <Image src={services3} alt="services" className="w-full h-full object-cover" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.8}>
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">Art direction &amp; creative consulting</h3>
                    <p>Create your free account in seconds</p>
                  </div>
                  <div>
                    <figure className="max-w-[784px] overflow-hidden rounded-2xl w-full">
                      <Image src={services4} alt="services" className="w-full h-full object-cover dark:hidden" />
                      <Image
                        src={services4Dark}
                        alt="services"
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.9}>
          <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-3 justify-center">
            <LinkButton
              href="/our-services-01"
              className="btn btn-secondary dark:btn-accent btn-md hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto">
              Explore services
            </LinkButton>
            <LinkButton
              href="/contact-us"
              className="btn hover:btn-secondary dark:btn-transparent btn-white btn-md dark:hover:btn-accent w-[90%] md:w-auto">
              Book a call
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
