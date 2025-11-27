import testimonials from '@/data/json/testimonials/testimonials.json';
import gradient22Img from '@public/images/gradient/gradient-22.png';
import xIconImg from '@public/images/icons/x.svg';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="py-20 md:py-[100px] bg-background-1 dark:bg-background-6">
      <div className="main-container">
        <div className="mb-10 md:mb-[72px] text-center max-w-[595px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="mb-5 badge badge-green">Testimonial</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Client words</h2>
          </RevealAnimation>
        </div>
      </div>
      {/* testimonial slider */}
      <RevealAnimation delay={0.3}>
        <Marquee autoFill speed={40}>
          <div className="flex  gap-x-5 lg:gap-x-10 items-center ">
            {testimonials.map((testimonial) => {
              return (
                <article
                  key={testimonial.id}
                  className="bg-background-3 dark:bg-background-7 rounded-[12px] lg:rounded-[20px] min-w-[380px] sm:min-w-[400px] cursor-pointer lg:min-w-[722px] space-y-6 lg:space-y-10 p-4 lg:p-14 backdrop-blur-[22px] relative group transition-all duration-500 ease-in-out hover:bg-secondary hover:dark:bg-background-8 overflow-hidden first:ml-10">
                  {/* gradient */}
                  <div className="absolute -top-[147%] lg:-top-[162%] -right-[56%] lg:-right-[56%] max-w-[500px] lg:max-w-[723px] blur-[10px] rotate-[295deg] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out select-none pointer-events-none">
                    <Image src={gradient22Img} alt="gradient" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <figure className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] rounded-full overflow-hidden transform group-hover:scale-[102%] transition-transform duration-500 ease-in-out">
                        <Image
                          src={testimonial.avatar}
                          width={60}
                          height={60}
                          alt="Michael Lee"
                          className="w-full h-full object-cover bg-linear-[156deg,#a585ff_32.92%,#A585FF_91%]"
                        />
                      </figure>
                      <div className="space-y-1">
                        <h3 className="text-tagline-2 font-semibold group-hover:text-accent transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {testimonial.name}
                        </h3>
                        <p className="text-tagline-3 group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:-translate-y-0.5 group-hover:transition-transform">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Michael Lee's Twitter"
                      href="https://x.com/heystaticmania"
                      className="w-[74px] h-11 rounded-[360px] backdrop-blur-[15px] px-2.5 py-1 inline-flex items-center justify-center transition-all duration-500 ease-in-out bg-background-1 dark:bg-background-6 group-hover:bg-background-1 group-hover:dark:bg-background-7 hover:shadow-4 hover:scale-110">
                      <Image src={xIconImg} alt="twitter" className="dark:invert" />
                    </Link>
                  </div>
                  <blockquote>
                    <p className="max-w-[530px] text-wrap group-hover:text-accent/60 transition-all duration-500 ease-in-out transform group-hover:translate-x-1 line-clamp-3">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                </article>
              );
            })}
          </div>
        </Marquee>
      </RevealAnimation>
    </section>
  );
};

export default Testimonial;
