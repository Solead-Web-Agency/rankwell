import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image?: string;
  darkImage?: string;
  isMainCard?: boolean;
}

const featuresData: FeatureCard[] = [
  {
    id: 1,
    title: 'Time & Attendance Tracking',
    description: 'Monitor employee hours and overtime with accuracy.',
    isMainCard: true,
  },
  {
    id: 2,
    title: 'Project-Based Tracking',
    description: 'Assign time logs to specific projects for clear billing.',
    image: '/images/home-page-31/feature-6.png',
    darkImage: '/images/home-page-31/feature-dark-6.png',
  },
  {
    id: 3,
    title: 'Invoice generation',
    description: 'Convert timesheets into invoices instantly.',
    image: '/images/home-page-31/feature-7.png',
    darkImage: '/images/home-page-31/feature-dark-7.png',
  },
  {
    id: 4,
    title: 'Seamless payroll integration',
    description: 'Sync work hours with payroll for effortless payments.',
    image: '/images/home-page-31/feature-8.png',
    darkImage: '/images/home-page-31/feature-dark-8.png',
  },
];

const FeaturesV2 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="pt-20 pb-20 md:pb-28 xl:pb-[160px] bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="space-y-10 md:space-y-[70px]">
            <div className="text-center space-y-3 md:space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green-v2">Features</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Key features</h2>
              </RevealAnimation>
            </div>
            {/* features grid */}
            <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
              {featuresData.map((feature, index) => (
                <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                  {feature.isMainCard ? (
                    <article className="col-span-12 bg-white dark:bg-background-6 max-h-[400px] md:max-h-[319px] overflow-hidden relative rounded-[20px] flex flex-col lg:flex-row justify-between items-center pt-8 px-4 md:px-8">
                      <RevealAnimation delay={0.3 + index * 0.1 + 0.1}>
                        <div>
                          <h3 className="text-heading-6 sm:text-heading-5 mb-1">{feature.title}</h3>
                          <p>{feature.description}</p>
                          <div className="mt-6">
                            <LinkButton
                              href="/features-01"
                              className="btn dark:btn-transparent dark:hover:btn-accent btn-white btn-md hover:btn-secondary w-[90%] md:w-auto">
                              View more
                            </LinkButton>
                          </div>
                        </div>
                      </RevealAnimation>
                      {/* circle Aria  */}
                      <RevealAnimation delay={0.3 + index * 0.1 + 0.2}>
                        <div className="relative top-10 lg:top-16">
                          <figure className="absolute max-w-[124px] w-full -top-2 lg:top-2 -left-[25%] md:-left-[30%] lg:-left-[40%] rounded-[12px] overflow-hidden hidden sm:block">
                            <Image
                              src="/images/home-page-31/satified-user.png"
                              alt="Satisfied user testimonial card"
                              className="block dark:hidden size-full"
                              width={124}
                              height={124}
                            />
                            <Image
                              src="/images/home-page-31/satified-user-dark.png"
                              alt="Satisfied user testimonial card"
                              className="hidden dark:block"
                              width={124}
                              height={124}
                            />
                          </figure>
                          <figure className="absolute top-[26%] left-[2%] size-16 rounded-full bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/figma.svg"
                              className="w-[30px] h-[30px] object-cover object-center"
                              alt="figma"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="absolute top-[6%] left-[20%] size-16 rounded-full bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/dropbox.svg"
                              className="w-[30px] h-[30px] object-cover object-center"
                              alt="dropbox"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="absolute -top-[4%] left-[43%] size-16 rounded-full bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/slack.svg"
                              className="w-[30px] h-[30px] object-cover object-center"
                              alt="slack"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="absolute top-[6%] left-[67%] size-16 rounded-full bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/asana.svg"
                              className="object-cover object-center"
                              alt="asana"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="absolute top-[25%] left-[82%] size-16 rounded-full bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/drive-google.svg"
                              className="object-cover object-center"
                              alt="google drive"
                              width={30}
                              height={30}
                            />
                          </figure>
                          <figure className="absolute top-[30%] left-[43%] size-16 rounded-full flex items-center justify-center bg-background-4 dark:bg-background-9 px-5 py-[17px]">
                            <Image
                              src="/images/icons/vector.svg"
                              className="object-cover object-center block dark:hidden"
                              alt="vector"
                              width={30}
                              height={30}
                            />
                            <Image
                              src="/images/icons/vector-dark.svg"
                              className="object-cover object-center hidden dark:block"
                              alt="vector"
                              width={30}
                              height={30}
                            />
                          </figure>
                          {/* Circle div */}
                          <div className="size-[399px] rounded-full">
                            <div className="size-[399px] flex items-center justify-center rounded-full border border-[#E6EAF0] dark:border-stroke-8">
                              <div className="size-[350px] flex items-center justify-center rounded-full border border-[#E6EAF0] dark:border-stroke-8">
                                <div className="size-[288px] flex items-center justify-center rounded-full border border-[#E6EAF0] dark:border-stroke-8" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </RevealAnimation>
                    </article>
                  ) : (
                    <article className="space-y-3 col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] p-4 bg-white dark:bg-background-6">
                      {feature.image && (
                        <figure className="rounded-2xl overflow-hidden max-w-full md:max-w-[376px]">
                          <Image
                            src={feature.image}
                            className="w-full h-full object-cover block dark:hidden"
                            alt={feature.title}
                            width={376}
                            height={200}
                          />
                          {feature.darkImage && (
                            <Image
                              src={feature.darkImage}
                              className="w-full h-full object-cover hidden dark:block"
                              alt={feature.title}
                              width={376}
                              height={200}
                            />
                          )}
                        </figure>
                      )}
                      <div className="space-y-1">
                        <h3 className="text-heading-6 sm:text-heading-5">{feature.title}</h3>
                        <p>{feature.description}</p>
                        <div className="mt-7 mb-1">
                          <LinkButton
                            href="/features-01"
                            className="btn dark:btn-transparent dark:hover:btn-accent btn-white btn-md hover:btn-secondary w-[90%] md:w-auto">
                            View more
                          </LinkButton>
                        </div>
                      </div>
                    </article>
                  )}
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeaturesV2;
