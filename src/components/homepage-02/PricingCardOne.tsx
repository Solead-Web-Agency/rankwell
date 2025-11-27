import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const pricingFeaturesData = [
  {
    id: 1,
    text: 'Single Payment',
    isActive: true,
  },
  {
    id: 2,
    text: 'Selling your own items',
    isActive: false,
  },
  {
    id: 3,
    text: 'Powerful integration',
    isActive: false,
  },
];

const PricingCardOne = ({ isAnnual }: { isAnnual: boolean }) => {
  return (
    <RevealAnimation delay={0.4}>
      <div className="bg-background-3 dark:bg-background-7 w-full flex-1 rounded-[20px] p-8 max-lg:w-full">
        <h3 className="text-heading-5 mb-2 font-normal">Simplified</h3>
        <p className="max-[426px]:text-tagline-2 mb-6 max-w-[250px]">
          For individuals and small teams with unlimited trial access.
        </p>

        {isAnnual ? (
          <div className="price-year mb-7">
            <h4 className="text-heading-4 font-normal">
              $<span>230.00</span>
            </h4>
            <p className="text-secondary dark:text-accent">Per Year</p>
          </div>
        ) : (
          <div className="price-month mb-7">
            <h4 className="text-heading-4 font-normal">
              $<span>19.00</span>
            </h4>
            <p className="text-secondary dark:text-accent">Per Month</p>
          </div>
        )}

        <LinkButton
          insideSpan={false}
          href="./contact-us"
          className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 block w-full text-center first-letter:uppercase before:content-none">
          Get started
        </LinkButton>
        <ul className="relative list-none space-y-2.5">
          {pricingFeaturesData.map((feature) => (
            <li key={feature.id} className="flex items-center gap-2.5">
              {feature.isActive ? (
                <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                  <CheckIcon />
                </span>
              ) : (
                <span className="size-5 rounded-full bg-white dark:bg-black">
                  <CheckIcon className="dark:fill-accent/60 fill-secondary/60" />
                </span>
              )}
              <span
                className={cn(
                  'text-tagline-1 font-normal',
                  feature.isActive ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60',
                )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RevealAnimation>
  );
};

PricingCardOne.displayName = 'PricingCardOne';
export default PricingCardOne;
