import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroAvatar = () => {
  return (
    <div className="relative z-[20]">
      <div className="flex items-center justify-center gap-4 md:mb-[100px] mb-[50px] max-[400px]:flex-col flex-row">
        <div className="flex -space-x-3.5">
          <RevealAnimation delay={0.3} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 max-[400px]:size-10 rounded-full ring-2 ring-white dark:ring-black bg-[#98AAC3]"
                src={avatar1}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 max-[400px]:size-10 rounded-full ring-2 ring-white dark:ring-black bg-[#98AAC3]"
                src={avatar2}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={50}>
            <figure>
              <Image
                className="inline-block size-12 max-[400px]:size-10 rounded-full ring-2 ring-white dark:ring-black bg-[#98AAC3]"
                src={avatar3}
                alt="Avatar 1"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <div className="inline-flex items-center justify-center size-12 max-[400px]:size-10 rounded-full ring-2 ring-white dark:ring-black text-secondary/80 dark:text-accent/80 bg-white dark:bg-black text-tagline-3 font-medium">
              99+
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.7} direction="left" offset={50}>
          <div className="max-[400px]:text-center text-left">
            <p className="text-tagline-2 font-medium text-accent">Trusted by 20k+</p>
            <p className="text-tagline-3 font-normal text-accent/60">Customers across the globe</p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default HeroAvatar;
