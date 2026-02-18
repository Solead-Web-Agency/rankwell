'use client';

import Link from 'next/link';
import { Locale, getLocalizedHref } from '@/lib/i18n';
import RevealAnimation from '@/components/animation/RevealAnimation';

// ============================================
// Types
// ============================================
interface MentionsLegalesContentProps {
  locale: Locale;
}

// ============================================
// Content
// ============================================
const content = {
  fr: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Mentions légales' },
    ],
    title: 'Mentions légales',
    sections: [
      {
        title: '1. Présentation du site',
        content: [
          'En vertu de l\'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique, il est précisé aux utilisateurs du site https://www.rankwell.agency/ l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :',
          '<strong>Propriétaire :</strong> Rankwell SARL – SIRET 83268152200013 – 8 Place Boulnois, 75017 Paris',
          '<strong>Créateur :</strong> Rankwell',
          '<strong>Responsable publication :</strong> Rankwell',
          '<strong>Hébergeur :</strong> Vercel Inc. – 440 N Barranca Ave #4133, Covina, CA 91723, USA',
        ],
      },
      {
        title: '2. Conditions générales d\'utilisation',
        content: [
          'L\'utilisation du site https://www.rankwell.agency/ implique l\'acceptation pleine et entière des conditions générales d\'utilisation ci-après décrites. Ces conditions d\'utilisation sont susceptibles d\'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.',
          'Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Rankwell, qui s\'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l\'intervention.',
        ],
      },
      {
        title: '3. Description des services fournis',
        content: [
          'Le site https://www.rankwell.agency/ a pour objet de fournir une information concernant l\'ensemble des activités de la société Rankwell, agence spécialisée en référencement naturel (SEO), référencement payant (SEA) et analyse de données.',
          'Rankwell s\'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu\'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.',
        ],
      },
      {
        title: '4. Limitations contractuelles sur les données techniques',
        content: [
          'Le site utilise les technologies JavaScript et React.',
          'Le site Internet ne pourra être tenu responsable de dommages matériels liés à l\'utilisation du site. De plus, l\'utilisateur du site s\'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.',
        ],
      },
      {
        title: '5. Propriété intellectuelle et contrefaçons',
        content: [
          'Rankwell est propriétaire des droits de propriété intellectuelle ou détient les droits d\'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logos, icônes, sons et logiciels.',
          'Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Rankwell.',
          'Toute exploitation non autorisée du site ou de l\'un quelconque des éléments qu\'il contient sera considérée comme constitutive d\'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.',
        ],
      },
      {
        title: '6. Limitations de responsabilité',
        content: [
          'Rankwell ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l\'utilisateur, lors de l\'accès au site, et résultant soit de l\'utilisation d\'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l\'apparition d\'un bug ou d\'une incompatibilité.',
          'Rankwell ne pourra également être tenue responsable des dommages indirects (tels par exemple qu\'une perte de marché ou perte d\'une chance) consécutifs à l\'utilisation du site.',
        ],
      },
      {
        title: '7. Gestion des données personnelles',
        content: [
          'En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l\'article L. 226-13 du Code pénal, la Directive Européenne du 24 octobre 1995 et le Règlement Général sur la Protection des Données (RGPD).',
          'Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978, tout utilisateur dispose d\'un droit d\'accès, de rectification et d\'opposition aux données personnelles le concernant.',
          'Pour plus d\'informations sur la gestion de vos données personnelles, veuillez consulter notre politique de confidentialité.',
        ],
      },
      {
        title: '8. Liens hypertextes et cookies',
        content: [
          'Le site https://www.rankwell.agency/ contient un certain nombre de liens hypertextes vers d\'autres sites. Cependant, Rankwell n\'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n\'assumera en conséquence aucune responsabilité de ce fait.',
          'La navigation sur le site est susceptible de provoquer l\'installation de cookie(s) sur l\'ordinateur de l\'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l\'identification de l\'utilisateur, mais qui enregistre des informations relatives à la navigation d\'un ordinateur sur un site.',
          'L\'utilisateur peut configurer son navigateur pour refuser l\'installation des cookies.',
        ],
      },
      {
        title: '9. Droit applicable et attribution de juridiction',
        content: [
          'Tout litige en relation avec l\'utilisation du site https://www.rankwell.agency/ est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.',
        ],
      },
      {
        title: '10. Principales lois concernées',
        content: [
          'Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l\'informatique, aux fichiers et aux libertés.',
          'Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique.',
          'Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD).',
        ],
      },
    ],
    privacyLink: 'Consulter notre politique de confidentialité',
  },
  en: {
    breadcrumb: [
      { label: 'Home', href: '/en' },
      { label: 'Legal Notice' },
    ],
    title: 'Legal Notice',
    sections: [
      {
        title: '1. Website Presentation',
        content: [
          'In accordance with Article 6 of Law No. 2004-575 of June 21, 2004 on confidence in the digital economy, users of the website https://www.rankwell.agency/ are informed of the identity of the various parties involved in its creation and monitoring:',
          '<strong>Owner:</strong> Rankwell SARL – SIRET 83268152200013 – 8 Place Boulnois, 75017 Paris, France',
          '<strong>Creator:</strong> Rankwell',
          '<strong>Publication Manager:</strong> Rankwell',
          '<strong>Host:</strong> Vercel Inc. – 440 N Barranca Ave #4133, Covina, CA 91723, USA',
        ],
      },
      {
        title: '2. Terms of Use',
        content: [
          'The use of the website https://www.rankwell.agency/ implies full and complete acceptance of the terms of use described below. These terms of use may be modified or supplemented at any time, users of the site are therefore invited to consult them regularly.',
          'This site is normally accessible at all times to users. An interruption for technical maintenance may however be decided by Rankwell, who will then endeavor to communicate the dates and times of the intervention to users in advance.',
        ],
      },
      {
        title: '3. Description of Services Provided',
        content: [
          'The website https://www.rankwell.agency/ aims to provide information concerning all the activities of Rankwell, an agency specialized in natural referencing (SEO), paid referencing (SEA) and data analysis.',
          'Rankwell strives to provide information on the site that is as accurate as possible. However, it cannot be held responsible for omissions, inaccuracies and deficiencies in updating, whether caused by itself or by third-party partners who provide it with this information.',
        ],
      },
      {
        title: '4. Contractual Limitations on Technical Data',
        content: [
          'The site uses JavaScript and React technologies.',
          'The website cannot be held responsible for material damage related to the use of the site. In addition, the user of the site undertakes to access the site using recent equipment, free of viruses and with an up-to-date latest generation browser.',
        ],
      },
      {
        title: '5. Intellectual Property and Counterfeiting',
        content: [
          'Rankwell owns the intellectual property rights or holds the rights of use on all elements accessible on the site, including texts, images, graphics, logos, icons, sounds and software.',
          'Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the site, whatever the means or process used, is prohibited, except with the prior written authorization of Rankwell.',
          'Any unauthorized use of the site or any of the elements it contains will be considered as constituting counterfeiting and prosecuted in accordance with the provisions of Articles L.335-2 and following of the Intellectual Property Code.',
        ],
      },
      {
        title: '6. Limitations of Liability',
        content: [
          'Rankwell cannot be held responsible for direct and indirect damage caused to the user\'s equipment when accessing the site, resulting either from the use of equipment that does not meet the specifications indicated in point 4, or from the appearance of a bug or incompatibility.',
          'Rankwell also cannot be held responsible for indirect damages (such as for example loss of market or loss of opportunity) resulting from the use of the site.',
        ],
      },
      {
        title: '7. Personal Data Management',
        content: [
          'In France, personal data is protected in particular by Law No. 78-87 of January 6, 1978, Law No. 2004-801 of August 6, 2004, Article L. 226-13 of the Penal Code, the European Directive of October 24, 1995 and the General Data Protection Regulation (GDPR).',
          'In accordance with the provisions of Articles 38 and following of Law 78-17 of January 6, 1978, all users have the right to access, rectify and oppose personal data concerning them.',
          'For more information on the management of your personal data, please consult our privacy policy.',
        ],
      },
      {
        title: '8. Hyperlinks and Cookies',
        content: [
          'The website https://www.rankwell.agency/ contains a number of hyperlinks to other sites. However, Rankwell does not have the possibility to verify the content of the sites thus visited, and will consequently assume no responsibility for this.',
          'Browsing the site may cause the installation of cookie(s) on the user\'s computer. A cookie is a small file, which does not allow the identification of the user, but which records information relating to the browsing of a computer on a site.',
          'The user can configure their browser to refuse the installation of cookies.',
        ],
      },
      {
        title: '9. Applicable Law and Jurisdiction',
        content: [
          'Any dispute relating to the use of the website https://www.rankwell.agency/ is subject to French law. Exclusive jurisdiction is given to the competent courts of Paris.',
        ],
      },
      {
        title: '10. Main Laws Concerned',
        content: [
          'Law No. 78-17 of January 6, 1978, notably modified by Law No. 2004-801 of August 6, 2004 relating to data processing, files and freedoms.',
          'Law No. 2004-575 of June 21, 2004 on confidence in the digital economy.',
          'Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 (GDPR).',
        ],
      },
    ],
    privacyLink: 'View our privacy policy',
  },
};

// ============================================
// Component
// ============================================
export default function MentionsLegalesContent({ locale }: MentionsLegalesContentProps) {
  const t = content[locale] || content.fr;

  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32" aria-label="Page hero section">
        <div className="main-container">
          <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
            <RevealAnimation delay={0.1}>
              <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
                {t.breadcrumb.map((item, index) => (
                  <span key={index}>
                    {index > 0 && <span className="mx-2">-</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </span>
                ))}
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="font-normal lg:text-heading-2">{t.title}</h1>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ========== CONTENT ========== */}
      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[120px]">
        <div className="main-container">
          <article className="legal-content max-w-4xl">
            {t.sections.map((section, idx) => (
              <RevealAnimation key={section.title} delay={0.1 + idx * 0.02}>
                <div key={section.title} className="mb-8 last:mb-0">
                  <h2 className="text-heading-6 text-secondary dark:text-accent mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-secondary/80 dark:text-accent/80 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            ))}

            <RevealAnimation delay={0.4}>
              <div className="mt-12 pt-8 border-t border-stroke-3 dark:border-stroke-7">
                <Link
                  href={getLocalizedHref('/confidentialite', locale)}
                  className="inline-flex items-center gap-2 text-rw-blue hover:text-primary transition-colors font-medium"
                >
                  {t.privacyLink}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </RevealAnimation>
          </article>
        </div>
      </section>
    </>
  );
}
