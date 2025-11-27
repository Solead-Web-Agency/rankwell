import About from '@/components/homepage-15/About';
import Blog from '@/components/homepage-15/Blog';
import CTA from '@/components/homepage-15/CTA';
import Hero from '@/components/homepage-15/Hero';
import Process from '@/components/homepage-15/Process';
import Projects from '@/components/homepage-15/Projects';
import Services from '@/components/homepage-15/Services';
import Testimonial from '@/components/homepage-15/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Creative Portfolio - NextSaaS',
};

const Homepage15 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] top-5 dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <FooterOne className="dark:bg-background-8" />
    </Fragment>
  );
};

export default Homepage15;
