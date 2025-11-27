import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ProcessMenu = () => {
  return (
    <MobileMenuItem id="process" title="Process" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/process-01"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Process 01
          </Link>
        </li>
        <li>
          <Link
            href="/process-02"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Process 02
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

ProcessMenu.displayName = 'ProcessMenu';
export default ProcessMenu;
