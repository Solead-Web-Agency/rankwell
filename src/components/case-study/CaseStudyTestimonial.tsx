import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudyTestimonial = ({ userReview }: { userReview: ICaseStudy['userReview'] }) => {
  return (
    <section>
      <div className="max-w-[950px] mx-auto">
        <div className="space-y-14">
          {/* heading  */}
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h4 className="text-heading-2" id="testimonials-title">
                What our users say
              </h4>
            </RevealAnimation>
            <blockquote>
              <RevealAnimation delay={0.2}>
                <p>
                  &quot;Nextsaas delivered our entire platform ahead of schedule—flawless execution and real
                  partnership.&quot;
                </p>
              </RevealAnimation>
            </blockquote>
          </div>
          {/* testimonial card  */}
          <RevealAnimation delay={0.3}>
            <div className="bg-secondary dark:bg-background-6 p-8 rounded-[20px] space-y-6 max-w-[950px]">
              <figure className="size-14 rounded-full overflow-hidden bg-(image:--color-gradient-7)">
                <Image
                  src={userReview.userImage}
                  className="size-full object-cover"
                  width={56}
                  height={56}
                  priority
                  alt={userReview.userName}
                />
              </figure>
              <blockquote cite="https://velocityfinance.com">
                <p className="text-white dark:text-accent/60">{userReview.reviewText}</p>
              </blockquote>
              <div className="pb-4">
                <p className="text-white text-lg font-medium leading-[150%]">{userReview.userName}</p>
                <p className="text-tagline-2 text-accent/60">{userReview.userRole}</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonial;
