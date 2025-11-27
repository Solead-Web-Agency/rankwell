{
  /* testimonial section  */
}
import RevealAnimation from '../animation/RevealAnimation';
import TestimonialLarge from './TestimonialLarge';
import TestimonialMobile from './TestimonialMobile';

const Testimonial = () => {
  return (
    <section className="py-12 md:py-16 lg:py-22 xl:py-28" aria-labelledby="testimonials-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <RevealAnimation delay={0.1}>
            <h2 id="testimonials-heading" className="text-center">
              Testimonials
            </h2>
          </RevealAnimation>
          {/* testimonial cards Large Screen */}
          <TestimonialLarge />
          {/* testimonial cards Small Screen */}
          <TestimonialMobile />
        </div>
      </div>
    </section>
  );
};

Testimonial.displayName = 'Testimonial';
export default Testimonial;
