import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import avatar4 from '../../../public/images/avatar/avatar-4.png';
import avatar5 from '../../../public/images/avatar/avatar-5.png';
import avatar6 from '../../../public/images/avatar/avatar-6.png';
import avatar7 from '../../../public/images/avatar/avatar-7.png';
import avatar8 from '../../../public/images/avatar/avatar-8.png';
import avatar9 from '../../../public/images/avatar/avatar-9.png';
import RevealAnimation from '../animation/RevealAnimation';

type Testimonial = {
  name: string;
  quote: string;
  twitterUrl: string;
  delay: number;
  avatar: {
    src: StaticImageData;
    alt: string;
    bgClass: string;
  };
};

// data
const testimonials: Testimonial[] = [
  {
    name: 'Darrell Steward',
    quote:
      'As a small business owner, your service has been a lifesaver in managing cash flow and optimizing financial strategies. It has truly exceeded my expectations.',
    twitterUrl: 'https://x.com',
    delay: 0.2,
    avatar: {
      src: avatar4,
      alt: "Darrell Steward's avatar",
      bgClass: 'bg-linear-[156deg,#F4F8E7_12.92%,#D485FF_91%]',
    },
  },
  {
    name: 'Sarah Johnson',
    quote:
      "The voice duplication feature is absolutely incredible! I've been able to create professional voiceovers for my content in minutes instead of hours.",
    twitterUrl: 'https://x.com',
    delay: 0.3,
    avatar: {
      src: avatar5,
      alt: "Sarah Johnson's avatar",
      bgClass: 'bg-linear-[156deg,#E8F4FD_12.92%,#4A90E2_91%]',
    },
  },
  {
    name: 'Michael Chen',
    quote:
      "This technology has revolutionized our podcast production. The quality is so realistic that our listeners can't tell the difference from our original recordings.",
    twitterUrl: 'https://x.com',
    delay: 0.4,
    avatar: {
      src: avatar6,
      alt: "Michael Chen's avatar",
      bgClass: 'bg-linear-[156deg,#FFF2E8_12.92%,#FF6B35_91%]',
    },
  },
  {
    name: 'Emma Rodriguez',
    quote:
      'As a language teacher, this tool has been invaluable for creating pronunciation examples in multiple languages. My students love the natural-sounding voices!',
    twitterUrl: 'https://x.com',
    delay: 0.1,
    avatar: {
      src: avatar7,
      alt: "Emma Rodriguez's avatar",
      bgClass: 'bg-linear-[156deg,#F0E6FF_12.92%,#8B5CF6_91%]',
    },
  },
  {
    name: 'David Kim',
    quote:
      "The accuracy and speed of voice generation is mind-blowing. We've reduced our audio production time by 80% while maintaining exceptional quality standards.",
    twitterUrl: 'https://x.com',
    delay: 0.2,
    avatar: {
      src: avatar8,
      alt: "David Kim's avatar",
      bgClass: 'bg-linear-[156deg,#E6F7FF_12.92%,#1890FF_91%]',
    },
  },
  {
    name: 'Lisa Thompson',
    quote:
      'This platform has transformed how we create audiobooks. The voice synthesis is so natural and expressive that our listeners are completely engaged throughout the entire experience.',
    twitterUrl: 'https://x.com',
    delay: 0.3,
    avatar: {
      src: avatar9,
      alt: "Lisa Thompson's avatar",
      bgClass: 'bg-linear-[156deg,#FFF7E6_12.92%,#FF8C00_91%]',
    },
  },
];

const Testimonial = () => {
  return (
    <section
      className="2xl:pt-28 pt-14 sm:pt-16 md:pt-24 2xl:pb-44 pb-20 sm:pb-24 md:pb-24"
      aria-label="Customer testimonials">
      <div className="main-container">
        <div className="text-center mb-14 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-3.5 md:mb-5">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="xl:max-w-[906px] xl:mx-auto">User stories: find out why so many people love our themes!</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <RevealAnimation key={t.name} delay={t.delay}>
              <article className="bg-white border border-stroke-1 rounded-[20px] sm:p-8 p-6">
                <div className="flex items-center justify-between pb-5">
                  <figure className="flex items-center gap-1" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[15px]"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
                          fill="#864FFE"
                        />
                      </svg>
                    ))}
                  </figure>

                  <Link href={t.twitterUrl} target="_blank" rel="noopener" aria-label={`Follow ${t.name} on Twitter`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                      <path
                        d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z"
                        fill="#12161F"
                      />
                    </svg>
                  </Link>
                </div>

                <p className="pb-6">{t.quote}</p>

                <figure className="flex items-center gap-3">
                  <Image
                    src={t.avatar.src}
                    className={`size-11 rounded-full object-center object-cover ${t.avatar.bgClass}`}
                    alt={t.avatar.alt}
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <h3 className="text-tagline-1 sm:text-lg font-semibold leading-[1.5]">{t.name}</h3>
                </figure>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
