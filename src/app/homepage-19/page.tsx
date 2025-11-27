import Steps from '@/components/homepage-16/Steps';
import Blog from '@/components/homepage-19/Blog';
import CTA from '@/components/homepage-19/CTA';
import Clients from '@/components/homepage-19/Clients';
import DownloadApp from '@/components/homepage-19/DownloadApp';
import GetStarted from '@/components/homepage-19/GetStarted';
import Hero from '@/components/homepage-19/Hero';
import MeetOurTeam from '@/components/homepage-19/MeetOurTeam';
import Solutions from '@/components/homepage-19/Solutions';
import Tools from '@/components/homepage-19/Tools';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Smart Solutions - NextSaaS',
};
const HomePage19 = () => {
  return (
    <>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <MeetOurTeam />
        <Solutions />
        <Clients />
        <Tools />
        <GetStarted />
        <DownloadApp />
        <Steps />
        <Blog />
        <CTA />
      </main>
      <FooterThree className="-mt-8 md:-mt-10" />
    </>
  );
};

export default HomePage19;
