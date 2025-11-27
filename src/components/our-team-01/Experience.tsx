import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Experience = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-5 mb-[70px] text-center">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Over a decade of experience in this field.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[744px] mx-auto">
                With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill,
                and trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="flex flex-col md:flex-row py-6 bg-secondary rounded-[20px]">
            <div className="py-6 space-y-6 flex-1 max-md:border-b max-md:border-b-accent/20 md:border-r md:border-r-accent/20">
              <figure className="flex items-center justify-center bg-ns-yellow rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={checkCircle} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center gap-0.5 text-heading-6 font-normal">
                  <NumberAnimation number={80} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    80
                  </NumberAnimation>
                  % Project completed
                </h3>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1 max-md:border-b max-md:border-b-accent/20 md:border-r md:border-r-accent/20">
              <figure className="flex items-center justify-center bg-ns-cyan rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={users} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center gap-1 text-heading-6 font-normal">
                  <NumberAnimation number={25} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    25
                  </NumberAnimation>
                  Team members
                </h3>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1">
              <figure className="flex items-center justify-center bg-ns-red rounded-full mx-auto px-7 py-3.5 w-20 h-[52px]">
                <Image src={thumbsUp} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center gap-1 text-heading-6 font-normal">
                  <NumberAnimation number={250} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    250
                  </NumberAnimation>
                  Satisfied clients
                </h3>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Experience;
