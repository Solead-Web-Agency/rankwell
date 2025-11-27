'use client';

import { TabProvider } from '../../context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import AboutTabContent from './AboutTabContent';
import AboutTabList from './AboutTabList';

const About = () => {
  return (
    <RevealAnimation delay={0.3}>
      <section className="dark:bg-background-6 overflow-hidden bg-white pt-20 pb-14 sm:pb-36 lg:pt-[88px] xl:pt-[100px] xl:pb-[176px]">
        <div className="main-container">
          <TabProvider defaultValue={0}>
            <AboutTabList />
            <AboutTabContent />
          </TabProvider>
        </div>
      </section>
    </RevealAnimation>
  );
};
About.displayName = 'About';
export default About;
