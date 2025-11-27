import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV4 from '../shared/card/BlogCardV4';
import BlogCardV5 from '../shared/card/BlogCardV5';
import LinkButton from '../ui/button/LinkButton';
const blogs = getMarkDownData('src/data/blogs').slice(7, 10);

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:py-[100px] py-20 bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="text-center space-y-5 md:mb-[70px] mb-10">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green dark:!text-accent/60 dark:!bg-accent/10">
                Education &amp; Insights
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Level up your trading knowledge</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[492px] mx-auto">
                  &nbsp;A collection of thoughts, experiments, and insights around design, technology, and creativity.
                </p>
              </RevealAnimation>
            </div>
          </div>
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
          <RevealAnimation delay={0.6}>
            <div className="flex justify-center mt-14 section-button-01">
              <LinkButton
                href="/blog-01"
                className="btn btn-secondary btn-md dark:btn-transparent hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
                Explore the Learning Hub
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;
