import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';
import LinkButton from '../ui/button/LinkButton';

interface TeamProps {
  className?: string;
  badgeColor?: string;
}

const teamMembers = [
  {
    name: 'Darrell Steward',
    location: 'Monaco',
    image: '/images/avatar/avatar-2.png',
    social: {
      facebook: 'https://www.facebook.com/staticmania/',
      dribble: 'https://dribbble.com/staticmania',
      github: 'https://github.com/StaticMania',
      linkedin: 'https://bd.linkedin.com/company/staticmania',
    },
    delay: '0.4',
  },
  {
    name: 'Wade Warren',
    location: 'Tajikistan',
    image: '/images/avatar/avatar-3.png',
    social: {
      facebook: 'https://www.facebook.com/staticmania/',
      dribble: 'https://dribbble.com/staticmania',
      github: 'https://github.com/StaticMania',
      linkedin: 'https://bd.linkedin.com/company/staticmania',
    },
    delay: '0.5',
  },
  {
    name: 'Kathryn Murphy',
    location: 'Palestine, State of',
    image: '/images/avatar/avatar-12.png',
    social: {
      facebook: 'https://www.facebook.com/staticmania/',
      dribble: 'https://dribbble.com/staticmania',
      github: 'https://github.com/StaticMania',
      linkedin: 'https://bd.linkedin.com/company/staticmania',
    },
    delay: '0.6',
  },
  {
    name: 'Brooklyn Simmons',
    location: 'Palestine, State of',
    image: '/images/avatar/avatar-5.png',
    social: {
      facebook: 'https://www.facebook.com/staticmania/',
      dribble: 'https://dribbble.com/staticmania',
      github: 'https://github.com/StaticMania',
      linkedin: 'https://bd.linkedin.com/company/staticmania',
    },
    delay: '0.7',
  },
];

const Team = ({ className, badgeColor }: TeamProps) => {
  return (
    <section className={cn('py-[100px] lg:py-[150px] xl:py-[200px]', className)}>
      <div className="main-container">
        <div>
          {/* team heading section   */}
          <div className="mx-auto mb-[70px] max-w-[620px] text-center md:w-full">
            {/* badge  */}
            <RevealAnimation delay={0.1}>
              <span className={cn('badge mb-5', badgeColor)}>Our team</span>
            </RevealAnimation>
            {/* heading  */}
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Our innovative, dynamic, and talented team</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
                unique blend of expertise
              </p>
            </RevealAnimation>
          </div>
          {/* team members  */}
          <div className="mb-14 grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.name} delay={0.4 + index * 0.1}>
                <div className="mx-auto h-[312px] w-[298px] space-y-[34px]">
                  {/* team member image */}
                  <figure className="mx-auto flex size-[156px] items-center justify-center overflow-hidden rounded-full bg-[#d5dbe3]">
                    <Image
                      src={member.image}
                      className="size-full object-cover"
                      alt={`${member.name} profile img`}
                      loading="lazy"
                      width={100}
                      height={100}
                      quality={100}
                    />
                  </figure>

                  {/* team member info */}
                  <div className="space-y-[27px]">
                    <div className="text-center">
                      <h3 className="text-heading-5">{member.name}</h3>
                      <p className="text-tagline-2">{member.location}</p>
                    </div>

                    {/* social links */}
                    <div className="flex items-center justify-center gap-2.5">
                      {['facebook', 'dribble', 'github', 'linkedin'].map((platform) => {
                        const href = member.social[platform as keyof typeof member.social];
                        if (!href) return null;
                        return (
                          <Link
                            key={platform}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-secondary/10 dark:border-accent/10 hover:bg-primary-500 hover:border-primary-500 flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-110 hover:shadow-lg"
                            aria-label={`Follow ${member.name} on ${platform}`}>
                            <span>
                              <SocialIcon platform={platform as Platform} />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          {/* team btn  */}
          <RevealAnimation delay={0.8}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/our-team-01"
                className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent mx-auto block w-[90%] md:inline-block md:w-auto">
                View all members
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Team.displayName = 'Team';
export default Team;
