import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TestimonialStar from '../shared/TestimonialStar';

interface TestimonialCardProps {
  name: string;
  image: StaticImageData;
  quote: string;
  twitterUrl: string;
}

const TestimonialCard = ({ name, image, quote, twitterUrl }: TestimonialCardProps) => {
  return (
    <div className="bg-white border border-stroke-1 rounded-[20px] sm:p-8 p-6 max-w-[500px] mt-6">
      <div className="flex items-center justify-between pb-5">
        <TestimonialStar />
        <Link href={twitterUrl} target="_blank" rel="noopener" aria-label="Follow Darrell Steward on Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
            <path
              d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z"
              fill="#12161F"
            />
          </svg>
        </Link>
      </div>
      <p className="pb-6">{quote}</p>
      <figure className="flex items-center gap-3">
        <Image
          src={image}
          className="size-11 rounded-full object-center object-cover bg-linear-[156deg,#F4F8E7_12.92%,#D485FF_91%]"
          alt={`${name}'s avatar`}
          width={44}
          height={44}
          loading="lazy"
        />
        <h3 className="text-tagline-1 sm:text-lg font-semibold leading-[1.5]">{name}</h3>
      </figure>
    </div>
  );
};

export default TestimonialCard;
