import analytics1 from '@public/images/analytics/analytics-1.png';
import analytics2 from '@public/images/analytics/analytics-2.png';
import analytics3 from '@public/images/analytics/analytics-3.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

{
  /* =========================
Analytics Details section
===========================*/
}

const AnalyticsDetails = () => {
  return (
    <section className="pt-[70px] pb-[100px] analytics">
      <div className="max-w-[950px] w-[95%] mx-auto flex flex-col space-y-18">
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h5>Built for visibility</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Our real-time dashboard gives you a complete overview of your operations, performance, and growth—at a
                glance.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.1}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Live KPI tracking</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Visualized trends and comparisons</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Custom widgets and modules</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Customizable for every team</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Every team has different goals. With NextSaaS, you can tailor dashboards by department, role, or
                individual needs.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Finance:</strong>
                  Monitor revenue, expenses, cash flow
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Marketing:</strong>
                  Track conversions, ROAS, campaign reach
                </span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Sales:</strong>
                  Follow pipeline health and deal velocity
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Product:</strong>
                  View feature usage, retention, churn
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  <strong className="text-secondary dark:text-accent">Support:</strong>
                  Analyze ticket trends and resolution times
                </span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Drill down, zoom out</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Start with the big picture, then dive into the details. Filter, segment, and compare data over time to
                uncover meaningful insights.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Custom date ranges </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Custom date ranges </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">
                  Comparison modes (week over week, month over month)
                </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> Export to CSV/PDF for sharing</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="grid grid-column-12 gap-y-[50px]">
          <RevealAnimation delay={0.2}>
            <div className="cols-span-12">
              <figure>
                <Image src={analytics1} alt="analytics" className="rounded-[20px]" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="cols-span-12 md:col-span-6 flex flex-col md:flex-row gap-[50px]">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image src={analytics2} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure>
                <Image src={analytics3} alt="analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Integrate your data sources</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60">
                Nextsaas connects seamlessly with the tools you already use, so all your insights live in one place.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Stripe, quickbooks, xero </span>
              </li>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Google analytics, facebook ads</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> Hubspot, salesforce</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Security &amp; control</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                All dashboards are built with privacy in mind. Control access at every level, from personal views to
                organization-wide reports.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Role-based permissions</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60">Encrypted data storage</span>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <li>
                <span className="text-secondary/60 dark:text-accent/60"> Gdpr &amp; soc 2 compliant</span>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <h5>Share this post</h5>
          </RevealAnimation>
          {/*Social links*/}
          <RevealAnimation delay={0.2}>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="size-10 rounded-full bg-transparent border-secondary/10 hover:bg-primary-500 transition-all duration-500 ease-in-out border dark:border-stroke-7 hover:border-primary-500 flex justify-center items-center group hover:-translate-y-1.5">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.75 10.0535C18.75 5.19145 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.19145 1.25 10.0535C1.25 14.4475 4.44973 18.0896 8.63281 18.75V12.5982H6.41113V10.0535H8.63281V8.11396C8.63281 5.90759 9.93916 4.68886 11.9378 4.68886C12.8948 4.68886 13.8965 4.8608 13.8965 4.8608V7.02728H12.7932C11.7063 7.02728 11.3672 7.70594 11.3672 8.40282V10.0535H13.7939L13.406 12.5982H11.3672V18.75C15.5503 18.0896 18.75 14.4475 18.75 10.0535Z"
                    fill=""
                    className="fill-secondary dark:fill-accent/60 group-hover:fill-white transition-all duration-500 ease-in-out"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="size-10 rounded-full bg-transparent border-secondary/10 hover:bg-primary-500 transition-all duration-500 ease-in-out border dark:border-stroke-7 hover:border-primary-500 flex justify-center items-center group hover:-translate-y-1.5">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 1.25C5.16947 1.25 1.25 5.16947 1.25 10C1.25 14.8305 5.16947 18.75 10 18.75C14.821 18.75 18.75 14.8305 18.75 10C18.75 5.16947 14.821 1.25 10 1.25ZM15.7795 5.28335C16.8235 6.55504 17.4499 8.17787 17.4688 9.93355C17.2221 9.88614 14.7546 9.38313 12.2682 9.69632C12.2112 9.57295 12.1638 9.44005 12.1068 9.30722C11.955 8.94661 11.7842 8.57648 11.6133 8.22534C14.3655 7.1055 15.6182 5.49214 15.7795 5.28335ZM10 2.54067C11.898 2.54067 13.6347 3.25244 14.9539 4.41974C14.821 4.60955 13.6917 6.11849 11.0344 7.11496C9.81018 4.86578 8.45311 3.02468 8.24431 2.73997C8.8042 2.6071 9.39264 2.54067 10 2.54067ZM6.8208 3.24295C7.02008 3.50868 8.34871 5.35927 9.59192 7.56099C6.09951 8.49106 3.01519 8.47209 2.68303 8.47209C3.16703 6.15645 4.73292 4.22993 6.8208 3.24295ZM2.52169 10.0095C2.52169 9.93355 2.52169 9.85765 2.52169 9.78174C2.84436 9.7912 6.46963 9.83867 10.1993 8.71884C10.4176 9.13637 10.6169 9.56343 10.8067 9.99048C10.7118 10.019 10.6074 10.0475 10.5125 10.0759C6.65944 11.3191 4.60955 14.7166 4.43872 15.0013C3.25244 13.6822 2.52169 11.9265 2.52169 10.0095ZM10 17.4783C8.27275 17.4783 6.67842 16.8899 5.41621 15.9029C5.54908 15.6277 7.06749 12.7047 11.2812 11.2338C11.3001 11.2242 11.3097 11.2242 11.3286 11.2148C12.382 13.9384 12.8091 16.2256 12.923 16.8804C12.0214 17.2695 11.0344 17.4783 10 17.4783ZM14.1662 16.1971C14.0903 15.7416 13.6917 13.5588 12.7142 10.8731C15.0583 10.503 17.1082 11.1104 17.3644 11.1958C17.0418 13.2741 15.846 15.0678 14.1662 16.1971Z"
                    fill=""
                    className="fill-secondary dark:fill-accent/60 group-hover:fill-white transition-all duration-500 ease-in-out"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="size-10 rounded-full bg-transparent border-secondary/10 hover:bg-primary-500 transition-all duration-500 ease-in-out border dark:border-stroke-7 hover:border-primary-500 flex justify-center items-center group hover:-translate-y-1.5">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"
                    fill=""
                    className="fill-secondary dark:fill-accent/60 group-hover:fill-white transition-all duration-500 ease-in-out"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="size-10 rounded-full bg-transparent border-secondary/10 hover:bg-primary-500 transition-all duration-500 ease-in-out border dark:border-stroke-7 hover:border-primary-500 flex justify-center items-center group hover:-translate-y-1.5">
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width={39} height={39} rx="19.5" stroke="#FCFCFC" strokeOpacity="0.1" />
                  <path
                    d="M20.0007 11C16.3585 11 13.0773 13.1938 11.6851 16.5547C10.2929 19.9156 11.0617 23.7875 13.6351 26.3609C16.2085 28.9344 20.0804 29.7031 23.4413 28.3109C26.807 26.9234 29.0007 23.6422 29.0007 20C29.0007 15.0312 24.9695 11 20.0007 11ZM17.3851 24.7391H15.421V18.4109H17.3851V24.7391ZM16.4007 17.5484C15.9367 17.5484 15.5195 17.2719 15.3413 16.8453C15.1632 16.4187 15.257 15.9266 15.5851 15.5984C15.9085 15.2703 16.4007 15.1719 16.8273 15.3453C17.2538 15.5187 17.5351 15.9359 17.5398 16.3953C17.5398 17.0328 17.0335 17.5437 16.4007 17.5484ZM24.7398 24.7391H22.7757V21.6594C22.7757 20.9234 22.7617 19.9859 21.7538 19.9859C20.746 19.9859 20.5679 20.7828 20.5679 21.6078V24.7391H18.6132V18.4109H20.4976V19.2734H20.5257C20.7882 18.7766 21.4257 18.2516 22.382 18.2516C24.3695 18.2516 24.7351 19.5594 24.7351 21.2609V24.7391H24.7398Z"
                    fill=""
                    className="fill-secondary dark:fill-accent/60 group-hover:fill-white transition-all duration-500 ease-in-out"
                  />
                </svg>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDetails;
