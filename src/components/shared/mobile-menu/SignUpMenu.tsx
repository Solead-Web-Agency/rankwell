import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const SignUpMenu = () => {
  return (
    <MobileMenuItem id="signup" title="Sign up" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/signup-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Sign up 01
          </Link>
        </li>
        <li>
          <Link
            href="/signup-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Sign up 02
          </Link>
        </li>
        <li>
          <Link
            href="/signup-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Sign up 03
          </Link>
        </li>
        <li>
          <Link
            href="/signup-04"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Sign up 04
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

SignUpMenu.displayName = 'SignUpMenu';
export default SignUpMenu;
