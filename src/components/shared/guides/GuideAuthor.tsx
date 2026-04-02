/**
 * GUIDE AUTHOR — Bloc auteur éditorial
 */

import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

interface GuideAuthorProps {
  locale: string;
}

const author = {
  name: 'Nicolas Durand',
  role: {
    fr: 'Responsable communications numériques',
    en: 'Digital Communications Manager',
  },
  bio: {
    fr: 'Passionné par le numérique et les stratégies de contenu, j\u2019accompagne les marques dans leur visibilité en ligne depuis plus de 10 ans. Chez Rankwell, je pilote la production éditoriale et je veille à ce que chaque publication allie rigueur SEO et valeur réelle pour le lecteur.',
    en: 'Passionate about digital and content strategies, I\u2019ve been helping brands grow their online visibility for over 10 years. At Rankwell, I lead editorial production and ensure every publication combines SEO rigor with real value for the reader.',
  },
  company: 'Rankwell',
  photo: '/images/shared/authors/nicolas-durand.jpg',
  linkedin: 'https://www.linkedin.com/in/nicolas-durand-54566b28b/',
};

export default function GuideAuthor({ locale }: GuideAuthorProps) {
  const role = locale === 'fr' ? author.role.fr : author.role.en;
  const bio = locale === 'fr' ? author.bio.fr : author.bio.en;

  return (
    <RevealAnimation>
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">

        {/* Photo avec accent */}
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group shrink-0 relative"
        >
          <div className="h-[72px] w-[72px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src={author.photo}
              alt={author.name}
              width={72}
              height={72}
              className="object-cover h-full w-full"
            />
          </div>
          {/* Petit badge LinkedIn sur la photo */}
          <div className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm transition-transform duration-200 group-hover:scale-110">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </a>

        {/* Texte */}
        <div className="min-w-0">
          <p className="text-tagline-3 text-secondary/35 dark:text-white/30 mb-1">
            {locale === 'fr' ? 'Article rédigé par' : 'Written by'}
          </p>
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group/name inline-flex items-center gap-2"
          >
            <span className="text-heading-6 font-semibold text-secondary dark:text-white transition-colors duration-200 group-hover/name:text-rw-blue">
              {author.name}
            </span>
          </a>
          <p className="text-tagline-2 text-rw-blue/70 dark:text-rw-blue/60 mt-0.5 mb-3">
            {role}
          </p>
          <p className="text-tagline-2 text-secondary/55 dark:text-white/45 leading-[1.7]">
            {bio}
          </p>
        </div>

      </div>
    </RevealAnimation>
  );
}
