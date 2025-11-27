import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Feature list data
const featureListData = [
  {
    id: 1,

    text: 'Add a feature section about the product.',
  },
  {
    id: 2,

    text: 'Add a feature section about the product.',
  },
  {
    id: 3,

    text: 'Single upfront payment.',
  },
];

const FeatureListOne = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="mb-8 space-y-5 text-center max-[426px]:mb-5 max-[426px]:text-left sm:text-left">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow">Feature</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2>
            Streamline your <br className="hidden lg:block" />
            business operations.
          </h2>
        </RevealAnimation>
      </div>

      <ul className="mb-14 list-none space-y-4 max-[426px]:mb-10">
        {featureListData.map((feature, index) => (
          <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
            <li className="flex items-center gap-2">
              <span className=" size-[18px] bg-secondary dark:bg-accent rounded-full">
                <CheckIcon />
              </span>
              <span className="text-secondary dark:text-accent">{feature.text}</span>
            </li>
          </RevealAnimation>
        ))}
      </ul>
      <RevealAnimation delay={0.6}>
        <div>
          <LinkButton
            href="/features-01"
            className="btn btn-white btn-lg sm:btn-xl dark:btn-transparent hover:btn-secondary dark:hover:btn-accent w-full sm:w-auto">
            Get started
          </LinkButton>
        </div>
      </RevealAnimation>
    </div>
  );
};

FeatureListOne.displayName = 'FeatureListOne';
export default FeatureListOne;
