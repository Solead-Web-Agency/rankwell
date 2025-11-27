import { DribbleIcon, FacebookIcon, GithubIcon, LinkedinIcon } from '@/icons';
import { FC } from 'react';

export type Platform = 'facebook' | 'dribble' | 'github' | 'linkedin';

const SocialIcon: FC<{ platform: Platform }> = ({ platform }) => {
  switch (platform) {
    case 'facebook':
      return <FacebookIcon />;
    case 'dribble':
      return <DribbleIcon />;
    case 'github':
      return <GithubIcon />;
    case 'linkedin':
      return <LinkedinIcon />;
  }
};
SocialIcon.displayName = 'SocialIcon';
export default SocialIcon;
