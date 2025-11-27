import { ArrowIcon } from '@/icons';
import FigmaIcon from '@public/images/icons/figma.svg';
import ShopifyIcon from '@public/images/icons/shopify.svg';
import SlackIcon from '@public/images/icons/slack.svg';
import SnapchatIcon from '@public/images/icons/snapchat.svg';
import TikTokIcon from '@public/images/icons/tiktok.svg';
import ZapierIcon from '@public/images/icons/zapier.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const integrations = [
  {
    id: 1,
    name: 'Zapier',
    description: 'Communication',
    icon: ZapierIcon,
  },
  {
    id: 2,
    name: 'Snapchat',
    description: 'Messaging app',
    icon: SnapchatIcon,
  },
  {
    id: 3,
    name: 'Shopify',
    description: 'e-commerce',
    icon: ShopifyIcon,
  },
  {
    id: 4,
    name: 'Figma',
    description: 'Design tool',
    icon: FigmaIcon,
  },
  {
    id: 5,
    name: 'Slack',
    description: 'Communication',
    icon: SlackIcon,
  },
  {
    id: 6,
    name: 'TikTok',
    description: 'Social media',
    icon: TikTokIcon,
  },
];

const SocialActivity = () => {
  return (
    <section className="xl:py-[200px] md:py-[100px] py-[50px] bg-white dark:bg-background-7">
      <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[380px] max-w-full sm:mx-auto mx-5">
        <div className="relative py-[100px] rounded-[25px] bg-[url('/images/home-page-26/services-bg.png')] bg-cover bg-bottom px-3 sm:px-0">
          <div className="space-y-5 text-center mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Social activity</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-accent">
                  Select in <span className="text-primary-500">social media</span>
                  platform
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="lg:max-w-[510px] sm:max-w-[400px] max-w-[300px] mx-auto text-accent/60 px-3 sm:px-0">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                  Latin though it looks like nothing.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="lg:max-w-[852px] min-[445px]:max-w-[500px] mx-auto grid grid-cols-12 lg:gap-8 gap-y-6 mb-14 px-3 sm:px-0">
            {integrations.map((integration, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={integration.id}>
                <div className="col-span-12 lg:col-span-6 group">
                  <Link href="/integration-01">
                    <div className="sm:p-8 p-4 sm:rounded-2xl rounded-xl bg-white/15 flex items-center justify-between group-hover:scale-[102%] group-hover:shadow-1 transition-all duration-500 ease-in-out">
                      <div className="flex items-center gap-4">
                        <figure className="sm:size-14 size-10 rounded-lg bg-white flex items-center justify-center grow-0 shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-[103%]">
                          <Image src={integration.icon} alt={integration.name} className="sm:size-12 size-8" />
                        </figure>
                        <div className="space-y-1 transform transition-transform duration-500 group-hover:translate-x-1.5">
                          <h3 className="md:text-heading-5 sm:text-heading-6 text-tagline-1 text-accent">
                            {integration.name}
                          </h3>
                          <p className="text-accent/60">{integration.description}</p>
                        </div>
                      </div>
                      <div className="sm:size-14 size-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-ns-green/90 transition-all duration-[600ms] ease-in-out group-hover:shadow-1 relative overflow-hidden">
                        <ArrowIcon className="absolute -translate-x-11 opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100 size-6 stroke-black" />
                        <ArrowIcon className="absolute  stroke-white translate-x-0 opacity-100 transition-all duration-[600ms] ease-in-out group-hover:translate-x-10 group-hover:opacity-0 size-6" />
                      </div>
                    </div>
                  </Link>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={1}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/testimonial-01"
                className="btn btn-white btn-xl hover:btn-white-dark dark:btn-transparent dark:hover:btn-accent">
                See It in action
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SocialActivity;
