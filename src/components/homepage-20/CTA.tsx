import gradient15 from '@public/images/gradient/gradient-15.png';
import gradient50 from '@public/images/gradient/gradient-50.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="py-[100px] md:py-[150px] bg-background-3 dark:bg-background-7" aria-label="Call to Action">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white dark:bg-background-6 py-[76px] rounded-[30px] relative overflow-hidden">
          {/* left bg  */}
          <RevealAnimation delay={0.7} direction="left" offset={240}>
            <figure
              className="absolute bottom-[-103px] left-[-120px] max-w-[230px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[386px] w-full select-none pointer-events-none"
              role="presentation">
              <Image src={gradient15} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
          <div className="main-container">
            <div className="space-y-6">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-primary-light">Let&apos;s connect</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2>Ready to grow smarter?</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="max-w-[558px] md:w-full mx-auto">
                      Let&apos;s make your marketing budget work harder—not bigger. Book your strategy call today and
                      take the first step toward predictable growth.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.5}>
                <div className="text-center cta-button">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent btn-lg xl:btn-xl">
                    Book your free strategy call
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* right bg  */}
          <RevealAnimation delay={0.7} direction="right" offset={240}>
            <figure
              className="absolute top-[-152px] md:top-[-195px] right-[-104px] md:right-[-188px] max-w-[290px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[535px] w-full select-none pointer-events-none"
              role="presentation">
              <Image src={gradient50} className="size-full bg-cover" alt="Decorative background shape" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
