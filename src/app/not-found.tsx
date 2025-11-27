import RevealAnimation from '@/components/animation/RevealAnimation';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import LinkButton from '@/components/ui/button/LinkButton';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';
import gradient6 from '../../public/images/gradient/gradient-6.png';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - NextSaaS',
};

const NotFound = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <section className="pt-28 md:pt-36 lg:pt-44 xl:pt-60 pb-20 md:pb-28 lg:pb-40 xl:pb-52 section-reveal">
          <div className="main-container">
            <RevealAnimation delay={0.1}>
              <div className="bg-background-3 dark:bg-background-5 rounded-4xl border-[10px] border-white dark:border-background-9 relative overflow-hidden flex flex-col justify-center items-center py-10 md:py-20 lg:py-[100px] text-center pr-2.5">
                <RevealAnimation delay={0.2} direction="right" offset={200}>
                  <figure className="hero-gradient-2 absolute -top-[45%] sm:-top-[65%] -right-[68%] sm:-right-[48%] w-full -rotate-[68deg] h-full opacity-70 -z-0 pointer-events-none select-none">
                    <Image src={gradient6} alt="gradient" className="rotate-180" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <h1 className="text-[80px] md:text-[120px] lg:!text-[180px] xl:!text-[200px] font-medium leading-[1.1]">
                    404
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <h2 className="pt-6 pb-3">
                    Opps! <br />
                    Lost in the page?
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <p className="mb-10 md:mb-14">Don’t worry, we’ll help you find your way</p>
                </RevealAnimation>
                <RevealAnimation delay={0.6} instant>
                  <div>
                    <LinkButton href="/" className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent">
                      Go to Home
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </RevealAnimation>
          </div>
        </section>
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default NotFound;
