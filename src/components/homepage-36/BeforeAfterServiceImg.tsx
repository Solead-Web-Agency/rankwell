'use client';

import Image, { StaticImageData } from 'next/image';
import newArrowWhite from '../../../public/images/icons/new-arrow-white.svg';
import { useBeforeAfterImageSlider } from '../../hooks/useBeforeAfterImageSlider';
import RevealAnimation from '../animation/RevealAnimation';

// Import default images
import { IService } from '@/interface';
import Link from 'next/link';
import afterImage from '../../../public/images/home-page-36/after.png';
import beforeImage from '../../../public/images/home-page-36/before.png';

// Define props interface for reusability
interface BeforeAfterServiceImgProps {
  beforeImage?: string | StaticImageData;
  afterImage?: string | StaticImageData;
  service?: IService;
  // Slider props
  initialPosition?: number;
  onPositionChange?: (percentage: number) => void;
  enableKeyboard?: boolean;
  enableClickToPosition?: boolean;
}

const BeforeAfterServiceImg = ({
  service,
  beforeImage: beforeImg = beforeImage,
  afterImage: afterImg = afterImage,

  initialPosition = 50,
  onPositionChange,
  enableKeyboard = true,
  enableClickToPosition = true,
}: BeforeAfterServiceImgProps) => {
  // Use the reusable hook
  const { sliderRef, handleRef, afterImageRef } = useBeforeAfterImageSlider({
    onPositionChange,
    initialPosition,
    enableKeyboard,
    enableClickToPosition,
  });

  return (
    <RevealAnimation delay={0.3} direction="right">
      <div className="col-span-12 group/card-img lg:col-span-6 ">
        <div className="bg-background-12 h-full rounded-3xl border border-background-12 p-5 md:p-8 grid grid-cols-12 md:gap-6 gap-y-16">
          <aside className="pt-14 col-span-12 flex flex-col justify-between space-y-5 md:col-span-6">
            <blockquote className="space-y-2">
              <h3 className="text-heading-5 md:text-heading-4">{service?.title}</h3>
              <p className="text-tagline-1 text-secondary/60">{service?.description}</p>
            </blockquote>
            <Link
              href={`/our-services/${service?.slug}`}
              className="hover:bg-primary-500 group bg-secondary transition-all duration-500 ease-in-out ring-8 ring-white rounded-[40px] w-18 md:w-22 relative overflow-hidden flex items-center justify-center space-y-5 h-10 md:h-13 p-4 md:p-5">
              <figure className="size-6 relative items-center justify-center overflow-hidden">
                <Image
                  src={newArrowWhite}
                  alt="new-arrow"
                  className="size-full absolute inset-0 -translate-x-6 object-cover group-hover:translate-x-1 transition-transform duration-400 ease-in-out"
                />
                <Image
                  src={newArrowWhite}
                  alt="new-arrow"
                  className="size-full object-cover group-hover:translate-x-6 transition-transform duration-400 ease-in-out"
                />
              </figure>
            </Link>
          </aside>
          {/* Before & After Image Slider */}
          <figure className="w-full mx-auto col-span-12 group-hover/card-img:scale-105 transition-transform duration-500 ease-in-out rounded-lg md:rounded-[20px] overflow-hidden md:col-span-6">
            <div className="relative w-full max-w-full md:max-w-[312px] h-full mx-auto overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] select-none">
              <div ref={sliderRef} className="slider max-lg:h-100 relative w-full h-full cursor-ew-resize">
                <Image
                  src={beforeImg}
                  alt="Before Image"
                  className="before absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
                />
                <Image
                  ref={afterImageRef}
                  src={afterImg}
                  alt="After Image"
                  className="after absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
                />
                <div
                  ref={handleRef}
                  className="slider-handle absolute top-0 left-1/2 w-1 h-full z-30 -translate-x-1/2 transition-all duration-200 ease-in-out">
                  <div className="handle-line absolute top-0 left-1/2 w-px h-full bg-stroke-1 -translate-x-1/2" />
                  <div
                    className="w-20 h-[267px] absolute top-1/2 left-1/2 blur-[30px] -translate-x-1/2 -translate-y-1/2"
                    style={{ background: 'var(--color-gradient-12)' }}
                  />
                  <div className="handle-circle absolute top-1/2 left-1/2 w-[17px] h-[30px] py-[7px] px-[1px] bg-white ring-2 ring-background-9/50 backdrop-blur-[17px] rounded-[40px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-[10px] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white/90 active:scale-110 md:w-[15px] md:h-[28px] md:py-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} viewBox="0 0 15 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.625 2.6668C8.625 3.32954 8.12132 3.8668 7.5 3.8668C6.87868 3.8668 6.375 3.32954 6.375 2.6668C6.375 2.00406 6.87868 1.4668 7.5 1.4668C8.12132 1.4668 8.625 2.00406 8.625 2.6668ZM8.625 8.00013C8.625 8.66287 8.12132 9.20013 7.5 9.20013C6.87868 9.20013 6.375 8.66287 6.375 8.00013C6.375 7.33739 6.87868 6.80013 7.5 6.80013C8.12132 6.80013 8.625 7.33739 8.625 8.00013ZM7.5 14.5335C8.12132 14.5335 8.625 13.9962 8.625 13.3335C8.625 12.6707 8.12132 12.1335 7.5 12.1335C6.87868 12.1335 6.375 12.6707 6.375 13.3335C6.375 13.9962 6.87868 14.5335 7.5 14.5335Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default BeforeAfterServiceImg;
