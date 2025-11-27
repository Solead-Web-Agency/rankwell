import { cn } from '@/utils/cn';
import gradient24Img from '@public/images/gradient/gradient-24.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: '1',
    title: 'Transacted',
    value: '800K+',
    description: 'Transactions managed.',
  },
  {
    id: '2',
    title: 'In assets tracked',
    value: '4.8B+',
    description: 'Transactions managed.',
  },
  {
    id: '3',
    title: 'Users',
    value: '200K+',
    description: 'Happy customers globally.',
  },
  {
    id: '4',
    title: 'Months',
    value: '9.1%',
    description: 'Transactions managed.',
  },
  {
    id: '5',
    title: 'Partnerships',
    value: '150+',
    description: 'Collaborations with financial institutions.',
  },
];

const Statistics = () => {
  return (
    <section className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5 overflow-hidden">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="from-white dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-white dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee pauseOnHover={true} autoFill={true}>
            <div className="flex items-center justify-center max-md:gap-y-[42px] max-md:gap-x-8 md:gap-8 mb-14">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    'min-w-[360px] w-full min-h-[270px] hover:bg-secondary hover:dark:bg-background-8 border border-stroke-4 dark:border-stroke-6 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden group justify-between transition-all duration-500 ease-in-out ',
                    index === 0 && 'ml-8',
                  )}>
                  <div className="-z-10 absolute -top-[85%] -right-[60%] size-[500px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105 pointer-events-none select-none">
                    <Image src={gradient24Img} alt="gradient" />
                  </div>
                  <div className="transition-all duration-500 ease-in-out transform group-hover:translate-y-[-4px]">
                    <p className="group-hover:text-white text-lg mb-2 transition-colors duration-500 ease-in-out">
                      {item.title}
                    </p>
                    <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-500 ease-in-out">
                      {item.value}
                    </h3>
                  </div>
                  <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:translate-y-[4px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Statistics;
