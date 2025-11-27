import qrCodeDark from '@public/images/home-page-26/qr-code-dark.svg';
import qrCode from '@public/images/home-page-26/qr-code.svg';
import appleDark from '@public/images/icons/apple-dark.svg';
import googlePlayStore from '@public/images/icons/google-playstore.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const HeroQR = () => {
  return (
    <>
      <RevealAnimation delay={0.5}>
        <div>
          <div className="lg:max-w-[535px] min-[425px]:max-w-[380px] max-w-[250px] w-full mx-auto bg-white dark:bg-background-9 lg:rounded-[28px] rounded-[20px] py-2.5 pl-2.5 lg:pr-6 pr-2.5 flex items-center lg:gap-6 gap-3 max-[425px]:flex-col">
            <div className="lg:max-w-[234px] max-w-[240px] min-[425px]:max-w-[150px] w-full">
              <figure className="rounded-[20px] overflow-hidden">
                <Image src={qrCode} alt="QR code" className="dark:hidden block size-full" />
                <Image src={qrCodeDark} alt="QR code" className="hidden dark:block size-full" />
              </figure>
            </div>
            <div className="flex-1 space-y-3 max-[425px]:w-full">
              <Link
                href="#"
                className="lg:py-4 py-2.5 lg:px-8 px-4 lg:rounded-2xl rounded-lg bg-black hover:bg-secondary transition-all duration-300 flex items-center gap-2 justify-center">
                <figure className="lg:size-12 size-8">
                  <Image src={appleDark} alt="Apple logo" className="w-full h-full object-contain" />
                </figure>
                <span className="text-background-3 font-normal lg:text-heading-5 text-tagline-1 mt-1">Apple Store</span>
              </Link>
              <Link
                href="#"
                className="lg:py-4 py-2.5 lg:px-8 px-4 lg:rounded-2xl rounded-lg bg-black hover:bg-secondary transition-all duration-300 flex items-center gap-2 justify-center">
                <figure className="lg:size-12 size-8">
                  <Image src={googlePlayStore} alt="Google Play logo" className="w-full h-full object-contain" />
                </figure>
                <span className="text-background-3 font-normal lg:text-heading-5 text-tagline-1">Google Play</span>
              </Link>
            </div>
          </div>
        </div>
      </RevealAnimation>
      <div className="absolute lg:-bottom-[53%] sm:-bottom-[40%] bottom-[5%] -z-10 left-1/2 -translate-x-1/2 xl:max-w-[1020px] lg:max-w-[800px] sm:max-w-[600px] min-[425px]:max-w-[400px] max-w-[340px] mx-auto">
        <RevealAnimation delay={0.6} instant>
          <div className="xl:size-[1020px] lg:size-[850px] sm:size-[600px] min-[425px]:size-[400px] size-[300px] rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 dark:bg-[#1B202A]/60 dark:border-stroke-7 flex items-center justify-center">
            <RevealAnimation delay={0.7} instant>
              <div className="xl:size-[857px] lg:size-[700px] sm:size-[500px] min-[425px]:size-[300px] size-[260px] rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 dark:bg-[#161B23]/60 dark:border-stroke-7 flex items-center justify-center">
                <RevealAnimation delay={0.8} instant>
                  <div className="xl:size-[693px] lg:size-[550px] sm:size-[400px] min-[425px]:size-[300px] size-[200px] rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 dark:bg-[#12161C]/60 dark:border-stroke-7 flex items-center justify-center">
                    <RevealAnimation delay={0.9} instant>
                      <div className="xl:size-[530px] lg:size-[400px] sm:size-[300px] min-[425px]:size-[200px] size-[140px] rounded-full border border-[#DCD4FF] bg-[#ece8ff]/30 dark:bg-[#0B0F15]/60 dark:border-stroke-7 flex items-center justify-center" />
                    </RevealAnimation>
                  </div>
                </RevealAnimation>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </>
  );
};

export default HeroQR;
