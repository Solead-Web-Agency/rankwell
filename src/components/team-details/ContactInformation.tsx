import { ITeamMember } from '@/interface';
import Link from 'next/link';
import SocialLinkV2 from '../shared/SocialLinkV2';

const ContactInformation = ({
  contactInformation,
  social,
}: {
  contactInformation: Partial<ITeamMember>;
  social: Partial<ITeamMember>;
}) => {
  return (
    <div className="p-11 space-y-[22px]">
      <div className="space-y-2">
        <h4 className="text-accent">Contact information</h4>
        <p>
          <Link href={`tel:${contactInformation?.phoneNumber}`} className="text-accent/60">
            {contactInformation?.phoneNumber}
          </Link>
        </p>
        <p>
          <Link href={`mailto:${contactInformation?.email}`} className="text-accent/60">
            {contactInformation?.email}
          </Link>
        </p>
      </div>
      {/*Social links*/}
      <SocialLinkV2 SocialLinks={social as Partial<ITeamMember>} />
    </div>
  );
};

export default ContactInformation;
