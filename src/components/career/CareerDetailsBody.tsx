import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import CareerDetailsHeading from './CareerDetailsHeading';
import JobOverview from './JobOverview';

const CareerDetailsBody = ({ slug }: { slug: string }) => {
  const position = getMarkDownContent('src/data/career/', slug);

  return (
    <section className="pb-[200px] pt-[100px]">
      <div className="main-container">
        <CareerDetailsHeading />
        <div className="grid grid-cols-12 items-start gap-y-[70px] md:gap-y-0 md:gap-x-8 lg:gap-x-[70px] xl:gap-[100px]">
          {/* Career details   */}
          <JobOverview data={position.data} />
          {/* team member description  */}
          <div className="col-span-12 md:col-span-6">
            {/* Job Description markdown */}
            <RevealAnimation delay={0.5}>
              <article className=" career-details-body">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{position.content}</ReactMarkdown>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetailsBody;
