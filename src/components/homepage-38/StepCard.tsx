import { cn } from '@/utils/cn';

export interface StepCardProps {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  className?: string;
}

const StepCard = ({ stepNumber, title, description, className }: StepCardProps) => {
  return (
    <div
      className={cn('p-10.5 w-full md:max-w-[306px] rounded-[20px] space-y-24 ', className)}
      role="listitem"
      itemType="https://schema.org/HowToStep">
      <h3 className="text-heading-3" itemProp="position" aria-label="Step 1">
        {stepNumber}
      </h3>
      <div className="space-y-1">
        <h4 className="text-heading-5" itemProp="name">
          {title}
        </h4>
        <p className="max-w-[222px]" itemProp="text">
          {description}
        </p>
      </div>
    </div>
  );
};

StepCard.displayName = 'StepCard';
export default StepCard;
