{
  /* client marquee section  */
}
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Import all client logo images
import AsanaLogo from '@public/images/icons/asana-metal.svg';
import DiscordLogo from '@public/images/icons/discord-metal.svg';
import DropboxLogo from '@public/images/icons/dropbox-metal.svg';
import HotjarLogo from '@public/images/icons/hotjar-metal.svg';
import LatticeLogo from '@public/images/icons/lattice-metal.svg';
import NotionLogo from '@public/images/icons/notion-metal.svg';
import OutreachLogo from '@public/images/icons/outreach-metal.svg';
import ScapicLogo from '@public/images/icons/scapic-metal.svg';
import SpotifyLogo from '@public/images/icons/spotify-metal.svg';
import SquarespaceLogo from '@public/images/icons/squarespace-metal.svg';
import StripeLogo from '@public/images/icons/stripe-metal.svg';
import Marquee from 'react-fast-marquee';

interface ClientLogo {
  id: string;
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    src: ScapicLogo,
    alt: 'Scapic company logo',
    width: 135,
    height: 45,
  },
  {
    id: '2',
    src: AsanaLogo,
    alt: 'Asana company logo',
    width: 128,
    height: 45,
  },
  {
    id: '3',
    src: DiscordLogo,
    alt: 'Discord company logo',
    width: 160,
    height: 45,
  },
  {
    id: '4',
    src: DropboxLogo,
    alt: 'Dropbox company logo',
    width: 164,
    height: 45,
  },
  {
    id: '5',
    src: HotjarLogo,
    alt: 'Hotjar company logo',
    width: 124,
    height: 45,
  },
  {
    id: '6',
    src: LatticeLogo,
    alt: 'Lattice company logo',
    width: 148,
    height: 45,
  },
  {
    id: '7',
    src: NotionLogo,
    alt: 'Notion company logo',
    width: 128,
    height: 45,
  },
  {
    id: '8',
    src: OutreachLogo,
    alt: 'Outreach company logo',
    width: 168,
    height: 45,
  },
  {
    id: '9',
    src: SpotifyLogo,
    alt: 'Spotify company logo',
    width: 136,
    height: 45,
  },
  {
    id: '10',
    src: SquarespaceLogo,
    alt: 'Squarespace company logo',
    width: 250,
    height: 45,
  },
  {
    id: '11',
    src: StripeLogo,
    alt: 'Stripe company logo',
    width: 123,
    height: 45,
  },
];

const Clients = () => {
  return (
    <section className="xl:py-39 lg:py-28 py-16 relative" aria-labelledby="clients-heading">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2
            id="clients-heading"
            className="max-w-[800px] 2xl:text-left text-center 2xl:mx-0 mx-auto"
            itemProp="description">
            NextSaaS resumes have helped users land jobs at top companies.
          </h2>
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.2}>
        <div>
          <Marquee
            speed={40}
            autoFill
            className=" overflow-hidden mt-14"
            aria-label="Logos of companies where NextSaaS users have found employment">
            <div className="flex items-center justify-center gap-x-14">
              {clientLogos.map((logo, index) => (
                <figure
                  key={`${logo.alt}-${index}`}
                  className={`shrink-0 ${index === 0 ? 'ml-14' : ''}`}
                  style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                  itemProp="logo">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    {...(index >= 3 && { loading: 'lazy' })}
                    className="object-contain"
                    priority={index < 3}
                  />
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>

      {/* left gradient */}
      <div
        className="2xl:w-[455px] md:w-[150px] w-[80px] h-[80px] z-10 sm:h-[130px] absolute left-0 bottom-[20%]"
        style={{
          background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)',
        }}
        aria-hidden="true"
        role="presentation"
      />
      {/* right gradient */}
      <div
        className="2xl:w-[455px] md:w-[150px] w-[80px] h-[80px] z-10 sm:h-[130px] absolute right-0 bottom-[20%] rotate-180"
        style={{
          background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)',
        }}
        aria-hidden="true"
        role="presentation"
      />
    </section>
  );
};

Clients.displayName = 'Clients';
export default Clients;
