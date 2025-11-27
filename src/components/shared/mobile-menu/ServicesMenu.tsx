import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ServicesMenu = () => {
  return (
    <MobileMenuItem id="services" title="Services" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/our-services-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our Services 01
          </Link>
        </li>
        <li>
          <Link
            href="/our-services-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our Services 02
          </Link>
        </li>
        <li>
          <Link
            href="/our-services-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our Services 03
          </Link>
        </li>
        <li>
          <Link
            href="/our-services/big-data-consulting"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Our Services
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
