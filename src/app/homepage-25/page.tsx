import Faq from '@/components/homepage-01/Faq';
import AchievementWrapper from '@/components/homepage-25/AchievementWrapper';
import Feature from '@/components/homepage-25/Feature';
import FeatureHighlights from '@/components/homepage-25/FeatureHighlights';
import FeatureV2 from '@/components/homepage-25/FeatureV2';
import Hero from '@/components/homepage-25/Hero';
import IndustryCategories from '@/components/homepage-25/IndustryCategories';
import Integration from '@/components/homepage-25/Integration';
import Testimonial from '@/components/homepage-25/Testimonial';
import CTAV3 from '@/components/shared/cta/CTAV3';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Property Management software - NextSaaS',
};
const HomePage25 = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:bg-background-5"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5 overflow-hidden">
        <Hero />
        <AchievementWrapper />
        <FeatureHighlights />
        <Feature />
        <FeatureV2 />
        <Integration />
        <IndustryCategories />
        <Testimonial />
        <Faq />
        <CTAV3
          className='"pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px] bg-white dark:bg-background-8'
          badgeText="Journal"
          badgeClass="!badge-green"
          ctaHeading="Start selling smarter today"
          ctaHeadingClass="text-secondary dark:text-accent"
          description="Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec tellus cras ornare."
          descriptionClass="max-w-[534px] mx-auto"
          inputFieldClass="px-[18px] h-12 outline-none py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/50 w-[85%] md:w-[340px] placeholder:font-normal font-normal"
          btnClass=" hover:btn-secondary dark:hover:btn-accent btn-primary"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree className="relative border-t border-stroke-2 dark:border-t-0 !bg-background-2 dark:!bg-background-5" />
    </>
  );
};

export default HomePage25;
