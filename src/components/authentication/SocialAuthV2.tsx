import appleImage from '@public/images/icons/apple.svg';
import facebookImage from '@public/images/icons/facebook-v2.svg';
import googleImage from '@public/images/icons/google.svg';
import microsoftImage from '@public/images/icons/microsoft.svg';
import Image from 'next/image';

const SocialAuthV2 = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="flex items-center justify-center gap-2 w-full bg-background-4 dark:bg-background-7 p-4 rounded-full cursor-pointer hover:-translate-y-1.5 transition-transform ease-in-out duration-500">
        <span className="size-6 block">
          <Image src={googleImage} alt="google" className="size-full" />
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full bg-background-4 dark:bg-background-7 p-4 rounded-full cursor-pointer hover:-translate-y-1.5 transition-transform ease-in-out duration-500">
        <span className="size-6 block">
          <Image src={facebookImage} alt="facebook" className="size-full" />
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full bg-background-4 dark:bg-background-7 p-4 rounded-full cursor-pointer hover:-translate-y-1.5 transition-transform ease-in-out duration-500">
        <span className="size-6 block">
          <Image src={appleImage} alt="apple" className="size-full dark:invert" />
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 w-full bg-background-4 dark:bg-background-7 p-4 rounded-full cursor-pointer hover:-translate-y-1.5 transition-transform ease-in-out duration-500">
        <span className="size-6 block">
          <Image src={microsoftImage} alt="microsoft" className="size-full" />
        </span>
      </button>
    </div>
  );
};

export default SocialAuthV2;
