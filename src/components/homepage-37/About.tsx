import aboutImage from '@public/images/home-page-37/about.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const About = () => {
  return (
    <section className="py-18 md:py-28 overflow-x-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-x-10 xl:gap-x-20 items-center">
          <div className="order-1">
            <RevealAnimation delay={0.1} direction="left">
              <span className="badge badge-gray-light-v2 mb-5">About</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="left">
              <h2 className="mb-3">
                Where bold ideas <br className="lg:block hidden" />
                come to life
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="left">
              <p className="mb-8 md:mb-12 lg:mb-8">
                At our creative agency, we specialize in bringing bold ideas to life. We believe that creativity is the
                key to connecting brands with their audiences in meaningful ways. Our team of talented designers,
                strategists, and storytellers work collaboratively to
                <br className="lg:block hidden" />
                <br className="lg:block hidden" />
                craft unique campaigns that resonate and inspire. Whether it’s branding, digital marketing, or content
                creation, we approach every project with fresh perspectives and a passion for innovation. We don’t just
                follow trends; we set them, ensuring that our clients stand out in a crowded marketplace. Let us help
                you tell your story and make a lasting impact.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <div className="group list-none md:w-auto w-full inline-block">
                <Link
                  href="/about-03"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-[90%] md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Explore more
                  </span>
                  <div className="relative overflow-hidden size-6">
                    {/* one  */}
                    <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="white" />
                        <path d="M5 5H7V7H5V5Z" fill="white" />
                        <path d="M14 8H16V10H14V8Z" fill="white" />
                        <path d="M8 8H10V10H8V8Z" fill="white" />
                        <path d="M17 11H19V13H17V11Z" fill="white" />
                        <path d="M11 11H13V13H11V11Z" fill="white" />
                        <path d="M14 14H16V16H14V14Z" fill="white" />
                        <path d="M8 14H10V16H8V14Z" fill="white" />
                        <path d="M11 17H13V19H11V17Z" fill="white" />
                        <path d="M5 17H7V19H5V17Z" fill="white" />
                      </svg>
                    </span>
                    {/* two  */}
                    <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M11 5H13V7H11V5Z" fill="white" />
                        <path d="M5 5H7V7H5V5Z" fill="white" />
                        <path d="M14 8H16V10H14V8Z" fill="white" />
                        <path d="M8 8H10V10H8V8Z" fill="white" />
                        <path d="M17 11H19V13H17V11Z" fill="white" />
                        <path d="M11 11H13V13H11V11Z" fill="white" />
                        <path d="M14 14H16V16H14V14Z" fill="white" />
                        <path d="M8 14H10V16H8V14Z" fill="white" />
                        <path d="M11 17H13V19H11V17Z" fill="white" />
                        <path d="M5 17H7V19H5V17Z" fill="white" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2} direction="right" useSpring={true} duration={2.4}>
            <div className="order-2 overflow-hidden rounded-[20px]">
              <figure className="rounded-[20px] overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
                <Image src={aboutImage} alt="about image" className="w-full h-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
