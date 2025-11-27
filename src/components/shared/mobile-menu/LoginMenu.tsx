import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const LoginMenu = () => {
  return (
    <MobileMenuItem id="login" title="Login" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/login-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Login Page 01
          </Link>
        </li>
        <li>
          <Link
            href="/login-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Login Page 02
          </Link>
        </li>
        <li>
          <Link
            href="/login-03"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Login Page 03
          </Link>
        </li>
        <li>
          <Link
            href="/login-04"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Login Page 04
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

LoginMenu.displayName = 'LoginMenu';
export default LoginMenu;
