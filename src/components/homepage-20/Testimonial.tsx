import RevealAnimation from '../animation/RevealAnimation';
import FadeTestimonial from '../shared/FadeTestimonial';

const Testimonial = () => {
  return (
    <section className="relative xl:py-[200px] md:py-[100px] py-16 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-16 sm:space-y-20">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="max-w-[776px] w-full mx-auto">Trusted by leading enterprises &amp; risk leaders</h2>
            </RevealAnimation>
          </div>
          <FadeTestimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
