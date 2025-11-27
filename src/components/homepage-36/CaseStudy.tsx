import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  const newFeatureProjects: ICaseStudy[] = getMarkDownData('src/data/case-study').filter(
    (project) => project.newFeature === true,
  );
  return (
    <section className="py-16 lg:py-20 xl:py-25">
      <div className="main-container">
        <div className="text-center mb-10 lg:mb-[70px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Experience the power of our platform.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[680px] mx-auto">
                Our platform is crafted with a clean, user-friendly interface that ensures effortless navigation while
                delivering powerful capabilities under the hood. Every feature..
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
            <RevealAnimation delay={0.3}>
              <div className="col-span-12">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[802px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={newFeatureProjects[0]?.thumbnail || ''}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                    />
                    {/* Black Overlay */}
                    <div className="absolute inset-0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <div className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 group/btn">
                      <Link
                        href={`/case-study/${newFeatureProjects[0]?.slug || ''}`}
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover/btn:bg-primary-500 group-hover/btn:scale-101 text-center transition-all group-hover/btn:text-accent duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-ns-green text-secondary px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          View details
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover/btn:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover/btn:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5 lg:max-w-[250px] ">
                      {newFeatureProjects[0].title}
                    </h3>
                    <p className="max-w-[257px] text-left md:text-right">{newFeatureProjects[0].description}</p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <div className="col-span-12 lg:col-span-6">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[802px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={newFeatureProjects[2]?.thumbnail || ''}
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                      fill
                      priority
                    />
                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <div className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 group/btn">
                      <Link
                        href={`/case-study/${newFeatureProjects[2]?.slug || ''}`}
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover/btn:bg-primary-500 group-hover/btn:scale-101 text-center transition-all group-hover/btn:text-accent duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-ns-green text-secondary px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          View details
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover/btn:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover/btn:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5 lg:max-w-[250px] ">
                      {newFeatureProjects[2].title}
                    </h3>
                    <p className="max-w-[257px] text-left md:text-right">{newFeatureProjects[2].description}</p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="col-span-12 lg:col-span-6">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[802px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={newFeatureProjects[3]?.thumbnail || ''}
                      fill
                      priority
                      alt="portfolio"
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <div className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 group/btn">
                      <Link
                        href={`/case-study/${newFeatureProjects[3]?.slug || ''}`}
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover/btn:bg-primary-500 group-hover/btn:scale-101 text-center transition-all group-hover/btn:text-accent duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-ns-green text-secondary px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          View details
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover/btn:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover/btn:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5 lg:max-w-[250px] ">
                      {newFeatureProjects[3].title}
                    </h3>
                    <p className="max-w-[257px] text-left md:text-right">{newFeatureProjects[3].description}</p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <div className="col-span-12">
                <figure className="space-y-6">
                  <div className="relative w-full h-[300px] lg:h-[802px] rounded-[20px] overflow-hidden group cursor-pointer">
                    <Image
                      src={newFeatureProjects[1]?.thumbnail || ''}
                      fill
                      priority
                      className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
                      alt="portfolio"
                    />
                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-in-out" />
                    <div className="group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1/2 opacity-0 scale-95 -translate-y-[calc(50%-8px)] transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 group/btn">
                      <Link
                        href={`/case-study/${newFeatureProjects[1]?.slug || ''}`}
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover/btn:bg-primary-500 group-hover/btn:scale-101 text-center transition-all group-hover/btn:text-accent duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-ns-green text-secondary px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          View details
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover/btn:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover/btn:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 md:justify-between">
                    <h3 className="text-heading-6 sm:text-heading-5">{newFeatureProjects[1].title}</h3>
                    <p className="max-w-[257px] text-left md:text-right">{newFeatureProjects[1].description}</p>
                  </div>
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.2}>
          <div className="text-center group">
            <Link
              href="/case-study"
              className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
              <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                See all project
              </span>
              <div className="relative overflow-hidden size-6">
                {/* one  */}
                <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M11 5H13V7H11V5Z" fill="white" />
                    <path d="M5 5H7V7H5V5Z" fill="white" />
                    <path d="M14 8H16V10H14V8Z" fill="white" />
                    <path d="M8 8H10V10H8V8Z" fill="white" />
                    <path d="M17 11H19V13H17V11Z" fill="white" />
                    <path d="M11 11H13V13H11V11Z" fill="white" />
                    <path d="M14 14H16V16H14V14Z" fill="white" />
                    <path d="M8 14H10V16H8V14Z" fill="white" />
                    <path d="M11 17H13V19H11V17Z" fill="white" />
                    <path d="M5 17H7V19H5V17Z" fill="white" />
                  </svg>
                </span>
                {/* two  */}
                <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M11 5H13V7H11V5Z" fill="white" />
                    <path d="M5 5H7V7H5V5Z" fill="white" />
                    <path d="M14 8H16V10H14V8Z" fill="white" />
                    <path d="M8 8H10V10H8V8Z" fill="white" />
                    <path d="M17 11H19V13H17V11Z" fill="white" />
                    <path d="M11 11H13V13H11V11Z" fill="white" />
                    <path d="M14 14H16V16H14V14Z" fill="white" />
                    <path d="M8 14H10V16H8V14Z" fill="white" />
                    <path d="M11 17H13V19H11V17Z" fill="white" />
                    <path d="M5 17H7V19H5V17Z" fill="white" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CaseStudy;
