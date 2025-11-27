import { cn } from '@/utils/cn';
import avatar4 from '@public/images/avatar/avatar-4.png';
import avatar5 from '@public/images/avatar/avatar-5.png';
import avatar6 from '@public/images/avatar/avatar-6.png';
import gradient22 from '@public/images/gradient/gradient-22.png';
import x from '@public/images/icons/x.svg';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    name: 'Michael Smith',
    company: 'Urban Brew',
    review:
      'They captured every moment beautifully with creativity and professionalism. Their attention to detail and seamless editing exceeded our expectations. Highly recommend!',
    href: 'https://x.com/heystaticmania',
    image: avatar4,
  },
  {
    id: 2,
    name: 'William James',
    company: 'TechFlow Solutions',
    review:
      'Working with this team was a game-changer for our business. They understood our vision perfectly and executed it flawlessly, exceeding our expectations in every way.',
    href: 'https://x.com/heystaticmania',
    image: avatar5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Studios',
    review:
      "The level of creativity and technical expertise they brought to our project was outstanding. They delivered a solution that perfectly captured our brand's essence and vision.",
    href: 'https://x.com/heystaticmania',
    image: avatar6,
  },
];

const Review = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[75px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="mb-[72px] text-center">
          <RevealAnimation delay={0.1}>
            <h2>Client words</h2>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.2}>
        <div className="relative">
          <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee className="cards-marquee-container">
            <div className="flex gap-x-10 items-center scroll-bar">
              {data.map((item, index) => (
                <article
                  key={item.id}
                  className={cn(
                    'bg-white dark:bg-background-7 rounded-[12px] lg:rounded-[20px] min-w-[320px] sm:min-w-[400px] cursor-pointer lg:min-w-[722px] space-y-6 lg:space-y-10 p-6 md:p-4 lg:p-14 backdrop-blur-[22px] relative group transition-all duration-500 ease-in-out hover:bg-secondary hover:dark:bg-background-8 overflow-hidden',
                    index === 0 && 'ml-10',
                  )}>
                  <div className="absolute -top-[147%] lg:-top-[162%] -right-[56%] lg:-right-[56%] max-w-[500px] lg:max-w-[723px] blur-[10px] rotate-[295deg] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out select-none pointer-events-none">
                    <Image src={gradient22} alt="gradient" className="size-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <figure className="md:size-[84px] size-16 rounded-full overflow-hidden transform group-hover:scale-[102%] transition-transform duration-500 ease-in-out">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="size-full object-cover bg-linear-[156deg,#a585ff_32.92%,#A585FF_91%]"
                        />
                      </figure>
                      <div className="space-y-1">
                        <h3 className="text-tagline-2 font-semibold group-hover:text-accent transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {item.name}
                        </h3>
                        <p className="text-tagline-3 group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Michael Lee's Twitter"
                      href={item.href}
                      className="w-[74px] h-11 rounded-[360px] backdrop-blur-[15px] px-2.5 py-1 inline-flex items-center justify-center transition-all duration-500 ease-in-out bg-background-3 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 hover:shadow-4 hover:scale-110">
                      <Image src={x} alt="twitter" className="dark:invert" />
                    </Link>
                  </div>
                  <blockquote>
                    <p className="max-w-[530px] text-wrap group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:translate-x-1">
                      {item.review}
                    </p>
                  </blockquote>
                </article>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Review;
