import LinkButton from '@/components/ui/button/LinkButton';
import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardV5Props {
  blog: IBlogPost;
  className?: string;
}

const BlogCardV5 = ({ blog, className }: BlogCardV5Props) => {
  return (
    //wrapper div for animation
    <div>
      <article
        className={cn(
          'rounded-[20px] scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500 overflow-hidden bg-background-2 dark:bg-background-7 flex sm:flex-row flex-col sm:gap-8 gap-0 max-w-[627px] lg:max-w-full lg:mx-0 mx-auto',
          className,
        )}>
        <figure className="sm:w-[298.5px] w-full xl:h-[260px] sm:h-auto h-[260px] shrink-0 overflow-hidden rounded-[20px]">
          <Image
            src={blog.thumbnail}
            alt="blog"
            className="w-full h-full object-cover"
            loading="lazy"
            width={298.5}
            height={260}
          />
        </figure>
        <div className="sm:py-8 sm:pr-8 p-8 sm:p-0 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_1182_25093_instance_03)">
                    <path
                      d="M17 3.5H21C21.2652 3.5 21.5196 3.60536 21.7071 3.79289C21.8946 3.98043 22 4.23478 22 4.5V20.5C22 20.7652 21.8946 21.0196 21.7071 21.2071C21.5196 21.3946 21.2652 21.5 21 21.5H3C2.73478 21.5 2.48043 21.3946 2.29289 21.2071C2.10536 21.0196 2 20.7652 2 20.5V4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H7V1.5H9V3.5H15V1.5H17V3.5ZM20 11.5H4V19.5H20V11.5ZM15 5.5H9V7.5H7V5.5H4V9.5H20V5.5H17V7.5H15V5.5ZM6 13.5H8V15.5H6V13.5ZM11 13.5H13V15.5H11V13.5ZM16 13.5H18V15.5H16V13.5Z"
                      className="fill-black dark:fill-accent dark:opacity-20"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1182_25093_instance_04">
                      <rect width={24} height={24} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
                {blog.publishDate}
              </span>
            </div>
            <div className="w-px h-[22px] bg-stroke-2 dark:bg-stroke-6" />
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_1182_25100_instance_05)">
                    <path
                      d="M17.6176 6.468L19.0706 5.015L20.4846 6.429L19.0316 7.882C20.4673 9.67917 21.1605 11.9579 20.9687 14.2501C20.7768 16.5424 19.7146 18.6742 18.0001 20.2077C16.2856 21.7412 14.0489 22.5601 11.7496 22.4961C9.45018 22.4321 7.26258 21.4901 5.63604 19.8635C4.00951 18.237 3.0675 16.0494 3.00349 13.75C2.93948 11.4506 3.75832 9.21402 5.29185 7.49951C6.82538 5.785 8.95718 4.72275 11.2494 4.53092C13.5417 4.33909 15.8204 5.03223 17.6176 6.468ZM11.9996 20.5C12.9188 20.5 13.8291 20.3189 14.6784 19.9672C15.5276 19.6154 16.2993 19.0998 16.9493 18.4497C17.5993 17.7997 18.1149 17.0281 18.4667 16.1788C18.8185 15.3295 18.9996 14.4193 18.9996 13.5C18.9996 12.5807 18.8185 11.6705 18.4667 10.8212C18.1149 9.97194 17.5993 9.20026 16.9493 8.55025C16.2993 7.90024 15.5276 7.38463 14.6784 7.03284C13.8291 6.68106 12.9188 6.5 11.9996 6.5C10.1431 6.5 8.36258 7.2375 7.04982 8.55025C5.73707 9.86301 4.99957 11.6435 4.99957 13.5C4.99957 15.3565 5.73707 17.137 7.04982 18.4497C8.36258 19.7625 10.1431 20.5 11.9996 20.5ZM10.9996 8.5H12.9996V14.5H10.9996V8.5ZM7.99957 1.5H15.9996V3.5H7.99957V1.5Z"
                      className="fill-black dark:fill-accent dark:opacity-20"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1182_25100_instance_06">
                      <rect width={24} height={24} fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">{blog.readTime}</span>
            </div>
          </div>
          <div className="space-y-4">
            <Link href={`/blog/${blog.slug}`} className="block">
              <h3 className="text-heading-6 md:text-heading-5 line-clamp-2">{blog.title}</h3>
            </Link>
          </div>
          <div>
            <LinkButton
              href={`/blog/${blog.slug}`}
              className="btn dark:btn-transparent hover:btn-secondary dark:hover:btn-accent btn-white btn-md w-[85%] md:w-auto mx-auto md:mx-0">
              Read more
            </LinkButton>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCardV5;
