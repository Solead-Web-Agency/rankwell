// affiliate-program section
import affiliatesCover from '@public/images/affiliates/affiliates-cover-02.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AffiliateProgram = () => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
            <div className="md:text-center max-w-[602px] space-y-1.5 md:space-y-3 mx-auto">
              <h2>NextSaaS affiliate program</h2>
              <h3 className="text-heading-4">Earn up to $200 per referral!</h3>
              <p>
                Become part of the NextSaaS family by joining our Affiliate Program. Help businesses grow while you earn
                generous commissions — it’s a win-win!
              </p>
              <div className="mt-7 md:mt-14">
                <LinkButton
                  href="/affiliate-policy"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent w-full md:w-auto block md:inline-block">
                  Join now
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full rounded-[20px] overflow-hidden">
              <Image
                src={affiliatesCover}
                className="w-full h-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-3 max-w-[830px]">
            <RevealAnimation delay={0.3}>
              <h4>Why join the NextSaaS affiliate program?</h4>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Our rapidly growing platform, high customer satisfaction, and strong renewal rates make promoting <br />
                NextSaaS easy and profitable.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-2">
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary dark:before:bg-accent before:rounded-full before:left-0 before:-translate-y-1/2 before:mr-1 before:inline-block">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Earn money doing what you love:{' '}
                  </strong>
                  <span>
                    Whether you&apos;re an SEO expert, content creator, community leader, or ad specialist, there’s an
                    opportunity for you.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary dark:before:bg-accent before:rounded-full before:left-0 before:-translate-y-1/2 before:mr-1 before:inline-block">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Trusted by businesses worldwide:{' '}
                  </strong>
                  <span>
                    Our solutions are designed to scale, making them attractive for a wide variety of clients.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary dark:before:bg-accent before:rounded-full before:left-0 before:-translate-y-1/2 before:mr-1 before:inline-block">
                  <strong className="text-secondary dark:text-accent font-medium">Attractive lifetime deals: </strong>
                  <span> Make it easier for your audience to invest and grow with NextSaaS. </span>
                </li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;
