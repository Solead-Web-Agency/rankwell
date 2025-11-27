import ClientsMarquee from '@/components/homepage-09/ClientsMarquee';
import Features from '@/components/homepage-09/Features';
import Hero from '@/components/homepage-09/Hero';
import Pricing from '@/components/homepage-09/Pricing';
import Reviews from '@/components/homepage-09/Reviews';
import SelectUs from '@/components/homepage-09/SelectUs';
import Steps from '@/components/homepage-09/Steps';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import OurAchievements from '@/components/shared/OurAchievements';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cloud Based Software - NextSaaS',
};
const HomePage09 = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 dark:border-stroke-6 backdrop-blur-[25px] bg-accent/60 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <ClientsMarquee />
        <Features />
        <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
          <div className="main-container">
            <OurAchievements achievements={projectAchievements} className="dark:bg-background-8" instant={true} />
          </div>
        </section>
        <SelectUs />
        <Pricing />
        <Steps />
        <Reviews />
        <CTAV1
          className="py-[50px] md:py-20 lg:py-28 dark:bg-background-6 bg-secondary"
          badgeClass="badge badge-blur"
          badgeText="Get started"
          ctaHeading="Ready to start earning with NextSaaS?"
          headingClass="text-accent text-heading-5 lg:text-heading-2"
          description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
          descriptionClass="text-accent/60 max-w-[534px] mx-auto xl:mx-0"
          ctaBtnText="Get started"
          inputFieldClass="px-[18px]  border-0 shadow-1 h-12 py-3 dark:text-accent placeholder:text-accent/40 rounded-full lg:max-w-[340px] md:w-[71%] w-[85%] dark:border-stroke-7 dark:placeholder:text-accent/60 focus:outline-1 focus:outline-primary-600 dark:focus:outline-primary-400 bg-accent/5 text-accent font-normal placeholder:font-normal"
          btnClass="btn-primary h-12 w-[85%] max-[376px]:w-[97%%] md:w-[28%] lg:w-auto"
          checkListVariant="gray"
          listTextClass="text-tagline-2 text-accent dark:text-accent/60"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default HomePage09;
