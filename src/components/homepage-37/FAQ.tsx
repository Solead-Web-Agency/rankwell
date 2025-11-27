import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do I set up my AI gadget?',
    answer:
      'Setting up your AI gadget is simple! Just unbox your device, download the NextSaaS app, and follow the step-by-step setup guide. The process typically takes 5-10 minutes and includes connecting to Wi-Fi, creating your account, and personalizing your preferences.',
  },
  {
    id: 2,
    question: 'Do I need Wi-Fi for it to work?',
    answer:
      'Yes, a stable internet connection is required for optimal functionality. Wi-Fi enables real-time syncing, software updates, voice recognition, and AI-powered features. However, some basic functions may work offline temporarily.',
  },
  {
    id: 3,
    question: 'Is my data safe with NextSaaS?',
    answer:
      'Absolutely! We use enterprise-grade encryption and follow strict privacy protocols. Your data is encrypted both in transit and at rest. We never sell your personal information and you have full control over your data sharing preferences.',
  },
  {
    id: 4,
    question: 'Does it work with smart home assistants?',
    answer:
      'Yes! Our AI gadgets are compatible with major smart home ecosystems including Alexa, Google Assistant, Apple HomeKit, and Samsung SmartThings. You can control your device through voice commands and integrate it with your existing smart home setup.',
  },
  {
    id: 5,
    question: "What's the warranty and return policy?",
    answer:
      "We offer a 2-year warranty covering manufacturing defects and a 30-day money-back guarantee. If you're not completely satisfied, you can return the device within 30 days for a full refund. Extended warranty options are also available.",
  },
];

const FAQ = () => {
  return (
    <section className="py-28">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[720px] mx-auto mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 uppercase">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Frequently asked questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Everything You Need to Know Before You Start.</p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div>
            <Accordion
              className="mx-auto w-full max-w-[770px] space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {faqData.map((item) => (
                <AccordionItem
                  className="bg-white dark:bg-background-7 border border-stroke-1 dark:border-stroke-8 rounded-[20px] px-6 md:px-8"
                  key={item.id}
                  value={item.id.toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left text-heading-6 font-normal text-secondary dark:text-accent"
                    className="flex w-full cursor-pointer items-center justify-between py-6 md:py-8"
                    value={item.id.toString()}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FAQ;
