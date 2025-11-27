import LinkButton from '@/components/ui/button/LinkButton';
import { CalendarIcon, StopwatchIcon } from '@/icons';
import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardV3Props {
  blog: IBlogPost;
  className?: string;
}

const BlogCardV3 = ({ blog, className }: BlogCardV3Props) => {
  return (
    <article className="group">
      <div
        className={cn(
          'dark:bg-background-6 flex scale-100 flex-col items-center rounded-[20px] bg-white transition-transform duration-500 group-hover:scale-[101%] group-hover:transition-transform group-hover:duration-500 md:flex-row xl:gap-x-8 max-h-[308px]',
          className,
        )}>
        {/* blog img  */}
        <figure className="inline-block w-full overflow-hidden rounded-[20px] lg:max-w-[296px]">
          <Link href={`/blog/${blog.slug}`}>
            <Image
              src={blog.thumbnail}
              alt="Finance digital transformation illustration"
              className="size-full h-[308px] object-cover lg:h-[297px] xl:h-[308px]"
              loading="lazy"
              width={296}
              height={308}
            />
          </Link>
        </figure>
        {/* blog content  */}
        <div className="px-5 py-4 sm:px-4 xl:px-0 xl:py-8">
          {/* blog badge  */}
          <div className="mb-6 space-x-2">
            <span className="badge badge-gray-light">
              <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`}>{blog?.tag}</Link>
            </span>
            <span className="badge badge-gray-light">
              <Link href={`/blog-03?category=${blog.tag.toLowerCase()}`}>{blog?.tag}</Link>
            </span>
          </div>
          {/* time and title  */}
          <div className="mb-7 space-y-4">
            {/* blog time  */}
            <div className="flex items-center gap-2">
              {/* publish data  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <CalendarIcon />
                </span>
                <time dateTime="2025-05-14" className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                  {blog.publishDate}
                </time>
              </div>
              <div className="text-stroke-2 dark:text-stroke-6 px-4" aria-hidden="true">
                |
              </div>
              {/* time  */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true">
                  <StopwatchIcon />
                </span>
                <span className="text-tagline-2 text-secondary/60 dark:text-accent/60">{blog.readTime}</span>
              </div>
            </div>
            {/* blog title  */}
            <h3 className="text-heading-6 xl:text-heading-5">
              <Link
                href={`/blog/${blog.slug}`}
                aria-label="Read full article about Digital is making place in funds back-office">
                {blog.title}
              </Link>
            </h3>
          </div>
          {/* blog link tag  */}
          <div>
            <LinkButton
              href={`/blog/${blog.slug}`}
              className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent">
              Read more
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
};
BlogCardV3.displayName = 'BlogCardV3';
export default BlogCardV3;
