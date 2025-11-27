import LinkButton from '@/components/ui/button/LinkButton';
import { IPosition } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';

const Positions = () => {
  const positions: IPosition[] = getMarkDownData('src/data/career');

  return (
    <section className="py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="text-center mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Open Positions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Become part of the
              <br className="hidden md:block" />
              dream-team
            </h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions?.map((singlePost) => (
            <RevealAnimation delay={0.3} key={singlePost?.slug}>
              <div>
                <div className="bg-background-1 dark:bg-background-6 space-y-8 p-11 rounded-[20px] hover:scale-[100.5%] hover:shadow-md transition-all duration-[400ms]">
                  <div className="flex items-center gap-2">
                    {singlePost?.employmentType?.map((type) => (
                      <span className="badge badge-gray-light" key={type}>
                        {type}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-heading-5 mb-3 font-normal">{singlePost?.title}</h3>
                    <p>{singlePost?.shortDescription}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/career/${singlePost?.slug}`}
                      className="btn hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md btn-white">
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

export default Positions;
