import gradient49 from '@public/images/gradient/gradient-49.png';
import qrCodeDark from '@public/images/home-page-19/qr-code-dark.svg';
import qrCode from '@public/images/home-page-19/qr-code.svg';
import appleLogo from '@public/images/icons/apple-dark.svg';
import googlePlayLogo from '@public/images/icons/google-playstore.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const storeButtons = [
  {
    id: 'apple-store',
    href: '#',
    logo: appleLogo,
    logoAlt: 'Apple logo',
    text: 'Apple Store',
  },
  {
    id: 'google-play',
    href: '#',
    logo: googlePlayLogo,
    logoAlt: 'Google Play logo',
    text: 'Google Play',
  },
];
const DownloadApp = () => {
  return (
    <section>
      <div className="main-container">
        <div>
          <RevealAnimation delay={0.2}>
            <div className="md:rounded-4xl rounded-2xl bg-secondary relative overflow-hidden dark:bg-background-5 lg:py-[100px] py-[50px]">
              {/* gradient bg  */}
              <RevealAnimation delay={0.4}>
                <figure className="max-w-[1290px] w-full absolute top-[76%] md:top-[58%] xl:top-[45%] left-1/2 -translate-x-1/2 rotate-[40deg] select-none pointer-events-none">
                  <Image src={gradient49} alt="gradient bg" className="size-full object-cover" />
                </figure>
              </RevealAnimation>
              <div className="text-center relative mb-[70px] z-0 space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-blur">Download your app</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5 text-white">
                      App download &amp; access
                    </h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-accent/60">&nbsp;Manage Anywhere. Anytime.</p>
                  </RevealAnimation>
                </div>
              </div>
              <div className="max-w-[900px] mx-auto relative flex items-center justify-center z-0 overflow-hidden lg:px-0 px-5">
                <RevealAnimation delay={0.4}>
                  <div className="bg-white dark:bg-black sm:max-w-[310px] max-w-[260px] rounded-[20px] sm:p-8 p-6 flex flex-col items-center justify-center space-y-6">
                    <div className="space-y-2 text-center">
                      <figure className="rounded-2xl overflow-hidden">
                        <Image src={qrCode} alt="qr-code" className="dark:hidden" />
                        <Image src={qrCodeDark} alt="qr-code" className="hidden dark:block" />
                      </figure>
                      <p className="dark:text-accent">Scan the QR code to start!</p>
                    </div>
                    <div className="space-y-3">
                      {storeButtons.map((button) => (
                        <Link
                          key={button.id}
                          href={button.href}
                          className="lg:py-4 py-2.5 lg:px-8 px-4 lg:rounded-2xl rounded-lg bg-black dark:bg-background-5 flex items-center gap-2">
                          <figure className="lg:size-12 size-8">
                            <Image className="w-full h-full object-contain" src={button.logo} alt={button.logoAlt} />
                          </figure>
                          <span className="text-background-3 font-normal lg:text-heading-5 text-tagline-1 mt-1">
                            {button.text}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="absolute left-1/2 -translate-x-1/2 size-[510px] rounded-full -z-1">
                    <div className="size-[510px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                      <div className="size-[428px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                        <div className="size-[346px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                          <div className="size-[265px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60" />
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
