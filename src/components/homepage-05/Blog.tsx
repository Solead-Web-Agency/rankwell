import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';

const blogs = getMarkDownData('src/data/blogs').slice(5, 8);

interface BlogProps {
  badgeClass?: string;
}

const Blog = ({ badgeClass }: BlogProps) => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className={cn(badgeClass, 'badge badge-green mb-5')} aria-label="Section category">
                Financial blog tips and tricks
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="blog-section-heading" className="mb-3">
                Our recent news &amp; insights
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Our recent news &amp; insights highlight the latest developments and trends shaping our industry.</p>
            </RevealAnimation>
          </div>
          {/* blog section  */}
          <div className="grid grid-cols-12 justify-center gap-y-8 lg:gap-x-8">
            {/* blog 01  */}
            <RevealAnimation delay={0.4}>
              <BlogCardV2 blog={blogs[0]} />
            </RevealAnimation>
            {/* blog 02 and 03  */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-6">
              <div className="flex flex-col gap-y-8">
                {/* blog 02  */}
                <RevealAnimation delay={0.5}>
                  <BlogCardV3 blog={blogs[1]} />
                </RevealAnimation>

                {/* blog 03  */}
                <RevealAnimation delay={0.6}>
                  <BlogCardV3 blog={blogs[2]} />
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Blog.displayName = 'Blog';
export default Blog;
