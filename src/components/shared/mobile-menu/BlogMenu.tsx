import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const BlogMenu = () => {
  return (
    <MobileMenuItem id="blog" title="Blog" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/blog-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Blog Page 01
          </Link>
        </li>
        <li>
          <Link
            href="/blog-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Blog Page 02
          </Link>
        </li>
        <li>
          <Link
            href="/blog-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Blog Page 03
          </Link>
        </li>
        <li>
          <Link
            href="/blog/5-strategies-for-effective-brand-storytelling"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Blog Details
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

export default BlogMenu;
