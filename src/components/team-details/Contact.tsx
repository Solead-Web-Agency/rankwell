import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] bg-background-2 dark:bg-background-7">
      <div className="main-container space-y-[70px]">
        <div className="text-center max-w-[650px] mx-auto space-y-5">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Contact</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Let us know how we can assist you</h2>
            </RevealAnimation>
          </div>
        </div>
        {/* contact form  */}
        <RevealAnimation delay={0.4}>
          <div className="p-6 lg:p-11 bg-background-3 dark:bg-background-6 rounded-[32px] max-w-[850px] mx-auto w-full">
            <form action="#" method="post" className="grid grid-cols-12 sm:gap-x-8 gap-y-8">
              {/* name field  */}
              <fieldset className="col-span-12 md:col-span-6 flex flex-col gap-y-2 items-start justify-start">
                <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Enter your name"
                  className="rounded-full placeholder:text-tagline-1 dark:text-accent dark:placeholder:text-accent/60 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                  aria-required="true"
                />
              </fieldset>
              {/* email field  */}
              <fieldset className="col-span-12 md:col-span-6 w-full flex flex-col gap-2 items-start justify-start">
                <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
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
              <fieldset className="col-span-12 w-full flex flex-col gap-2 items-start justify-start">
                <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Message
                </label>
                <textarea
                  name="messages"
                  id="messages"
                  required
                  placeholder="Enter your message"
                  className="rounded-xl dark:text-accent dark:placeholder:text-accent/60 dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 w-full px-[18px] py-3 min-h-[207px] resize-none focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                  aria-required="true"
                  defaultValue={''}
                />
              </fieldset>
              {/* submit button */}
              <div className="w-full mt-6 col-span-12">
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md w-full mx-auto before:content-none first-letter:uppercase"
                  aria-label="Submit contact form">
                  Contact now
                </button>
              </div>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Contact;
