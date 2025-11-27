import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Projects = () => {
  const featuredProjects: ICaseStudy[] = getMarkDownData('src/data/case-study').slice(0, 4);

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[160px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[160px] bg-white dark:bg-black">
      <div className="main-container">
        <div className="text-center space-y-5 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Projects</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Proven AI solutions in action.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[680px] mx-auto">
                Discover how NextSaaS is transforming businesses with tailored automation strategies. Explore our
                portfolio to see the real-world impact we&apos;ve made for clients across various industries.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={featuredProjects[0].thumbnail}
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                      fill
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <LinkButton
                      href={`/case-study/${featuredProjects[0].slug}`}
                      className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 btn btn-md hover:btn-primary dark:btn-accent btn-secondary transform-gpu">
                      View Projects
                    </LinkButton>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[0].title}</h3>
                    <p className="max-w-[257px] text-left md:text-right line-clamp-2">
                      {featuredProjects[0].description}
                    </p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 lg:col-span-6">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={featuredProjects[1].thumbnail}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <LinkButton
                      href={`/case-study/${featuredProjects[1].slug}`}
                      className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 btn btn-md hover:btn-primary dark:btn-accent btn-secondary transform-gpu">
                      View Projects
                    </LinkButton>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[1].title}</h3>
                    <p className="max-w-[257px] text-left md:text-right line-clamp-2">
                      {featuredProjects[1].description}
                    </p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <div className="col-span-12 lg:col-span-6">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={featuredProjects[2].thumbnail}
                      fill
                      priority
                      alt="portfolio"
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <LinkButton
                      href={`/case-study/${featuredProjects[2].slug}`}
                      className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 btn btn-md hover:btn-primary dark:btn-accent btn-secondary transform-gpu">
                      View Projects
                    </LinkButton>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[2].title}</h3>
                    <p className="max-w-[257px] text-left md:text-right line-clamp-2">
                      {featuredProjects[2].description}
                    </p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.8}>
              <div className="col-span-12">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[576px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={featuredProjects[3].thumbnail}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <LinkButton
                      href={`/case-study/${featuredProjects[3].slug}`}
                      className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 btn btn-md hover:btn-primary dark:btn-accent btn-secondary transform-gpu">
                      View Projects
                    </LinkButton>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5">{featuredProjects[3].title}</h3>
                    <p className="max-w-[257px] text-left md:text-right line-clamp-2">
                      {featuredProjects[3].description}
                    </p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.9}>
          <div className="text-center">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto">
              View portfolio
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
