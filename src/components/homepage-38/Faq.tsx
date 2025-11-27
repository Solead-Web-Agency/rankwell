import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FAQData {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    id: '1',
    question: "What is NestSaaS's Resume Builder?",
    answer:
      "NestSaaS's Resume Builder is an AI-powered tool that helps you create professional, ATS-optimized resumes in minutes. It offers customizable templates, real-time suggestions, and industry-specific content to make your resume stand out.",
  },
  {
    id: '2',
    question: 'Can recruiters tell if AI wrote my resume?',
    answer:
      'No, recruiters cannot tell if AI wrote your resume. NestSaaS uses advanced AI technology to generate natural, human-sounding content that passes ATS systems and impresses hiring managers while maintaining authenticity and professionalism.',
  },
  {
    id: '3',
    question: 'What formats can I export my resume in?',
    answer:
      'You can export your resume in multiple professional formats including PDF, Word (DOCX), and plain text. All formats are optimized for ATS systems and maintain perfect formatting across different platforms and devices.',
  },
  {
    id: '4',
    question: 'Is my information secure?',
    answer:
      'Yes, your information is completely secure. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your personal data with third parties. Your resume content remains private and confidential.',
  },
  {
    id: '5',
    question: 'Can I use this on mobile?',
    answer:
      'Absolutely! NestSaaS is fully responsive and works seamlessly on all mobile devices. You can create, edit, and download your resume from anywhere using our mobile-optimized interface with the same powerful features as the desktop version.',
  },
];

const Faq = () => {
  return (
    <section className="lg:py-28 md:py-20 py-14">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-center">FAQ</h2>
        </RevealAnimation>

        {/* faq accordion list   */}
        <Accordion
          className="space-y-4 max-w-[950px] mx-auto w-full mt-10 xl:mt-20"
          defaultValue="1"
          enableScrollAnimation={true}
          animationDelay={0.1}>
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} className="border border-stroke-1 rounded-[20px]" value={faq.id}>
              <AccordionTrigger
                iconClassName="size-7 data-[state=open]:bg-secondary data-[state=closed]:bg-ns-green accordion-home-38 rounded-full flex items-center justify-center accordion-arrow transition-colors duration-300 ease-in-out"
                titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                className="flex w-full cursor-pointer items-center justify-between p-4 md:p-6 lg:p-8"
                value={faq.id}
                iconType="arrow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={faq.id} className="px-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
