import { ArrowIcon } from '@/icons';
import { cn } from '@/utils/cn';
import integrationBg from '@public/images/home-page-2/integration-bg.png';
import figmaIcon from '@public/images/icons/figma.svg';
import shopifyIcon from '@public/images/icons/shopify.svg';
import slackIcon from '@public/images/icons/slack.svg';
import snapchatIcon from '@public/images/icons/snapchat.svg';
import tiktokIcon from '@public/images/icons/tiktok.svg';
import zapierIcon from '@public/images/icons/zapier.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Integration data
const integrationData = [
  {
    id: 1,
    name: 'Zapier',
    category: 'Communication',
    icon: zapierIcon,
    href: '/integration-01',
  },
  {
    id: 2,
    name: 'Snapchat',
    category: 'Messaging App',
    icon: snapchatIcon,
    href: '/integration-01',
  },
  {
    id: 3,
    name: 'Shopify',
    category: 'e-commerce',
    icon: shopifyIcon,
    href: '/integration-01',
  },
  {
    id: 4,
    name: 'Figma',
    category: 'Design Tool',
    icon: figmaIcon,
    href: '/integration-01',
  },
  {
    id: 5,
    name: 'Slack',
    category: 'Communication',
    icon: slackIcon,
    href: '/integration-01',
  },
  {
    id: 6,
    name: 'Tiktok',
    category: 'Video Tool',
    icon: tiktokIcon,
    href: '/integration-01',
  },
];

const Integration = () => {
  return (
    <section className="dark:bg-background-6 py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="bg-secondary relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl p-5 max-[426px]:w-[90%] max-[426px]:rounded-2xl max-[426px]:px-5 max-[426px]:py-8 sm:p-10 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[100px]">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image quality={100} src={integrationBg} alt="integration bd bg" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-[850px]">
          <div className="mb-[112px] flex flex-col items-center gap-y-4 text-center max-[426px]:mb-10">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow mb-5 max-[426px]:mb-3">Integration</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent max-[426px]:text-heading-6 mx-auto max-w-[750px]">
                Link up with your favorite tools.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent max-[426px]:text-tagline-2 max-w-[510px]">
                We assist startups in standing out with exceptional messaging that effectively engages their audience.
              </p>
            </RevealAnimation>
          </div>
          <div className="mb-14 grid grid-cols-1 gap-8 max-[426px]:mb-10 max-[426px]:gap-4 sm:gap-4 md:grid-cols-2 md:gap-8">
            {integrationData.map((integration, index) => (
              <RevealAnimation key={integration.id} delay={0.1 + index * 0.1}>
                <div className="group">
                  <Link
                    href={integration.href}
                    className="group-hover:shadow-1 flex justify-between rounded-[20px] bg-white/14 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] max-[426px]:rounded-xl max-[426px]:p-3.5 md:p-4 lg:p-8">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 grow-0 transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12">
                        <span className="size-14 overflow-hidden">
                          <Image
                            src={integration.icon}
                            alt={`${integration.name} icon`}
                            className={cn(
                              'size-full rounded-lg bg-white object-cover',
                              integration.name === 'Figma' && 'size-14',
                            )}
                          />
                        </span>
                      </div>
                      <div className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                        <h5 className="text-accent max-[426px]:text-heading-6">{integration.name}</h5>
                        <p className="text-accent/60 max-[426px]:text-tagline-2">{integration.category}</p>
                      </div>
                    </div>
                    <div className="bg-ns-green group-hover:bg-ns-green/90 group-hover:shadow-1 relative flex size-14 items-center justify-center overflow-hidden rounded-full transition-all duration-[600ms] ease-in-out max-[426px]:size-12">
                      <ArrowIcon className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-6 stroke-black" />
                      <ArrowIcon className="absolute translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0 size-6 stroke-black" />
                    </div>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={0.7}>
            <div className="text-center">
              <LinkButton
                href="/integration-01"
                className="btn btn-xl btn-white dark:btn-transparent hover:btn-white-dark dark:hover:btn-white max-[526px]:btn-md max-[526px]:w-full">
                See in Action
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
Integration.displayName = 'Integration';
export default Integration;
