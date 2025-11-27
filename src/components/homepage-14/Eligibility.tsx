import eligibilityImg from '@public/images/home-page-14/eligibility-img.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const eligibilityData = [
  {
    id: 1,
    text: 'Minimum credit score: 620',
  },
  {
    id: 2,
    text: 'Proof of stable income or employment',
  },
  {
    id: 3,
    text: 'Minimum 3% down payment',
  },
  {
    id: 4,
    text: 'Property meets FHA/VA/conventional guidelines.',
  },
];

const Eligibility = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]" aria-label="Eligibility Check">
      <div className="main-container">
        <div className="bg-white dark:bg-background-8 pl-6 md:pl-14 pr-6 md:pr-8 py-12 sm:py-16 md:py-8 rounded-4xl">
          <div className="flex items-center flex-col md:flex-row justify-between gap-14 lg:gap-0">
            {/* heading  */}
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="md:max-w-[461px] w-full text-center md:text-start md:text-heading-4 lg:text-heading-3 xl:text-heading-2">
                  Check your eligibility in seconds.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="mb-8 text-center md:text-start">
                  Track key indicators, spot trends early, and turn data into action.
                </p>
              </RevealAnimation>
              {/* eligibility list  */}
              <ul className="space-y-4 mb-14" aria-label="Eligibility requirements">
                {eligibilityData.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-3">
                      <span>
                        <Image
                          src="images/icons/checkmark-dark.svg"
                          alt="Checkbox icon"
                          width={18}
                          height={18}
                          className="size-[18px] dark:hidden"
                        />
                        <Image
                          src="images/icons/checkmark-white.svg"
                          alt="Checkbox icon"
                          width={18}
                          height={18}
                          className="size-[18px] hidden dark:block"
                        />
                      </span>
                      <p>{item.text}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>

              <RevealAnimation delay={0.7}>
                <div className="text-center md:text-start">
                  <LinkButton
                    href="/features-01"
                    rel="noopener noreferrer"
                    className="btn btn-white btn-xl dark:btn-transparent hover:btn-primary w-[90%] md:w-auto"
                    aria-label="Check eligibility now">
                    Check eligibility now
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            {/* img  */}
            <RevealAnimation delay={0.6}>
              <figure className="md:w-[450px] lg:w-[400px] xl:w-[517px] w-full overflow-hidden rounded-3xl">
                <Image
                  src={eligibilityImg}
                  alt="Mortgage eligibility illustration"
                  className="size-full object-cover"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
