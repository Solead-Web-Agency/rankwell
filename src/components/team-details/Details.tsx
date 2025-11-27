import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import TeamMemberImg from './TeamMemberImg';

const Details = ({ slug }: { slug: string }) => {
  const teamMemberData = getMarkDownContent('src/data/team/', slug);

  return (
    <section className="py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-y-[70px] md:gap-y-0 md:gap-x-8 lg:gap-x-[70px]">
          {/* team member details   */}
          <TeamMemberImg data={teamMemberData.data} />
          {/* team member description  */}
          <div className="col-span-12 md:col-span-7">
            {/*Member details*/}
            <RevealAnimation delay={0.2}>
              <div className="team-details-body">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{teamMemberData.content}</ReactMarkdown>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
