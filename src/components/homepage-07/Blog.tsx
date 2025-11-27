import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import LinkButton from '../ui/button/LinkButton';

const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(0, 3);

const Blog = () => {
  return (
    <section
      className="pt-24 pb-24 md:pt-28 md:pb-32 lg:pt-[100px] lg:pb-[120px] xl:pt-[120px] xl:pb-[170px] bg-background-3 dark:bg-background-5"
      aria-label="Blog posts and insights">
      <div className="main-container">
        <div className="text-center mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Blog</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Our recent
              <span className="text-primary-500"> news &amp; insights </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[738px] mx-auto">
              Our recent news and insights highlight the latest developments, achievements, and thought leadership
              shaping our journey forward. From product innovations and strategic partnerships to industry trends
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
          {blogs?.map((blog, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={blog?.slug}>
              <BlogCardV1 blog={blog} />
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.7}>
          <div className="flex justify-center mt-7 md:mt-14">
            <LinkButton
              href="/blog-01"
              className="btn hover:btn-primary dark:btn-accent btn-secondary btn-md w-[90%] md:w-auto mx-auto md:mx-0 md:btn-xl"
              aria-label="View all blog posts">
              Explore More
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
