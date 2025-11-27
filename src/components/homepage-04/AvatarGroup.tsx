import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const AvatarGroup = () => {
  return (
    <>
      <div className="avatar-group-images mt-7 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-4 xl:justify-start">
        <div className="flex -space-x-3.5">
          <RevealAnimation delay={0.5} direction="right" offset={50}>
            <Image
              className="bg-ns-yellow inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
              src={avatar1}
              alt="Avatar 1"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <Image
              className="bg-ns-red inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
              src={avatar2}
              alt="Avatar 2"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="right" offset={50}>
            <Image
              className="bg-ns-green inline-block size-12 rounded-full ring-2 ring-white dark:ring-black"
              src={avatar3}
              alt="Avatar 3"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.8} direction="right" offset={50}>
            <div className="text-secondary/80 bg-ns-cyan text-tagline-3 dark:text-accent/80 inline-flex size-12 items-center justify-center rounded-full font-medium opacity-0 ring-2 ring-white dark:ring-black">
              99+
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.9} direction="right" offset={50}>
          <div className="text-left max-[375px]:text-center">
            <p className="text-tagline-2 text-secondary dark:text-accent text-left font-medium">Trusted by 20k+</p>
            <p className="text-tagline-3 dark:text-accent/60">Customers across the globe</p>
          </div>
        </RevealAnimation>
      </div>
    </>
  );
};

export default AvatarGroup;
