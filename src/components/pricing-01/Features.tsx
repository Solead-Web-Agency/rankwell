import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

{
  /* =========================
Features section
===========================*/
}
const Features = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-5 mb-[70px] text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Reasons to select us</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Unmatched security performance</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[744px] mx-auto">
                This level of security is essential for businesses handling confidential information, financial
                transactions, and personal user data. With continuous monitoring and ai-driven threat analysis.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row py-6 bg-secondary dark:bg-background-8 rounded-[20px]">
            <div className="py-6 space-y-6 flex-1 max-md:border-b md:border-r max-md:border-b-accent/20 md:border-r-accent/20 dark:md:border-r-stroke-7 dark:max-md:border-b-stroke-7">
              <figure className="flex items-center justify-center bg-ns-yellow rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={checkCircle} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center justify-center text-heading-6 font-normal">
                  <NumberAnimation
                    number={99}
                    speed={1000}
                    data-speed={1000}
                    interval={180}
                    rooms={2}
                    heightSpaceRatio={2.5}>
                    99
                  </NumberAnimation>
                  % malware protection rate
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Defend against infections, data breaches, and cyber-attacks.
                </p>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1 max-md:border-b md:border-r max-md:border-b-accent/20 md:border-r-accent/20 dark:md:border-r-stroke-7 dark:max-md:border-b-stroke-7">
              <figure className="flex items-center justify-center bg-ns-cyan rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={users} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center justify-center text-heading-6 font-normal">
                  <NumberAnimation number={100} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.5}>
                    100
                  </NumberAnimation>
                  % software integrity
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Shield systems from the most advanced cyber threats.
                </p>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1">
              <figure className="flex items-center justify-center bg-ns-red rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={thumbsUp} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center justify-center text-heading-6 font-normal">
                  <NumberAnimation number={5} speed={1000} interval={180} rooms={1} heightSpaceRatio={2.5}>
                    5
                  </NumberAnimation>
                  X Lighter system footprint
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Ensuring seamless operations without slowing down devices.
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Features;
