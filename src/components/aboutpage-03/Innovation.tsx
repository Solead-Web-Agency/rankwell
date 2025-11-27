import { CheckIcon } from '@/icons';
import aboutBgImg from '@public/images/home-page-2/about-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const checklist = [
  {
    id: 1,
    text: 'Embracing clarity means prioritizing simplicity and focus',
  },
  {
    id: 2,
    text: 'Innovation driven by customer insights leads to solutions',
  },
  {
    id: 3,
    text: 'Implementing security measures as a foundational principle',
  },
  {
    id: 4,
    text: 'Building transparency and trust is essential for fostering',
  },
];
const Innovation = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <Image src={aboutBgImg} alt="about bg" className="w-full h-full object-cover" />
            </div>
            <div className="py-14 px-6 md:px-11 grid max-sm:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px]">
                <h2 className="text-accent text-heading-5 mb-8">
                  At our core, we believe in integrity, innovation, and collaboration.
                </h2>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                    Get started
                  </LinkButton>
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  {checklist.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <span className="size-5 bg-accent/20 rounded-full flex items-center justify-center">
                        <CheckIcon className="fill-accent/30 dark:fill-accent size-[18px]" />
                      </span>
                      <span className="text-accent">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Innovation;
