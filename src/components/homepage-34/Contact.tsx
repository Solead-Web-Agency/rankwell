import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'address';
  value: string;
  href?: string;
  ariaLabel?: string;
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    type: 'email',
    value: 'hello@nextsaas.com',
    href: 'mailto:hello@nextsaas.com',
    ariaLabel: 'Email us at hello@nextsaas.com',
  },
  {
    id: 2,
    type: 'phone',
    value: '(239) 555-0108',
    href: 'tel:2395550108',
    ariaLabel: 'Call us at (239) 555-0108',
  },
  {
    id: 3,
    type: 'address',
    value: '4140 Parker Rd, Allentown, NM 31134',
  },
];

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getIcon = (type: string) => {
  switch (type) {
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
    case 'address':
      return <LocationIcon />;
    default:
      return null;
  }
};

const Contact = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-[100px] bg-background-3 dark:bg-background-5" aria-label="Contact Us">
        <div className="main-container">
          <div className="flex lg:gap-10 flex-col space-y-18 lg:space-y-0 lg:flex-row lg:justify-between">
            <div className="space-y-9 flex-1 flex lg:flex-col md:flex-row flex-col justify-between md:gap-10 lg:gap-0">
              <div className="space-y-7 flex-1">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="contact-heading" className="max-w-[517px]">
                      Support when you need It
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="max-w-[372px]">
                      Our support team is here to guide you—whether you&apos;re picking a plan or filing a claim.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/support"
                      className="font-medium btn hover:btn-green dark:btn-transparent btn-lg btn-white w-[90%] md:w-auto mx-auto md:mx-0">
                      Contact support
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <ul className="md:space-y-6 space-y-4 flex-1" aria-label="Contact Information">
                {contactInfo.map((info, index) => (
                  <RevealAnimation key={info.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-2">
                      <span
                        className="size-10 bg-white dark:bg-background-8 rounded-full flex items-center justify-center"
                        aria-hidden="true">
                        {getIcon(info.type)}
                      </span>
                      <p>
                        {info.href ? (
                          <Link href={info.href} aria-label={info.ariaLabel}>
                            {info.value}
                          </Link>
                        ) : (
                          info.value
                        )}
                      </p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="md:p-[42px] p-7 bg-white dark:bg-background-6 rounded-[20px] lg:max-w-[605px] flex-1">
                <form action="#" method="post">
                  {/* name field */}
                  <fieldset className="w-full flex flex-col gap-2 items-start justify-start md:mb-8 mb-5">
                    <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      placeholder="Enter your name"
                      className="rounded-full placeholder:text-tagline-1 border border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                      aria-required="true"
                    />
                  </fieldset>

                  {/* email field */}
                  <fieldset className="w-full flex flex-col gap-2 items-start justify-start md:mb-8 mb-5">
                    <label
                      htmlFor="emailAddress"
                      className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Enter your email"
                      className="rounded-full placeholder:text-tagline-1 border border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                      aria-required="true"
                    />
                  </fieldset>

                  {/* message field */}
                  <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-4">
                    <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Message
                    </label>
                    <textarea
                      name="messages"
                      id="messages"
                      required
                      placeholder="Enter your message"
                      className="rounded-xl placeholder:text-tagline-1 border border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent w-full px-[18px] py-3 min-h-[120px] resize-none focus-visible:outline focus-visible:outline-primary-500 placeholder:font-normal font-normal"
                      aria-required="true"></textarea>
                  </fieldset>

                  {/* terms and conditions checkbox */}
                  <fieldset className="flex items-center gap-2 mb-4">
                    <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                      <input id="agree-terms" type="checkbox" className="sr-only peer" required />
                      <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer"></span>
                    </label>
                    <label
                      htmlFor="agree-terms"
                      className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                      I agree with the{' '}
                      <Link href="#" className="text-primary-500 underline text-tagline-3">
                        terms and conditions
                      </Link>
                    </label>
                  </fieldset>

                  {/* submit button */}
                  <button
                    type="submit"
                    className="btn btn-secondary dark:btn-accent btn-md w-full before:content-none first-letter:uppercase hover:btn-green"
                    aria-label="Submit contact form">
                    Submit
                  </button>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Contact;
