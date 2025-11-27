import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const FeaturesMenu = () => {
  return (
    <MobileMenuItem id="features" title="Features" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/features-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Features 01
          </Link>
        </li>
        <li>
          <Link
            href="/features-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Features 02
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

FeaturesMenu.displayName = 'FeaturesMenu';
export default FeaturesMenu;
