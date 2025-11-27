import aboutBlockchain from '@public/images/home-page-1/about-blockchain.png';
import aboutDecentralization from '@public/images/home-page-1/about-decentralization-1.png';
import aboutExchanges from '@public/images/home-page-1/about-exchanges.png';
import aboutPrivacy from '@public/images/home-page-1/about-privacy.png';
import Image from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import TabContent from '../ui/tab/TabContent';

const aboutTabsData = [
  {
    id: 'decentralization',
    badge: 'About',
    title: 'Crypto is the leading',
    titleBreak: true,
    titleContinue: 'platform for',
    highlightedText: ' crowd sales!',
    description:
      'Most cryptocurrencies are not controlled by any central authority such as a government or financial institution.',
    image: aboutDecentralization,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about-01',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Interactive reports',
        description: 'Learn about your users.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Team dashboard',
        description: 'Monitor your metrics.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Limitless segmentation',
        description: 'Surface hidden trends.',
      },
    ],
  },
  {
    id: 'blockchain',
    badge: 'About',
    title: 'Blockchain is changing the game for data and ',
    titleBreak: false,
    highlightedText: ' finance.',
    description:
      'Blockchain technology is revolutionizing the way we think about data security, transparency, and financial transactions.',
    image: aboutBlockchain,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about-01',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Bold and impactful',
        description: 'Learn about your users.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Tech-savvy and professional',
        description: 'Monitor your metrics.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Short and punchy',
        description: 'Surface hidden trends.',
      },
    ],
  },
  {
    id: 'privacy',
    badge: 'About',
    title: 'Privacy is key to safe online',
    titleBreak: false,
    highlightedText: ' experiences.',
    description:
      "In today's digital age, protecting your privacy isn't just a personal choice—it's a crucial step toward ensuring your safety online.",
    image: aboutPrivacy,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about-01',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Straightforward & professional',
        description: 'Learn about your users.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Friendly & trust-building',
        description: 'Monitor your metrics.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Bold & emphatic',
        description: 'Surface hidden trends.',
      },
    ],
  },
  {
    id: 'exchanges',
    badge: 'About',
    title: 'Exchanges drive crypto',
    titleBreak: false,
    highlightedText: ' trading!',
    description:
      'Cryptocurrency exchanges are the beating heart of the digital asset market. These platforms enable users to buy',
    image: aboutExchanges,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about-01',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Bold & direct',
        description: 'Learn about your users.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Conversational & friendly',
        description: 'Monitor your metrics.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Professional & clear',
        description: 'Surface hidden trends.',
      },
    ],
  },
];

const AboutTabContent = () => {
  return (
    <>
      {aboutTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <span className="badge badge-green mb-3.5 xl:mb-5">{tab.badge}</span>
              <h2 className={`${index === 0 ? 'lg:text-heading-2 text-heading-4' : ''} mb-3`}>
                {tab.title}
                {tab.titleBreak && <br className="hidden lg:block" />}
                {tab.titleContinue && ` ${tab.titleContinue}`}
                <span className={`text-primary-500 ${index === 1 ? 'inline-block' : ''}`}>{tab.highlightedText}</span>
              </h2>
              <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} lg:max-w-[478px]`}>{tab.description}</p>
              <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                {tab.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex list-none items-center gap-4 py-2">
                    <span className={`${feature.icon} text-secondary text-[36px] dark:text-white`}></span>
                    <div>
                      <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {feature.title}
                      </strong>
                      <p className="text-secondary/60 text-tagline-2 dark:text-accent/60 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <LinkButton
                  href={tab.buttonHref}
                  className="btn btn-white btn-lg md:btn-xl dark:btn-transparent hover:btn-primary w-full md:w-auto">
                  {tab.buttonText}
                </LinkButton>
              </div>
            </div>
            {/* About Image */}
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <div className="flex items-center justify-center">
                <figure className={index === 0 ? 'lg:inline-block' : 'tab-item-image'}>
                  <Image src={tab.image} alt={tab.imageAlt} className={index === 0 ? 'w-fit object-cover' : ''} />
                </figure>
              </div>
            </div>
          </div>
        </TabContent>
      ))}
    </>
  );
};
AboutTabContent.displayName = 'AboutTabContent';
export default AboutTabContent;
