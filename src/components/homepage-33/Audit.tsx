import auditImage from '@public/images/home-page-33/audit-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Audit = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-x-[165px]">
            <div className="space-y-14">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-secondary dark:text-accent">Get a free audit with a personalized plan.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60">
                    We&apos;ll analyze your current performance and show you exactly how we&apos;d enhance it—before you
                    spend a dime.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md">
                    Claim my free audit
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="bg-[#D9D9D9] rounded-2xl overflow-hidden">
                <Image src={auditImage} alt="audit image" className="size-full object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Audit;
