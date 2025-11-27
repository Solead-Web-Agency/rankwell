import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';

import testimonials from '@/data/json/testimonials/testimonials.json';
import { cn } from '@/utils/cn';
import Marquee from 'react-fast-marquee';

interface ReviewsV2Props {
  badgeColor: string;
  sectionSpacingClass: string;
}

const ReviewsV2 = ({ badgeColor, sectionSpacingClass }: ReviewsV2Props) => {
  return (
    <section className={cn(sectionSpacingClass)}>
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className={cn('badge', badgeColor)}>Reviews</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Hear from our customers about their experiences with us</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p>
                Hear from our customers about their experiences with us and discover the impact we&apos;ve made through
                their own words. From seamless onboarding to exceptional support and tangible results
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[10%] bg-gradient-to-r to-transparent " />
          <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[10%] bg-gradient-to-l to-transparent " />

          <Marquee autoFill pauseOnHover speed={30}>
            <div className="flex items-center gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background-1/90 dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 w-full max-w-[358px] min-w-[358px] shrink-0 rounded-[20px] p-8 transition-colors duration-300 ease-linear first:ml-8 hover:bg-white">
                  <p className="line-clamp-3 text-wrap">{testimonial.quote}</p>
                  <div className="bg-stroke-4 dark:bg-stroke-8 my-8 h-px w-full" />
                  <div>
                    <div className="flex items-center gap-3">
                      <figure className="size-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar}
                          alt="avatar"
                          className="h-full w-full bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%]"
                          width={48}
                          height={48}
                        />
                      </figure>
                      <div>
                        <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ReviewsV2;
