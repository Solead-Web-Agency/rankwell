import { MegaMenuItem as MegaMenuItemType } from '@/data/header';
import Link from 'next/link';
import LinkIcon from '../LinkIcon';

interface PageMegaMenuItemProps {
  item: MegaMenuItemType;
}

const PageMegaMenuItem = ({ item }: PageMegaMenuItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        className="text-secondary/60 dark:text-accent/60 dark:hover:text-accent group/item text-tagline-1 hover:text-secondary flex items-center gap-1 font-normal transition-all duration-200">
        <span>{item.label}</span>
        <LinkIcon />
      </Link>
    </li>
  );
};

export default PageMegaMenuItem;
