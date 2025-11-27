import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Highlights = () => {
  return (
    <section className="xl:pt-[100px] pt-[50px] xl:pb-[160px] sm:pb-[100px] md:pb-[70px] pb-16">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="flex md:flex-row flex-col py-6 md:px-0 px-6 bg-(image:--color-gradient-1) rounded-[20px]">
            <div className="py-6 space-y-6 flex-1 md:border-b-0 border-b border-b-accent/20 md:border-r border-r-accent/20">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-white rounded-full mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-6 size-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center lg:text-heading-6 text-[19px] font-normal">
                  <NumberAnimation number={12} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5} /> K+
                  Projects completed
                </h3>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1 md:border-b-0 border-b border-b-accent/20 md:border-r border-r-accent/20">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-white rounded-full mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-6 size-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center lg:text-heading-6 text-[19px] font-normal">
                  <NumberAnimation number={98} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5} /> %
                  Positive feedback
                </h3>
              </div>
            </div>
            <div className="py-6 space-y-6 flex-1">
              <div className="lg:w-20 lg:h-[52px] w-16 h-10 bg-white rounded-full mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="lg:size-6 size-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                    stroke="#A585FF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-white flex items-center justify-center lg:text-heading-6 text-[19px] font-normal">
                  <NumberAnimation number={1} speed={1000} interval={180} rooms={1} heightSpaceRatio={2.5} /> M+ Charts
                  rendered
                </h3>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Highlights;
