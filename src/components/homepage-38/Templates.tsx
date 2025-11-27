'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import templateImg1 from '@public/images/home-page-38/template-img-1.svg';
import templateImg2V2 from '@public/images/home-page-38/template-img-2-v2.svg';
import templateImg2V3 from '@public/images/home-page-38/template-img-2-v3.svg';
import templateImg2 from '@public/images/home-page-38/template-img-2.svg';
import templateImg3V2 from '@public/images/home-page-38/template-img-3-v2.svg';
import templateImg3 from '@public/images/home-page-38/template-img-3.svg';
import templateImg4V2 from '@public/images/home-page-38/template-img-4-v2.svg';
import templateImg4V3 from '@public/images/home-page-38/template-img-4-v3.svg';
import templateImg4 from '@public/images/home-page-38/template-img-4.svg';
import templateImg5 from '@public/images/home-page-38/template-img-5.png';
import templateImg6 from '@public/images/home-page-38/template-img-6.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Templates = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      className="py-24 lg:py-32 xl:py-43.5 bg-background-3 overflow-hidden"
      aria-labelledby="templates-heading"
      role="region">
      <div className="main-container">
        <div className="space-y-12 sm:space-y-16 lg:space-y-19">
          {/* Header Section */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            <div className="space-y-4 sm:space-y-6">
              <RevealAnimation delay={0.1}>
                <span
                  className="badge badge-gray-light-v2 font-normal lg:mx-0 mx-auto w-[150px] flex items-center justify-center"
                  role="text"
                  style={{ textTransform: 'capitalize' }}
                  aria-label="Section category">
                  Impressive templates
                </span>
              </RevealAnimation>
              <div className="space-y-3 sm:space-y-4">
                <RevealAnimation delay={0.2}>
                  <h2 id="templates-heading" className="lg:max-w-[818px] lg:mx-0 mx-auto lg:text-left text-center">
                    Professionally designed resume templates that get results
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="lg:max-w-[450px] lg:mx-0 mx-auto lg:text-left text-center">
                    Choose from 15+ customizable, ATS-friendly templates that are elegant, readable, and
                    conversion-focused.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="flex justify-center lg:justify-start">
                <div className="group w-[90%] sm:w-auto">
                  <Link
                    href="/our-services-01"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-5 border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Get Started now
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
              </div>
            </RevealAnimation>
          </div>
          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-4"
            role="list"
            aria-label="Template feature cards">
            {/* Left Column */}
            <div className="lg:space-y-2 space-y-4">
              {/* Card 1: A4 and US Letter formats */}
              <RevealAnimation delay={0.2}>
                <div
                  className="px-6 sm:px-8 group py-8 sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[420px] sm:h-[420px]"
                  role="listitem"
                  aria-labelledby="card1-heading">
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={22}
                      viewBox="0 0 20 22"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M10.45 0.910156L4.16797 12.7283H9.55257V20.9102L15.8346 9.09196H10.45V0.910156Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <figure className="w-full max-w-[300px] mx-auto group-hover:scale-105 transition-all duration-500 ease-in-out">
                    <Image
                      src={templateImg1}
                      alt="A4 and US Letter format resume template preview"
                      className="object-cover w-full"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="w-full h-[229px] absolute bottom-[-9%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="space-y-1 z-20 relative mt-28 sm:mt-0">
                    <h3 id="card1-heading" className="text-heading-5 text-[#0d0d12]/90">
                      A4 and US Letter formats
                    </h3>
                    <p className="max-w-[320px]">
                      A4 and US Letter formats are two of the most commonly used paper sizes
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 2: Customization */}
              <RevealAnimation delay={0.3} start="top 100%">
                <div
                  className="px-6 sm:px-8 group py-8 sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[500px] sm:h-[750px]"
                  role="listitem"
                  aria-labelledby="card2-heading">
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M5.34114 13.6987C5.60291 14.2347 5.92926 14.7346 6.31598 15.179M5.34114 13.6987C5.59731 14.2385 5.92609 14.7363 6.31598 15.179M5.34114 13.6987L4.84476 15.0994M5.34114 13.6987L6.82129 13.899M6.31598 15.179C6.70155 15.622 7.14708 16.0098 7.64841 16.3229M6.31598 15.179C6.70351 15.619 7.1514 16.0046 7.64841 16.3229M7.64841 16.3229C8.65247 16.9501 9.83978 17.2526 11.0198 17.2458C12.1998 17.239 13.3542 16.8968 14.3512 16.2582C15.3482 15.6196 16.1477 14.7103 16.6584 13.634M16.6584 13.634L17.1548 15.0347M16.6584 13.634L15.1783 13.8344M21 10.9102C21 16.433 16.5228 20.9102 11 20.9102C5.47716 20.9102 1 16.433 1 10.9102C1 5.38731 5.47716 0.910156 11 0.910156C16.5228 0.910156 21 5.38731 21 10.9102ZM9.49096 8.63757C9.49096 10.6324 8.95192 12.2495 8.28701 12.2495C7.62207 12.2495 7.08303 10.6324 7.08303 8.63757C7.08303 6.64281 7.62207 5.02569 8.28701 5.02569C8.95192 5.02569 9.49096 6.64281 9.49096 8.63757ZM14.9087 8.63757C14.9087 10.6324 14.3697 12.2495 13.7047 12.2495C13.0398 12.2495 12.5008 10.6324 12.5008 8.63757C12.5008 6.64278 13.0398 5.02569 13.7047 5.02569C14.3697 5.02569 14.9087 6.64278 14.9087 8.63757Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="relative group-hover:scale-105 transition-all duration-500 ease-in-out max-w-[549.58px] w-full h-[300px] sm:h-[412px]">
                    <figure className="w-full max-w-[272.5px] border rounded-xl border-stroke-1 h-[300px] sm:h-[412px] absolute inset-0 -translate-x-1/2 left-1/2 overflow-hidden mt-8 sm:mt-12 mx-auto">
                      <Image
                        src={templateImg2}
                        alt="Customizable resume template with multiple fonts, colors, and background styles"
                        className="object-cover"
                        loading="lazy"
                      />
                    </figure>
                    {/* right img  */}
                    <RevealAnimation delay={0.4} duration={2.5} direction="right" useSpring={true}>
                      <figure className="absolute max-w-[251px] w-full rounded-[11px] rotate-[-6deg] overflow-hidden right-[3%] top-[35%]">
                        <Image
                          src={templateImg2V2}
                          alt="Customizable resume template with multiple fonts, colors, and background styles"
                          className="object-cover"
                          loading="lazy"
                        />
                      </figure>
                    </RevealAnimation>
                    {/* left img  */}
                    <RevealAnimation delay={0.5} duration={2.5} direction="left" useSpring={true}>
                      <figure className="absolute max-w-[251px] w-full rounded-[11px] rotate-[12deg] z-[-1] border border-stroke-1 overflow-hidden left-[3%] top-1/2">
                        <Image
                          src={templateImg2V3}
                          alt="Customizable resume template with multiple fonts, colors, and background styles"
                          className="object-cover"
                          loading="lazy"
                        />
                      </figure>
                    </RevealAnimation>
                  </div>
                  {/* overlay  */}
                  <div
                    className="w-full h-[229px] absolute bottom-[5%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="mt-8 sm:mt-13.5 absolute bottom-[41px] z-20 space-y-1">
                    <h3 id="card2-heading" className="text-heading-5 text-[#0d0d12]/90 max-w-[250px]">
                      9 fonts, unlimited colors, 20+ background styles
                    </h3>
                    <p className="max-w-[350px]">Customize every detail to match your unique style.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 3: Smart Prompt suggestions */}
              <RevealAnimation delay={0.4}>
                <div
                  className="px-6 sm:px-8 group py-8 sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[420px] sm:h-[420px]"
                  role="listitem"
                  aria-labelledby="card3-heading">
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={22}
                      viewBox="0 0 20 22"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M10.45 0.910156L4.16797 12.7283H9.55257V20.9102L15.8346 9.09196H10.45V0.910156Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <div className="max-w-[342px] group-hover:scale-105 transition-all duration-500 ease-in-out w-full p-2 bg-secondary/5 rounded-2xl overflow-hidden mx-auto mt-2 sm:mt-[5.5px] mb-4 sm:mb-[17px]">
                    <figure className="max-w-[327px] w-full rounded-xl border border-stroke-1 overflow-hidden">
                      <Image
                        src={templateImg3}
                        alt="Smart prompt suggestions feature preview"
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  {/* overlay img  */}
                  <RevealAnimation delay={0.9} duration={1.5} direction="right" useSpring={true}>
                    <figure className="w-[80px] sm:w-[102px] absolute top-[35%] sm:top-[37%] right-[15%] sm:right-[19%]">
                      <Image
                        src={templateImg3V2}
                        alt="Smart prompt suggestions overlay preview"
                        className="object-cover"
                        loading="lazy"
                      />
                    </figure>
                  </RevealAnimation>
                  {/* overlay  */}
                  <div
                    className="w-full h-[229px] absolute bottom-[2%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  <div className="space-y-1 z-20 relative mt-6 sm:mt-8">
                    <h3 id="card3-heading" className="text-heading-5 text-[#0d0d12]/90">
                      Smart Prompt suggestions
                    </h3>
                    <p className="max-w-[320px]">
                      Access your files from any device with secure cloud synchronization.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            {/* Right Column */}
            <div className="lg:space-y-2 space-y-4">
              {/* Card 4: Adjustable spacing */}
              <RevealAnimation delay={0.2}>
                <div
                  ref={sceneRef as React.RefObject<HTMLDivElement>}
                  className="px-6 sm:px-8 py-8 sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[500px] sm:h-[750px]"
                  role="listitem"
                  aria-labelledby="card4-heading">
                  {/* icon  */}
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M20.7218 8.09907C19.6304 5.47075 17.0547 3.62421 14.0511 3.62421C10.059 3.62421 6.8228 6.88624 6.8228 10.9102C6.8228 14.9341 10.059 18.1961 14.0511 18.1961C17.0547 18.1961 19.6304 16.3496 20.7218 13.7212C19.5169 17.8756 15.7091 20.9102 11.1982 20.9102C5.71909 20.9102 1.27734 16.433 1.27734 10.9102C1.27734 5.38731 5.71909 0.910156 11.1982 0.910156C15.7091 0.910156 19.5169 3.94471 20.7218 8.09907Z"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* overlay img one  */}
                  <figure
                    className="w-[60px] sm:w-[80px] absolute right-[15%] sm:right-[20%] top-[28%] sm:top-[31%] parallax-effect"
                    data-parallax-value="0.1"
                    data-parallax-y={7}
                    data-parallax-x={4}
                    aria-hidden="true">
                    <Image
                      src={templateImg4V2}
                      alt="Decorative overlay element"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay img two  */}
                  <figure
                    className="w-[150px] sm:w-[192px] absolute left-[5%] sm:left-[8%] top-[40%] sm:top-[44%] parallax-effect"
                    data-parallax-value="-0.1"
                    data-parallax-y={7}
                    data-parallax-x={4}
                    aria-hidden="true">
                    <Image
                      src={templateImg4V3}
                      alt="Decorative overlay element"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* img  */}
                  <figure className="max-w-[350px] sm:max-w-[390px] mt-8 sm:mt-[43px] w-full mx-auto h-[350px] sm:h-[450px] overflow-hidden border border-stroke-1 rounded-[10px] py-4 sm:py-6 px-3 sm:px-4">
                    <Image
                      src={templateImg4}
                      alt="Resume template with adjustable spacing, margins, and line height customization"
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="w-full h-[229px] absolute sm:bottom-[5%] bottom-[-10%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="space-y-1 z-20 absolute bottom-8 sm:bottom-10.5 left-6 sm:left-8">
                    <h3 id="card4-heading" className="text-heading-5 text-[#0d0d12]/90 max-w-[300px]">
                      Adjustable spacing, margins, and line height.
                    </h3>
                    <p className="max-w-[250px]">Customize your resume look with diverse, modern backgrounds.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 5: PDF and TXT downloads */}
              <RevealAnimation delay={0.3} start="top 100%">
                <div
                  className="px-6 sm:px-8 group py-8 sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[420px] sm:h-[420px]"
                  role="listitem"
                  aria-labelledby="card5-heading">
                  {/* icon  */}
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center relative bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M18.3346 10.9095C18.3346 15.5119 14.6037 19.2428 10.0013 19.2428M18.3346 10.9095C18.3346 6.30713 14.6037 2.57617 10.0013 2.57617M18.3346 10.9095H1.66797M10.0013 19.2428C5.39893 19.2428 1.66797 15.5119 1.66797 10.9095M10.0013 19.2428V2.57617M10.0013 19.2428C12.2367 19.2428 14.3823 15.5119 14.3823 10.9095C14.3823 6.30713 12.2367 2.57617 10.0013 2.57617M10.0013 19.2428C7.76586 19.2428 5.62035 15.5119 5.62035 10.9095C5.62035 6.30713 7.76586 2.57617 10.0013 2.57617M1.66797 10.9095C1.66797 6.30713 5.39893 2.57617 10.0013 2.57617"
                        stroke="#1A1A1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <figure className="w-[200px] group-hover:scale-105 transition-all duration-500 ease-in-out sm:w-[240px] absolute left-1/2 -translate-x-1/2 top-[60px] sm:top-[70px]">
                    <Image
                      src={templateImg5}
                      alt="PDF and TXT download feature preview"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="w-full h-[229px] absolute bottom-[-7%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="space-y-1 z-20 absolute bottom-8 sm:bottom-10.5 left-6 sm:left-8">
                    <h3 id="card5-heading" className="text-heading-5 text-[#0d0d12]/90 max-w-[300px]">
                      PDF and TXT downloads.
                    </h3>
                    <p className="max-w-[200px]">Download your content as PDF or TXT in one click.</p>
                  </div>
                </div>
              </RevealAnimation>
              {/* Card 6: Template categories */}
              <RevealAnimation delay={0.4} start="top 100%">
                <div
                  className="px-6 sm:px-8 py-8 group sm:py-10.5 border bg-white border-stroke-1 rounded-[20px] w-full relative min-h-[420px] sm:h-[420px]"
                  role="listitem"
                  aria-labelledby="card6-heading">
                  {/* icon  */}
                  <span
                    className="size-12 sm:size-14 rounded-full flex items-center justify-center bg-ns-green"
                    aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                      className="w-5 h-5 sm:w-5 sm:h-5">
                      <path
                        d="M6.3798 6.28995C5.14908 5.05924 5.14908 3.06389 6.3798 1.83318C7.61051 0.60248 9.60589 0.60248 10.8366 1.83318L11 1.9966M6.3798 6.28995C5.14908 5.05924 3.15373 5.05924 1.92303 6.28995C0.692324 7.52067 0.692324 9.51605 1.92303 10.7467L2.08644 10.9102M6.3798 6.28995L11 10.9102M11 1.9966L11.1634 1.83318C12.3941 0.60248 14.3895 0.60248 15.6202 1.83318C16.8509 3.06389 16.8509 5.05924 15.6202 6.28995M11 1.9966V19.8237M2.08644 10.9102L1.92303 11.0736C0.692324 12.3043 0.692324 14.2996 1.92303 15.5303C3.15373 16.7611 5.14908 16.7611 6.3798 15.5303M2.08644 10.9102H19.9135M11 10.9102L15.6202 6.28995M11 10.9102L6.3798 15.5303M11 10.9102L15.6202 15.5303M15.6202 6.28995C16.8509 5.05924 18.8462 5.05924 20.077 6.28995C21.3077 7.52067 21.3077 9.51605 20.077 10.7467L19.9135 10.9102M6.3798 15.5303C5.14908 16.7611 5.14908 18.7564 6.3798 19.9871C7.61051 21.2178 9.60589 21.2178 10.8366 19.9871L11 19.8237M15.6202 15.5303C16.8509 16.7611 18.8462 16.7611 20.077 15.5303C21.3077 14.2996 21.3077 12.3043 20.077 11.0736L19.9135 10.9102M15.6202 15.5303C16.8509 16.7611 16.8509 18.7564 15.6202 19.9871C14.3895 21.2178 12.3941 21.2178 11.1634 19.9871L11 19.8237"
                        stroke="#1A1A1C"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* img  */}
                  <figure className="absolute w-[200px] group-hover:scale-105 transition-all duration-500 ease-in-out sm:w-[239px] left-1/2 -translate-x-1/2 top-[70px] sm:top-[80px]">
                    <Image
                      src={templateImg6}
                      alt="Template categories feature preview"
                      className="object-cover"
                      loading="lazy"
                    />
                  </figure>
                  {/* overlay  */}
                  <div
                    className="w-full h-[250px] absolute bottom-[-10%] left-0 blur-[37px]"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 37.44%)',
                    }}
                  />
                  {/* text  */}
                  <div className="space-y-1 z-20 absolute bottom-8 sm:bottom-10.5 left-6 sm:left-8">
                    <h3 id="card6-heading" className="text-heading-5 text-[#0d0d12]/90 max-w-[300px]">
                      Template categories
                    </h3>
                    <p className="max-w-[320px]">
                      Deliver a seamless experience across every screen no extra effort required.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Templates.displayName = 'Templates';
export default Templates;
