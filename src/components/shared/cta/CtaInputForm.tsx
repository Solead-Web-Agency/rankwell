import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ btnClass, ctaBtnText = 'Get Started', inputFieldClass }: CtaInputFormProps) => {
  return (
    <RevealAnimation delay={0.4}>
      <form
        action="#"
        method="post"
        className="flex flex-col items-center justify-start gap-3 md:flex-row"
        aria-label="cta-form">
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="Enter your email"
          required
          className={cn(
            'placeholder:text-secondary/50 border-stroke-1 dark:border-stroke-7 dark:placeholder:text-accent/60 text-secondary dark:text-accent focus-visible:outline-stroke-7 focus:border-primary-600 dark:focus:border-primary-400 h-12 w-[85%] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[340px]',
            inputFieldClass,
          )}
          aria-label="cta-input"
        />
        <button
          type="submit"
          className={cn(
            'btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto',
            btnClass,
          )}
          aria-label="cta-button">
          <span>{ctaBtnText}</span>
        </button>
      </form>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
