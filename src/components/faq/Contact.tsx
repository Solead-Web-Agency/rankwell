import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="main-w-[850px] md:w-full mx-auto text-center space-y-5">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Contact</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">Still have questions?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[442px] sm:w-full mx-auto">
                  If your question isn&apos;t listed here, feel free to contact us or start a live chat with our team.
                  We&apos;re happy to help!
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* form */}
          <RevealAnimation delay={0.5}>
            <div className="contact-form max-w-[850px] md:w-full mx-auto bg-white dark:bg-background-6 rounded-[20px] p-5 sm:p-[42px]">
              <form action="/" method="POST">
                {/* full name */}
                <div className="space-y-2 mb-8">
                  <label
                    htmlFor="fullname"
                    className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    className="w-full px-[18px] shadow-1 dark:text-accent dark:bg-background-6 py-2 rounded-full border border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                {/* email */}
                <div className="space-y-2 mb-8">
                  <label htmlFor="email" className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="w-full px-[18px] py-2 dark:text-accent rounded-full border dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-accent/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                  />
                </div>
                {/* message */}
                <div className="space-y-2 mb-4">
                  <label htmlFor="message" className="block text-tagline-1 text-secondary dark:text-accent font-medium">
                    Messages
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your messages"
                    required
                    className="w-full px-[18px] py-2 rounded-xl dark:bg-background-6 border dark:text-accent border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:outline-none focus:border-primary-500 placeholder:text-tagline-1 placeholder:font-normal font-normal"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    I agree with the
                    <Link href="#" className="text-primary-500 underline text-tagline-3">
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary dark:btn-accent w-full before:content-none first-letter:uppercase hover:btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
