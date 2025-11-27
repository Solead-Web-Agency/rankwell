import { projectAchievements } from '@/data/achievements';
import RevealAnimation from '../animation/RevealAnimation';
import OurAchievements from '../shared/OurAchievements';

const Experience = () => {
  return (
    <section className="lg:py-[100px] py-[50px] md:py-[75px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Over a decade of experience in this field.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[798px] md:w-full mx-auto">
                With more than ten years of hands-on experience, we&apos;ve built a strong foundation of knowledge,
                skill, and trust in our industry. Over the years, we&apos;ve navigated evolving trends, embraced new
                technologies, and
              </p>
            </RevealAnimation>
          </div>

          <OurAchievements achievements={projectAchievements} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
