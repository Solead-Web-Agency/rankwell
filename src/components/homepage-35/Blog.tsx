import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import LinkButton from '../ui/button/LinkButton';

const Blog = () => {
  const blogs: IBlogPost[] = getMarkDownData('src/data/blogs').slice(5, 8);

  return (
    <section className="lg:py-[150px] md:py-[100px] py-[80px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center mb-[70px] space-y-3">
          <RevealAnimation delay={0.1}>
            <h2>Learn defi, step by step</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>New to defi? we’ve got you covered with beginner-friendly guides and insights.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-6 items-start mb-14">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <BlogCardV1
                blog={blogs[0]}
                className="bg-white scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500 dark:bg-background-6 rounded-[20px] overflow-hidden"
              />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <BlogCardV1
                blog={blogs[1]}
                className="bg-white scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500 dark:bg-background-6 rounded-[20px] overflow-hidden"
              />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <BlogCardV1
                blog={blogs[2]}
                className="bg-white scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500 dark:bg-background-6 rounded-[20px] overflow-hidden"
              />
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/blog-02"
              className="btn btn-md hover:btn-primary dark:btn-transparent btn-white"
              aria-label="Explore the blog">
              Explore the blog
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Blog;
