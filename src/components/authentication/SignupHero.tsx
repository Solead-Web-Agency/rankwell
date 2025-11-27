import RevealAnimation from '../animation/RevealAnimation';
import SocialAuth from './SocialAuth';

const SignupHero = () => {
  return (
    <section className="lg:pt-[180px] pt-[120px] lg:pb-[100px] pb-[70px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="max-w-[400px] mx-auto bg-background-1 dark:bg-background-6 rounded-[20px] py-14 px-8">
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
                <input type="password" id="password" className="auth-form-input" placeholder="At least 8 characters" />
              </fieldset>
              <fieldset className="space-y-2 mb-3">
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
              <div className="mt-8">
                <button
                  type="submit"
                  className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full before:content-none first-letter:uppercase">
                  Sign up
                </button>
              </div>
            </form>
            <div className="py-8 text-center">
              <p className="text-tagline-2 font-normal text-secondary dark:text-accent">Or</p>
            </div>
            <div>
              <SocialAuth />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SignupHero;
