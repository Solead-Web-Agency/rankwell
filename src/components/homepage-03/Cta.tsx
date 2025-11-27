import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const ctaFeatures = [
  {
    id: 1,
    text: 'No Credit Card Required',
    delay: '0.4',
  },
  {
    id: 2,
    text: 'Free For 30 Day Trial.',
    delay: '0.5',
  },
  {
    id: 3,
    text: 'Money Back Guaranty.',
    delay: '0.6',
  },
];
const Cta = ({ className, buttonTopSpacing }: { className?: string; buttonTopSpacing?: string }) => {
  return (
    <section
      className={cn('pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]', className)}>
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-3">
              Experience a free trial today and
              <br className="hidden lg:block" />
              watch your <span className="text-primary-500">business grow.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto mb-8 lg:max-w-[390px]">
              Sign up today to enhance your customer support with our tools and solutions.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div>
              <Link
                href="/pricing-01"
                className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md text-tagline-2 mx-auto block w-full text-center md:mx-0 md:inline-block md:w-auto">
                Get started
              </Link>
            </div>
          </RevealAnimation>
          <ul className={cn('flex flex-wrap items-center justify-center gap-[42px] max-lg:gap-5', buttonTopSpacing)}>
            {ctaFeatures.map((feature) => (
              <RevealAnimation key={feature.id} delay={Number(feature.delay)}>
                <li className="flex items-center gap-3">
                  <span className="bg-secondary dark:bg-accent/10 flex size-[18px] items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} viewBox="0 0 10 8" fill="none">
                      <path
                        d="M4.31661 7.25605L9.74905 1.92144C10.0836 1.5959 10.0836 1.0697 9.74905 0.744158C9.41446 0.418614 8.87363 0.418614 8.53904 0.744158L3.7116 5.49012L1.46096 3.28807C1.12636 2.96253 0.585538 2.96253 0.250945 3.28807C-0.0836483 3.61362 -0.0836483 4.13982 0.250945 4.46536L3.1066 7.25605C3.27347 7.41841 3.49253 7.5 3.7116 7.5C3.93067 7.5 4.14974 7.41841 4.31661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>{feature.text}</p>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
Cta.displayName = 'Cta';
export default Cta;
