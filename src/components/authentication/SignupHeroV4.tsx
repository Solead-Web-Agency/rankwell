import SignupBgImage from '@public/images/authentication/auth-3.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SocialAuthV2 from './SocialAuthV2';

const SignupHeroV4 = () => {
  return (
    <section className="lg:pt-[180px] pt-[120px] lg:pb-[100px] pb-[70px]">
      <div className="main-container">
        <div className="lg:max-w-[930px] max-w-[400px] mx-auto w-full">
          <div className="bg-white dark:bg-black md:rounded-4xl rounded-[20px] overflow-hidden flex items-center lg:gap-16 py-2.5 pr-2.5">
            <RevealAnimation delay={0.1}>
              <div className="lg:max-w-[400px] w-full py-14 px-8">
                <form>
                  <fieldset className="space-y-2 mb-4">
                    <label
                      htmlFor="username"
                      className="block text-tagline-2 font-medium text-secondary dark:text-accent select-none">
                      Username
                    </label>
                    <input type="text" id="username" className="auth-form-input" placeholder="Your unique identifier" />
                  </fieldset>
                  <fieldset className="space-y-2 mb-4">
                    <label
                      htmlFor="email"
                      className="block text-tagline-2 font-medium text-secondary dark:text-accent select-none">
                      Your email
                    </label>
                    <input type="email" id="email" className="auth-form-input" placeholder="Email address" />
                  </fieldset>
                  <fieldset className="space-y-2 mb-4">
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
                  <fieldset className="space-y-2 mb-8">
                    <label
                      htmlFor="confirm-password"
                      className="block text-tagline-2 font-medium text-secondary dark:text-accent select-none">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="auth-form-input"
                      placeholder="Re-enter your password"
                    />
                  </fieldset>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full before:content-none first-letter:uppercase">
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="py-8 text-center">
                  <p className="text-tagline-2 font-normal text-secondary dark:text-accent">Or</p>
                </div>
                <div>
                  <SocialAuthV2 />
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <div className="hidden lg:block">
                <figure className="max-w-[456px] h-[665px] w-full rounded-[20px] overflow-hidden">
                  <Image src={SignupBgImage} alt="login-bg" className="size-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupHeroV4;
