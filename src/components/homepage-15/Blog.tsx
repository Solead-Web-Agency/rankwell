import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const blogs = getMarkDownData('src/data/blogs').slice(7, 10);

const Blog = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Journal</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Thoughts &amp; ideas</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[492px] mx-auto">
                A collection of thoughts, experiments, and insights around design, technology, and creativity.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 items-start lg:gap-8 gap-y-12">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 xl:col-span-6 lg:col-span-5">
                <BlogCardV4 blog={blogs[0]} className="bg-white dark:bg-background-8" />
              </div>
            </RevealAnimation>

            <div className="col-span-12 xl:col-span-6 lg:col-span-7 space-y-8">
              <RevealAnimation delay={0.6}>
                <BlogCardV5 blog={blogs[1]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <BlogCardV5 blog={blogs[2]} className="bg-white dark:bg-background-8" />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.8}>
            <div className="flex justify-center mt-10 md:mt-14">
              <LinkButton
                href="/blog-01"
                className="btn btn-secondary btn-md inline-block dark:btn-transparent dark:border-stroke-7 hover:btn-primary dark:hover:btn-white w-[90%] md:w-auto">
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
