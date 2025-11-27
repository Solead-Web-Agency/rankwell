import testimonials from '@/data/json/testimonials/review.json';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Testimonial = () => {
  return (
    <section
      className="pt-10 pb-20 sm:pt-14 sm:pb-28 md:pt-16 md:pb-32 lg:pt-[88px] lg:pb-[100px] xl:pt-[100px] xl:pb-[200px]"
      aria-label="Customer testimonials">
      <div className="main-container">
        <div className="mb-14 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-3.5 md:mb-5">Review</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Hear from our customers about their <br className="hidden lg:block" />
              <span className="text-primary-500 inline-block">experiences</span> with us
            </h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealAnimation key={index + 1} delay={Number(item.delay)}>
              <article className="bg-background-3 dark:bg-background-7 dark:border-stroke-7 rounded-[20px] p-6 sm:p-8 dark:border">
                <div className="flex items-center justify-between pb-6">
                  <figure className="flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      className="size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] object-cover object-center"
                      alt={`${item.name}'s avatar`}
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                    <figcaption>
                      <h3 className="text-tagline-1 dark:text-accent leading-[1.5] font-medium sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">{item.country}</p>
                    </figcaption>
                  </figure>
                  <Link
                    href={item.twitter}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Follow ${item.name} on Twitter`}
                    className="bg-background-4 dark:bg-background-9 hover:bg-background-2 dark:hover:bg-background-9/60 ease-[cubic-bezier(0.7, 0, 0.2, 8)] flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors duration-[400ms]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={13}
                      viewBox="0 0 12 13"
                      fill="none"
                      aria-hidden="true">
                      <g clipPath="url(#clip0_3108_693)">
                        <path
                          d="M9.45202 0.5H11.2924L7.27177 5.58308L12.0017 12.5H8.29819L5.3975 8.30492L2.07844 12.5H0.236996L4.53741 7.06308L0 0.5H3.7975L6.41947 4.33446L9.45202 0.5ZM8.80612 11.2815H9.82587L3.24339 1.65446H2.1491L8.80612 11.2815Z"
                          className="fill-secondary dark:fill-accent"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3108_693">
                          <rect width={12} height={12} fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
                <p className="border-stroke-4 dark:border-stroke-7 border-t pt-6">{item.message}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.9}>
          <div className="mt-10 flex justify-center md:mt-14">
            <LinkButton
              href="/testimonial-01"
              className="btn btn-white btn-lg md:btn-xl dark:btn-transparent hover:btn-primary mx-auto w-full md:mx-0 md:w-auto">
              Explore more
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonial;
