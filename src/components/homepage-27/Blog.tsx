import RevealAnimation from '../animation/RevealAnimation';

import getMarkDownData from '@/utils/getMarkDownData';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const Blog = () => {
  const blogs = getMarkDownData('src/data/blogs').slice(5, 8);

  return (
    <section className="py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="max-w-[881px] mx-auto">
              Stay ahead in the
              <span className="text-primary-500"> property management </span>
              industry
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[492px] mx-auto">
              A collection of thoughts, experiments, and insights around design, technology, and creativity.
            </p>
          </RevealAnimation>
        </div>
        <div>
          <div className="grid grid-cols-12 xl:items-center items-start lg:gap-x-8 gap-y-8">
            {/* blog one  */}
            <div className="col-span-12 lg:col-span-5 xl:col-span-6 ">
              <RevealAnimation delay={0.3}>
                <BlogCardV4 blog={blogs[0]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>
            </div>

            <div className="col-span-12 xl:col-span-6 lg:col-span-7">
              <div className="lg:space-y-[38px] xl:space-y-8 space-y-8">
                <RevealAnimation delay={0.4}>
                  <BlogCardV5 blog={blogs[1]} className="bg-white dark:bg-background-8" />
                </RevealAnimation>

                <RevealAnimation delay={0.5}>
                  <BlogCardV5 blog={blogs[2]} className="bg-white dark:bg-background-8" />
                </RevealAnimation>
              </div>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="flex justify-center mt-10 md:mt-14">
              <LinkButton
                href="/blog-02"
                className="btn btn-md inline-block btn-secondary hover:btn-white dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto">
                Visit our blog
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Blog;
