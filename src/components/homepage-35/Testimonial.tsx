'use client';
import reviews from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';
import GradientOverlay from '../shared/reviews/GradientOverlay';

const Testimonial = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[80px] bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>What our users say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[472px] mx-auto">
              &quot;DeFi solutions launched our complete financial ecosystem ahead of time—seamless implementation and
              true collaboration.&quot;
            </p>
          </RevealAnimation>
        </div>

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
                  <div className="bg-background-2 dark:bg-background-5 rounded-[20px] relative overflow-hidden p-8 flex flex-col gap-y-6 z-0">
                    <GradientOverlay />
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#FFB9A2_91%] overflow-hidden relative">
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
      </div>
    </section>
  );
};

export default Testimonial;
