import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import LinkButton from '../ui/button/LinkButton';

const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 3);

const Blog = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 pt-20 pb-20 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32 lg:pt-[128px] lg:pb-[128px] xl:pt-[200px] xl:pb-[200px]"
      aria-label="Blog posts and insights">
      <div className="main-container">
        <div className="mb-14 text-center md:mb-[70px]">
          <RevealAnimation delay={0.3}>
            <span className="badge badge-green mb-3.5 md:mb-5">Blog</span>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <h2 className="mb-3">
              Our recent <span className="text-primary-500 inline-block">news &amp; insights</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <p className="mx-auto max-w-[738px]">
              Our recent news and insights highlight the latest developments, achievements, and thought leadership
              shaping our journey forward. From product innovations and strategic partnerships to industry trends
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <RevealAnimation delay={0.6 + index * 0.1} key={blog.slug}>
              <BlogCardV1 blog={blog} />
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.9}>
          <div className="mt-10 flex justify-center md:mt-14">
            <LinkButton
              href="/blog-01"
              className="btn btn-white btn-lg md:btn-xl hover:btn-primary dark:btn-transparent mx-auto w-full md:mx-0 md:w-auto"
              aria-label="View all blog posts">
              Explore all
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
