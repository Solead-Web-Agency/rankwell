import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const TeamsMenu = () => {
  return (
    <MobileMenuItem id="teams" title="Teams" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/our-team-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our team 01
          </Link>
        </li>
        <li>
          <Link
            href="/our-team-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Our team 02
          </Link>
        </li>
        <li>
          <Link
            href="/team/1"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Team details
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

TeamsMenu.displayName = 'TeamsMenu';
export default TeamsMenu;
