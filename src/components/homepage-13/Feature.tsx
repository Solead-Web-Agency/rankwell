import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';

const Feature = () => {
  return (
    <section className="py-16 md:py-20 lg:pt-[90px] xl:pt-[100px] lg:pb-[50px]">
      <div className="main-container">
        <div className="py-6 bg-secondary rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px] max-md:border-b-1 md:not-last:border-r-1 not-last:border-accent/20 text-center max-md:w-[70%] max-md:mx-auto">
              <figure className="flex items-center justify-center bg-ns-yellow rounded-full px-7 py-3.5 w-20 h-[52px]">
                <Image src={checkCircle} alt="Project completed" className="size-6" />
              </figure>
              <h6 className="text-white flex items-center gap-1 px-2.5">
                <NumberAnimation number={100} speed={1000} interval={100} rooms={3} heightSpaceRatio={2.5}>
                  100
                </NumberAnimation>
                + Countries
              </h6>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px] max-md:border-b-1 md:not-last:border-r-1 not-last:border-accent/20 text-center max-md:w-[70%] max-md:mx-auto">
              <figure className="flex items-center justify-center bg-ns-cyan rounded-full px-7 py-3.5 w-20 h-[52px]">
                <Image src={users} alt="Team members" className="size-6" />
              </figure>
              <h6 className="text-white flex items-center gap-1 px-2.5">
                <NumberAnimation number={30} speed={1000} interval={100} rooms={2} heightSpaceRatio={2.5}>
                  30
                </NumberAnimation>
                % Faster response rate
              </h6>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 flex-1/3 py-[22px] max-md:border-b-1 md:not-last:border-r-8 not-last:border-accent/20 text-center">
              <figure className="flex items-center justify-center bg-ns-red rounded-full px-7 py-3.5 w-20 h-[52px]">
                <Image src={thumbsUp} alt="Satisfied clients" className="size-6" />
              </figure>
              <h6 className="text-white px-2.5">Almost perfect uptime connectivity</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
