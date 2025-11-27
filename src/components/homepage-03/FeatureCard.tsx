import { DarkVoiceIcon, VoiceIcon } from '@/icons';
import avatar1 from '@public/images/avatar/avatar-9.png';
import gradient17 from '@public/images/gradient/gradient-17.png';
import project from '@public/images/icons/project.svg';
import userV2 from '@public/images/icons/user-v2.svg';
import user from '@public/images/icons/user.svg';
import weixinFavorites from '@public/images/icons/weixin-favorites.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-6 lg:gap-x-[42px]">
      {/* Feature Card 1 */}
      <RevealAnimation delay={0.4}>
        <article className="col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="dark:bg-background-6 group h-full w-full rounded-[20px] bg-white px-4 pt-4 pb-6 md:px-6 md:pt-6 md:pb-8">
            <div className="bg-background-3 group-hover:bg-background-3/50 dark:bg-background-7 dark:group-hover:bg-background-7/50 mb-6 rounded-2xl p-4 transition-all duration-300 ease-out group-hover:scale-[102%] md:mb-8">
              <Image
                className="mt-5 inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2 ring-white dark:ring-black"
                src={avatar1}
                alt="Avatar 1"
              />
              <h3 className="my-2 text-lg md:font-medium">Liam Carter</h3>
              <ul className="mb-4 flex items-center justify-between">
                <li className="space-y-1">
                  <p className="text-tagline-3 font-normal">Home town</p>
                  <p className="text-tagline-3 font-normal">Bookings</p>
                </li>
                <li className="space-y-1">
                  <p className="text-tagline-3 text-secondary dark:text-accent font-semibold">Singapore</p>
                  <p className="text-tagline-3 text-secondary dark:text-accent font-semibold">3 times</p>
                </li>
              </ul>
              <div className="mb-5 flex items-center gap-2">
                <div>
                  <Link href="#" className="btn text-tagline-3 btn-sm btn-secondary dark:!bg-black dark:!text-white">
                    Call
                  </Link>
                </div>
                <div>
                  <Link href="#" className="btn text-tagline-3 btn-sm btn-green">
                    Message
                  </Link>
                </div>
              </div>
            </div>
            {/* text content- */}
            <h4 className="text-heading-6 md:text-heading-5 mb-2 font-normal">Automated sales solutions</h4>
            <p>Automated sales solutions are technology-driven systems designed to streamline</p>
          </div>
        </article>
      </RevealAnimation>
      {/* Feature Card 2 */}
      <RevealAnimation delay={0.5}>
        <article className="group relative col-span-12 overflow-hidden rounded-[20px] lg:col-span-6 xl:col-span-4">
          {/* background image  */}
          <figure className="pointer-events-none absolute bottom-[-266px] left-[-81px] size-[560px] rotate-[44deg] overflow-hidden select-none md:bottom-[-445px] md:size-[900px] lg:bottom-[-319px] lg:size-[650px] xl:bottom-[-266px] xl:size-[560px]">
            <Image src={gradient17} alt="gradient-img" className="size-full object-cover" />
          </figure>
          <div className="dark:bg-background-6 h-full w-full rounded-[20px] bg-white px-4 pt-4 pb-6 md:px-6 md:pt-8">
            <h3 className="text-heading-6 md:text-heading-5 mb-2 font-normal">AI-driven customer support</h3>
            <p>AI-driven customer support leverages artificial intelligence technologies to enhance</p>
            <div className="bg-background-3 group-hover:bg-background-3/90 dark:bg-background-7 dark:group-hover:bg-background-7/50 relative z-10 mt-8 space-y-4 rounded-2xl p-4 transition-all duration-300 ease-out group-hover:scale-[102%]">
              <ul className="flex items-center justify-between">
                <li className="space-y-1">
                  <h4 className="text-tagline-1 font-medium">Arcanto studio</h4>
                  <p className="text-tagline-3 flex items-center gap-2 font-normal">
                    <span> Chat with nick </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} viewBox="0 0 9 8" fill="none">
                        <circle cx="4.33594" cy={4} r={4} fill="#C6F56F" />
                      </svg>
                    </span>
                    <span>Online</span>
                  </p>
                </li>
                <li className="flex items-center gap-[18px]">
                  <p className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                      <rect
                        x="2.67188"
                        y="5.125"
                        width="14.4845"
                        height="13.7503"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                      <path
                        d="M17.6779 9.38221L22.6719 5.99609V18.006L17.6779 14.3872"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                      <path
                        d="M9.82812 9.08594H13.0329"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </p>
                  <p className="ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-transform duration-300 group-hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                      <path
                        d="M12.6719 3C11.3587 3 10.0583 3.25866 8.84504 3.7612C7.63178 4.26375 6.52939 5.00035 5.60081 5.92893C3.72544 7.8043 2.67188 10.3478 2.67188 13V20C2.67188 20.2652 2.77723 20.5196 2.96477 20.7071C3.1523 20.8946 3.40666 21 3.67188 21H6.67188C7.46752 21 8.23059 20.6839 8.7932 20.1213C9.3558 19.5587 9.67188 18.7956 9.67188 18V16C9.67188 15.2044 9.3558 14.4413 8.7932 13.8787C8.23059 13.3161 7.46752 13 6.67188 13H4.67188C4.67188 10.8783 5.51473 8.84344 7.01502 7.34315C8.51531 5.84285 10.5501 5 12.6719 5C14.7936 5 16.8284 5.84285 18.3287 7.34315C19.829 8.84344 20.6719 10.8783 20.6719 13H18.6719C17.8762 13 17.1132 13.3161 16.5506 13.8787C15.9879 14.4413 15.6719 15.2044 15.6719 16V18C15.6719 18.7956 15.9879 19.5587 16.5506 20.1213C17.1132 20.6839 17.8762 21 18.6719 21H21.6719C21.9371 21 22.1914 20.8946 22.379 20.7071C22.5665 20.5196 22.6719 20.2652 22.6719 20V13C22.6719 10.3478 21.6183 7.8043 19.7429 5.92893C17.8676 4.05357 15.324 3 12.6719 3ZM6.67188 15C6.93709 15 7.19145 15.1054 7.37898 15.2929C7.56652 15.4804 7.67188 15.7348 7.67188 16V18C7.67188 18.2652 7.56652 18.5196 7.37898 18.7071C7.19145 18.8946 6.93709 19 6.67188 19H4.67188V15H6.67188ZM20.6719 19H18.6719C18.4067 19 18.1523 18.8946 17.9648 18.7071C17.7772 18.5196 17.6719 18.2652 17.6719 18V16C17.6719 15.7348 17.7772 15.4804 17.9648 15.2929C18.1523 15.1054 18.4067 15 18.6719 15H20.6719V19Z"
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </p>
                </li>
              </ul>
              <div className="flex items-start gap-6">
                <div>
                  <p className="text-tagline-3 text-secondary dark:text-accent mb-2 rounded-l-2xl rounded-br-2xl bg-white p-2 font-normal dark:bg-black">
                    Contrary to popular belief, lorem ipsum is not simply random text.
                  </p>
                  <time
                    dateTime="2025-07-18T10:21:00"
                    className="text-tagline-3 text-secondary/60 dark:text-accent block justify-self-end font-normal">
                    10:21 am
                  </time>
                </div>
                <Image
                  className="inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2 ring-white dark:ring-black"
                  src={avatar1}
                  alt="Avatar 1"
                />
              </div>
              <div className="mb-5 flex items-center gap-4">
                <Image
                  className="inline-block size-[38px] rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-2 ring-white dark:ring-black"
                  src={avatar1}
                  alt="Avatar 1"
                />
                <div className="bg-secondary/5 dark:bg-accent/5 flex items-center justify-between gap-2 rounded-r-2xl rounded-bl-2xl px-1.5 py-3">
                  <time dateTime="06:18" className="dark:text-accent">
                    06:18
                  </time>
                  <span>
                    <VoiceIcon />
                  </span>
                  <span>
                    <DarkVoiceIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </RevealAnimation>
      {/* Feature Card 3 */}
      <RevealAnimation delay={0.6}>
        <article className="group col-span-12 cursor-alias lg:col-span-6 xl:col-span-4">
          <div className="dark:bg-background-6 h-full w-full rounded-[20px] bg-white px-4 pt-4 pb-4 md:px-6 md:pt-6 md:pb-8">
            <div className="bg-background-3 dark:bg-background-7 mb-8 grid grid-cols-2 gap-4 rounded-2xl p-4">
              {/* 1 */}
              <div className="dark:bg-background-5 flex flex-col justify-center rounded-xl bg-white px-2.5 py-[26px]">
                <figure className="mb-2 flex items-start gap-2">
                  <Image src={user} alt="User" />
                  <figcaption className="text-tagline-2 dark:text-accent font-normal">Customers</figcaption>
                </figure>
                <p className="text-tagline-3 dark:text-accent/60 font-normal">2,490 Available</p>
              </div>
              {/* 2 */}
              <div className="bg-secondary dark:bg-background-6 ease-[cubic-bezier(0.8, 0, 0.2, 9)] flex -rotate-[10deg] flex-col justify-center rounded-xl px-2.5 py-[26px] transition-transform duration-300 group-hover:rotate-0 lg:-rotate-[20deg]">
                <figure className="mb-2 flex items-start gap-2">
                  <Image src={weixinFavorites} alt="Orders" />
                  <figcaption className="text-tagline-2 dark:text-accent font-normal text-white">Orders</figcaption>
                </figure>
                <p className="text-tagline-3 text-accent/60 font-normal">11,559 Completed</p>
              </div>
              {/* 3 */}
              <div className="dark:bg-background-5 flex flex-col justify-center rounded-xl bg-white px-2.5 py-[26px]">
                <figure className="mb-2 flex items-start gap-2">
                  <Image src={project} alt="User" />
                  <figcaption className="text-tagline-2 dark:text-accent font-normal">Projects</figcaption>
                </figure>
                <p className="text-tagline-3 dark:text-accent/60 font-normal">490 done</p>
              </div>
              {/* 4 */}
              <div className="dark:bg-background-5 flex flex-col justify-center rounded-xl bg-white px-2.5 py-[26px]">
                <figure className="mb-2 flex items-start gap-2">
                  <Image src={userV2} alt="User" />
                  <figcaption className="text-tagline-2 dark:text-accent font-normal">Interviews</figcaption>
                </figure>
                <p className="text-tagline-3 dark:text-accent/60 font-normal">2,490 Available</p>
              </div>
            </div>
            {/* text content- */}
            <h6 className="text-heading-6 md:text-heading-5 mb-2 font-normal">Easy setup and use</h6>
            <p>Easy setup and use refer to the simplicity and convenience with which a product</p>
          </div>
        </article>
      </RevealAnimation>
    </div>
  );
};

export default FeatureCard;
