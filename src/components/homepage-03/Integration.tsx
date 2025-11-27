import matrixRightArrow from '@public/images/icons/sqare-matrix-right-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const logos = [
  { src: '/images/icons/notion.svg', alt: 'Notion' },
  { src: '/images/icons/dropbox.svg', alt: 'Dropbox' },
  { src: '/images/icons/svelte.svg', alt: 'Svelte' },
  { src: '/images/icons/slack.svg', alt: 'Slack' },
  { src: '/images/icons/asana.svg', alt: 'Asana' },
];

const logosRight = [
  { src: '/images/icons/svelte.svg', alt: 'Svelte' },
  { src: '/images/icons/notion.svg', alt: 'Notion' },
  { src: '/images/icons/reddit.svg', alt: 'Reddit' },
  { src: '/images/icons/dropbox.svg', alt: 'Dropbox' },
];

const logosBottom = [
  { src: '/images/icons/slack.svg', alt: 'Slack' },
  { src: '/images/icons/drive-google.svg', alt: 'Google Drive' },
  { src: '/images/icons/spanchat-v2.svg', alt: 'Spanchat' },
  { src: '/images/icons/dropbox.svg', alt: 'Dropbox' },
  { src: '/images/icons/svelte.svg', alt: 'Svelte' },
];

const Integration = () => {
  return (
    <section className="pt-14 pb-24 md:pt-16 md:pb-24 lg:pt-[88px] lg:pb-[140px] xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <article className="flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          <div className="w-full max-lg:text-center lg:w-1/2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green-v2 mb-5">Integration</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">
                Enhance your productivity with over
                <span className="text-primary-500 lg:block">50 integrations.</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-8 lg:max-w-[596px]">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/integration-01"
                  className="btn btn-primary btn-lg md:btn-xl hover:btn-white-dark mx-auto block w-[90%] md:mx-0 md:inline-block md:w-auto">
                  See it in action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="relative flex w-full flex-col items-center space-y-6 lg:w-1/2">
              <Link href="./integration-01" aria-label="View integrations page">
                <span className="sr-only">View integrations page</span>
                <div className="bg-primary-500 hover:shadow-primary-500/20 absolute top-1/2 left-1/2 z-10 flex size-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-200 ease-in hover:scale-[103%] hover:perspective-origin-top md:size-[140px]">
                  <Image src={matrixRightArrow} alt="arrow" />
                </div>
              </Link>
              <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
              <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

              <Marquee autoFill speed={30}>
                <div className="flex items-center gap-x-6">
                  {logos.map((logo, idx) => (
                    <figure
                      key={idx}
                      className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                      <Image src={logo.src} alt={`${logo.alt}-icon`} width={48} height={48} />
                    </figure>
                  ))}
                </div>
              </Marquee>

              <Marquee autoFill direction="right" speed={30}>
                <div className="flex items-center gap-x-6">
                  {logosRight.map((logo, idx) => (
                    <figure
                      key={idx}
                      className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                      <Image src={logo.src} alt={`${logo.alt}-icon`} width={48} height={48} />
                    </figure>
                  ))}
                </div>
              </Marquee>

              <Marquee autoFill speed={30}>
                <div className="flex items-center gap-x-6">
                  {logosBottom.map((logo, idx) => (
                    <figure
                      key={idx}
                      className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                      <Image src={logo.src} alt={`${logo.alt}-icon`} width={48} height={48} />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

Integration.displayName = 'Integration';
export default Integration;
