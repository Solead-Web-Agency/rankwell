import { businessAchievements } from '@/data/achievements';
import OurAchievements from '../shared/OurAchievements';

const AchievementWrapper = () => {
  return (
    <section className="pb-24 pt-16 md:pb-28 md:pt-20 lg:pb-36 lg:pt-[90px] xl:pb-[200px] xl:pt-[100px] bg-background-2 dark:bg-background-8">
      <div className="main-container">
        <div className="text-center mb-14 md:mb-[70px] space-y-3">
          <h2 className="md:max-w-5xl mx-auto">Powering the most successful businesses</h2>
          <p className="md:max-w-[884px] mx-auto">
            Deliver fast, seamless interactions with our AI-powered messaging platform—instant support, automated
            responses, and reduced wait times for meaningful engagement.
          </p>
        </div>
        <OurAchievements achievements={businessAchievements} instant={false} />
      </div>
    </section>
  );
};

AchievementWrapper.displayName = 'AchievementWrapper';
export default AchievementWrapper;
