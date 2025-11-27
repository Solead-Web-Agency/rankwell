import logoDark from '@public/images/shared/logo-dark.svg';
import logo from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[198px]">
          <Image src={mainLogo} alt="NextSaaS" className="dark:invert" />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-[44px] lg:hidden">
          <Image src={logo} alt="NextSaaS" className="block w-full dark:hidden" />
          <Image src={logoDark} alt="NextSaaS" className="hidden w-full dark:block" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
