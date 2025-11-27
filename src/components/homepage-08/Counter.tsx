import { ProjectAchievementCheckIcon, ProjectSatisfiedClientsIcon, ProjectTeamMembersIcon } from '@/icons';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
        <div className="main-container">
          <div className="md:flex py-6 bg-secondary dark:bg-[#0E0E0E] rounded-[20px]">
            <div className="py-6 space-y-6 flex-1 md:border-r md:border-r-accent/20 dark:border-r-secondary/20 max-md:border-b border-b-accent/20 dark:border-b-accent/10">
              <div className="w-20 h-[52px] bg-ns-yellow rounded-full mx-auto flex items-center justify-center">
                <ProjectAchievementCheckIcon />
              </div>
              <div>
                <p className="text-white text-center text-heading-6 font-normal flex justify-center items-center g">
                  <NumberAnimation number={60} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                    60
                  </NumberAnimation>
                  % Project completed
                </p>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1 md:border-r md:border-r-accent/20 dark:border-r-secondary/20 max-md:border-b border-b-accent/20 dark:border-b-accent/10">
              <div className="w-20 h-[52px] bg-ns-green rounded-full mx-auto flex items-center justify-center">
                <ProjectTeamMembersIcon />
              </div>
              <div className="text-center">
                <p className="text-white text-heading-6 font-normal flex justify-center items-center gap-1.5">
                  <NumberAnimation number={25} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                    25
                  </NumberAnimation>
                  Team members
                </p>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1">
              <div className="w-20 h-[52px] bg-ns-cyan rounded-full mx-auto flex items-center justify-center">
                <ProjectSatisfiedClientsIcon />
              </div>
              <div className="text-center">
                <p className="text-white text-heading-6 font-normal flex justify-center items-center gap-1.5">
                  <NumberAnimation number={250} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                    250
                  </NumberAnimation>
                  Satisfied clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Counter;
