import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import aboutBg from '@public/images/home-page-2/about-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureItem {
  id: string;
  text: string;
}

const Feature = ({ className, btnClassName }: { className?: string; btnClassName?: string }) => {
  const features: FeatureItem[] = [
    {
      id: 'innovative-startups',
      text: 'Innovative startups and ambitious scale-ups are redefining',
    },
    {
      id: 'enterprise-teams',
      text: 'Enterprise teams are the backbone of large organizations',
    },
    {
      id: 'agencies-consultants',
      text: 'Agencies and consultants play a crucial role in helping businesses',
    },
    {
      id: 'finance-marketing',
      text: 'Finance, marketing, and product teams collaborate to create',
    },
  ];

  return (
    <section className={className}>
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <Image src={aboutBg} alt="about bg" className="w-full h-full object-cover" />
            </div>
            <div className="py-14 lg:px-11 px-6 grid max-lg:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px]">
                <h2 className="text-accent mb-8 sm:text-heading-5 text-heading-6">
                  We appreciate our valued clients and strive to provide them with the best service possible.
                </h2>
                <LinkButton href="/our-services-01" className={cn('btn btn-primary', btnClassName)}>
                  Get started
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span className="size-5 shrink-0 bg-accent/17 dark:bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckIcon className=" dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Feature;
