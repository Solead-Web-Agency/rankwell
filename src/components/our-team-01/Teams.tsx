import { ITeamMember } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinks from '../shared/SocialLinks';

const Teams = () => {
  const teams: ITeamMember[] = getMarkDownData('src/data/team', false, 'name').slice(0, 9);
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="text-center space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our team</span>
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
        <div className="grid grid-cols-12 max-sm:gap-y-8 sm:gap-5 md:gap-8">
          {teams.map((team, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={team.slug}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="relative z-10 group bg-white dark:bg-background-9 rounded-[20px] overflow-hidden p-3">
                  <figure className="lg:max-w-[408px] mx-auto overflow-hidden">
                    <Link href={`/team/${team.slug}`}>
                      <Image
                        src={team.userImg}
                        alt={`${team.name} profile img`}
                        loading="lazy"
                        width={600}
                        height={600}
                        quality={100}
                        className="w-full h-full object-cover bg-background-1 rounded-2xl dark:bg-background-5"
                      />
                    </Link>
                  </figure>
                  <div className="max-w-[384px] w-[calc(100%-44px)] shadow-1 rounded-xl absolute z-20 bottom-7 sm:bottom-5 left-1/2 -translate-x-1/2 mx-auto p-6 bg-white dark:bg-background-9 space-y-3 cursor-pointer lg:opacity-0 lg:translate-y-[30%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:scale-[90%] lg:group-hover:scale-100 transition-all duration-[400ms] ease-team-ease-1">
                    <div className="text-center">
                      <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">
                        <Link href={`/team/${team.slug}`}> {team.name} </Link>
                      </h3>
                      <p className="text-tagline-2 font-normal text-secondary/40 dark:text-accent/40">{team.role}</p>
                    </div>
                    <SocialLinks social={team.social} />
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

export default Teams;
