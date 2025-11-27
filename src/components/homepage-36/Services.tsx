import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import service03 from '../../../public/images/home-page-36/service-03.png';
import newArrowWhite from '../../../public/images/icons/new-arrow-white.svg';
import RevealAnimation from '../animation/RevealAnimation';
import BeforeAfterServiceImg from './BeforeAfterServiceImg';

const Services = () => {
  const services: IService[] = getMarkDownData('src/data/services').filter((service) => service.newFeature === true);

  return (
    <section className="py-14 mt-10 md:py-16 lg:py-24 xl:py-28  overflow-hidden">
      <div className="main-container">
        <div className="mb-11 lg:mb-9 text-center lg:max-w-[730px] lg:mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-5">Our Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="md:mb-3 mb-1">Leading companies around the globe rely on NexSaas.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[530px] lg:mx-auto">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
          </RevealAnimation>
        </div>
        {/* services cards */}
        <div className="grid grid-cols-12 md:gap-6 gap-y-6">
          {/* service card 01 */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 group/card-img">
              <div className="bg-background-12 h-full  overflow-hidden rounded-4xl border border-background-12 px-5 md:px-8 pt-8 grid grid-cols-12 md:gap-6 gap-y-6">
                <aside className="pt-14 pb-9 col-span-12 flex flex-col justify-between space-y-5 md:col-span-5 lg:col-span-3">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[6]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[6]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[6].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative overflow-hidden items-center justify-center ">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="max-w-[905px] w-full mx-auto col-span-12 rounded-t-lg md:rounded-t-[20px] overflow-hidden md:col-span-7 lg:col-span-9 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out">
                  <Image
                    src={services[6]?.coverImg}
                    width={905}
                    height={400}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 02 */}
          <RevealAnimation delay={0.2} direction="left">
            <div className="col-span-12 group/card-img lg:col-span-6">
              <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
                <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[0]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[0]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[0].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="h-[360px] md:h-full max-w-[905px] w-full mx-auto col-span-12 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6">
                  <Image
                    src={services[0]?.coverImg}
                    width={292}
                    height={412}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 03 */}
          <BeforeAfterServiceImg service={services[5]} />
          {/* service card 04 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="col-span-12 group/card-img lg:col-span-6">
              <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
                <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[7]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[7]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[7].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="h-[360px] md:h-full max-w-[905px] w-full mx-auto col-span-12 rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out">
                  <Image src={service03} alt="services" className="w-full h-full object-cover" />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 05 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="col-span-12 group/card-img lg:col-span-6">
              <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
                <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[2]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[2]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[2].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="h-[360px] md:h-full max-w-[905px] w-full mx-auto col-span-12 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6">
                  <Image
                    src={services[2]?.coverImg}
                    width={292}
                    height={412}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 06 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="col-span-12 group/card-img lg:col-span-6">
              <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
                <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[1]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[1]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[1].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="h-[360px] md:h-full max-w-[905px] w-full mx-auto col-span-12 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6">
                  <Image
                    src={services[1]?.coverImg}
                    width={292}
                    height={412}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 07 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="col-span-12 group/card-img lg:col-span-6">
              <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
                <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[3]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[3]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[3].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="h-[360px] md:h-full max-w-[905px] w-full mx-auto col-span-12 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6">
                  <Image
                    src={services[3]?.coverImg}
                    width={292}
                    height={412}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 08 */}
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 group/card-img">
              <div className="bg-background-12 h-full rounded-4xl border  overflow-hidden border-background-12 px-5 md:px-8 pt-8 grid grid-cols-12 md:gap-6 gap-y-6">
                <aside className="pt-14 pb-9 col-span-12 flex flex-col justify-between space-y-5 md:col-span-5 lg:col-span-3">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[4]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[4]?.description}</p>
                  </blockquote>
                  <Link
                    href={`/our-services/${services[4].slug}`}
                    className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
                    <figure className="size-6 relative items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="max-w-[905px] w-full mx-auto col-span-12 rounded-t-lg md:rounded-t-[20px] overflow-hidden md:col-span-7 lg:col-span-9 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out">
                  <Image
                    src={services[4]?.coverImg}
                    width={905}
                    height={400}
                    alt="services"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
