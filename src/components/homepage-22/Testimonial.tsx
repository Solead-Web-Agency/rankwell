import RevealAnimation from '../animation/RevealAnimation';
import FadeTestimonial from '../shared/FadeTestimonial';

const Testimonial = () => {
  return (
    <section className="relative lg:py-[200px] md:py-[100px] py-[50px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="xl:space-y-[132px] lg:space-y-[90px] space-y-10">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2>Customer reviews</h2>
            </RevealAnimation>
          </div>
          <FadeTestimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
