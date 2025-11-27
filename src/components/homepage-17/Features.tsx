import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Features = () => {
  const featuredProjects = getMarkDownData('src/data/case-study')
    .filter((project) => project.featured === true)
    .slice(0, 3);

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="max-w-[1440px] sm:mx-auto mx-5">
        <div className="bg-background-3 dark:bg-background-7 rounded-[30px] py-16 md:py-[100px]">
          <div className="main-container">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.2}>
                <span className="badge inline-block badge-primary-light">Featured projects</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2>Success stories from our clients</h2>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-12 sm:gap-x-8 gap-y-14 mt-[70px]">
              <RevealAnimation delay={0.4}>
                <div className="col-span-12">
                  <figure className="space-y-6">
                    <div className="relative w-full h-[576px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/70 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[1].thumbnail}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                        alt="portfolio"
                        width={1290}
                        priority
                        height={570}
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[1].slug}`}
                        className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-[55%] group-hover:top-1/2 left-1/2 -translate-x-1/2 btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 transform hover:scale-[102%] z-20">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 justify-between">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[1].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[1].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="col-span-12 lg:col-span-6">
                  <figure className="space-y-6">
                    <div className="relative w-full h-[576px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[2].thumbnail}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                        alt="portfolio"
                        fill
                        priority
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[2].slug}`}
                        className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-[55%] group-hover:top-1/2 left-1/2 -translate-x-1/2 btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 transform hover:scale-[102%] z-20">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 justify-between">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[2].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[2].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="col-span-12 lg:col-span-6">
                  <figure className="space-y-6">
                    <div className="relative w-full h-[576px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                      <Image
                        src={featuredProjects[0].thumbnail}
                        alt="portfolio"
                        fill
                        priority
                        className="w-full h-full object-cover dark:bg-background-9 bg-background-1 group-hover:scale-105 transition-all duration-500 ease-in-out"
                      />
                      <LinkButton
                        href={`/case-study/${featuredProjects[0].slug}`}
                        className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-[55%] group-hover:top-1/2 left-1/2 -translate-x-1/2 btn btn-white btn-xl hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent group-hover:shadow-3 transform hover:scale-[102%] z-20">
                        View case studies
                      </LinkButton>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 justify-between">
                      <h3 className="text-heading-5 text-secondary dark:text-accent">{featuredProjects[0].title}</h3>
                      <p className="md:max-w-[257px] md:text-right">{featuredProjects[0].result}</p>
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <div className="col-span-12 max-md:w-full max-md:text-center justify-self-center mt-6">
                  <LinkButton
                    href="/case-study"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl w-[90%] md:w-auto block md:inline-block mx-auto">
                    View portfolio
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
