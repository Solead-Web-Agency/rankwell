import avatar1 from '@public/images/avatar/avatar-7.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const AboutUserCard = () => {
  return (
    <RevealAnimation delay={0.5}>
      <div className="dark:bg-background-5 col-span-6 rounded-[20px] bg-white max-md:col-span-12">
        <div className="bg-secondary dark:bg-background-9 rounded-xl p-5 sm:p-8">
          <div className="mb-[46px] flex items-center gap-4">
            <figure className="relative inline-block size-14 overflow-hidden rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-4 ring-white">
              <Image src={avatar1} alt="avatar" className="max-w-full" />
            </figure>
            <div>
              <h5 className="text-accent max-sm:text-heading-6">Curious george</h5>

              <p className="text-accent/60 max-sm:text-tagline-2">UI UX designer</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_244_14392)">
                  <path
                    d="M20 2.5C20.552 2.5 21 2.948 21 3.5V7.257L19 9.257V4.5H5V20.5H19V17.742L21 15.742V21.5C21 22.052 20.552 22.5 20 22.5H4C3.448 22.5 3 22.052 3 21.5V3.5C3 2.948 3.448 2.5 4 2.5H20ZM21.778 9.308L23.192 10.722L15.414 18.5L13.998 18.498L14 17.086L21.778 9.308ZM13 12.5V14.5H8V12.5H13ZM16 8.5V10.5H8V8.5H16Z"
                    fill=""
                    className="fill-ns-green"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_244_14392">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-accent/60 text-tagline-2 font-medium">40 Task</p>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.6263 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                  fill=""
                  className="fill-ns-green"
                />
              </svg>

              <p className="text-accent/60 text-tagline-2 font-medium">4.7 (750 Reviews)</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[375px] py-8 text-center max-lg:px-6 max-lg:py-6 max-lg:text-left">
          <h5 className="max-lg:text-heading-6 mb-2">Content creation powered by AI.</h5>
          <p className="max-lg:text-tagline-2 px-1 sm:px-0">
            Content creation powered by artificial intelligence (AI) is revolutionizing the way digital content is
            produced, curated, and delivered.
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};

AboutUserCard.displayName = 'AboutUserCard';
export default AboutUserCard;
