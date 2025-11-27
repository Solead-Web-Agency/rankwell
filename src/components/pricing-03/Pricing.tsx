import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

{
  /* =========================
Pricing section
===========================*/
}
const Pricing = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
        <div className="max-w-[1440px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-1 dark:bg-black py-[100px] px-5 md:px-6 lg:px-10 xl:px-16">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan-v2">Our pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Select the pricing plan that best suits your needs.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-y-8">
            {/*Column 1*/}
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="h-[201px] w-[290px] hidden md:block" />
                  <div className="space-y-[10px]">
                    <h3 className="text-heading-6">What’s included</h3>
                    <ul>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Pages included
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Customized branding services
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Custom design
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Comprehensive branding solutions
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          SEO optimization
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Branding support
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Tailored branding assistance
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Expert branding guidance
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Strategic branding support
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Professional branding help
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Innovative branding strategies
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Effective branding solutions
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Holistic branding support
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Dynamic branding options
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Insightful branding advice
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Value-driven branding support
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          Essential
                        </p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">Free</h3>
                        <p className="text-secondary/60 dark:text-accent/60">Free plan for all users</p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full before:content-none first-letter:uppercase">
                        Get started
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Up to 5</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                    </ul>
                    <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent btn-md w-fit mx-auto">
                      <Link href="/contact-us">
                        {' '}
                        <span>Get started </span>{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/*Column 3*/}
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4 relative z-10">
                    <div className="rounded-[20px] relative py-8 px-6 bg-secondary overflow-hidden">
                      <div className="absolute z-20 h-full w-full -top-28 -right-20">
                        <Image src={gradient4} alt="pricing bg" priority />
                      </div>
                      <div className="relative z-30 space-y-8">
                        <div>
                          <p className="text-tagline-1 text-accent/60 font-medium mb-3">Advanced</p>
                          <h3 className="text-heading-5 font-normal text-accent">$99</h3>
                          <p className="text-accent/60">Plans for advanced users</p>
                        </div>
                        <Link
                          href="/contact-us"
                          className="btn btn-primary hover:btn-white dark:hover:btn-accent btn-md w-full before:content-none first-letter:uppercase">
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Up to 10</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                    </ul>
                    <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent text-center btn-md w-fit mx-auto">
                      <Link href="/contact-us">
                        <span>Get started </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/*column-4 */}
            <RevealAnimation delay={0.7}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          Enterprise
                        </p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">Enterprise</h3>
                        <p className="text-secondary/60 dark:text-accent/60">Contact us for enterprise users</p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn dark:btn-white-dark hover:btn-primary btn-white btn-md w-full before:content-none first-letter:uppercase">
                        Get started
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Unlimited</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary/20 dark:fill-accent/20" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width={18} height={18} rx={9} className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                    </ul>
                    <div className="btn btn-primary hover:btn-white-dark dark:hover:btn-accent btn-md w-fit mx-auto">
                      <Link href="/contact-us">
                        <span>Get started </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Pricing;
