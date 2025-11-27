import RevealAnimation from '../animation/RevealAnimation';
import TestimonialV2 from '../shared/TestimonialV2';

const Testimonial = () => {
  return (
    <section className="py-16 sm:py-20 md:py-[75px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[35px] sm:space-y-[50px] md:space-y-[70px]">
          <div className="text-center space-y-3 sm:space-y-5">
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
                <p className="max-w-[628px] w-full mx-auto">
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
