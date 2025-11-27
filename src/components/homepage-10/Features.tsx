import paymentSecurityDark from '@public/images/home-page-10/payment-security-dark.png';
import paymentSecurity from '@public/images/home-page-10/payment-security.png';
import softwareAnalyticsDark from '@public/images/home-page-10/software-analytics-dark.png';
import softwareAnalytics from '@public/images/home-page-10/software-analytics.png';
import webSecurityDark from '@public/images/home-page-10/web-security-dark.png';
import webSecurity from '@public/images/home-page-10/web-security.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuresData = [
  {
    id: 1,
    title: 'Web security',
    description: 'Safeguard websites from cyber threats, malware, and unauthorized access.',
    image: webSecurity,
    imageDark: webSecurityDark,
  },
  {
    id: 2,
    title: 'Software analytics',
    description: 'Ensure your applications and systems are always up-to-date and secure.',
    image: softwareAnalytics,
    imageDark: softwareAnalyticsDark,
  },
  {
    id: 3,
    title: 'Payment security',
    description: 'End-to-end encryption and fraud prevention for online transactions.',
    image: paymentSecurity,
    imageDark: paymentSecurityDark,
  },
];

const Features = () => {
  return (
    <section className="lg:py-[100px] py-[60px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="lg:max-w-[668px] md:max-w-[550px] max-w-[400px] mx-auto space-y-5 mb-10 md:mb-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">More features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Managing your money has never been easier</h2>
          </RevealAnimation>
        </div>
        <div className="mb-12 sm:mb-16 md:mb-[100px]">
          <div className="grid grid-cols-12 lg:gap-[42px] md:gap-8 gap-y-11">
            {featuresData.map((feature, index) => (
              <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="space-y-3">
                    <div className="border border-stroke-4 bg-background-1 dark:bg-background-6 dark:border-stroke-6 p-2.5 rounded-[20px]">
                      <figure className="lg:max-w-[402px] md:max-w-full w-full">
                        <Image src={feature.image} alt={feature.title} className="w-full h-full dark:hidden" />
                        <Image
                          src={feature.imageDark}
                          alt={feature.title}
                          className="w-full h-full hidden dark:block"
                        />
                      </figure>
                    </div>
                    <div className="space-y-1 pl-2.5">
                      <h3 className="text-heading-6 sm:text-heading-5 font-normal">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <div className="text-center">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/features-01"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md w-[90%] sm:w-auto mx-auto">
              Explore all
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
