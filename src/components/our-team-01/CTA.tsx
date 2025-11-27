import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-6 pt-[120px] pb-[200px]">
      <div className="main-container">
        <div className="">
          <div className="text-center space-y-3">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5 inline-block">Get started</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[1042px] mx-auto">
                NextSaaS – your ultimate email &amp; transactional messaging platform
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[600px] mx-auto">
                Drive more engagement. improve deliverability. automate your emails.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-8 mt-[62px] max-sm:w-[80%] max-sm:mx-auto">
            <RevealAnimation delay={0.4}>
              <form action="#" method="post" className="max-sm:flex-col flex items-center justify-center gap-3">
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Enter your email"
                  className="px-[18px] h-12 py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 dark:bg-background-6 dark:placeholder:text-white/40 text-secondary/60 dark:text-white/60 dark:bg-dark-200 dark:border-[#31332F] focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 max-w-[440px] w-full placeholder:font-normal font-normal"
                />
                <button
                  type="submit"
                  className="btn btn-md btn-primary dark:btn-accent dark:hover:btn-primary border-primary-400 h-12 hover:btn-secondary max-sm:w-full">
                  <span>Get started</span>
                </button>
              </form>
            </RevealAnimation>
            <ul className="flex items-center justify-center gap-[42px]">
              <RevealAnimation delay={0.2}>
                <li className="flex items-center justify-center gap-2">
                  <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  <p className="text-tagline-2">No credit card required</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <li className="flex items-center justify-center gap-2">
                  <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  <p className="text-tagline-2">14-Day free trial</p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
