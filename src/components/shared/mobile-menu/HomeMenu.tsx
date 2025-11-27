import { homeMegaMenuColumns } from '@/data/header';
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';
const homepages = [...homeMegaMenuColumns[0].items, ...homeMegaMenuColumns[1].items, ...homeMegaMenuColumns[2].items];

const HomeMenu = () => {
  return (
    <MobileMenuItem id="home" title="Home" hasSubmenu={true}>
      <ul>
        {homepages.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </MobileMenuItem>
  );
};

HomeMenu.displayName = 'HomeMenu';

export default HomeMenu;
