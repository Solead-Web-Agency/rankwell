import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const UseCases = () => {
  const useCasesData: IService[] = getMarkDownData('src/data/services').slice(8, 11);
  return (
    <section className="pt-[100px] pb-[100px] xl:pb-[200px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:items-end items-center lg:flex-row flex-col lg:gap-0 gap-4 justify-between mb-[70px]">
          <div className="flex-1 lg:text-left text-center">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Use cases</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[518px]">How We Connect with Customers</h2>
              </RevealAnimation>
            </div>
          </div>
          <div className="flex-1 lg:text-left text-center">
            <div>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[518px] lg:mx-0 mx-auto">
                  Explore the ways our innovative solutions improve communication and boost efficiency in your
                  organization. From streamlined workflows to enhanced collaboration tools, we provide everything you
                  need to succeed.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-14">
          {useCasesData.map((useCase, index) => (
            <RevealAnimation key={useCase.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-6">
                  <div className="max-lg:text-center">
                    <span className={`${useCase.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-1 lg:text-left text-center">
                    <h3 className="text-heading-5">{useCase.title}</h3>
                    <p className="max-w-[337px] lg:mx-0 mx-auto line-clamp-3">{useCase.description}</p>
                  </div>
                  <div className="lg:text-left text-center">
                    <LinkButton
                      href={`/our-services/${useCase.slug}`}
                      className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                      Read more
                    </LinkButton>
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

export default UseCases;
