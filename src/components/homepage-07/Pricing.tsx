import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import FeatureList, { PricingFeature } from './FeatureList';
import PricingCard, { PricingPlan } from './PricingCard';

const pricingFeatures: PricingFeature[] = [
  { id: 'pages', name: 'Pages included', included: true },
  { id: 'design', name: 'Custom design', included: true },
  { id: 'seo', name: 'SEO optimization', included: true },
  { id: 'branding', name: 'Branding support', included: true },
  { id: 'social', name: 'Social media integration', included: false },
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    badge: 'Essential',
    title: 'Free',
    description: 'Free plan for all users',
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    features: [
      { id: 'pages', name: 'Pages included', included: true, value: 'Up to 5' },
      { id: 'design', name: 'Custom design', included: true },
      { id: 'seo', name: 'SEO optimization', included: true },
      { id: 'branding', name: 'Branding support', included: true },
      { id: 'social', name: 'Social media integration', included: false },
    ],
  },
  {
    id: 'advanced',
    badge: 'Advanced',
    title: '$99',
    description: 'Plans for advanced users',
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    isPopular: true,

    features: [
      { id: 'pages', name: 'Pages included', included: true, value: 'Up to 10' },
      { id: 'design', name: 'Custom design', included: true },
      { id: 'seo', name: 'SEO optimization', included: true },
      { id: 'branding', name: 'Branding support', included: true },
      { id: 'social', name: 'Social media integration', included: false },
    ],
  },
  {
    id: 'enterprise',
    badge: 'Enterprise',
    title: 'Enterprise',
    description: 'Contact us for enterprise users',
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    features: [
      { id: 'pages', name: 'Pages included', included: true, value: 'Unlimited' },
      { id: 'design', name: 'Custom design', included: true },
      { id: 'seo', name: 'SEO optimization', included: true },
      { id: 'branding', name: 'Branding support', included: true },
      { id: 'social', name: 'Social media integration', included: true },
    ],
  },
];

interface PricingProps {
  className?: string;
  containerClassName?: string;
  badgeClassName?: string;
}

const Pricing = ({ className, containerClassName, badgeClassName }: PricingProps) => {
  return (
    <section className={cn('py-24 lg:py-[120px] bg-white dark:bg-background-6', className)}>
      <div className={cn('main-container space-y-[70px]', containerClassName)}>
        <div className=" mx-auto text-center space-y-3">
          <RevealAnimation delay={0.1}>
            <span className={cn('badge badge-yellow', badgeClassName)}>Our pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Select the pricing plan that best suits your needs.</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {/* Features column */}
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <RevealAnimation delay={0.3}>
              <div>
                <div className="h-[195px] w-[290px] hidden md:block" />
                <FeatureList features={pricingFeatures} />
              </div>
            </RevealAnimation>
          </div>

          {/* Pricing cards */}
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={0.4 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
