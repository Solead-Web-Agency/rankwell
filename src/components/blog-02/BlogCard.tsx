import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/button/LinkButton';

export const BlogCard = ({ blog }: { blog: IBlogPost }) => {
  return (
    <article className="group">
      <div className="bg-background-1 dark:bg-background-5 rounded-[20px] overflow-hidden relative scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
        <figure className="xl:h-[310px] h-[250px] rounded-b-[20px] overflow-hidden max-w-full">
          <Image
            src={blog.thumbnail}
            alt="Illustration representing electronic prescription in finance sector"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            width={310}
            height={310}
          />
        </figure>
        <div className="p-4 md:p-6 lg:p-8 space-y-4 rounded-b-[20px]">
          <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`} className="inline-block">
            <span className="badge badge-cyan" aria-label="Article category">
              {blog.tag}
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <time
              className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60"
              dateTime="2025-05-14">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_3920_8875)">
                  <path
                    d="M14.1641 2.49992H17.4974C17.7184 2.49992 17.9304 2.58772 18.0866 2.744C18.2429 2.90028 18.3307 3.11224 18.3307 3.33325V16.6666C18.3307 16.8876 18.2429 17.0996 18.0866 17.2558C17.9304 17.4121 17.7184 17.4999 17.4974 17.4999H2.4974C2.27638 17.4999 2.06442 17.4121 1.90814 17.2558C1.75186 17.0996 1.66406 16.8876 1.66406 16.6666V3.33325C1.66406 3.11224 1.75186 2.90028 1.90814 2.744C2.06442 2.58772 2.27638 2.49992 2.4974 2.49992H5.83073V0.833252H7.4974V2.49992H12.4974V0.833252H14.1641V2.49992ZM16.6641 9.16658H3.33073V15.8332H16.6641V9.16658ZM12.4974 4.16658H7.4974V5.83325H5.83073V4.16658H3.33073V7.49992H16.6641V4.16658H14.1641V5.83325H12.4974V4.16658ZM4.9974 10.8333H6.66406V12.4999H4.9974V10.8333ZM9.16406 10.8333H10.8307V12.4999H9.16406V10.8333ZM13.3307 10.8333H14.9974V12.4999H13.3307V10.8333Z"
                    className="fill-secondary dark:fill-stroke-8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3920_8875">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {blog.publishDate}
            </time>
            <div aria-hidden="true" className="w-px inline-block h-3 bg-stroke-2 dark:bg-stroke-6" />
            <time
              className="flex items-center gap-2 text-tagline-2 font-medium text-secondary/60 dark:text-accent/60"
              dateTime="PT1M">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_3920_8882_fixed)">
                  <path
                    d="M14.6813 4.97325L15.8921 3.76242L17.0705 4.94075L15.8596 6.15158C17.0561 7.64922 17.6337 9.54815 17.4739 11.4584C17.314 13.3686 16.4288 15.1451 15.0001 16.423C13.5713 17.701 11.7074 18.3833 9.7913 18.33C7.87515 18.2766 6.05215 17.4916 4.6967 16.1362C3.34125 14.7807 2.55625 12.9577 2.50291 11.0416C2.44957 9.12545 3.13193 7.2616 4.40987 5.83284C5.68781 4.40409 7.46432 3.51888 9.37453 3.35902C11.2847 3.19916 13.1837 3.77678 14.6813 4.97325ZM9.99964 16.6666C10.7657 16.6666 11.5242 16.5157 12.232 16.2225C12.9397 15.9294 13.5828 15.4997 14.1244 14.958C14.6661 14.4164 15.0958 13.7733 15.3889 13.0656C15.6821 12.3578 15.833 11.5993 15.833 10.8333C15.833 10.0672 15.6821 9.30866 15.3889 8.60093C15.0958 7.8932 14.6661 7.25014 14.1244 6.70846C13.5828 6.16679 12.9397 5.73711 12.232 5.44395C11.5242 5.1508 10.7657 4.99992 9.99964 4.99992C8.45255 4.99992 6.96881 5.6145 5.87485 6.70846C4.78089 7.80242 4.16631 9.28615 4.16631 10.8333C4.16631 12.3803 4.78089 13.8641 5.87485 14.958C6.96881 16.052 8.45255 16.6666 9.99964 16.6666ZM9.16631 6.66658H10.833V11.6666H9.16631V6.66658ZM6.66631 0.833252H13.333V2.49992H6.66631V0.833252Z"
                    className="fill-secondary dark:fill-stroke-8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3920_8882_fixed">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {blog.readTime}
            </time>
          </div>
          <h3 className="font-normal sm:text-heading-5 text-tagline-1 line-clamp-1">
            <Link
              href={`/blog/${blog.slug}`}
              aria-label="Read full article about electronic prescription in finance sector">
              {blog.title}
            </Link>
          </h3>
          <div className="mt-8">
            <LinkButton
              href={`/blog/${blog.slug}`}
              className="btn btn-md btn-white hover:btn-primary dark:btn-transparent inline-block"
              aria-label="Read full article about electronic prescription in finance sector">
              <span>Read more</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};
