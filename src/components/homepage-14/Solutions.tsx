import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const solutionsData = [
  {
    id: 1,
    icon: 'ns-shape-46',
    title: 'Home Purchase Loans',
    description: 'Ideal for first-time buyers and repeat homeowners.',
    headingId: 'home-purchase-heading',
  },
  {
    id: 2,
    icon: 'ns-shape-15',
    title: 'Refinance Loans',
    description: 'Lower your monthly payments or shorten your term to save more over time.',
    headingId: 'refinance-heading',
  },
  {
    id: 3,
    icon: 'ns-shape-13',
    title: 'Reverse Mortgages',
    description: 'Tap into your home equity while staying right where you are.',
    headingId: 'reverse-mortgage-heading',
  },
];

const Solutions = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-label="Mortgage Solutions">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* heading */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 id="mortgage-solutions-heading">Tailored lending solutions, crafted just for you.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[472px] md:w-full mx-auto">
                Our licensed experts help match you with the best mortgage for your financial situation.
              </p>
            </RevealAnimation>
          </div>

          {/* solutions cards + btn */}
          <div className="space-y-14">
            <div className="grid grid-cols-12 items-center justify-center gap-y-7 md:gap-x-9">
              {solutionsData.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <div className="p-6 sm:p-8 bg-white dark:bg-background-8 rounded-[20px] max-w-full md:max-w-[405px] w-full space-y-6 col-span-12 md:col-span-6 lg:col-span-4">
                    <span className={`block ${item.icon} text-[52px] text-secondary dark:text-accent`} />
                    <div className="space-y-2 max-sm:mt-2">
                      <h3 id={item.headingId} className="text-heading-6 md:text-heading-5">
                        {item.title}
                      </h3>
                      <p className="line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* btn */}
            <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/career"
                  className="btn btn-secondary dark:btn-transparent btn-md w-[90%] md:w-auto mx-auto"
                  aria-label="Explore all mortgage loan types">
                  Explore all loan types
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
