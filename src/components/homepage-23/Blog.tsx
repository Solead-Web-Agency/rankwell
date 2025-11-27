import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const Blog = () => {
  const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(5, 8);
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="text-center space-y-5 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan">Journal</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                Thoughts &amp; <span className="text-primary-500">ideas</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[492px] mx-auto">
                &nbsp;A collection of thoughts, experiments, and insights around design, technology, and creativity.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-14">
          <div className="grid grid-cols-12 xl:items-center items-start lg:gap-8 gap-y-8">
            {/* blog one  */}
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 xl:col-span-6 lg:col-span-5">
                <BlogCardV4 blog={blogs[0]} />
              </div>
            </RevealAnimation>

            <div className="col-span-12 xl:col-span-6 lg:col-span-7 space-y-8">
              {/* blog two  */}
              <RevealAnimation delay={0.5}>
                <BlogCardV5 blog={blogs[1]} />
              </RevealAnimation>
              {/* blog three */}

              <RevealAnimation delay={0.6}>
                <BlogCardV5 blog={blogs[2]} />
              </RevealAnimation>
            </div>
          </div>
          <div className="text-center">
            <RevealAnimation delay={0.7}>
              <LinkButton
                href="/blog-03"
                className="btn btn-secondary btn-md dark:btn-transparent hover:btn-white dark:hover:btn-accent w-[85%] md:w-auto mx-auto md:mx-0">
                View all
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
