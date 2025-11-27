import supportContact from '@public/images/support-page/support-contact.jpg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-[100px] pb-[100px] md:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[100px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="text-left space-y-5 mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Our services</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Create a support ticket</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[550px]">
                    Have a question, feedback, or feature request? We’d love to hear from you! Please fill out the form
                    below, and our support team will get back to you as soon as possible.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <figure className="lg:max-w-[595px] w-full overflow-hidden rounded-[20px]">
                <Image src={supportContact} className="size-full object-cover" alt="support-contact" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.5}>
              <form className="p-6 lg:p-[42px] rounded-[20px] bg-white dark:bg-background-8">
                <fieldset className="space-y-2 mb-8">
                  <label htmlFor="name" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-full h-12 focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1"
                  />
                </fieldset>
                <fieldset className="space-y-2 mb-8">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-full h-12 focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1"
                  />
                </fieldset>
                <fieldset className="space-y-2">
                  <label htmlFor="comment" className="text-tagline-1 text-secondary dark:text-accent font-medium block">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Enter your comment"
                    className="w-full min-h-[115px] block border border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 py-3 px-[18px] rounded-xl focus:outline-none focus:ring-0 focus:ring-offset-0 placeholder:text-tagline-1 placeholder:font-normal font-normal placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1"
                    defaultValue={''}
                  />
                </fieldset>
                <fieldset className="flex mt-4 items-center gap-2 mb-4">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                    <input id="agree-terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    I agree with the
                    <Link href="#" className="text-primary-500 underline text-tagline-3">
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full before:content-none first-letter:uppercase">
                  Submit
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
