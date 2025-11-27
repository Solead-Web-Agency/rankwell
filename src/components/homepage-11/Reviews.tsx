import testimonials from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Reviews = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5"> Reviews </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Hear from our customers about
              <br className="hidden md:block" />
              their experiences with us
            </h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation key={testimonial.id} delay={0.3 + index * 0.1}>
              <article className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8">
                <div className="flex items-center justify-between pb-6">
                  <figure className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      className="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                      alt="Robert Johnson's avatar"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                    <figcaption>
                      <h3 className="text-lg font-medium leading-[1.5]">{testimonial.name}</h3>
                      <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                        {testimonial.position}
                      </p>
                    </figcaption>
                  </figure>
                  <Link
                    href="https://x.com/heystaticmania"
                    target="_blank"
                    rel="noopener"
                    aria-label="Follow Sarah Johnson on Twitter"
                    className="bg-background-4 dark:bg-background-7 hover:bg-secondary/10 dark:hover:bg-accent/10 transition-colors duration-400 cursor-pointer size-9 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={13}
                      viewBox="0 0 12 13"
                      fill="none"
                      aria-hidden="true">
                      <path
                        d="M9.45202 0.5H11.2924L7.27177 5.58308L12.0017 12.5H8.29819L5.3975 8.30492L2.07844 12.5H0.236996L4.53741 7.06308L0 0.5H3.7975L6.41947 4.33446L9.45202 0.5ZM8.80612 11.2815H9.82587L3.24339 1.65446H2.1491L8.80612 11.2815Z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </Link>
                </div>
                <p className="pt-6 border-t border-stroke-4 dark:border-stroke-8">{testimonial.quote}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.3}>
          <div className="flex justify-center mt-10 md:mt-14">
            <LinkButton
              href="/testimonial-01"
              className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
              Review us
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
