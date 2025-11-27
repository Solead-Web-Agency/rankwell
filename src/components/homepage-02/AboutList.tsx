import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/home-page-2/about-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// About list data
const aboutListData = [
  {
    id: 1,
    text: 'Build and launch effortlessly, no coding skills needed.',
  },
  {
    id: 2,
    text: 'Dive right into action and elevate your sales.',
  },
  {
    id: 3,
    text: 'We accelerate growth with cutting-edge digital solutions.',
  },
  {
    id: 4,
    text: 'We grasp the unique requirements of your business.',
  },
];

const AboutList = () => {
  return (
    <RevealAnimation delay={0.3}>
      <div className="relative z-10 col-span-12">
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
          <Image src={aboutBg} alt=" about bg" className="h-full w-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-5 px-6 py-14 max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-5 max-sm:py-8 md:px-11">
          <div className="about-content max-w-[500px]">
            <h5 className="text-accent max-sm:text-heading-6 mb-8">
              Develop a fully functional website that includes engaging content and visuals.
            </h5>
            <LinkButton href="/contact-us" className="btn btn-md btn-white hover:btn-white-dark">
              Get started
            </LinkButton>
          </div>
          <div>
            <ul className="space-y-5 max-sm:space-y-3">
              {aboutListData.map((item) => (
                <li key={item.id} className="flex items-center gap-2 max-sm:gap-2.5">
                  <span className="size-5 rounded-full bg-accent/17">
                    <CheckIcon className="dark:fill-accent" />
                  </span>
                  <span className="text-accent max-sm:text-tagline-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

AboutList.displayName = 'AboutList';
export default AboutList;
