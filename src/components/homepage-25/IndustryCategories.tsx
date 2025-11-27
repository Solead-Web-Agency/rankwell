import industry1Img from '@public/images/home-page-25/industry-1.png';
import industry2Img from '@public/images/home-page-25/industry-2.png';
import industry3Img from '@public/images/home-page-25/industry-3.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const industries = [
  {
    id: 1,
    img: industry1Img,
    alt: 'industry-1',
    title: 'Vacation rentals',
    desc: 'Enjoy fully furnished spaces with amenities like full kitchens,',
    href: '/integration-01',
  },
  {
    id: 2,
    img: industry2Img,
    alt: 'industry-2',
    title: 'Corporate housing',
    desc: 'Corporate housing offers a convenient and comfortable living solution for business',
    href: '/integration-01',
  },
  {
    id: 3,
    img: industry3Img,
    alt: 'industry-3',
    title: 'Hotels & resorts',
    desc: 'Discover a world where comfort meets elegance. Our curated collection of hotels',
    href: '/integration-01',
  },
];

const IndustryCategories = () => {
  return (
    <section className="py-20 md:py-[100px] lg:py-36 xl:py-[200px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="space-y-3 mb-10 md:mb-[72px] text-center max-w-[595px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="mb-5 badge badge-green">integration</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Industries we serve</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              we deliver tailored solutions that meet the unique needs of each sector. Our cross-industry expertise
              allows us to innovate, adapt, and drive results that
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-x-8 gap-y-14">
          {industries.map((item, idx) => (
            <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
              <article className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="group relative">
                  <Link href={item.href}>
                    <figure className="max-w-full lg:max-w-[408px] rounded-[12px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-[108%] group-hover:rotate-[3deg] transition-transform will-change-transform duration-500"
                      />
                    </figure>

                    <div className="bg-secondary/40 dark:bg-accent/40 p-6 rounded-lg backdrop-blur-[12px] absolute bottom-2.5 w-[calc(100%-20px)] left-1/2 -translate-x-1/2 text-center">
                      <h3 className="text-heading-6 md:text-heading-5 text-white dark:text-secondary">{item.title}</h3>
                      <p className="text-tagline-2 text-accent/80 dark:text-secondary/80 max-w-[295px] mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCategories;
