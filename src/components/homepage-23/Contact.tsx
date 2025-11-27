import locationWhite from '@public/images/icons/location-white.svg';
import location from '@public/images/icons/location.svg';
import mailWhite from '@public/images/icons/mail-white.svg';
import mail from '@public/images/icons/mail.svg';
import phoneWhite from '@public/images/icons/phone-white.svg';
import phone from '@public/images/icons/phone.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]" aria-label="Contact Us">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-8 items-start justify-between">
          <div className="space-y-9">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="inline-block badge badge-cyan">Contact Us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>
                    Still have
                    <span className="text-primary-500"> questions? </span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>Have questions about your financial future? Let’s talk.</p>
                </RevealAnimation>
              </div>
            </div>
            {/* contact info  */}
            <ul className="space-y-3 md:space-y-6" aria-label="Contact Information">
              <RevealAnimation delay={0.4}>
                <li className="flex items-center gap-2">
                  <span
                    className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                    aria-hidden="true">
                    <Image src={mail} alt="Email icon" className="size-6 dark:hidden" />
                    <Image src={mailWhite} alt="Email icon" className="size-6 hidden dark:block" />
                  </span>
                  <p>
                    <Link href="mailto:hello@nextsaas.com" aria-label="Email us at hello@nextsaas.com">
                      hello@nextsaas.com
                    </Link>
                  </p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-2">
                  <span
                    className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                    aria-hidden="true">
                    <Image src={phone} alt="Phone icon" className="size-6 dark:hidden" />
                    <Image src={phoneWhite} alt="Phone icon" className="size-6 hidden dark:block" />
                  </span>
                  <p>
                    <Link href="tel:2395550108" aria-label="Call us at (239) 555-0108">
                      (239) 555-0108
                    </Link>
                  </p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-2">
                  <span
                    className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                    aria-hidden="true">
                    <Image src={location} alt="Location icon" className="size-6 dark:hidden" />
                    <Image src={locationWhite} alt="Location icon" className="size-6 hidden dark:block" />
                  </span>
                  <p>1425 Harmony ave, austin, TX 73301</p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* contact form  */}
          <RevealAnimation delay={0.7}>
            <div className="p-7 lg:p-[42px] bg-white dark:bg-background-8 rounded-[20px] lg:max-w-[560px] lp:max-w-[605px] w-full">
              <form action="/" method="post">
                {/* name field  */}
                <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-8">
                  <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your name"
                    className="rounded-full placeholder:text-tagline-1 border border-stroke-3 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary placeholder:font-normal font-normal"
                    aria-required="true"
                  />
                </fieldset>
                {/* email field  */}
                <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-8">
                  <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    placeholder="Enter your email"
                    className="rounded-full placeholder:text-tagline-1 border border-stroke-3 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary placeholder:font-normal font-normal"
                    aria-required="true"
                  />
                </fieldset>
                {/* message field  */}
                <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-4">
                  <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Message
                  </label>
                  <textarea
                    name="messages"
                    id="messages"
                    placeholder="Enter your message"
                    className="rounded-xl placeholder:text-tagline-1 border border-stroke-3 w-full px-[18px] py-3 min-h-[120px] resize-none focus-visible:outline focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary placeholder:font-normal font-normal"
                    aria-required="true"
                    defaultValue={''}
                  />
                </fieldset>
                {/* terms and conditions checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                    <input id="agree-terms" type="checkbox" className="sr-only peer" />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    I agree with the
                    <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-secondary dark:btn-accent btn-md w-full before:content-none first-letter:uppercase hover:btn-primary"
                  aria-label="Submit contact form">
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
