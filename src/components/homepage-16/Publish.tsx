import gradient49 from '@public/images/gradient/gradient-49.png';
import heroDotBg from '@public/images/gradient/hero-dot-bg.png';
import qrCodeDark from '@public/images/home-page-19/qr-code-dark.svg';
import qrCode from '@public/images/home-page-19/qr-code.svg';
import appleLogo from '@public/images/icons/apple-dark.svg';
import googlePlayLogo from '@public/images/icons/google-playstore.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const storeButtons = [
  {
    href: '#',
    logo: appleLogo,
    alt: 'Apple logo',
    text: 'Apple Store',
  },
  {
    href: '#',
    logo: googlePlayLogo,
    alt: 'Google Play logo',
    text: 'Google Play',
  },
];

const Publish = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.2}>
          <div className="rounded-[32px] bg-secondary dark:bg-background-8 relative py-[100px] overflow-hidden">
            {/* publish section bg  */}
            <RevealAnimation delay={0.9}>
              <figure className="absolute max-w-[1290px] max-h-[1137px] h-full w-full left-1/2 -translate-x-1/2 max-lg:w-[600px] max-lg:h-[600px] -bottom-[350px] md:-bottom-[80px] lg:-bottom-[720px] xl:-bottom-[620px] select-none pointer-events-none">
                <Image src={gradient49} alt="publish gradient" className="size-full object-cover" />
              </figure>
            </RevealAnimation>
            <div className="text-center max-w-[900px] sm:mx-auto relative mb-[70px] z-0 mx-5">
              <figure className="absolute animate-pulse left-1/2 -top-5 -translate-x-1/2 -z-1">
                <Image src={heroDotBg} alt="bg star" />
              </figure>
              <RevealAnimation delay={0.2}>
                <span className="badge badge-blur text-ns-yellow mb-5">Publish</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mb-3 text-white">
                  <span className="text-primary-500">Publish your app </span> to any platform
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mb-6 text-accent/60">
                  &nbsp;Join thousands of creators using App Builder to launch their ideas.
                </p>
              </RevealAnimation>
            </div>
            <div className="max-w-[900px] mx-auto relative flex items-center justify-center z-0 py-[100px] overflow-hidden">
              <RevealAnimation delay={0.4}>
                <div className="bg-white max-w-[310px] rounded-[20px] md:p-8 p-4 flex flex-col items-center justify-center space-y-6">
                  <div className="space-y-2 text-center">
                    <figure className="max-w-[246px] w-full rounded-2xl overflow-hidden">
                      <Image src={qrCode} alt="qr-code" className="size-full object-cover dark:hidden" />
                      <Image src={qrCodeDark} alt="qr-code" className="size-full object-cover hidden dark:block" />
                    </figure>
                    <p className="text-secondary/60">Scan the QR code to start!</p>
                  </div>
                  <div className="space-y-3 w-full md:w-auto">
                    {storeButtons.map((button, index) => (
                      <Link
                        key={index}
                        href={button.href}
                        className="lg:py-4 py-2.5 lg:px-8 px-4 lg:rounded-2xl rounded-lg bg-black flex items-center justify-center gap-2">
                        <figure className="lg:size-12 size-8">
                          <Image className="w-full h-full object-contain" src={button.logo} alt={button.alt} />
                        </figure>
                        <span className="text-background-3 font-normal lg:text-heading-5 text-tagline-1 mt-1">
                          {button.text}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="opacity-20 absolute left-1/2 -translate-x-1/2 top-0 w-fit -z-1">
                  <div className="rounded-full p-[83px] border border-primary-200/60 bg-primary-100/10 opacity-60">
                    <div className="rounded-full p-17 border border-primary-200/60 bg-primary-100/10 opacity-60">
                      <div className="rounded-full p-[75px] border border-primary-200/60 bg-primary-100/10 opacity-60">
                        <div className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[266px] lg:h-[266px] border border-primary-200/60 bg-primary-100/10 opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Publish;
