import { cn } from '@/utils/cn';
import Gradient44 from '@public/images/gradient/gradient-44.png';
import QrCodeDark from '@public/images/home-page-19/qr-code-dark.svg';
import QrCode from '@public/images/home-page-19/qr-code.svg';
import AppleDark from '@public/images/icons/apple-dark.svg';
import GooglePlay from '@public/images/icons/google-playstore.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface DownloadLink {
  id: string;
  name: string;
  icon: StaticImageData;
  href: string;
}
const downloadLinksData: DownloadLink[] = [
  {
    id: '1',
    name: 'Apple Store',
    icon: AppleDark,
    href: '#',
  },
  {
    id: '2',
    name: 'Google Play',
    icon: GooglePlay,
    href: '#',
  },
];
const DownloadApp = () => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="md:rounded-4xl rounded-2xl bg-secondary dark:bg-background-5 lg:py-[100px] py-[50px] relative overflow-hidden">
        <RevealAnimation delay={0.7} offset={200}>
          <figure className="absolute size-[700px] sm:size-[900px] lg:size-[1100px] rotate-[-597deg] top-[520px] left-[-136px] sm:left-[-72px] lg:left-[-41px] xl:left-[100px] select-none pointer-events-none">
            <Image src={Gradient44} alt="download-bg" className="size-full object-cover" />
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
            <div className="bg-white dark:bg-black sm:max-w-[310px] rounded-[20px] sm:p-8 p-6 flex flex-col items-center justify-center space-y-6">
              <div className="space-y-2 text-center">
                <figure className="rounded-2xl overflow-hidden max-w-[246px]">
                  <Image src={QrCode} alt="qr-code" className="dark:hidden" />
                  <Image src={QrCodeDark} alt="qr-code" className="hidden dark:block" />
                </figure>
                <p className="dark:text-accent">Scan the QR code to start!</p>
              </div>
              <div className="space-y-3 w-full">
                {downloadLinksData.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="lg:py-4 py-2.5 lg:px-8 px-4 lg:rounded-2xl rounded-lg bg-black hover:bg-secondary transition-all duration-300 dark:bg-background-9 flex items-center justify-center gap-2">
                    <figure>
                      <Image className="w-full h-full object-contain" src={link.icon} alt={`${link.name} logo`} />
                    </figure>
                    <span
                      className={cn(
                        'text-background-3 font-normal lg:text-heading-5 text-tagline-1',
                        link.id === '1' ? ' mt-1' : '',
                      )}>
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </RevealAnimation>
          <div className="absolute left-1/2 -translate-x-1/2 size-[510px] rounded-full -z-1 publish-circle">
            <div className="size-[510px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
              <div className="size-[428px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                <div className="size-[346px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60">
                  <div className="size-[265px] flex items-center justify-center rounded-full border border-[#DCD4FF]/10 bg-[#DCD4FF]/5 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default DownloadApp;
