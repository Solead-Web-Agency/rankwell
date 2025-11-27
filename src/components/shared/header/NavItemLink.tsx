import { NavigationItem } from '@/data/header';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export type NavItemVariant = 'default' | 'border' | 'white' | 'light';

interface NavItemLinkProps {
  item: NavigationItem;
  variant?: NavItemVariant;
}

const getVariantClasses = (variant: NavItemVariant = 'default'): string => {
  const variants = {
    default:
      'flex items-center gap-1 px-4 py-2 border border-transparent group-hover/nav:border-stroke-2 group-hover/nav:dark:border-stroke-7 rounded-full group-hover/nav:bg-accent/20 group-hover/nav:dark:bg-transparent text-tagline-1 font-normal text-secondary/60 group-hover/nav:text-secondary dark:text-accent/60 group-hover/nav:dark:text-accent transition-all duration-200',
    border:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal text-secondary/60 group-hover/nav:text-secondary group-hover/nav:dark:text-accent dark:text-accent transition-all duration-200 overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] hover:before:origin-left hover:before:scale-x-100 dark:before:bg-white before:bg-secondary",
    white:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal group-hover/nav:text-accent text-accent transition-all duration-200 before:absolute before:content-[''] before:bottom-0 before:left-0 before:h-px before:w-0 group-hover/nav:before:bg-accent before:transition-all before:duration-300 group-hover/nav:before:w-full ",
    light:
      'flex items-center gap-1 px-4 py-2 border border-transparent group-hover/nav:border-stroke-1 group-hover/nav:dark:border-transparent rounded-full group-hover/nav:bg-accent/20 group-hover/nav:dark:bg-secondary/20 text-tagline-1 font-normal text-accent/60 group-hover/nav:text-accent dark:text-accent/60 group-hover/nav:dark:text-accent transition-all duration-200',
  };

  return variants[variant];
};

const NavItemLink = ({ item, variant = 'default' }: NavItemLinkProps) => {
  return (
    <Link href={item.href ?? '#'} className={cn(getVariantClasses(variant))}>
      <span>{item?.label}</span>
      {item?.hasDropdown && (
        <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      )}
    </Link>
  );
};

export default NavItemLink;
