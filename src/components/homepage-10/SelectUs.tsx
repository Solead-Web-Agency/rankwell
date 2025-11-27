import { ProjectAchievementCheckIcon, ProjectSatisfiedClientsIcon, ProjectTeamMembersIcon } from '@/icons';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const SelectUs = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-5 mb-10 md:mb-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Reasons to select us</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Unmatched security performance</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[744px] mx-auto">
                This level of security is essential for businesses handling confidential information, financial
                transactions, and personal user data. With continuous monitoring and ai-driven threat analysis.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="flex md:flex-row flex-col py-6 md:px-0 px-6 bg-secondary dark:bg-background-6 rounded-[20px]">
          <RevealAnimation delay={0.4}>
            <div className="py-6 space-y-6 flex-1 md:border-r border-r-accent/20 dark:border-r-stroke-8 md:border-b-0 border-b border-b-accent/60 dark:border-b-stroke-8">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-yellow rounded-full mx-auto flex items-center justify-center">
                <ProjectAchievementCheckIcon />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center gap-0.5 justify-center lg:text-heading-6 text-tagline-1 font-normal">
                  <NumberAnimation number={99} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                    99
                  </NumberAnimation>
                  % malware protection rate
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Defend against infections, data breaches, and cyber-attacks.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="py-6 space-y-6 flex-1 md:border-r border-r-accent/20 dark:border-r-stroke-8 md:border-b-0 border-b border-b-accent/60 dark:border-b-stroke-8">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-cyan rounded-full mx-auto flex items-center justify-center">
                <ProjectTeamMembersIcon />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center gap-0.5 justify-center lg:text-heading-6 text-tagline-1 font-normal">
                  <NumberAnimation number={100} speed={1000} interval={100} rooms={3} heightSpaceRatio={2.4}>
                    100
                  </NumberAnimation>
                  % software integrity
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Shield systems from the most advanced cyber threats.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="py-6 space-y-6 flex-1">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-ns-red rounded-full mx-auto flex items-center justify-center">
                <ProjectSatisfiedClientsIcon />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-white flex items-center gap-0.5 justify-center lg:text-heading-6 text-tagline-1 font-normal">
                  <NumberAnimation number={5} speed={1000} interval={100} rooms={1} heightSpaceRatio={2.4}>
                    5
                  </NumberAnimation>
                  X Lighter system footprint
                </h3>
                <p className="text-accent/60 max-w-[274px] mx-auto">
                  Ensuring seamless operations without slowing down devices.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SelectUs;
