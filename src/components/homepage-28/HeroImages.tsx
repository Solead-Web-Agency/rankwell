import heroImg01Dark from '@public/images/home-page-28/hero-img-01-dark.png';
import heroImg01 from '@public/images/home-page-28/hero-img-01.png';
import heroImg02Dark from '@public/images/home-page-28/hero-img-02-dark.png';
import heroImg02 from '@public/images/home-page-28/hero-img-02.png';
import heroImg03 from '@public/images/home-page-28/hero-img-03.svg';
import heroImg04Dark from '@public/images/home-page-28/hero-img-04-dark.png';
import heroImg04 from '@public/images/home-page-28/hero-img-04.png';
import heroImg05Dark from '@public/images/home-page-28/hero-img-05-dark.png';
import heroImg05 from '@public/images/home-page-28/hero-img-05.png';
import heroImg06Dark from '@public/images/home-page-28/hero-img-06-dark.png';
import heroImg06 from '@public/images/home-page-28/hero-img-06.png';
import heroImg07Dark from '@public/images/home-page-28/hero-img-07-dark.png';
import heroImg07 from '@public/images/home-page-28/hero-img-07.png';
import heroImg08Dark from '@public/images/home-page-28/hero-img-08-dark.png';
import heroImg08 from '@public/images/home-page-28/hero-img-08.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const HeroImages = () => {
  return (
    <div className="relative top-4 sm:top-0">
      {/* no code  */}
      <RevealAnimation delay={0.1} duration={2} useSpring={true}>
        <figure className="xl:w-[198px] 2xl:w-[250px] w-[168px] absolute xl:top-[-104px] top-[-259px] lg:top-[-57px] right-[-297px] lg:right-[325px] xl:right-[400px] hidden md:block rotate-[8deg] overflow-hidden rounded-2xl">
          <Image src={heroImg01} alt="CRM dashboard visualization" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg01Dark}
            alt="CRM dashboard visualization"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* badge  */}
      <RevealAnimation delay={0.2} duration={2} useSpring={true}>
        <figure className="w-[89px] md:w-[103px] overflow-hidden absolute top-[-376px] md:top-[-381px] lg:top-[-194px] right-[-34px] md:right-[-49px] lg:right-[418px] lg:rotate-[26deg]">
          <Image src={heroImg03} alt="CRM feature card" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      {/* assign  */}
      <RevealAnimation delay={0.3} duration={2} useSpring={true}>
        <figure className="w-[135.5px] hidden md:block xl:w-[158.5px] overflow-hidden rounded-2xl rotate-[21.709deg] absolute top-[-245px] lg:top-[-175px] xl:right-[236px] right-[131px] lg:right-[221px]">
          <Image src={heroImg04} alt="CRM analytics view" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg04Dark}
            alt="CRM analytics view"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* balance  */}
      <RevealAnimation delay={0.4} duration={2} useSpring={true}>
        <figure className="w-[202px] lg:w-[309px] overflow-hidden rounded-2xl md:rotate-[-13.54deg] lg:rotate-[-26.54deg] absolute top-[-296px] md:top-[-370px] lg:top-[-385px] lg:right-[104px] right-[-22px] md:right-[117px] hidden sm:block">
          <Image src={heroImg02} alt="CRM customer profile" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg02Dark}
            alt="CRM customer profile"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* profit  */}
      <RevealAnimation delay={0.5} duration={2} useSpring={true}>
        <figure className="w-[195px] shadow-8 z-10 overflow-hidden rounded-2xl absolute md:rotate-[4.292deg] lg:rotate-[-21.708deg] top-[-301px] md:top-[-379px] lg:top-[-168px] xl:top-[-157px] right-[-257px] md:right-[-313px] lg:right-2 hidden sm:block">
          <Image src={heroImg05} alt="CRM data visualization" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg05Dark}
            alt="CRM data visualization"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* growth  */}
      <RevealAnimation delay={0.6} duration={2} useSpring={true}>
        <figure className="2xl:w-[333px] xl:w-[300px] w-[188px] lg:w-[250px] overflow-hidden rounded-2xl absolute md:rotate-[-11.506deg] top-[-154px] md:top-[-113px] right-[-7px] md:right-[103px] lg:top-[86px] lg:right-[234px] xl:right-[256px] lg:z-30 hidden sm:block">
          <Image src={heroImg06} alt="CRM sales pipeline view" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg06Dark}
            alt="CRM sales pipeline view"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* balances */}
      <RevealAnimation delay={0.7} duration={2} useSpring={true}>
        <figure className="w-[194px] md:w-[179px] overflow-hidden rounded-2xl absolute top-[-325px] md:top-[-320px] lg:-top-4 right-[-99px] lg:right-[51px] lg:rotate-[20.435deg]">
          <Image src={heroImg07} alt="CRM activity feed" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg07Dark}
            alt="CRM activity feed"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
      {/* total saving  */}
      <RevealAnimation delay={0.8} duration={2} useSpring={true}>
        <figure className="w-[215px] lg:w-[309px] overflow-hidden rounded-2xl absolute md:rotate-[14.66deg] top-[-144px] md:top-[-118px] lg:top-[267px] lg:right-[110px] right-[-299px] md:right-[-322px] hidden sm:block">
          <Image src={heroImg08} alt="CRM reporting interface" className="size-full object-cover dark:hidden" />
          <Image
            src={heroImg08Dark}
            alt="CRM reporting interface"
            className="size-full object-cover hidden dark:inline-block"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
