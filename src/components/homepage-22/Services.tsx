import RequestDemo from '@public/images/home-page-22/request-demo.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import DownloadApp from './DownloadApp';
import Process from './Process';

interface Service {
  id: string;
  text: string;
}

const servicesData: Service[] = [
  {
    id: '1',
    text: 'Kiosk mode for retail & public devices',
  },
  {
    id: '2',
    text: 'Factory reset protection',
  },
  {
    id: '3',
    text: 'Restrict profile removal & unauthorized changes',
  },
];

const Services = () => {
  return (
    <section className="relative xl:py-[100px] lg:py-[90px] md:py-20 py-16">
      <div className="main-container">
        {/* Actions steps */}
        <div className="mb-[100px] lg:space-y-14 space-y-10 max-lg:px-2">
          <Process />
          <RevealAnimation delay={0.4}>
            <div>
              <LinkButton
                href="/process-01"
                className="btn dark:btn-transparent btn-md btn-secondary hover:btn-primary w-[85%] md:w-auto mx-auto md:mx-0">
                See It in action
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        {/* Request demo */}
        <div className="my-24 lg:my-[100px]">
          <div className="md:py-14 sm:py-10 py-10 md:px-[42px] sm:px-8 px-6 lg:rounded-4xl rounded-2xl bg-background-2 dark:bg-background-5 flex xl:gap-[165px] lg:gap-20 lg:flex-row flex-col gap-y-14">
            <div className="flex-1">
              <div>
                <div className="space-y-3 mb-6 md:mb-8">
                  <RevealAnimation delay={0.1}>
                    <h2 className="md:max-w-[520px] xl:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5">
                      Designed for security teams that can&apos;t afford downtime
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>Track key indicators, spot trends early, and turn data into action.</p>
                  </RevealAnimation>
                </div>
                <ul className="space-y-3 md:space-y-4 sm:mb-14 mb-10">
                  {servicesData.map((service, index) => (
                    <RevealAnimation key={service.id} delay={0.3 + index * 0.1}>
                      <li className="flex items-center sm:gap-3 gap-2.5">
                        <span className="size-[18px] rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={7}
                            viewBox="0 0 10 7"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                              className="fill-white dark:fill-secondary"
                            />
                          </svg>
                        </span>
                        <p className="text-secondary dark:text-accent">{service.text}</p>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href="/signup-01"
                      className="btn md:btn-xl btn-md dark:btn-transparent hover:btn-primary btn-white md:w-auto w-full">
                      Request a live demo
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            <div className="flex-1">
              <RevealAnimation delay={0.7}>
                <figure className="lg:max-w-[521px] max-w-full w-full overflow-hidden rounded-3xl">
                  <Image src={RequestDemo} alt="services" className="w-full h-full" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
        {/* Download app */}
        <DownloadApp />
      </div>
    </section>
  );
};

export default Services;
