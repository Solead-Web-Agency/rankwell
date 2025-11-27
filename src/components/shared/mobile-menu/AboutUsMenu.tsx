import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const AboutUsMenu = () => {
  return (
    <MobileMenuItem id="about" title="About us" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/about-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            About us 01
          </Link>
        </li>
        <li>
          <Link
            href="/about-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            About us 02
          </Link>
        </li>
        <li>
          <Link
            href="/about-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            About us 03
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

AboutUsMenu.displayName = 'AboutUsMenu';
export default AboutUsMenu;
