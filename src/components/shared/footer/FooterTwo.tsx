import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../../animation/RevealAnimation';
import CTAV1 from '../cta/CTAV1';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

const FooterTwo = () => {
  return (
    <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
      {/* <!-- right gradient --> */}
      <FooterRightGradient className="pointer-events-none absolute top-[-15%] right-[-71%] z-0 h-[618px] w-[617px] rotate-[-30deg] bg-top-right bg-no-repeat select-none max-[376px]:right-[-68%] md:top-[-21%] md:right-[-33%] lg:right-[-19%] xl:top-[-24%] xl:right-[-9%]" />

      {/* <!-- left gradient --> */}
      <FooterLeftGradient className="pointer-events-none absolute -bottom-[8%] -left-[65%] z-0 size-[570px] select-none min-[2559px]:!bottom-[-14%] min-[2559px]:!left-[-16%] md:-bottom-[20%] md:-left-[59%] md:size-[870px] lg:-left-[38%] xl:-bottom-[26%] xl:-left-[21%]" />

      <CTAV1
        className="relative z-10 px-5 py-14 max-[400px]:py-14 xl:py-[88px]"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
        headingClass="text-accent"
        btnClass=" btn-white h-12 w-[85%] md:w-auto dark:hover:btn-transparent"
        listTextClass="text-accent/60"
        inputFieldClass="shadow-1 placeholder:text-accent/60 border-stroke-7 dark:border-stroke-7 dark:placeholder:text-accent/60 focus:border-accent/60 bg-accent/10 text-accent h-12 w-[85%] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none md:w-[71%] lg:max-w-[340px] dark:bg-transparent"
      />

      <div className="main-container border-t-stroke-6 dark:border-t-accent/10 relative z-10 border-t px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="xl:max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="NextSass Logo" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com" className="footer-social-link">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.instagram.com" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.youtube.com" className="footer-social-link">
                    <span className="sr-only">Youtube</span>
                    <Image className="size-6" src={youtube} alt="Youtube" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.dribbble.com" className="footer-social-link">
                    <span className="sr-only">Dribbble</span>
                    <Image className="size-6" src={dribbble} alt="Dribbble" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.behance.net" className="footer-social-link">
                    <span className="sr-only">Behance</span>
                    <Image className="size-6" src={behance} alt="Behance" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Company</p>
                  <ul className="space-y-5 max-[400px]:space-y-3">
                    <li>
                      <Link href="/about-01" className="footer-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="footer-link">
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link href="/case-study" className="footer-link">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="footer-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.5}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Support</p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/faq" className="footer-link">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/documentation" className="footer-link">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorial" className="footer-link">
                        Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link href="/support" className="footer-link">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.6}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Legal Policies</p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/terms-conditions" className="footer-link">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="footer-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy" className="footer-link">
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/gdpr" className="footer-link">
                        GDPR Compliance
                      </Link>
                    </li>
                    <li>
                      <Link href="/affiliate-policy" className="footer-link">
                        Affiliate Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative pt-6 pb-10 text-center">
          <FooterDivider className="bg-stroke-6 dark:bg-accent/10" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 max-sm:text-tagline-2 text-primary-50 font-normal">
              Copyright &copy;NextSaaS – smart application for modern business
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};
FooterTwo.displayName = 'FooterTwo';
export default FooterTwo;
