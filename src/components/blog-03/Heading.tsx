import RevealAnimation from '../animation/RevealAnimation';

const Heading = () => {
  return (
    <div className="text-center space-y-3 mb-14 md:mb-[70px]">
      <RevealAnimation delay={0.2}>
        <h2>
          Our recent <span className="text-primary-500 inline-block">news & insights</span>
        </h2>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="max-w-[738px] mx-auto">
          Our recent news and insights highlight the latest developments, achievements, and thought leadership shaping
          our journey forward. From product innovations and strategic partnerships to industry trends
        </p>
      </RevealAnimation>
    </div>
  );
};

export default Heading;
