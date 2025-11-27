import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const WhyChooseUs = () => {
  return (
    <section className="lg:py-[100px] py-[50px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-4 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="lg:max-w-[648px] max-w-[450px] mx-auto">Powering the most successful businesses</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="lg:max-w-[658px] max-w-[470px] mx-auto">
              Deliver fast, seamless interactions with our AI-powered messaging platform—instant support, automated
              responses, and reduced wait times for meaningful engagement.
            </p>
          </RevealAnimation>
        </div>
        <div>
          <RevealAnimation delay={0.3}>
            <div className="flex py-6 md:px-0 px-6 flex-col md:flex-row bg-secondary dark:bg-background-6 rounded-[20px]">
              <div className="py-6 space-y-6 flex-1 md:border-r md:border-b-0 border-b border-b-accent/20 dark:border-b-stroke-6 border-r-accent/20 dark:border-r-stroke-6">
                <div className="xl:w-20 xl:h-[52px] w-16 h-10 bg-ns-yellow rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01L9 11.01"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white flex items-center justify-center xl:text-heading-6 text-tagline-1 font-normal">
                    <NumberAnimation number={100} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.2} />+
                    Countries
                  </h3>
                </div>
              </div>
              <div className="py-6 space-y-6 flex-1 md:border-r md:border-b-0 border-b border-b-accent/20 dark:border-b-stroke-6 border-r-accent/20 dark:border-r-stroke-6">
                <div className="xl:w-20 xl:h-[52px] w-16 h-10 bg-ns-cyan rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white flex items-center justify-center xl:text-heading-6 text-tagline-1 font-normal">
                    <NumberAnimation number={200} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.2} />%
                    Faster transactions
                  </h3>
                </div>
              </div>
              <div className="py-6 space-y-6 flex-1 md:border-r md:border-b-0 border-b border-b-accent/20 dark:border-b-stroke-6 border-r-accent/20 dark:border-r-stroke-6">
                <div className="xl:w-20 xl:h-[52px] w-16 h-10 bg-ns-red rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white flex items-center justify-center xl:text-heading-6 text-tagline-1 font-normal">
                    <NumberAnimation number={50} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2} />
                    M+ Orders processed
                  </h3>
                </div>
              </div>
              <div className="py-6 space-y-6 flex-1">
                <div className="xl:w-20 xl:h-[52px] w-16 h-10 bg-ns-green rounded-full mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M7.75 22.5H4.75C4.21957 22.5 3.71086 22.2893 3.33579 21.9142C2.96071 21.5391 2.75 21.0304 2.75 20.5V13.5C2.75 12.9696 2.96071 12.4609 3.33579 12.0858C3.71086 11.7107 4.21957 11.5 4.75 11.5H7.75M14.75 9.5V5.5C14.75 4.70435 14.4339 3.94129 13.8713 3.37868C13.3087 2.81607 12.5456 2.5 11.75 2.5L7.75 11.5V22.5H19.03C19.5123 22.5055 19.9804 22.3364 20.3479 22.024C20.7154 21.7116 20.9577 21.2769 21.03 20.8L22.41 11.8C22.4535 11.5134 22.4342 11.2207 22.3533 10.9423C22.2725 10.6638 22.1321 10.4063 21.9419 10.1875C21.7516 9.96873 21.5161 9.79393 21.2516 9.67522C20.9871 9.5565 20.6999 9.49672 20.41 9.5H14.75Z"
                      stroke="#1A1A1C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white flex items-center justify-center xl:text-heading-6 text-tagline-1 font-normal">
                    <NumberAnimation number={99} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2} />% Uptime
                  </h3>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
