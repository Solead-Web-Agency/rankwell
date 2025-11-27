import RevealAnimation from '../animation/RevealAnimation';

const HeroBottomOverlay = () => {
  return (
    <RevealAnimation delay={0.2} instant>
      <div className="absolute min-[2550px]:!bottom-[-25%] hidden md:block 2xl:bottom-[-10%] lg:bottom-0 md:bottom-[-6%] bottom-0 w-[120%] left-1/2 -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 935" fill="none">
          <g filter="url(#filter0_f_3495_21115)">
            <path d="M-107 239.128L822.153 289.929L1920 204V1320H-107V239.128Z" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_f_3495_21115"
              x={-311}
              y={0}
              width={2435}
              height={1524}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation={102} result="effect1_foregroundBlur_3495_21115" />
            </filter>
          </defs>
        </svg>
      </div>
    </RevealAnimation>
  );
};

HeroBottomOverlay.displayName = 'HeroBottomOverlay';
export default HeroBottomOverlay;
