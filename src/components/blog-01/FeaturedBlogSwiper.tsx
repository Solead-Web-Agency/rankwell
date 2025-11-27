'use client';
import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

interface FeaturedBlogSwiperProps {
  featuredBlogs: IBlogPost[];
}

const FeaturedBlogSwiper = ({ featuredBlogs }: FeaturedBlogSwiperProps) => {
  return (
    <RevealAnimation delay={0.3}>
      <div className="relative">
        <Swiper
          className="swiper blog-article-swiper"
          slidesPerView={1}
          loop={true}
          effect="slide"
          speed={1000}
          spaceBetween={40}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.pagination-bullets',
            clickable: true,
            type: 'bullets',
          }}
          scrollbar={false}>
          <div className="swiper-wrapper">
            {featuredBlogs.map((blog) => (
              <SwiperSlide key={blog.slug} className="swiper-slide">
                <article className="scale-100 hover:scale-[99%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                  <figure className="w-full max-h-[550px] rounded-t-[20px] overflow-hidden">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={600}
                      height={550}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="px-4 py-8 md:p-8 space-y-6 bg-background-1 dark:bg-background-6 rounded-b-[20px]">
                    <div className="flex items-center gap-2">
                      <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`}>
                        <span className="badge badge-green mr-1">{blog.tag}</span>
                      </Link>
                      <span rel="author" className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">
                        {blog.author}
                      </span>
                      <span className="w-[5px] h-[6px] bg-[#ECE8FF] rounded-full"> </span>
                      <time
                        dateTime={blog.publishDate}
                        className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">
                        {blog.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="font-normal sm:text-heading-5 text-tagline-1 mb-2">
                        <Link href={`/blog/${blog.slug}`} aria-label={`Read full article about ${blog.title}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="sm:text-tagline-1 text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">
                        {blog.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="btn btn-md btn-white hover:btn-primary dark:btn-transparent inline-block"
                        aria-label={`Read full article about ${blog.title}`}>
                        <span>Read more</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </div>
          <div className="mt-5 md:mt-14 pagination-bullets"></div>
        </Swiper>
      </div>
    </RevealAnimation>
  );
};

FeaturedBlogSwiper.displayName = 'FeaturedBlogSwiper';
export default FeaturedBlogSwiper;
