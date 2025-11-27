import authorAvatarBgImg from '@public/images/avatar/author-avatar-bg.png';
import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import avatar7Img from '@public/images/avatar/avatar-7.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5"> Our Mission </span>
            </RevealAnimation>
            <div className="space-y-3 md:max-w-[540px]">
              <RevealAnimation delay={0.2}>
                <h2>To help teams work and grow with smart, secure software.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  We help companies turn messy workflows into manageable systems—one dashboard, one automation, one
                  insight at a time.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="w-full lg:w-1/2 max-w-[650px] rounded-[20px] bg-background-2 dark:bg-background-5 p-5 md:p-8 xl:p-[50px]">
              <div className="flex gap-4 sm:gap-2.5 flex-wrap sm:flex-nowrap">
                <div className="bg-white dark:bg-background-8 p-6 rounded-2xl w-full sm:w-[55%]">
                  <h5 className="mb-4">
                    Task <br className="hidden lg:block" />
                    management
                  </h5>
                  <div className="flex items-center gap-4 mb-7">
                    <figure className="inline-block size-14 rounded-full ring-4 ring-white bg-linear-[135deg,#ffffff_0%,#a585ff_100%] overflow-hidden relative">
                      <Image src={avatar7Img} alt="avatar" className="max-w-full" />
                      <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                    </figure>
                    <div>
                      <h5 className="text-secondary dark:text-accent">Curious george</h5>
                      <p className="text-secondary/60 dark:text-accent/60">UI UX designer</p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-secondary/10 dark:bg-accent/10 mb-7" />
                  <div className="flex items-center justify-between">
                    <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 font-medium">1 days Ago</p>
                    <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.6263 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                        fill=""
                        className="fill-secondary dark:fill-accent"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-white dark:bg-background-8 p-6 rounded-2xl w-full sm:w-[45%]">
                  <h5 className="mb-4">Progress Tracking</h5>
                  <div className="relative w-fit flex items-center justify-center">
                    <svg
                      className="animate-pulse"
                      width={176}
                      height={176}
                      viewBox="0 0 176 176"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.4106 38.2529C5.02285 53.4103 -0.359462 71.4393 0.0186306 89.8107C0.396723 108.182 6.51625 125.974 17.5188 140.692C28.5213 155.409 43.8549 166.313 61.3685 171.874C78.8822 177.434 97.6973 177.373 115.175 171.699C132.652 166.025 147.914 155.022 158.821 140.234C169.728 125.445 175.732 107.614 175.991 89.2404C176.25 70.8669 170.751 52.8732 160.265 37.7834C149.78 22.6937 134.833 11.2648 117.523 5.10011L116.189 8.84623C132.717 14.7324 146.988 25.6448 157 40.0526C167.012 54.4605 172.262 71.6411 172.015 89.1843C171.768 106.728 166.035 123.753 155.621 137.873C145.207 151.993 130.634 162.499 113.947 167.917C97.2591 173.335 79.2942 173.393 62.572 168.083C45.8497 162.774 31.2091 152.363 20.7037 138.31C10.1984 124.258 4.35538 107.27 3.99437 89.7289C3.63337 72.1876 8.77246 54.9734 18.6908 40.5009L15.4106 38.2529Z"
                        fill="url(#paint0_linear_3092_23898)"
                      />
                      <path
                        d="M20 88C20 102.069 24.3636 115.791 32.4893 127.275C40.615 138.76 52.1028 147.442 65.3695 152.124C78.6361 156.806 93.0283 157.258 106.563 153.417C120.097 149.577 132.107 141.633 140.937 130.681C149.767 119.729 154.983 106.307 155.866 92.2666C156.749 78.2257 153.255 64.2567 145.866 52.2849C138.476 40.313 127.556 30.9277 114.609 25.4225C101.663 19.9173 87.3271 18.5632 73.5785 21.5468L74.4337 25.4873C87.367 22.6805 100.852 23.9543 113.031 29.1331C125.21 34.3119 135.483 43.1407 142.434 54.4027C149.385 65.6646 152.672 78.8053 151.842 92.0136C151.011 105.222 146.105 117.847 137.798 128.15C129.491 138.453 118.194 145.926 105.462 149.538C92.7302 153.151 79.1913 152.726 66.7114 148.321C54.2314 143.917 43.4248 135.75 35.7809 124.947C28.137 114.143 24.0322 101.234 24.0322 88H20Z"
                        fill="url(#paint1_linear_3092_23898)"
                      />
                      <path
                        d="M115.552 48.6952C110.391 45.077 104.567 42.5109 98.4138 41.1433C92.2605 39.7757 85.8981 39.6335 79.6899 40.7248C73.4816 41.8161 67.5491 44.1196 62.231 47.5036C56.9129 50.8876 52.3135 55.286 48.6952 60.4476C45.077 65.6091 42.5109 71.4328 41.1433 77.5861C39.7757 83.7395 39.6335 90.1019 40.7248 96.3101C41.8161 102.518 44.1196 108.451 47.5036 113.769C50.8876 119.087 55.286 123.687 60.4476 127.305L62.756 124.012C58.0268 120.697 53.997 116.483 50.8965 111.61C47.7959 106.738 45.6855 101.302 44.6856 95.6139C43.6858 89.9258 43.816 84.0964 45.069 78.4586C46.322 72.8209 48.6732 67.4851 51.9883 62.756C55.3034 58.0268 59.5175 53.997 64.39 50.8965C69.2625 47.7959 74.698 45.6855 80.3861 44.6856C86.0742 43.6858 91.9036 43.816 97.5414 45.069C103.179 46.322 108.515 48.6732 113.244 51.9883L115.552 48.6952Z"
                        fill="url(#paint2_linear_3092_23898)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3092_23898"
                          x1="166.222"
                          y1="87.9976"
                          x2="2.31009e-06"
                          y2="87.9976"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#864FFE" />
                          <stop offset={1} stopColor="#864FFE" stopOpacity="0.28" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_3092_23898"
                          x1="148.444"
                          y1="87.9982"
                          x2={20}
                          y2="87.9982"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#864FFE" />
                          <stop offset={1} stopColor="#864FFE" stopOpacity="0.28" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_3092_23898"
                          x1="130.667"
                          y1="87.9987"
                          x2={40}
                          y2="87.9987"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#864FFE" />
                          <stop offset={1} stopColor="#864FFE" stopOpacity="0.28" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <figure className="inline-block size-14 rounded-full ring-4 ring-white bg-linear-[135deg,#ffffff_0%,#a585ff_100%] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Image src={avatar2Img} alt="avatar" className="max-w-full" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 p-6 rounded-2xl bg-secondary dark:bg-background-6 max-w-[370px] mt-2.5 z-10 relative">
                <div className="flex -space-x-3.5 cursor-pointer">
                  <Image
                    className="inline-block size-14 rounded-full ring-4 ring-ns-yellow bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]"
                    src={avatar1Img}
                    alt="Avatar 1"
                  />
                  <Image
                    className="inline-block size-14 rounded-full ring-4 ring-ns-yellow bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]"
                    src={avatar2Img}
                    alt="Avatar 2"
                  />
                  <Image
                    className="inline-block size-14 rounded-full ring-4 ring-ns-yellow bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]"
                    src={avatar3Img}
                    alt="Avatar 3"
                  />
                </div>
                <div>
                  <h5 className="text-accent mb-1">Mischievous</h5>
                  <p className="text-accent/60">UI UX designer</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
