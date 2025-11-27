import gradient16 from '@public/images/gradient/gradient-16.png';
import gradient27 from '@public/images/gradient/gradient-27.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ChangelogContent = () => {
  return (
    <section className="pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[70px] changelog">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2>NextSaaS changelog</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>Stay updated with the latest features, improvements, and fixes in NextSaaS.</p>
            </RevealAnimation>
          </div>
          <div className="space-y-8">
            <RevealAnimation delay={0.5}>
              <h3 className="max-w-[850px] mx-auto">Changelog entries</h3>
            </RevealAnimation>
            {/*Changelog 1*/}
            <RevealAnimation delay={0.6}>
              <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-6 rounded-[20px] relative overflow-hidden z-10 max-w-[850px] mx-auto">
                <div className="-z-100 absolute -right-[105%] -top-[50%] sm:-right-[104%] sm:-top-[95%] md:-right-[88%] md:-top-[98%] lg:-right-[80%] lg:-top-[90%] xl:-right-[78%] xl:-top-[97%] -rotate-[160deg] size-[650px] sm:size-[1060px] pointer-events-none select-none">
                  <Image src={gradient27} alt="gradient" />
                </div>
                <h4 className="mb-6">NextSaaS v2.2.0 – released on april 25, 2025</h4>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <p className="text-secondary dark:text-accent">New:</p>
                    <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                      <li className="text-secondary dark:text-accent">Added multi-language support (EN, ES, FR, DE)</li>
                      <li>New property analytics dashboard</li>
                      <li>Webhooks integration for real-time updates</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-secondary dark:text-accent">Improved:</p>
                    <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                      <li>Improved API response times</li>
                      <li>Enhanced mobile responsiveness across all dashboards</li>
                      <li>Better onboarding flow for new users</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-secondary dark:text-accent">Fixed:</p>
                    <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                      <li>Issue with subscription renewal notifications</li>
                      <li>Minor UI glitches on property listing page</li>
                      <li>Fixed data export formatting bugs in reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {/*Changelog 2*/}
          <RevealAnimation delay={0.7}>
            <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-6 rounded-[20px] relative overflow-hidden z-10 max-w-[850px] mx-auto">
              <div className="-z-10 absolute -right-[100%] -top-[45%] sm:-right-[120%] sm:-top-[95%] md:-right-[94%] md:-top-[98%] lg:-right-[84%] xl:-right-[74%] xl:-top-[92%] -rotate-[260deg] size-[650px] sm:size-[1060px] pointer-events-none select-none">
                <Image src={gradient6} alt="gradient" />
              </div>
              <h4 className="mb-6">NextSaaS v2.1.0 – Released on March 10, 2025</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">New:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li className="text-secondary dark:text-accent">Introduced Two-Factor Authentication (2FA)</li>
                    <li className="text-secondary dark:text-accent">Added support for Stripe split payments</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Improved:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li className="text-secondary dark:text-accent">Upgraded backend security layers</li>
                    <li className="text-secondary dark:text-accent">Enhanced billing history view</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Fixed:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Minor bug with password reset flow</li>
                    <li>Issue with property image uploads on Safari browser</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {/*Changelog 3 */}
          <RevealAnimation delay={0.8}>
            <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-6 rounded-[20px] relative overflow-hidden z-10 max-w-[850px] mx-auto">
              <div className="-z-10 absolute -right-[85%] -top-[38%] sm:-right-[92%] sm:-top-[78%] md:-right-[80%] md:-top-[84%] lg:-right-[66%] lg:-top-[80%] xl:-right-[68%] xl:-top-[84%] rotate-[260deg] size-[650px] sm:size-[1060px] pointer-events-none select-none">
                <Image src={gradient6} alt="gradient" />
              </div>
              <h4 className="mb-6">NextSaaS v2.0.0 – major update – released on february 1, 2025</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">New:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Full platform UI redesign</li>
                    <li>Launch of NextSaaS Mobile App (iOS and Android)</li>
                    <li>Added multi-user collaboration tools</li>
                    <li>Advanced reporting templates for premium plans</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Improved:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Faster page load speed (up to 40% improvement)</li>
                    <li>Streamlined integration setup process</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Fixed:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Fixed timezone issues on scheduling features</li>
                    <li>Addressed API token expiration problems</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {/*Changelog 4 */}
          <RevealAnimation delay={0.9}>
            <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-6 rounded-[20px] relative overflow-hidden z-10 max-w-[850px] mx-auto">
              <div
                className="-z-100 absolute -right-[85%] -top-[30%] sm:-right-[88%] sm:-top-[64%] md:-right-[78%] md:-top-[70%] lg:-right-[64%] lg:-top-[73%] xl:-right-[65%] xl:-top-[78%] rotate-[45deg] size-[650px] sm:size-[1060px] pointer-events-none select-none"
                aria-hidden="true">
                <Image src={gradient16} alt="gradient" />
              </div>
              <h4 className="mb-6">NextSaaS v1.5.0 – Released on December 15, 2024</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">New:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Zapier Integration is now available!</li>
                    <li>Added email notification templates customization</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Improved:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Dashboard navigation experience optimized</li>
                    <li>Improved support for larger teams (100+ users)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-secondary dark:text-accent">Fixed:</p>
                  <ul className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                    <li>Fixed user invitation email bugs</li>
                    <li>Minor styling fixes on the analytics charts</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {/*Changelog 5*/}
          <RevealAnimation delay={1}>
            <div className="space-y-6 relative overflow-hidden z-10 max-w-[850px] mx-auto">
              <div className="space-y-3">
                <h4>NextSaaS v1.0.0 – Initial Release – October 1, 2024</h4>
                <p>First Official Launch</p>
              </div>
              <ul className="space-y-3 text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                <li>Property listing management</li>
                <li>User management and access control</li>
                <li>Subscription and billing system</li>
                <li>Reports and analytics</li>
                <li>API access for developers</li>
                <li>Custom branding settings</li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ChangelogContent;
