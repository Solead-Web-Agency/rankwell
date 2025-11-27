import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Projects = () => {
  const featuredProjects: ICaseStudy[] = getMarkDownData('src/data/case-study')
    .filter((project) => project.featured === true)
    .slice(0, 4);
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Selected work</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[680px] mx-auto">
              Here’s a glimpse of projects that reflect my approach to design and development clean aesthetics, user
              first thinking, and brand-aligned strategy.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 lg:gap-14 gap-y-12">
            <div className="col-span-12">
              <RevealAnimation delay={0.4}>
                <figure className="space-y-6">
                  <div className="relative w-full max-h-[576px] xl:h-[576px] h-full rounded-[20px] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[0].thumbnail}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[0].slug}`}
                      className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[0].title}</h3>
                    <p className="max-w-[257px] sm:text-right text-left line-clamp-2">
                      {featuredProjects[0].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3}>
                <figure className="space-y-6">
                  <div className="relative w-full lg:max-h-[400px] md:max-h-[280px] xl:h-[576px] h-full rounded-[20px] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[1].thumbnail}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[1].slug}`}
                      className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[1].title}</h3>
                    <p className="max-w-[257px] sm:text-right text-left line-clamp-2">
                      {featuredProjects[1].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.4}>
                <figure className="space-y-6">
                  <div className="relative w-full lg:max-h-[400px] md:max-h-[280px] xl:h-[576px] h-full rounded-[20px] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[2].thumbnail}
                      alt="portfolio"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[2].slug}`}
                      className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[2].title}</h3>
                    <p className="max-w-[257px] sm:text-right text-left line-clamp-2">
                      {featuredProjects[2].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="col-span-12">
              <RevealAnimation delay={0.5}>
                <figure className="space-y-6">
                  <div className="relative w-full max-h-[576px] xl:h-[576px] h-full rounded-[20px] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    <Image
                      src={featuredProjects[3].thumbnail}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <LinkButton
                      href={`/case-study/${featuredProjects[3].slug}`}
                      className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20">
                      View case studies
                    </LinkButton>
                  </div>
                  <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[3].title}</h3>
                    <p className="max-w-[257px] sm:text-right text-left line-clamp-2">
                      {featuredProjects[3].description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-xl dark:btn-transparent hover:btn-white dark:hover:btn-accent w-[90%] md:w-auto">
              See all projects
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
