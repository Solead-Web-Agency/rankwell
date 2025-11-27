import avatar from '@public/images/avatar/avatar-6.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Comment = () => {
  return (
    <RevealAnimation delay={0.2}>
      <article className="max-w-[850px] mx-auto mt-10 md:mt-[72px]">
        <div className="space-y-4 mb-[70px]">
          <h5 className="text-heading-4">Comments</h5>
          <div className="flex items-center gap-3">
            <figure className="size-14 rounded-2xl overflow-hidden bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]">
              <Image
                src={avatar}
                className="object-center object-cover"
                alt="Esther Howard's avatar"
                width={56}
                height={56}
                loading="lazy"
              />
            </figure>
            <div>
              <h3 className="text-tagline-1 font-medium">Esther Howard</h3>
              <time
                dateTime="2024-04-17"
                className="text-tagline-2 flex items-center gap-2 font-normal text-secondary/60 dark:text-accent/60">
                Apr 17, 2024
              </time>
            </div>
          </div>
          <p>
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
            though it looks like nothing.
          </p>
          <h6 className="text-tagline-1">Reply</h6>
        </div>
        <div className="px-4 py-6 md:p-6 lg:p-[42px] bg-white dark:bg-background-8 rounded-[20px] max-w-[850px] md:w-full">
          <form action="#" method="post">
            {/* name field  */}
            <fieldset className="w-full flex flex-col gap-2 items-start justify-start mb-8">
              <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                placeholder="Enter your name"
                className="rounded-full placeholder:text-tagline-1 placeholder:font-normal font-normal dark:placeholder:text-accent/60 dark:text-accent border border-stroke-3 dark:border-stroke-6 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500"
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
                required
                name="emailAddress"
                id="emailAddress"
                placeholder="Enter your email"
                className="rounded-full placeholder:text-tagline-1 placeholder:font-normal font-normal dark:placeholder:text-accent/60 dark:text-accent border border-stroke-3 dark:border-stroke-6 w-full px-[18px] py-3 focus-visible:outline focus-visible:outline-primary-500"
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
                required
                placeholder="Enter your message"
                className="rounded-xl placeholder:text-tagline-1 placeholder:font-normal font-normal dark:placeholder:text-accent/60 dark:text-accent border border-stroke-3 dark:border-stroke-6 w-full px-[18px] py-3 min-h-[120px] resize-none focus-visible:outline focus-visible:outline-primary-500"
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
              className="btn btn-secondary dark:btn-accent btn-md w-full before:content-none first-letter:uppercase hover:btn-primary"
              aria-label="Submit contact form">
              Submit
            </button>
          </form>
        </div>
      </article>
    </RevealAnimation>
  );
};

export default Comment;
