import appleDarkImage from '@public/images/icons/apple-dark.svg';
import appleImage from '@public/images/icons/apple.svg';
import facebookImage from '@public/images/icons/facebook-v2.svg';
import googleImage from '@public/images/icons/google.svg';
import microsoftImage from '@public/images/icons/microsoft.svg';
import Image from 'next/image';

const SocialAuth = () => {
  return (
    <div className="space-y-4">
      <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 py-3 px-8 rounded-full cursor-pointer dark:border-stroke-7 hover:bg-primary-500 group transition-colors duration-500 ease-in-out">
        <span className="size-6 block">
          <Image src={googleImage} alt="google" className="size-full" />
        </span>
        <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
          Continue with Google
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 py-3 px-8 rounded-full cursor-pointer dark:border-stroke-7 hover:bg-primary-500 group transition-colors duration-500 ease-in-out">
        <span className="size-6 block">
          <Image src={facebookImage} alt="facebook" className="size-full" />
        </span>
        <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
          Continue with facebook
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 py-3 px-8 rounded-full cursor-pointer dark:border-stroke-7 hover:bg-primary-500 group transition-colors duration-500 ease-in-out">
        <span className="size-6 block">
          <Image src={appleImage} alt="apple" className="size-full dark:hidden" />
          <Image src={appleDarkImage} alt="apple" className="size-full hidden dark:block" />
        </span>
        <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
          Continue with apple
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 py-3 px-8 rounded-full cursor-pointer dark:border-stroke-7 hover:bg-primary-500 group transition-colors duration-500 ease-in-out">
        <span className="size-6 block">
          <Image src={microsoftImage} alt="microsoft" className="size-full" />
        </span>
        <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
          Continue with microsoft
        </span>
      </button>
    </div>
  );
};

export default SocialAuth;
