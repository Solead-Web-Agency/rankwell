import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const PricingMenu = () => {
  return (
    <MobileMenuItem id="pricing" title="Pricing" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/pricing-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Pricing 01
          </Link>
        </li>
        <li>
          <Link
            href="/pricing-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Pricing 02
          </Link>
        </li>
        <li>
          <Link
            href="/pricing-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Pricing 03
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

PricingMenu.displayName = 'PricingMenu';
export default PricingMenu;
