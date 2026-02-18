'use client';

import Link from 'next/link';
import { Locale, getLocalizedHref } from '@/lib/i18n';
import RevealAnimation from '@/components/animation/RevealAnimation';

// ============================================
// Types
// ============================================
interface ConfidentialiteContentProps {
  locale: Locale;
}

// ============================================
// Content
// ============================================
const content = {
  fr: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Politique de confidentialité' },
    ],
    title: 'Politique de confidentialité',
    intro: 'La présente politique de confidentialité décrit comment Rankwell collecte, utilise et protège les informations que vous nous fournissez lorsque vous utilisez notre site web.',
    sections: [
      {
        title: '1. Définitions',
        content: [
          '<strong>L\'Éditeur :</strong> La personne, physique ou morale, qui édite les services de communication au public en ligne (Rankwell SARL).',
          '<strong>Le Site :</strong> L\'ensemble des sites, pages Internet et services en ligne proposés par l\'Éditeur.',
          '<strong>L\'Utilisateur :</strong> La personne utilisant le Site et les services.',
        ],
      },
      {
        title: '2. Nature des données collectées',
        content: [
          'Dans le cadre de l\'utilisation du Site, l\'Éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :',
          '• Données d\'état-civil, d\'identité, d\'identification (nom, prénom, adresse email)',
          '• Données de connexion (adresse IP, logs)',
          '• Données relatives à vos demandes via le formulaire de contact',
        ],
      },
      {
        title: '3. Communication des données personnelles à des tiers',
        content: [
          'Vos données ne font l\'objet d\'aucune communication à des tiers. Vous êtes toutefois informés qu\'elles pourront être divulguées en application d\'une loi, d\'un règlement ou en vertu d\'une décision d\'une autorité réglementaire ou judiciaire compétente.',
        ],
      },
      {
        title: '4. Information préalable en cas de fusion / acquisition',
        content: [
          'Dans le cas où nous prendrions part à une opération de fusion, d\'acquisition ou à toute autre forme de cession d\'actifs, nous nous engageons à garantir la confidentialité de vos données personnelles et à vous informer avant que celles-ci ne soient transférées ou soumises à de nouvelles règles de confidentialité.',
        ],
      },
      {
        title: '5. Agrégation des données',
        content: [
          'Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à tous nos Utilisateurs ou à des groupes spécifiques d\'Utilisateurs que nous combinons de manière à ce qu\'un Utilisateur individuel ne puisse plus être identifié) à des fins d\'analyse du secteur et du marché, de profilage démographique et à d\'autres fins commerciales.',
        ],
      },
      {
        title: '6. Collecte des données d\'identité',
        content: [
          'La consultation du Site ne nécessite pas d\'inscription ni d\'identification préalable. Elle peut s\'effectuer sans que vous ne communiquiez de données nominatives vous concernant.',
          'Nous ne procédons à aucun enregistrement de données nominatives pour la simple consultation du Site.',
        ],
      },
      {
        title: '7. Collecte des données techniques',
        content: [
          'Nous pouvons collecter certaines données techniques de votre appareil (adresse IP, type de navigateur, pages visitées) à des fins d\'analyse et d\'amélioration de nos services.',
        ],
      },
      {
        title: '8. Cookies',
        content: [
          '<strong>Durée de conservation :</strong> Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l\'Utilisateur.',
          '<strong>Finalité :</strong> Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à l\'Utilisateur, à partir du traitement des informations concernant la fréquence d\'accès, la personnalisation des pages ainsi que les opérations réalisées.',
          '<strong>Droit de refus :</strong> Vous reconnaissez avoir été informé que l\'Éditeur peut avoir recours à des cookies. Si vous ne souhaitez pas que des cookies soient utilisés sur votre terminal, la plupart des navigateurs vous permettent de désactiver les cookies.',
        ],
      },
      {
        title: '9. Conservation des données personnelles',
        content: [
          'Conformément à l\'article 6-5° de la loi n°78-17 du 6 janvier 1978, les données à caractère personnel ne sont pas conservées au-delà du temps nécessaire à l\'exécution des obligations définies lors de la conclusion du contrat ou de la durée prédéfinie de la relation contractuelle.',
          'Au-delà de cette durée, elles seront anonymisées et conservées à des fins exclusivement statistiques.',
        ],
      },
      {
        title: '10. Suppression des données',
        content: [
          'L\'Utilisateur a la possibilité de demander la suppression de ses données à tout moment, par simple demande à l\'Éditeur.',
          'Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période de trois ans, vos données pourront être supprimées de nos bases de données.',
        ],
      },
      {
        title: '11. Sécurité des données',
        content: [
          'Nous nous engageons à mettre en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d\'accès accidentels, non autorisés ou illégaux, de divulgation, d\'altération, de perte ou encore de destruction des données personnelles vous concernant.',
          'Dans l\'éventualité où nous prendrions connaissance d\'un accès illégal aux données personnelles vous concernant, nous nous engageons à vous notifier l\'incident dans les plus brefs délais.',
        ],
      },
      {
        title: '12. Transfert des données',
        content: [
          'L\'Éditeur s\'engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors de l\'Union européenne sans garanties appropriées.',
        ],
      },
      {
        title: '13. Modification de la politique',
        content: [
          'Nous nous engageons à vous informer en cas de modification substantielle de la présente Politique de Confidentialité, et à ne pas baisser le niveau de confidentialité de vos données de manière substantielle sans vous en informer et obtenir votre consentement.',
        ],
      },
      {
        title: '14. Droit applicable',
        content: [
          'La présente Politique de Confidentialité et votre utilisation du Site sont régies conformément aux lois de France, et notamment à la Loi n° 78-17 du 6 janvier 1978 relative à l\'informatique, aux fichiers et aux libertés, ainsi qu\'au Règlement Général sur la Protection des Données (RGPD).',
          'En cas de litige, les parties chercheront une solution amiable avant toute action judiciaire. Toutes contestations devront être portées devant les tribunaux français.',
        ],
      },
      {
        title: '15. Portabilité des données',
        content: [
          'L\'Éditeur s\'engage à vous offrir la possibilité de vous faire restituer l\'ensemble des données vous concernant sur simple demande. Ces données seront fournies dans un format ouvert et aisément réutilisable.',
        ],
      },
      {
        title: '16. Contact',
        content: [
          'Pour toute question relative à la présente politique de confidentialité ou pour toute demande relative à vos données personnelles, vous pouvez nous contacter à l\'adresse : <strong>contact@rankwell.fr</strong>',
        ],
      },
    ],
    legalLink: 'Consulter nos mentions légales',
  },
  en: {
    breadcrumb: [
      { label: 'Home', href: '/en' },
      { label: 'Privacy Policy' },
    ],
    title: 'Privacy Policy',
    intro: 'This privacy policy describes how Rankwell collects, uses and protects the information you provide when using our website.',
    sections: [
      {
        title: '1. Definitions',
        content: [
          '<strong>The Publisher:</strong> The natural or legal person who publishes online public communication services (Rankwell SARL).',
          '<strong>The Site:</strong> All sites, web pages and online services offered by the Publisher.',
          '<strong>The User:</strong> The person using the Site and services.',
        ],
      },
      {
        title: '2. Types of Data Collected',
        content: [
          'In the context of using the Site, the Publisher may collect the following categories of data concerning its Users:',
          '• Identity data (name, surname, email address)',
          '• Connection data (IP address, logs)',
          '• Data relating to your requests via the contact form',
        ],
      },
      {
        title: '3. Communication of Personal Data to Third Parties',
        content: [
          'Your data is not communicated to any third parties. However, you are informed that it may be disclosed in application of a law, regulation or by virtue of a decision of a competent regulatory or judicial authority.',
        ],
      },
      {
        title: '4. Prior Information in Case of Merger / Acquisition',
        content: [
          'In the event that we take part in a merger, acquisition or any other form of asset transfer, we undertake to guarantee the confidentiality of your personal data and to inform you before they are transferred or subject to new privacy rules.',
        ],
      },
      {
        title: '5. Data Aggregation',
        content: [
          'We may publish, disclose and use aggregated information (information relating to all our Users or specific groups of Users that we combine so that an individual User can no longer be identified) for industry and market analysis, demographic profiling and other commercial purposes.',
        ],
      },
      {
        title: '6. Identity Data Collection',
        content: [
          'Consulting the Site does not require registration or prior identification. It can be done without you providing any personal data.',
          'We do not record any personal data for simple consultation of the Site.',
        ],
      },
      {
        title: '7. Technical Data Collection',
        content: [
          'We may collect certain technical data from your device (IP address, browser type, pages visited) for analysis and improvement of our services.',
        ],
      },
      {
        title: '8. Cookies',
        content: [
          '<strong>Retention period:</strong> In accordance with CNIL recommendations, the maximum retention period for cookies is 13 months after their first deposit on the User\'s device.',
          '<strong>Purpose:</strong> Cookies may be used for statistical purposes, particularly to optimize the services provided to the User, based on processing information concerning access frequency, page personalization and operations performed.',
          '<strong>Right to refuse:</strong> You acknowledge having been informed that the Publisher may use cookies. If you do not wish cookies to be used on your device, most browsers allow you to disable cookies.',
        ],
      },
      {
        title: '9. Personal Data Retention',
        content: [
          'In accordance with Article 6-5° of Law No. 78-17 of January 6, 1978, personal data is not kept beyond the time necessary to fulfill the obligations defined when concluding the contract or the predefined duration of the contractual relationship.',
          'Beyond this period, they will be anonymized and kept for exclusively statistical purposes.',
        ],
      },
      {
        title: '10. Data Deletion',
        content: [
          'The User has the option to request the deletion of their data at any time, by simple request to the Publisher.',
          'For security reasons, if you have not authenticated on the Site for a period of three years, your data may be deleted from our databases.',
        ],
      },
      {
        title: '11. Data Security',
        content: [
          'We undertake to implement all appropriate technical and organizational measures to guarantee a level of security appropriate to the risks of accidental, unauthorized or illegal access, disclosure, alteration, loss or destruction of personal data concerning you.',
          'In the event that we become aware of illegal access to personal data concerning you, we undertake to notify you of the incident as soon as possible.',
        ],
      },
      {
        title: '12. Data Transfer',
        content: [
          'The Publisher undertakes not to transfer the personal data of its Users outside the European Union without appropriate guarantees.',
        ],
      },
      {
        title: '13. Policy Modification',
        content: [
          'We undertake to inform you in the event of a substantial modification to this Privacy Policy, and not to substantially lower the level of confidentiality of your data without informing you and obtaining your consent.',
        ],
      },
      {
        title: '14. Applicable Law',
        content: [
          'This Privacy Policy and your use of the Site are governed in accordance with the laws of France, and in particular Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms, as well as the General Data Protection Regulation (GDPR).',
          'In case of dispute, the parties will seek an amicable solution before any legal action. All disputes must be brought before the French courts.',
        ],
      },
      {
        title: '15. Data Portability',
        content: [
          'The Publisher undertakes to offer you the possibility of having all the data concerning you returned upon simple request. This data will be provided in an open and easily reusable format.',
        ],
      },
      {
        title: '16. Contact',
        content: [
          'For any question relating to this privacy policy or for any request relating to your personal data, you can contact us at: <strong>contact@rankwell.fr</strong>',
        ],
      },
    ],
    legalLink: 'View our legal notice',
  },
};

// ============================================
// Component
// ============================================
export default function ConfidentialiteContent({ locale }: ConfidentialiteContentProps) {
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
            {/* Intro */}
            <RevealAnimation delay={0.1}>
              <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed mb-10 pb-8 border-b border-stroke-3 dark:border-stroke-7">
                {t.intro}
              </p>
            </RevealAnimation>

            {/* Sections */}
            {t.sections.map((section, idx) => (
              <RevealAnimation key={section.title} delay={0.15 + idx * 0.02}>
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

            <RevealAnimation delay={0.5}>
              <div className="mt-12 pt-8 border-t border-stroke-3 dark:border-stroke-7">
                <Link
                  href={getLocalizedHref('/mentions-legales', locale)}
                  className="inline-flex items-center gap-2 text-rw-blue hover:text-primary transition-colors font-medium"
                >
                  {t.legalLink}
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
