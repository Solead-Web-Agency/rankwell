import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';

const Blog = () => {
  const blogsData: IBlogPost[] = getMarkDownData('src/data/blogs').slice(12, 15);
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="text-center space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Blog</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Informed investors are confident.</h2>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            <div className="grid grid-cols-12 xl:items-center items-start lg:gap-x-8 gap-y-8">
              <div className="col-span-12 lg:col-span-5 xl:col-span-6 ">
                <RevealAnimation delay={0.3}>
                  <BlogCardV4 blog={blogsData[0]} className="bg-white dark:bg-background-8" />
                </RevealAnimation>
              </div>
              <div className="col-span-12 xl:col-span-6 lg:col-span-7">
                <div className="lg:space-y-[38px] xl:space-y-8 space-y-8">
                  <RevealAnimation delay={0.4}>
                    <BlogCardV5 blog={blogsData[1]} className="bg-white dark:bg-background-8" />
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <BlogCardV5 blog={blogsData[2]} className="bg-white dark:bg-background-8" />
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <RevealAnimation delay={0.6}>
              <div className="text-center">
                <LinkButton
                  href="/blog-03"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md dark:btn-transparent hover:btn-primary">
                  View our blog
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
