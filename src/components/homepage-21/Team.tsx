import { ITeamMember } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinks from '../shared/SocialLinks';

const Team = () => {
  const teams: ITeamMember[] = getMarkDownData('src/data/team', false, 'name').slice(0, 6);
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container space-y-10 md:space-y-[70px]">
        <div className="text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our team</span>
          </RevealAnimation>
          <div className="max-w-[620px] mx-auto space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Our innovative, dynamic and talented team</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
                unique blend of expertise
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-8 justify-items-center sm:gap-x-8">
          {teams.map((member, index) => (
            <RevealAnimation key={member.slug} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="relative group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden z-10 p-3 max-w-[408px]">
                  <figure className="max-w-[408px] mx-auto overflow-hidden">
                    <Link href={`/team/${member.slug}`}>
                      <Image
                        src={member.userImg}
                        loading="lazy"
                        width={600}
                        height={600}
                        quality={100}
                        alt={`${member.name} - team member`}
                        className="w-full h-full object-cover bg-[#F5F5F7] dark:bg-background-5 rounded-2xl"
                      />
                    </Link>
                  </figure>
                  <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-8 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                    <div className="text-center">
                      <Link href={`/team/${member.slug}`}>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">{member.name}</h3>
                      </Link>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">{member.role}</p>
                    </div>
                    <SocialLinks social={member.social} />
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

export default Team;
