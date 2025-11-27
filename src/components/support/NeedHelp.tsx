import support from '@public/images/support-page/support.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NeedHelp = () => {
  return (
    <section className="pb-[100px] lg:pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-14 mb-[70px]">
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Need help with NextSaaS?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Welcome to the NextSaaS Support Center! We&apos;re ready to assist you if you have an issue or a
                question.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.5}>
            <div>
              <LinkButton
                href="/contact-us"
                className="btn btn-xl hover:btn-secondary dark:hover:btn-accent btn-primary">
                Get help
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6} instant>
          <div className="section-reveal">
            <figure className="rounded-[20px] overflow-hidden">
              <Image src={support} alt="support" />
            </figure>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default NeedHelp;
