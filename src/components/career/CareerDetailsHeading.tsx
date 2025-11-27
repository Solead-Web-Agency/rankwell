import RevealAnimation from '../animation/RevealAnimation';

const CareerDetailsHeading = () => {
  return (
    <div className="text-center space-y-3 mb-[70px]">
      <RevealAnimation delay={0.3}>
        <h2>
          We&apos;re building the future of NextSaaS— <br className="hidden md:block" />
          come build It with us.
        </h2>
      </RevealAnimation>
    </div>
  );
};
CareerDetailsHeading.displayName = 'CareerDetailsHeading';
export default CareerDetailsHeading;
