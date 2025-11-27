import tutorial1 from '@public/images/learn-page/tutorial-1.png';
import tutorial2 from '@public/images/learn-page/tutorial-2.png';
import tutorial3 from '@public/images/learn-page/tutorial-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Tutorials = () => {
  return (
    <section className="pb-[100px] pt-[100px] xl:pt-[200px] dark:pt-[100px] bg-background-3 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Video tutorials</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[620px] mx-auto">
              Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
              unique blend of expertise
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure className="h-full w-full">
                  <Image
                    src={tutorial1}
                    alt="Intro to NextSaaS video tutorial thumbnail"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to NextSaaS</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure>
                  <Image src={tutorial2} alt="Intro to React video tutorial thumbnail" />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to React</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="relative rounded-[20px] overflow-hidden group h-full md:max-h-[408px]">
                <figure>
                  <Image src={tutorial3} alt="Intro to JavaScript video tutorial thumbnail" />
                </figure>
                <div className="text-center absolute w-[95%] left-0 right-0 mx-auto p-6 rounded-xl bottom-2.5 bg-secondary/10 backdrop-blur-[10px] md:translate-y-full md:opacity-0 translate-y-0 opacity-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-heading-5 text-accent">Intro to JavaScript</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
