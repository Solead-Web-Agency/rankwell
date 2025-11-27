import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const HeroFormAndAvatar = () => {
  return (
    <div className="space-y-8">
      {/* cta form  */}
      <RevealAnimation delay={0.4}>
        <form action="#" method="post" className="flex items-center justify-start flex-col md:flex-row gap-3">
          <input
            type="email"
            name="email"
            id="userEmail"
            placeholder="Enter your email"
            required={true}
            className="px-[18px] h-[52px] text-accent focus:outline-none py-3 placeholder:text-accent/80 rounded-full border border-primary-300 bg-primary-400 w-full md:w-[80%] lg:max-w-[296px] xl:max-w-[340px] placeholder:font-normal font-normal"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn btn-md hover:btn-secondary btn-white w-full md:w-auto h-[52px] xl:!hidden"
            aria-label="Get started with our CRM">
            <span>Get started</span>
          </button>
          <button
            type="submit"
            className="btn btn-xl btn-white-v2 hover:btn-primary hover:border-primary-300 h-[52px] xl:!inline-block !hidden"
            aria-label="Get started with our CRM">
            <span>Get started</span>
          </button>
        </form>
      </RevealAnimation>
      {/* avatar group  */}

      <div className="flex gap-4 items-center">
        <div className="flex -space-x-3" role="group">
          <RevealAnimation delay={0.5}>
            <Image
              className="inline-block size-9 rounded-full ring-2 ring-primary-500 bg-ns-yellow"
              src={avatar1Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <Image
              className="inline-block size-9 rounded-full ring-2 ring-primary-500 bg-ns-red"
              src={avatar2Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <Image
              className="inline-block size-9 rounded-full ring-2 ring-primary-500 bg-ns-green"
              src={avatar3Img}
              alt="Customer avatar"
            />
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div
              className="inline-flex items-center justify-center size-9 rounded-full ring-2 ring-primary-500 text-accent bg-primary-400 text-tagline-3 font-medium"
              aria-label="More than 99 additional customers">
              99+
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.9}>
          <div>
            <p className="text-tagline-2 font-medium text-accent">Trusted by 20k+</p>
            <p className="text-tagline-3 text-accent/60">Customers Across the globe</p>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

HeroFormAndAvatar.displayName = 'HeroFormAndAvatar';
export default HeroFormAndAvatar;
