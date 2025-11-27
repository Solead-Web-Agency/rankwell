import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Contact from '@/components/team-details/Contact';
import Details from '@/components/team-details/Details';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const teams = getMarkDownData('src/data/team', false, 'name');
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team Details - NextSaaS',
};

const TeamDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-primary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Team Details" heading="Team Details" link="/team-details" />
        <Details slug={slug} />
        <Contact />
        <CTAV1
          className="bg-secondary dark:bg-background-5 py-28"
          ctaHeading="Join the future of cloud software"
          headingClass="text-accent"
          description="Start your free trial today and experience the power of NexSaaS—where efficiency meets innovation."
          descriptionClass="max-w-[530px] text-accent/60"
          ctaBtnText="Get started"
          btnClass="btn-md btn-primary hover:btn-white h-12 w-full max-[376px]:w-[97%%] md:w-auto"
          listTextClass="text-tagline-2 text-accent dark:text-accent/60"
          inputFieldClass="border-0 px-[18px] shadow-1 h-12 py-3 placeholder:text-accent/60 rounded-full focus:outline-1 text-accent focus:outline-primary-600 dark:focus:outline-primary-400 bg-accent/5 lg:max-w-[340px] md:w-[71%] w-full dark:border-stroke-7 dark:placeholder:text-accent/60 placeholder:font-normal font-normal"
          checkListVariant="gray"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default TeamDetails;
