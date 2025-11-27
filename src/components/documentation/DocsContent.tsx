import gradient27 from '@public/images/gradient/gradient-27.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  return (
    <section className="pb-[200px] pt-[100px]">
      <div className="main-container mb-[70px]">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3 text-center">
            <h2>Welcome to the NextSaaS documentation</h2>
            <p>Find everything you need to set up, customize, and master your NextSaaS platform.</p>
          </div>
        </RevealAnimation>
      </div>
      <div className="main-container">
        <div className="space-y-[70px] documentation">
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h4>Documentation sections (main categories)</h4>
            </RevealAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RevealAnimation delay={0.4}>
                <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-3 rounded-[20px] overflow-hidden relative z-10">
                  <div className="-z-100 absolute -right-[107%] -top-[110%] sm:-right-[65%] sm:-top-[105%] md:-right-[99%] md:-top-[112%] lg:-right-[79%] lg:-top-[108%] xl:-right-[62%] xl:-top-[107%] -rotate-[138deg] size-[650px] md:[1060px] -skew-[10deg] pointer-events-none select-none">
                    <Image src={gradient27} alt="gradient" />
                  </div>
                  <h5>Getting started</h5>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Introduction to NextSaaS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Account setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Dashboard overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        First steps after signup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-3 rounded-[20px] relative overflow-hidden z-10">
                  <div className="-z-100 absolute -right-[107%] -top-[110%] sm:-right-[65%] sm:-top-[105%] md:-right-[99%] md:-top-[112%] lg:-right-[79%] lg:-top-[108%] xl:-right-[62%] xl:-top-[107%] -rotate-[138deg] size-[650px] md:[1060px] -skew-[10deg] pointer-events-none select-none">
                    <Image src={gradient27} alt="gradient" />
                  </div>
                  <h5>User management</h5>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Adding and managing users
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Role-based access control
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Setting permissions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Managing teams and groups
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        First steps after signup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Billing and subscription</h4>
                <p>Handle your billing, subscriptions, and invoices easily.</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    How to subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Managing your subscription plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Payment methods
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Viewing and downloading invoices
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Canceling or upgrading plans
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Settings &amp; customization</h4>
                <p>Tailor NextSaaS to fit your business needs.</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    General settings overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Customize your branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Notification settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Language and localization options
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Custom fields and filters
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Reporting and analytics</h4>
                <p>Gain insights and grow with detailed reports.</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Understanding the analytics dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Exporting reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Setting up custom reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    KPI and metrics guide
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Troubleshooting &amp; FAQs</h4>
                <p>Solutions for common issues and frequent questions.</p>
              </div>
              <ul className="space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Login issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Error messages and solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Data sync issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    General FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DocsContent;
