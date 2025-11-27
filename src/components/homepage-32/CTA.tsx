import ctaImage from '@public/images/home-page-32/cta.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface CTAFeature {
  id: number;
  text: string;
}

const ctaFeatures: CTAFeature[] = [
  {
    id: 1,
    text: 'Handoff clean code or embed it into your product',
  },
  {
    id: 2,
    text: 'Control branding, user access, and sharing',
  },
  {
    id: 3,
    text: 'Go live in minutes',
  },
];

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[150px] md:py-[100px] py-20">
        <div className="main-container">
          <div className="grid grid-cols-12 md:gap-16 gap-y-16 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="space-y-8 md:mb-14 mb-11">
                <RevealAnimation delay={0.1}>
                  <h2 className="lg:max-w-[595px] max-w-[400px]">Build, launch, and publish to the web fast</h2>
                </RevealAnimation>
                <ul className="space-y-2">
                  {ctaFeatures.map((feature, index) => (
                    <RevealAnimation key={feature.id} delay={0.2 + index * 0.1}>
                      <li className="flex items-center gap-3">
                        <span className="bg-secondary rounded-full size-[18px] flex items-center justify-center dark:bg-accent shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M4.31661 7.00605L9.74905 1.67144C10.0836 1.3459 10.0836 0.819702 9.74905 0.494158C9.41446 0.168614 8.87363 0.168614 8.53904 0.494158L3.7116 5.24012L1.46096 3.03807C1.12636 2.71253 0.585538 2.71253 0.250945 3.03807C-0.0836483 3.36362 -0.0836483 3.88982 0.250945 4.21536L3.1066 7.00605C3.27347 7.16841 3.49253 7.25 3.7116 7.25C3.93067 7.25 4.14974 7.16841 4.31661 7.00605Z"
                              className="fill-white dark:fill-secondary"
                            />
                          </svg>
                        </span>
                        <span className="sm:text-tagline-1 text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                          {feature.text}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-secondary dark:btn-accent md:btn-xl btn-lg hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
                    Launch your dashboard
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6">
              <RevealAnimation delay={0.3} direction="left">
                <div>
                  <figure className="lg:max-w-[597px] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={ctaImage}
                      alt="Build, launch, and publish dashboard"
                      className="w-full h-full object-cover"
                      width={597}
                      height={400}
                    />
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
