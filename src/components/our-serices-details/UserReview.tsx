import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

type UserReviewProps = {
  service: IService;
};

const UserReview = ({ service }: UserReviewProps) => {
  return (
    <div className="mt-[70px] space-y-14" id="live-data-insights">
      <div className="space-y-3">
        <RevealAnimation delay={0.1}>
          <h4 className="text-heading-2">What our users say</h4>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-tagline-1">
            &ldquo;Nextsaas delivered our entire platform ahead of schedule—flawless execution and real
            partnership.&rdquo;
          </p>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary p-8 rounded-[20px] space-y-6">
          <figure className="size-16 rounded-full overflow-hidden bg-linear-[180deg,#ffffff_0%,#83e7ee_100%]">
            <Image
              className="size-full object-cover"
              src={service.userReview.image}
              alt="avatar"
              width={64}
              height={64}
            />
          </figure>
          <blockquote>
            <RevealAnimation delay={0.3}>
              <p className="text-white">{service.userReview.reviewContent}</p>
            </RevealAnimation>
          </blockquote>
          <div>
            <RevealAnimation delay={0.4}>
              <p className="text-lg font-medium text-white">{service.userReview.name}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="text-tagline-2 font-normal text-accent/60">{service.userReview.userRole}</p>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

UserReview.displayName = 'UserReview';
export default UserReview;
