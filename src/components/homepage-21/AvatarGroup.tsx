import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const AvatarGroup = () => {
  return (
    <div className="flex -space-x-3">
      <RevealAnimation delay={0.4}>
        <Image
          className="inline-block size-9 rounded-full ring-2 ring-white dark:ring-black bg-ns-yellow"
          src={avatar1}
          alt="Avatar 1"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <Image
          className="inline-block size-9 rounded-full ring-2 ring-white dark:ring-black bg-ns-red"
          src={avatar2}
          alt="Avatar 2"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <Image
          className="inline-block size-9 rounded-full ring-2 ring-white dark:ring-black bg-ns-green"
          src={avatar3}
          alt="Avatar 3"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <div className="inline-flex items-center justify-center size-9 rounded-full ring-2 ring-white dark:ring-black text-secondary/80 bg-ns-cyan text-tagline-3 font-medium cursor-pointer">
          99+
        </div>
      </RevealAnimation>
    </div>
  );
};

export default AvatarGroup;
