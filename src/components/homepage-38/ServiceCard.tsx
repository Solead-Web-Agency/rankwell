import { cn } from '@/utils/cn';
import { ServiceData } from './Services';

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'px-8 py-10.5 border border-stroke-1 rounded-[20px] md:max-w-[314px] w-full flex flex-col items-center md:items-start gap-y-[22px] lg:col-span-3 md:col-span-4 col-span-12',
        index === 6 && 'lg:col-start-auto md:col-start-3 col-start-auto',
      )}
      role="listitem"
      itemType="https://schema.org/Service">
      <span
        className="size-14 rounded-full bg-ns-green p-3.5 flex items-center justify-center"
        aria-hidden="true"
        role="presentation">
        {service.icon}
      </span>
      <h3
        className="text-heading-6 text-[#12161F] leading-[150%] font-normal max-w-[200px] md:text-left text-center"
        itemProp="name">
        {service.title}
      </h3>
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
