'use client';
import { Autoplay } from 'swiper/modules';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

import reviews from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from '../shared/reviews/GradientOverlay';

const Testimonial = () => {
  return (
    <section className="relative pt-[100px] pb-[100px] bg-white dark:bg-black bg-[url('/images/home-page-18/hero-bg.png')] bg-no-repeat bg-cover bg-top">
      <div className="main-container">
        <div className="flex flex-col items-center text-center mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[750px] mx-auto mb-4">What our clients are saying.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[872px] mx-auto">
              Trusted by businesses worldwide to drive efficiency, accuracy, and results. Hear from our clients how
              NextSaaS helped them streamline operations, save time, and drive results through smart automation.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}>
              <div className="swiper-wrapper">
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className="swiper-slide">
                    <div className="bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-8 overflow-hidden rounded-[20px] p-8 sm:mx-0">
                      <GradientOverlay />
                      <figure className="relative inline-block size-14 overflow-hidden rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] ring-4 ring-white dark:ring-background-5">
                        <Image
                          src={review.avatar}
                          height={100}
                          width={100}
                          quality={100}
                          alt="avatar"
                          className="max-w-full"
                        />
                      </figure>
                      <p className="text-secondary/60 dark:text-accent/60 line-clamp-2 review-text">{review.quote}</p>
                      <div>
                        <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                          {review.name}
                        </p>
                        <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="text-center mt-10">
            <LinkButton
              href="/testimonial-01"
              className="btn btn-secondary btn-md inline-block dark:btn-transparent dark:border-primary-50 hover:btn-primary w-[85%] md:w-auto mx-auto">
              Read more testimonials
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonial;
