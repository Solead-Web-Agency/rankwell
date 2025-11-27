import About from '@/components/homepage-02/About';
import Feature from '@/components/homepage-02/Feature';
import Hero from '@/components/homepage-02/Hero';
import Integration from '@/components/homepage-02/Integration';
import Pricing from '@/components/homepage-02/Pricing';
import Work from '@/components/homepage-02/Work';
import FooterTwo from '@/components/shared/footer/FooterTwo';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import VideoModal from '@/components/shared/VideoModal';
import { ModalProvider } from '@/context/ModalContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Software - NextSaaS',
};

const HomePage02 = () => {
  return (
    <ModalProvider>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] dark:bg-background-7 dark:border dark:border-stroke-7 max-[400px]:max-w-[340px]"
        btnClassName="btn-secondary dark:btn-accent dark:hover:btn-white-dark hover:btn-white"
        megaMenuColor="dark:bg-background-7"
      />
      <main>
        <Hero />
        <About />
        <Work />
        <Feature />
        <Pricing />
        <Integration />
        <ReviewsV1 badgeColor="badge-yellow" background="dark:bg-background-6 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]" />
        <VideoModal />
      </main>
      <FooterTwo />
    </ModalProvider>
  );
};
HomePage02.displayName = 'Homepage02';
export default HomePage02;
