import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import balance from '@public/images/home-page-30/balance.png';
import incomeChart from '@public/images/home-page-30/income-chart.png';
import satisfiedUser from '@public/images/home-page-30/satisfied-user.png';
import totalSales from '@public/images/home-page-30/total-sales.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="md:mt-[30px] mt-0">
      <div className="2xl:max-w-[1860px] mx-auto pt-[220px] pb-[190px] max-h-[860px] 2xl:rounded-[40px] rounded-none bg-linear-[180deg,#a585ff_0%,#ffc2ac_100%] relative overflow-hidden">
        <RevealAnimation delay={0.3} duration={2} useSpring={true}>
          <figure className="absolute lp:top-[50%] xl:top-[55%] md:top-[23%] top-[18%] -translate-y-1/2 2xl:left-24 sm:left-10 left-7 rounded-2xl overflow-hidden 2xl:max-w-[254px] lg:max-w-[150px] sm:max-w-[150px] max-w-28 shadow-3 rotate-[-7deg] -z-0">
            <Image src={totalSales} alt="Total Sales" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.4} duration={2} useSpring={true}>
          <figure className="absolute sm:bottom-14 bottom-5 lg:left-[13%] md:left-[4%] left-6 rounded-2xl overflow-hidden xl:max-w-[143px] lg:max-w-[150px] md:max-w-[130px] max-w-[70px] max-h-[114px] shadow-2 rotate-[10deg] -z-0">
            <Image src={satisfiedUser} alt="Satisfied Users" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.3} duration={2} useSpring={true}>
          <figure className="absolute sm:bottom-14 bottom-5 lg:right-[13%] md:right-[3%] right-5 rounded-2xl overflow-hidden xl:max-w-[270px] lg:max-w-[200px] md:max-w-[180px] max-w-[120px] max-h-[124px] shadow-2 rotate-[-7deg] -z-0">
            <Image src={incomeChart} alt="Income Chart" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.4} duration={2} useSpring={true}>
          <figure className="absolute 2xl:top-[35%] lp:top-[40%] xl:top-[45%] md:top-[15%] xl:right-[3%] top-[12%] 2xl:right-24 right-10 rounded-2xl overflow-hidden 2xl:max-w-[268px] md:max-w-[170px] sm:max-w-[150px] max-w-[120px] max-h-[227px] rotate-[4deg] -z-0">
            <Image src={balance} alt="Total Sales" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="space-y-5 text-center relative z-10">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-secondary-light">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="md:space-y-4 space-y-2 lg:max-w-full md:max-w-[600px] sm:max-w-[550px] min-[500px]:max-w-[450px] max-w-[350px] lg:mx-0 mx-auto">
            <RevealAnimation delay={0.2}>
              <h1 className="text-accent">Security &amp; performance solution</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent/60">
                Your all-in-one advanced protection for your devices &amp; digital privacy
              </p>
            </RevealAnimation>
            <ul className="flex items-center lg:gap-9 sm:gap-4 gap-2 justify-center lg:flex-nowrap flex-wrap">
              <RevealAnimation delay={0.4}>
                <li className="flex items-center gap-2">
                  <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Complete cybersecurity suite </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-2">
                  <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Boost performance &amp; speed </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-2">
                  <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-accent/20 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2"> Protect your data &amp; privacy </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        <ul className="flex items-center text-center sm:flex-row flex-col gap-4 justify-center md:mt-14 mt-8 md:mb-[100px] sm:mb-16 mb-10">
          <RevealAnimation delay={0.7} direction="left" offset={50}>
            <li className="w-full sm:w-auto">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-white-dark sm:w-auto w-[85%]">
                Free download
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.9} direction="left" offset={50}>
            <li className="w-full sm:w-auto">
              <LinkButton href="/pricing-01" className="btn btn-dark btn-xl hover:btn-secondary sm:w-auto w-[85%]">
                Get premium
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <div>
          <div className="flex items-center max-[425px]:flex-col flex-row justify-center max-[425px]:gap-2 gap-4 mb-[100px]">
            <div className="flex -space-x-3.5">
              <RevealAnimation delay={0.7}>
                <figure>
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white bg-ns-green"
                    src={avatar1}
                    alt="Avatar 1"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure>
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white bg-ns-green"
                    src={avatar2}
                    alt="Avatar 2"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9}>
                <figure>
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white bg-ns-green"
                    src={avatar3}
                    alt="Avatar 3"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1}>
                <div className="inline-flex items-center justify-center sm:size-12 size-10 rounded-full ring-2 ring-white text-secondary/80 bg-ns-green text-tagline-3 font-medium">
                  99+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={1.1}>
              <div className="max-[425px]:text-center">
                <p className="font-medium block text-secondary text-tagline-2 dark:text-accent max-[425px]:text-center text-left">
                  Trusted by 20k+
                </p>
                <p className="font-medium block text-secondary/60 dark:text-accent/60 text-tagline-2 max-[425px]:text-center text-left">
                  Customers across the globe
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
