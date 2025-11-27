import testimonials from '@/data/json/testimonials/testimonials.json';
import { XIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface ReviewsProps {
  className?: string;
  badgeClass?: string;
}

const Reviews = ({ className, badgeClass }: ReviewsProps) => {
  return (
    <section
      className={cn(
        'pt-[60px] md:pt-[100px] lg:pt-[130px] pb-[60px] md:pb-[100px] lg:pb-[120px] bg-background-2 dark:bg-background-6',
        className,
      )}>
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* heading  */}
          <div className="text-center space-y-5">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge badge-white', badgeClass)}>Reviews</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 id="reviews-heading">Success stories from happy clients</h2>
            </RevealAnimation>
          </div>

          {/* reviews cards  */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={testimonial.id} delay={0.3 + index * 0.1}>
                <article className="mb-8 break-inside-avoid bg-background-3 dark:bg-background-7 p-2.5 rounded-[20px]">
                  <div className="bg-white dark:bg-background-6 p-4 sm:p-8 rounded-xl space-y-6">
                    {/* user info  */}
                    <div className="flex items-center justify-between pb-6 border-b border-b-stroke-2 dark:border-b-stroke-6">
                      {/* user name  */}
                      <div className="flex items-center gap-3">
                        <figure className="size-11 rounded-full overflow-hidden bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            loading="lazy"
                            width={44}
                            height={44}
                            className="size-full object-cover"
                          />
                        </figure>
                        <div>
                          <p className="text-lg font-medium text-secondary dark:text-accent">{testimonial.name}</p>
                          <p className="text-tagline-2">{testimonial.position}</p>
                        </div>
                      </div>

                      {/* social link  */}
                      <Link
                        href="#"
                        aria-label={`Follow ${testimonial.name} on Twitter`}
                        className="size-9 bg-background-2 dark:bg-background-5 rounded-full flex items-center justify-center">
                        <span className="size-[13px]">
                          <XIcon />
                        </span>
                      </Link>
                    </div>

                    {/* user review  */}
                    <p>{testimonial.quote}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
