import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const Blog = () => {
  const blogs = getMarkDownData('src/data/blogs').slice(7, 10);
  return (
    <section className="py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[814px] mx-auto">Smart reads for smarter businesses</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[550px] mx-auto">
              Explore practical tips, industry insights, and success stories to help your business scale with
              confidence.
            </p>
          </RevealAnimation>
        </div>
        <div>
          <div className="grid grid-cols-12 xl:items-center items-start lg:gap-x-8 gap-y-8">
            {/* blog one  */}

            <RevealAnimation delay={0.4}>
              <div className="col-span-12 xl:col-span-6 lg:col-span-5">
                <BlogCardV4 blog={blogs[0]} className="bg-white dark:bg-background-8" />
              </div>
            </RevealAnimation>

            <div className="col-span-12 xl:col-span-6 lg:col-span-7 space-y-8">
              <RevealAnimation delay={0.5}>
                <BlogCardV5 blog={blogs[1]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <BlogCardV5 blog={blogs[2]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.7}>
            <div className="flex justify-center mt-10 md:mt-14">
              <LinkButton
                href="/blog-02"
                className="btn btn-primary btn-md inline-block hover:btn-secondary dark:hover:btn-white w-[85%] md:w-auto">
                Explore our blog
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Blog.displayName = 'Blog';
export default Blog;
