import { useAppContext } from '@/context/AppContext';
import { TopNavButtonsProps } from '@/interface';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const TopNavMarquee = ({ fillClass, className }: TopNavButtonsProps) => {
  const { showTopNavMarquee, setShowTopNavMarquee } = useAppContext();

  if (!showTopNavMarquee) return null;

  return (
    <RevealAnimation delay={0.1} direction="up" instant>
      <div
        className={cn('px-5 py-1.5 bg-ns-yellow-light absolute w-full top-0 left-0 z-50', className)}
        accessKey="top-marquee-nav">
        <div className="px-5 md:px-5 md:mr-10 mx-auto relative">
          <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-ns-yellow-light to-transparent dark:from-background-5 z-10" />
          <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-ns-yellow-light to-transparent dark:from-background-5 z-10" />
          <div className="flex items-center justify-center">
            <Marquee autoFill speed={40}>
              <p className="text-secondary text-tagline-2 font-inter-tight font-normal leading-[150%] mr-2">
                Introducing our AI-powered resume builder –
                <Link href="#" className="underline hover:underline-offset-2 cursor-pointer">
                  discover now
                </Link>{' '}
                and upgrade your job search.
              </p>
              <p className="text-secondary text-tagline-2 font-inter-tight font-normal leading-[150%]">
                Try the latest templates for modern careers{' '}
                <Link href="#" className="underline hover:underline-offset-2 cursor-pointer">
                  see details{' '}
                </Link>
                and stand out to employers.{' '}
              </p>
            </Marquee>
          </div>
        </div>
        <div className="absolute z-20 right-2.5 md:right-4 2xl:right-10 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setShowTopNavMarquee(false)}
            className="size-6 cursor-pointer flex items-center justify-center close-top-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
              <path
                d="M22.8358 22.3639L22.3643 22.8353C22.104 23.0956 21.6819 23.0956 21.4215 22.8353L16.0004 17.4141L10.5792 22.8352C10.3189 23.0956 9.89675 23.0956 9.6364 22.8352L9.16499 22.3638C8.90464 22.1035 8.90464 21.6814 9.16499 21.421L14.5862 15.9999L9.16499 10.5787C8.90464 10.3184 8.90464 9.89626 9.16499 9.63591L9.63639 9.16451C9.89674 8.90416 10.3189 8.90416 10.5792 9.16451L16.0004 14.5857L21.4215 9.1645C21.6819 8.90415 22.104 8.90415 22.3643 9.1645L22.8358 9.6359C23.0961 9.89625 23.0961 10.3184 22.8358 10.5787L17.4146 15.9999L22.8358 21.421C23.0961 21.6814 23.0961 22.1035 22.8358 22.3639Z"
                className={cn(fillClass)}
              />
            </svg>
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

TopNavMarquee.displayName = 'TopNavMarquee';
export default TopNavMarquee;
