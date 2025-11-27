import { ITeamMember } from '@/interface';
import gradient from '@public/images/gradient/gradient-28.png';
import gradient06 from '@public/images/gradient/gradient-6.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import ContactInformation from './ContactInformation';
const TeamMemberImg = ({ data }: { data: Partial<ITeamMember> }) => {
  const { contactInformation, social } = data;

  return (
    <RevealAnimation delay={0.2}>
      <div className="col-span-12 md:col-span-5 bg-secondary rounded-[20px] backdrop-blur-[12.5px] border border-background-4 dark:border-background-8 dark:bg-background-8 space-y-2.5 relative overflow-hidden">
        <div className="-z-100 absolute -right-[125%] -bottom-[25%] sm:-right-[85%] sm:-bottom-[15%] md:-right-[135%] md:-bottom-[25%] xl:-right-[105%] xl:-bottom-[15%] -rotate-[75deg] size-[860px] pointer-events-none">
          <Image src={gradient} alt="gradient" />
        </div>
        <figure className="rounded-b-[20px] flex justify-center overflow-hidden bg-background-1 relative z-1 -ml-[1px]">
          {/* gradient bg  */}
          <RevealAnimation delay={0.3} duration={0.8} direction="left" offset={100}>
            <figure className="absolute left-[-31%] top-[-35%] lg:top-[-32%] -z-1 w-[700px] md:w-[550px] lg:w-[750px] xl:w-[940px] select-none pointer-events-none">
              <Image src={gradient06} alt="bg image" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <Image src={data.userImg as string} alt="team-member-single img" width={600} height={600} />
        </figure>
        <ContactInformation
          contactInformation={contactInformation as Partial<ITeamMember>}
          social={social as Partial<ITeamMember>}
        />
      </div>
    </RevealAnimation>
  );
};

export default TeamMemberImg;
