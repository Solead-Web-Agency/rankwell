import RevealAnimation from '../animation/RevealAnimation';

interface FeatureGuide {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Features = () => {
  const featureGuides: FeatureGuide[] = [
    {
      id: 'automate-repetitive',
      title: 'How to automate repetitive',
      description: 'Learn how to streamline your workflow with smart automation.',
      icon: 'ns-shape-9',
    },
    {
      id: 'data-sense',
      title: 'Making sense of your data',
      description: 'Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your',
      icon: 'ns-shape-3',
    },
    {
      id: 'best-practices',
      title: 'Best practices for managing',
      description: 'Help your team stay aligned and productive using shared dashboards and custom roles.',
      icon: 'ns-shape-12',
    },
  ];

  return (
    <section className="bg-background-2 dark:bg-background-5 md:pt-[100px] pt-[50px] md:pb-[200px] pb-[100px] dark:md:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[35px] md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">More features</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Featured guides</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[578px] mx-auto">
                Our platform is designed with a focus on performance, usability, and innovation, delivering a seamless
                experience tailored to modern needs.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-10">
          {featureGuides.map((guide, index) => (
            <RevealAnimation key={guide.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center">
                  <div className="mx-auto">
                    <span className={`${guide.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
