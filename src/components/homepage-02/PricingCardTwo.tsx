import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Pricing features data
const pricingFeaturesData = [
  {
    id: 1,
    text: 'Unlimited Bandwidth',
    isActive: true,
  },
  {
    id: 2,
    text: 'Promotional Tools',
    isActive: true,
  },
  {
    id: 3,
    text: 'Single Payment',
    isActive: true,
  },
  {
    id: 4,
    text: 'Single Payment',
    isActive: true,
  },
  {
    id: 5,
    text: 'Selling your own items',
    isActive: false,
  },
  {
    id: 6,
    text: 'Powerful integration',
    isActive: false,
  },
];

const PricingCardTwo = ({ isAnnual }: { isAnnual: boolean }) => {
  return (
    <RevealAnimation delay={0.5}>
      <div className="w-full flex-1 rounded-[20px] bg-[url('/images/home-page-2/pricing-card-gradient.jpg')] bg-cover bg-center bg-no-repeat p-2.5 max-lg:w-full dark:bg-[url('/images/home-page-2/price-bg-dark.png')]">
        <div className="rounded-[12px] bg-white p-5 sm:p-8 dark:bg-black">
          <h3 className="text-heading-5 mb-2.5 font-normal">Basic</h3>
          <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
            For individuals and small teams with unlimited trial access.
          </p>

          {isAnnual ? (
            <div className="price-year mb-7">
              <h4 className="text-heading-4 font-normal">
                $<span>4420.00</span>
              </h4>
              <p className="text-secondary dark:text-accent">Per Year</p>
            </div>
          ) : (
            <div className="price-month mb-7">
              <h4 className="text-heading-4 font-normal">
                $<span>3342.00</span>
              </h4>
              <p className="text-secondary dark:text-accent">Per Month</p>
            </div>
          )}

          <LinkButton
            insideSpan={false}
            href="./contact-us"
            className="btn btn-md btn-secondary dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark mb-8 block w-full text-center first-letter:uppercase before:content-none">
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
                  <span className="size-5 rounded-full bg-background-4 dark:bg-background-9">
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
      </div>
    </RevealAnimation>
  );
};

export default PricingCardTwo;
