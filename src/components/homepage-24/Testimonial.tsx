import RevealAnimation from '../animation/RevealAnimation';
import TestimonialV2 from '../shared/TestimonialV2';

const Testimonial = () => {
  return (
    <section className="lg:pt-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="text-center space-y-4 md:space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="inline-block badge badge-cyan">What our users say</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  People&apos;s
                  <span className="text-primary-500"> share love </span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="lg:max-w-[628px] max-w-[400px] w-full mx-auto">
                  At the heart of our approach lies a commitment to delivering smart, tailored financial solutions that
                  align with your unique goals.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <TestimonialV2 />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
