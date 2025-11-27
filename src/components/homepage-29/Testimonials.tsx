'use client';

import { NavigationArrow, QuoteIcon } from '@/icons';
import { cn } from '@/utils/cn';
import avatar6 from '@public/images/avatar/avatar-6.png';
import avatar7 from '@public/images/avatar/avatar-7.png';
import avatar8 from '@public/images/avatar/avatar-8.png';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

interface TestimonialReview {
  id: number;
  name: string;
  position: string;
  image: StaticImageData;
  text: string;
}

const testimonialReviews: TestimonialReview[] = [
  {
    id: 1,
    name: 'Lana Stone',
    position: '@lana_stone',
    image: avatar6,
    text: 'NextSaaS helped me shift from passive saving to active investing—with zero stress.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: '@sarah_j',
    image: avatar7,
    text: "The platform's intuitive design made investing accessible for someone like me who was completely new to it.",
  },
  {
    id: 3,
    name: 'Mike Chen',
    position: '@mike_chen',
    image: avatar8,
    text: "I've seen a 40% increase in my portfolio since switching to NextSaaS. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[850px] mx-auto mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>What our clients say</h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="relative">
            <div className="single-card-reviews-swiper">
              <Swiper
                className="swiper blog-article-swiper"
                slidesPerView={1}
                loop={true}
                effect="slide"
                speed={1000}
                spaceBetween={40}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '.single-card-reviews-prev',
                  nextEl: '.single-card-reviews-next',
                }}
                pagination={{
                  el: '.pagination-bullets',
                  clickable: true,
                  type: 'bullets',
                }}
                scrollbar={false}>
                <div className="swiper-wrapper">
                  {testimonialReviews.map((review) => (
                    <SwiperSlide key={review.id} className="swiper-slide">
                      <div className="flex items-center justify-center gap-8">
                        {/* Author Image */}
                        <figure
                          className={cn(
                            'size-[150px] md:size-[300px] overflow-hidden rounded-[53px] border-[0.5px]',
                            'border-stroke-4 dark:border-stroke-8 bg-(image:--color-gradient-9)',
                          )}>
                          <Image
                            src={review.image}
                            alt={`${review.name} testimonial`}
                            className="size-full object-cover"
                          />
                        </figure>

                        {/* Testimonial Content */}
                        <blockquote className="md:space-y-6 space-y-3">
                          <QuoteIcon />
                          <div className="md:space-y-4 space-y-3">
                            <p className="text-secondary dark:text-accent max-w-[385px]">{review.text}</p>
                            <div>
                              <h3 className="font-medium text-lg text-secondary dark:text-accent">{review.name}</h3>
                              <p className="text-secondary/60 dark:text-accent/60 text-tagline-2">{review.position}</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              {/* Navigation Arrows */}
              <NavigationArrow direction="prev" className="single-card-reviews-prev left-0" />
              <NavigationArrow direction="next" className="single-card-reviews-next right-0" />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
