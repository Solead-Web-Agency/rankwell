'use client';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TopNavDescription = () => {
  const { showTopNavDescription, setShowTopNavDescription } = useAppContext();

  if (!showTopNavDescription) return null;

  return (
    <RevealAnimation delay={0.1} direction="up" instant>
      <div className="px-5 py-1.5 bg-ns-cyan absolute w-full top-0 left-0 z-50">
        <div className="relative flex items-center justify-between">
          <figcaption className="text-secondary text-left text-tagline-2 md:text-tagline-2 font-inter-tight font-normal leading-[150%]">
            AI Gadgets new homepage is live now{' '}
            <Link href="#" className="underline">
              click here{' '}
            </Link>{' '}
            to learn more
          </figcaption>

          <button onClick={() => setShowTopNavDescription(false)} className="size-5 md:size-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
              <path
                d="M22.8358 22.3639L22.3643 22.8353C22.104 23.0956 21.6819 23.0956 21.4215 22.8353L16.0004 17.4141L10.5792 22.8352C10.3189 23.0956 9.89675 23.0956 9.6364 22.8352L9.16499 22.3638C8.90464 22.1035 8.90464 21.6814 9.16499 21.421L14.5862 15.9999L9.16499 10.5787C8.90464 10.3184 8.90464 9.89626 9.16499 9.63591L9.63639 9.16451C9.89674 8.90416 10.3189 8.90416 10.5792 9.16451L16.0004 14.5857L21.4215 9.1645C21.6819 8.90415 22.104 8.90415 22.3643 9.1645L22.8358 9.6359C23.0961 9.89625 23.0961 10.3184 22.8358 10.5787L17.4146 15.9999L22.8358 21.421C23.0961 21.6814 23.0961 22.1035 22.8358 22.3639Z"
                className="fill-secondary"
              />
            </svg>
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default TopNavDescription;
