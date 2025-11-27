import gradient13 from '@public/images/gradient/gradient-13.png';
import gradient8 from '@public/images/gradient/gradient-8.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTAV4 from '../shared/cta/CTAV4';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] bg-background-2 dark:bg-background-5 relative overflow-hidden z-10">
      <CTAV4
        badgeText="Get started"
        ctaHeading="Let’s make something great"
        ctaDescription="Have a project in mind, or just want to say hello? I’m always open to discussing new ideas, partnerships, or opportunities to collaborate."
        ctaBtnText="Get started"
        inputFieldClass="px-[18px] h-12 outline-none py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 sm:min-w-[340px] sm:max-w-[340px] w-full bg-accent dark:bg-background-6 dark:border-stroke-7 dark:placeholder:text-accent/60 block focus:ring-[0.7px] focus-within:ring-primary-500 font-normal placeholder:font-normal"
        ctaCheckListData={[
          { id: '1', text: 'Freelance jobs' },
          { id: '2', text: 'Based in Brooklyn, working globally' },
        ]}
      />
      {/* cta bg img  */}
      <div>
        <RevealAnimation delay={0.6} direction="up" offset={100}>
          <figure className="lg:w-[584px] w-[200px] md:w-[300px] lg:h-[544px] h-[300px] absolute lg:-top-[60%] -top-[33%] md:-top-[35%] -left-[3%] lg:-left-[13%] xl:-left-[10%] xl:-top-[50%] -z-10 pointer-events-none select-none">
            <Image src={gradient8} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.6} direction="right" offset={100}>
          <figure className="lg:w-[409px] w-[200px] lg:h-[435px] h-[200px] absolute lg:-bottom-[23%] -bottom-[10%] lg:-right-[7%] -right-[5%] -z-10 pointer-events-none select-none">
            <Image src={gradient13} alt="gradient" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
