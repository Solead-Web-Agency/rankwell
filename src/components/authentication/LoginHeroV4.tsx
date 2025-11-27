import loginBgImage from '@public/images/authentication/auth-3.jpg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialAuthV2 from './SocialAuthV2';

const LoginHeroV4 = () => {
  return (
    <section className="lg:pt-[180px] pt-[120px] lg:pb-[100px] pb-[70px]">
      <div className="main-container">
        <div className="max-w-[930px] mx-auto w-full">
          <div className="bg-white dark:bg-black rounded-4xl overflow-hidden flex items-center gap-16 py-2.5 pr-2.5">
            <RevealAnimation delay={0.1}>
              <div className="max-w-[400px] w-full py-14 px-8">
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
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="terms" className="peer sr-only" />
                      <span className="size-5 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-3 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                      <span className="text-tagline-2 text-secondary dark:text-accent font-medium select-none">
                        Remember me
                      </span>
                    </label>
                    <Link href="#" className="text-tagline-2 text-secondary dark:text-accent font-medium underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full before:content-none first-letter:uppercase">
                      Log In
                    </button>
                  </div>
                </form>
                <div>
                  <p className="text-center text-tagline-2 text-secondary flex items-center justify-center gap-1 dark:text-accent font-normal">
                    Not registered yet?
                    <Link href="/signup-04" className="text-tagline-1 font-medium footer-link-v2">
                      Create an Account
                    </Link>
                  </p>
                  <div className="py-8 text-center">
                    <p className="text-tagline-2 font-normal text-secondary dark:text-accent">Or</p>
                  </div>
                  <SocialAuthV2 />
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <div className="hidden lg:block">
                <figure className="max-w-[456px] w-full rounded-[20px] overflow-hidden">
                  <Image src={loginBgImage} priority={true} alt="login-bg" className="size-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHeroV4;
