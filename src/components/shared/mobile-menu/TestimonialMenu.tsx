import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const TestimonialMenu = () => {
  return (
    <MobileMenuItem id="testimonial" title="Testimonial" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/testimonial-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Testimonials 01
          </Link>
        </li>
        <li>
          <Link
            href="/testimonial-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Testimonials 02
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

TestimonialMenu.displayName = 'TestimonialMenu';
export default TestimonialMenu;
