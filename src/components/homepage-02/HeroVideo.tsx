'use client';

import { useModalContext } from '@/context/ModalContext';
import heroVideo from '@public/images/home-page-2/hero-video.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroVideo = () => {
  const { videoModal } = useModalContext();

  return (
    <RevealAnimation delay={0.7} instant>
      <div className="lp:mx-auto max-lp:mx-5 bg-background-3 dark:bg-background-7 relative mx-auto max-w-[1290px] overflow-hidden rounded-4xl p-2.5 max-[500px]:!mx-5 max-sm:mx-auto max-sm:max-w-[450px] max-sm:rounded-2xl max-sm:p-2">
        <Image
          src={heroVideo}
          alt="hero video cover"
          className="h-ful w-full rounded-[25px] object-cover max-sm:rounded-xl"
        />
        <button
          onClick={videoModal.openModal}
          className="bg-secondary/10 absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-[18px] transition-transform duration-[400ms] ease-in-out hover:scale-110 focus:outline-none max-sm:size-14"
          aria-label="Play video">
          <svg className="size-5 max-sm:size-4" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5151 10.2208L1.5252 0.136503C1.37376 0.0508746 1.20014 0.00383059 1.02225 0.000224187C0.844354 -0.00338222 0.668632 0.0365793 0.513209 0.115987C0.357785 0.195394 0.228287 0.311371 0.138073 0.451955C0.0478591 0.59254 0.000196059 0.75264 0 0.915741V21.0843C0.000196059 21.2474 0.0478591 21.4075 0.138073 21.548C0.228287 21.6886 0.357785 21.8046 0.513209 21.884C0.668632 21.9634 0.844354 22.0034 1.02225 21.9998C1.20014 21.9962 1.37376 21.9491 1.5252 21.8635L19.5151 11.7792C19.6628 11.6992 19.7852 11.5852 19.8702 11.4485C19.9553 11.3119 20 11.1573 20 11C20 10.8427 19.9553 10.6881 19.8702 10.5515C19.7852 10.4148 19.6628 10.3008 19.5151 10.2208Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </RevealAnimation>
  );
};

export default HeroVideo;
