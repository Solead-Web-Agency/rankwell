import gradient16 from '@public/images/gradient/gradient-16.png';
import gradient27 from '@public/images/gradient/gradient-27.png';
import gradient3 from '@public/images/gradient/gradient-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[810px] mx-auto">Leading companies around the globe rely on NextSaaS.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[542px] mx-auto">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                Latin, though it looks like it
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 py-8 px-6 rounded-[20px] space-y-6 relative z-10 overflow-hidden">
                {/* bg gradient */}
                <figure className="absolute -z-10 pointer-events-none -top-[66%] -left-[60%] rotate-[304deg] size-[410px] select-none">
                  <Image src={gradient3} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-9 text-[52px] text-secondary dark:text-accent"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Live chat</h3>
                  <p className="line-clamp-2">
                    Instant help for pre-sales queries reach us through our live chat for any pre-sale or general
                    inquiries.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/our-services-01"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Check bottom-right
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 py-8 px-6 rounded-[20px] space-y-6 relative z-10 overflow-hidden">
                <figure className="absolute -z-10 pointer-events-none -top-[74%] -right-[70%] rotate-[175deg] size-[410px] select-none">
                  <Image src={gradient27} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-3 text-[52px] text-secondary dark:text-accent"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Support ticket</h3>
                  <p className="line-clamp-2">
                    In-depth technical assistance submit a ticket for a personalized and detailed solution to your
                    issue.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/our-services-01"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Submit a ticket
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-4">
              <div className="bg-background-2 dark:bg-background-6 py-8 px-6 rounded-[20px] space-y-6 relative z-10 overflow-hidden">
                <figure className="absolute -z-10 pointer-events-none -top-[74%] -right-[35%] rotate-[175deg] size-[410px] select-none">
                  <Image src={gradient16} className="size-full object-contain" alt="gradient-16" />
                </figure>
                <div>
                  <div className="flex items-center justify-center">
                    <span className="ns-shape-12 text-[52px] text-secondary dark:text-accent"> </span>
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-heading-5">Knowledge base</h3>
                  <p className="line-clamp-2">
                    Comprehensive guides and documentation find step-by-step instructions and solutions for the most
                    common topics.
                  </p>
                </div>
                <div className="text-center">
                  <LinkButton
                    href="/our-services-01"
                    className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                    Visit knowledge base
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
