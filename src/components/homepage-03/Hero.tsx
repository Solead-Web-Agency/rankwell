'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import heroChatInterface from '@public/images/home-page-3/chat-interface.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';
import HeroShapes from './HeroShapes';

export interface HeroShapesProps {
  className?: string;
}

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      ref={sceneRef}
      className="relative pt-[140px] pb-16 md:pt-[200px] md:pb-20 lg:pb-[100px] 2xl:pt-[250px]"
      id="scene">
      <HeroDotBg className="lg:top-[120px]" />
      <HeroShapes />
      <div className="main-container relative z-30 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green-v2 mb-5">Chatbot</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-medium">
            Automate your <span className="text-primary-500">chats </span>
            <br className="hidden md:block" />
            effortlessly
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-10 max-w-[588px] md:mb-14">
            Discover the next level of customer engagement with our intuitive AI-driven solution today. Experience
            seamless interactions
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <form className="mx-auto flex w-full flex-col items-center justify-center gap-x-3 gap-y-4 md:mx-0 md:w-auto md:flex-row">
            <input
              id="cta-email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="bg-background-1 dark:bg-background-6 placeholder:text-secondary/40 text-secondary/60 dark:text-accent/60 text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:shadow-1 dark:bg-dark-200 focus:border-primary-500 dark:focus:border-primary-500 h-12 w-[90%] rounded-[360px] border px-[18px] py-3 font-normal transition-all duration-300 outline-none placeholder:font-normal focus:outline-none md:max-w-[345px] md:min-w-[345px] dark:placeholder:text-white/40"
            />
            <button
              type="submit"
              className="btn btn-xl btn-primary flex h-12 w-[90%] items-center justify-center md:w-auto">
              <span>Get started</span>
            </button>
          </form>
        </RevealAnimation>
        {/* Features images */}
        <RevealAnimation delay={0.5} instant>
          <figure className="mt-12 overflow-hidden rounded-xl md:mt-20 md:rounded-2xl lg:mt-[100px] lg:rounded-4xl">
            <Image src={heroChatInterface} alt="Chat interface" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={1} offset={0}>
        <div className="absolute top-0 left-0 hidden h-full w-full before:absolute before:top-0 before:left-[6%] before:z-0 before:h-[98%] before:w-[1px] before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] before:content-[''] after:absolute after:top-0 after:right-[6%] after:-z-10 after:h-[98%] after:w-[1px] after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] after:content-[''] md:block dark:before:bg-[linear-gradient(180deg,_#1b232f_0%,#13171E_100%)] dark:after:bg-[linear-gradient(180deg,_#1b232f_0%,#13171E_100%)]">
          <RevealAnimation delay={1} offset={0}>
            <div className="bg-stroke-1 dark:bg-stroke-5 before:bg-stroke-1 dark:before:bg-stroke-5 before:ring-background-2 dark:before:ring-background-5 after:bg-stroke-1 dark:after:bg-stroke-5 after:ring-background-2 dark:after:ring-background-5 absolute top-[6.5%] h-[1px] w-[100%] before:absolute before:-top-1 before:left-[5.8%] before:z-20 before:h-2 before:w-2 before:rotate-45 before:ring-8 before:content-[''] after:absolute after:-top-1 after:right-[5.8%] after:z-20 after:h-2 after:w-2 after:rotate-[-45deg] after:ring-8 after:content-['']" />
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
