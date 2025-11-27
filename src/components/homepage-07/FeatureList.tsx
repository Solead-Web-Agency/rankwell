import { cn } from '@/utils/cn';

export interface PricingFeature {
  id: string;
  name: string;
  included: boolean;
  value?: string;
}

interface FeatureListProps {
  features: PricingFeature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <div className="space-y-2.5">
    <h3 className="text-heading-6 text-secondary dark:text-accent">What&apos;s included</h3>
    <ul>
      {features.map((feature, index) => (
        <li
          key={feature.id}
          className={cn(
            'text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6',
            index < features.length - 1 ? 'border-b border-b-stroke-4 dark:border-b-stroke-5' : '',
          )}>
          {feature.name}
        </li>
      ))}
    </ul>
  </div>
);
FeatureList.displayName = 'FeatureList';
export default FeatureList;
