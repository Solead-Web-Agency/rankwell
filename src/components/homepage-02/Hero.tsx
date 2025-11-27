'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import HeroBackgroundVideo from './HeroBackgroundVideo';
import HeroContent from './HeroContent';
import HeroShapes from './HeroShapes';
import HeroVideo from './HeroVideo';

const Hero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white pb-14 sm:pb-0 md:-mb-10 lg:-mb-12"
      id="scene">
      {/* <!-- Video Background --> */}
      <HeroBackgroundVideo />
      <div className="relative z-10 pt-[160px] pb-[140px] max-[641px]:pb-16 max-[426px]:pb-10 sm:pt-[280px]">
        <HeroShapes />
        {/* <!-- Content --> */}
        <HeroContent />
      </div>
      <HeroVideo />
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
