import { IPosition } from '@/interface';
import gradient45 from '@public/images/gradient/gradient-45.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const JobOverview = ({ data }: { data: Partial<IPosition> }) => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="col-span-12 md:col-span-6 bg-background-1 dark:bg-background-5 rounded-[20px] overflow-hidden p-11 relative">
        {/* bg gradient img  */}
        <RevealAnimation delay={0.4} duration={1.2} direction="right" offset={90}>
          <figure className="absolute top-[-27%] md:top-[-27%] lg:top-[-49%] xl:top-[-60%] max-[377px]:right-[-90%] right-[-77%] md:right-[-83%] lg:right-[-102%] xl:right-[-99%] xl:size-[1000px] lg:size-[800px] size-[500px] overflow-hidden select-none pointer-events-none">
            <Image src={gradient45} alt="career-details-bg-gradient-img" className="size-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="space-y-8">
          <div>
            <h5 className="mb-8">Job Overview</h5>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Date Posted</p>
              <p className="text-lg leading-[150%]">{data?.datePosted}</p>
            </div>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Expiration date</p>
              <p className="text-lg leading-[150%]">{data?.expirationDate}</p>
            </div>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Location</p>
              <p className="text-lg leading-[150%]">{data?.location}</p>
            </div>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Offered Salary</p>
              <p className="text-lg leading-[150%]">{data?.offeredSalary}</p>
            </div>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Experience</p>
              <p className="text-lg leading-[150%]">{data?.experience}</p>
            </div>
            <div className="py-4 border-b border-stroke-4 dark:border-stroke-7">
              <p className="text-xl text-secondary dark:text-accent leading-[150%]">Qualification</p>
              <p className="text-lg leading-[150%]">{data?.qualification}</p>
            </div>
          </div>
          <div>
            <h5 className="mb-8">Job Skills</h5>
            <div className="flex items-center flex-wrap gap-3 ">
              {data?.jobSkills?.map((skill) => (
                <span
                  key={skill}
                  className="inline-block transition-colors duration-500 ease-in-out  px-[18px] p-[9px] bg-background-1 hover:bg-secondary hover:text-white dark:bg-background-6 border border-stroke-4 dark:border-stroke-7 dark:hover:bg-accent dark:hover:text-secondary dark:text- text-secondary dark:text-accent rounded-full font-base leading-[150%] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <Link
              href="#"
              className="hover:btn-secondary dark:hover:btn-accent w-full btn btn-primary btn-md before:content-none first-letter:uppercase">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

JobOverview.displayName = 'JobOverview';
export default JobOverview;
