import { IBlogPost } from '@/interface';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import Comment from './Comment';
import ShareLink from './ShareLink';

interface BlogContentProps {
  blog: Partial<IBlogPost> & { content: string };
}

const BlogContent = ({ blog }: BlogContentProps) => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-3 max-w-[1209px] mx-auto">
          <RevealAnimation delay={0.1}>
            <h2 className="max-w-[884px]">{blog.data.title}</h2>
          </RevealAnimation>
          <div className="flex items-center gap-3">
            <RevealAnimation delay={0.2}>
              <figure className="size-12 rounded-full overflow-hidden bg-[#ECEAED]">
                <Image
                  src={blog.data.authorImage}
                  className="object-center object-cover"
                  alt="Esther Howard's avatar"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
            <div>
              <RevealAnimation delay={0.3}>
                <h3 className="text-tagline-1 font-medium">{blog.data.authorName}</h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <time
                  dateTime={blog.data.publishDate}
                  className="text-tagline-2 flex items-center gap-2 font-normal text-secondary/60 dark:text-accent/60">
                  {blog.data.publishDate} <span>•</span> {blog.data.readTime}
                </time>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="max-w-full rounded-lg md:rounded-4xl my-10 md:my-[70px] overflow-hidden">
            <Image
              src={blog.data.thumbnail}
              className="w-full h-full object-cover object-center"
              alt="blog-details-cover"
              width={1200}
              height={700}
            />
          </figure>
        </RevealAnimation>
        {/* Blog details-body */}

        <RevealAnimation delay={0.5}>
          <article className="details-body">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
          </article>
        </RevealAnimation>
        {/* details-footer */}
        <ShareLink />
        <Comment />
      </div>
    </section>
  );
};

export default BlogContent;
