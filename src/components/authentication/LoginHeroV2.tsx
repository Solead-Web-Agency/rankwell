import facebookImage from '@public/images/icons/facebook-v2.svg';
import googleImage from '@public/images/icons/google.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const LoginHeroV2 = () => {
  return (
    <section className="lg:pt-[180px] pt-[120px] lg:pb-[100px] pb-[70px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="max-w-[866px] w-full mx-auto overflow-hidden sm:bg-[url('/images/authentication/auth-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-4xl sm:p-[70px]">
            <RevealAnimation delay={0.1}>
              <div className="max-w-[400px] bg-background-1 dark:bg-background-6 rounded-[20px] py-14 px-8">
                <form className="mb-6">
                  <fieldset className="space-y-2 mb-4">
                    <label
                      htmlFor="email"
                      className="block text-tagline-2 font-medium text-secondary dark:text-accent select-none">
                      Your email
                    </label>
                    <input type="email" id="email" className="auth-form-input" placeholder="Email address" />
                  </fieldset>
                  <fieldset className="space-y-2 mb-3">
                    <label
                      htmlFor="password"
                      className="block text-tagline-2 font-medium text-secondary dark:text-accent select-none">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="auth-form-input"
                      placeholder="At least 8 characters"
                    />
                  </fieldset>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="terms" className="peer sr-only" aria-label="Remember me" />
                        <span className="size-5 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-3 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                        <span className="text-tagline-2 text-secondary dark:text-accent font-medium select-none">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div>
                      <Link href="#" className="text-tagline-2 text-secondary dark:text-accent font-medium underline">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="btn btn-md btn-primary w-full before:content-none first-letter:uppercase">
                      Log In
                    </button>
                  </div>
                </form>
                <div>
                  <p className="text-center text-tagline-2 text-secondary flex items-center justify-center gap-1 dark:text-accent font-normal">
                    Not registered yet?
                    <Link href="/signup-02" className="text-tagline-1 font-medium footer-link-v2">
                      Create an Account
                    </Link>
                  </p>
                  <div className="py-8 text-center">
                    <p className="text-tagline-2 font-normal text-secondary dark:text-accent">Or</p>
                  </div>
                  <div className="space-y-4">
                    <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 dark:border-stroke-7 py-3 px-8 rounded-full cursor-pointer group transition-colors duration-500 ease-in-out hover:bg-primary-500">
                      <span className="size-6 block">
                        <Image src={googleImage} alt="google" className="size-full" />
                      </span>
                      <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
                        Continue with Google
                      </span>
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full border border-stroke-3 dark:border-stroke-7 py-3 px-8 rounded-full cursor-pointer group transition-colors duration-500 ease-in-out hover:bg-primary-500">
                      <span className="size-6 block">
                        <Image src={facebookImage} alt="facebook" className="size-full" />
                      </span>
                      <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:text-accent transition-colors duration-500 ease-in-out">
                        Continue with facebook
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LoginHeroV2;
