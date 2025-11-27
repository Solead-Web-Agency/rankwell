import NumberAnimation from '@/components/animation/NumberAnimation';
import { cn } from '@/utils/cn';
import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import avatar4 from '@public/images/avatar/avatar-4.png';
import avatar5 from '@public/images/avatar/avatar-5.png';
import avatar6 from '@public/images/avatar/avatar-6.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Avatar data
const avatarData = [
  {
    id: 1,
    src: avatar1,
    alt: 'Avatar 1',
  },
  {
    id: 2,
    src: avatar2,
    alt: 'Avatar 2',
  },
  {
    id: 3,
    src: avatar3,
    alt: 'Avatar 3',
  },
  {
    id: 4,
    src: avatar4,
    alt: 'Avatar 4',
  },
  {
    id: 5,
    src: avatar5,
    alt: 'Avatar 5',
  },
  {
    id: 6,
    src: avatar6,
    alt: 'Avatar 6',
  },
];

const AboutAvatarCard = () => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="dark:bg-background-5 col-span-6 rounded-[20px] bg-white max-md:col-span-12">
        <div className="bg-secondary dark:bg-background-9 flex items-center rounded-[12px] p-5 sm:p-8">
          <div className="flex flex-2/3 flex-col gap-4">
            <div className="flex -space-x-2">
              {avatarData.map((avatar) => (
                <Image
                  key={avatar.id}
                  className={cn(
                    'ring-secondary inline-block size-9 rounded-full bg-white ring-4',
                    avatar.id > 4 && 'hidden sm:inline-block',
                  )}
                  src={avatar.src}
                  alt={avatar.alt}
                />
              ))}
              <div className="ring-secondary text-accent bg-primary-500 text-tagline-3 inline-flex size-9 shrink-0 items-center justify-center rounded-full font-medium ring-4">
                20+
              </div>
            </div>

            <p className="text-accent font-medium">
              Gather worldwide user <br className="hidden sm:block" />
              data for the current
            </p>
          </div>

          <div className="ml-auto flex flex-1/3 flex-col items-center justify-end">
            <div className="relative w-fit">
              <svg width="114" height="113" viewBox="0 0 114 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M114 56.5C114 87.7041 88.4802 113 57 113C25.5198 113 0 87.7041 0 56.5C0 25.2959 25.5198 0 57 0C88.4802 0 114 25.2959 114 56.5ZM13.68 56.5C13.68 80.2151 33.075 99.44 57 99.44C80.925 99.44 100.32 80.2151 100.32 56.5C100.32 32.7849 80.925 13.56 57 13.56C33.075 13.56 13.68 32.7849 13.68 56.5Z"
                  fill=""
                  fillOpacity="0.2"
                  className="fill-accent"
                />
                <path
                  d="M57 6.78C57 3.03551 60.0459 -0.0412769 63.7644 0.399254C70.4102 1.18659 76.8824 3.13028 82.8775 6.15813C90.8922 10.206 97.8267 16.0767 103.114 23.2901C108.401 30.5036 111.891 38.8549 113.298 47.6615C114.705 56.468 113.99 65.4796 111.21 73.9595C108.431 82.4394 103.666 90.1468 97.3051 96.4515C90.9445 102.756 83.1689 107.479 74.614 110.235C66.059 112.99 56.9677 113.699 48.0832 112.304C41.4691 111.266 35.1094 109.083 29.2884 105.873C25.98 104.049 25.3169 99.7256 27.5504 96.6784V96.6784C29.7576 93.667 33.9625 93.0531 37.2934 94.7397C41.3425 96.7899 45.7047 98.2019 50.2233 98.9113C56.9754 99.9714 63.8849 99.4324 70.3866 97.3384C76.8884 95.2444 82.7978 91.6548 87.6319 86.8632C92.4659 82.0715 96.0872 76.2139 98.1998 69.7692C100.312 63.3245 100.856 56.4757 99.7867 49.7827C98.7172 43.0898 96.0649 36.7427 92.0466 31.2605C88.0283 25.7783 82.7581 21.3166 76.6669 18.2402C72.5968 16.1846 68.2373 14.7864 63.7529 14.0849C60.0534 13.5062 57 10.5245 57 6.78V6.78Z"
                  fill=""
                  className="fill-primary-500"
                />
              </svg>
              <h6 className="text-accent absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
                <NumberAnimation number={95} speed={1500} interval={150} rooms={2}>
                  95
                </NumberAnimation>
                <span className="font-inherit">%</span>
              </h6>
            </div>

            <p className="text-secondary bg-ns-green relative z-10 -mt-6 rounded-[12px] px-4 py-2 md:px-4 lg:px-6">
              <span>Active User</span>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[375px] py-8 text-center max-lg:px-6 max-lg:py-6 max-lg:text-left">
          <h5 className="max-lg:text-heading-6 mb-2">An intuitive website creation tool.</h5>
          <p className="max-lg:text-tagline-2">
            An intuitive website creation tool is designed to simplify the process of building a website, making it
            accessible even for users
          </p>
        </div>
      </div>
    </RevealAnimation>
  );
};

AboutAvatarCard.displayName = 'AboutAvatarCard';
export default AboutAvatarCard;
