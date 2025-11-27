import OurMission from '@/components/aboutpage-01/OurMission';
import VisionStatement from '@/components/aboutpage-01/VisionStatement';
import WhyChooseUs from '@/components/aboutpage-01/WhyChooseUs';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Team from '@/components/homepage-05/Team';
import CTA from '@/components/homepage-08/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import OurAchievements from '@/components/shared/OurAchievements';
import PageHero from '@/components/shared/PageHero';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AboutPage-01 - NextSaaS',
};

const AboutPage01 = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          className="bg-background-3 dark:bg-background-7"
          title="About us 1"
          heading="About us"
          link="/about-01"
        />
        <VisionStatement />
        <OurMission />
        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="main-container">
            <div className="mb-14 md:mb-[70px] space-y-3 text-center">
              <RevealAnimation delay={0.2}>
                <h2>Over a decade of experience in this field.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[744px] mx-auto">
                  With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill,
                  and trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies,
                  and
                </p>
              </RevealAnimation>
            </div>
            <OurAchievements achievements={projectAchievements} />
          </div>
        </section>
        <WhyChooseUs />
        <Team className="bg-background-3 dark:bg-background-7 py-[100px]" badgeColor="badge-cyan" />
        <ReviewsV3
          badgeText="Customer Success"
          buttonText="View all reviews"
          badgeColor="badge-cyan"
          title="Real people. Real results."
          description="“Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership.”"
        />
        <CTA />
      </main>
      <FooterThree />
    </>
  );
};
AboutPage01.displayName = 'AboutPage01';
export default AboutPage01;
