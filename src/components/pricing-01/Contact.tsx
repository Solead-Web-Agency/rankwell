{
  /* =========================
Contact section
===========================*/
}
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="text-center max-w-[650px] mx-auto space-y-5">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Contact</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Let us know how we can assist you</h2>
            </RevealAnimation>
          </div>
        </div>
        {/* contact form  */}
        <RevealAnimation delay={0.4}>
          <div className="p-6 lg:p-[42px] bg-white dark:bg-background-8 rounded-[20px] max-w-[850px] mx-auto md:w-full">
            <form action="#" method="post">
              {/* name field  */}
              <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-8">
                <label htmlFor="fullName" className="text-tagline-1 text-secondary font-medium dark:text-accent">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Enter your name"
                  className="rounded-full dark:text-accent placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                  aria-required="true"
                />
              </fieldset>
              {/* email field  */}
              <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-8">
                <label htmlFor="emailAddress" className="text-tagline-1 text-secondary font-medium dark:text-accent">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Enter your email"
                  className="rounded-full dark:text-accent placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                  aria-required="true"
                />
              </fieldset>
              {/* message field  */}
              <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-4">
                <label htmlFor="messages" className="text-tagline-1 text-secondary font-medium dark:text-accent">
                  Message
                </label>
                <textarea
                  name="messages"
                  id="messages"
                  required
                  placeholder="Enter your message"
                  className="rounded-xl placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 w-full px-[18px] py-3 min-h-[120px] resize-none focus-visible:outline focus-visible:outline-primary-500 dark:text-accent placeholder:font-normal font-normal"
                  aria-required="true"
                  defaultValue={''}
                />
              </fieldset>
              {/* terms and conditions checkbox */}
              <fieldset className="flex items-center gap-2 mb-4">
                <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                  <input id="agree-terms" type="checkbox" className="sr-only peer" required />
                  <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                </label>
                <label
                  htmlFor="agree-terms"
                  className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                  I agree with the{' '}
                  <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                    terms and conditions
                  </Link>
                </label>
              </fieldset>
              {/* submit button */}
              <button
                type="submit"
                className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md w-full before:content-none first-letter:uppercase"
                aria-label="Submit contact form">
                Submit
              </button>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Contact;
