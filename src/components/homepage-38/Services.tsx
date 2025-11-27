/* eslint-disable @typescript-eslint/no-explicit-any */
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import ServiceCard from './ServiceCard';

export interface ServiceData {
  id: string;
  title: string;
  icon: any;
}

const servicesData: ServiceData[] = [
  {
    id: '1',
    title: '20+ professional resume sections',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={33}
        viewBox="0 0 32 33"
        fill="none"
        className="shrink-0"
        aria-hidden="true">
        <path
          d="M19.491 7.31881C20.85 7.8132 22.1253 8.60552 23.2155 9.69574C24.3057 10.786 25.098 12.0612 25.5924 13.4202M19.491 7.31881C22.9775 5.1998 25.9126 4.48815 27.1678 5.74341C28.4231 6.99866 27.7114 9.93374 25.5924 13.4202M19.491 7.31881C16.8228 6.34819 13.8318 6.52598 11.2839 7.8525M25.5924 13.4202C24.2027 15.7068 22.2076 18.2306 19.765 20.6732C18.7478 21.6903 17.7166 22.6299 16.6943 23.4804M25.5924 13.4202C26.563 16.0884 26.3852 19.0795 25.0587 21.6273M20.7191 25.9669C21.6198 25.498 22.4651 24.8855 23.2212 24.1294C23.9773 23.3733 24.5898 22.528 25.0587 21.6273M20.7191 25.9669C22.8521 26.9625 24.5718 27.1567 25.4102 26.3184C26.2485 25.48 26.0543 23.7604 25.0587 21.6273M20.7191 25.9669C19.4856 25.3912 18.1138 24.5474 16.6943 23.4804M20.7191 25.9669C18.1713 27.2934 15.1802 27.4712 12.512 26.5006M16.6943 23.4804C15.4184 22.5214 14.1039 21.3819 12.8166 20.0946C10.097 17.375 8.03753 14.5343 6.9443 12.1921M16.6943 23.4804C15.2616 24.6724 13.8464 25.6896 12.512 26.5006M6.41061 20.3992C6.90499 21.7582 7.69732 23.0335 8.78754 24.1237C9.87776 25.2139 11.153 26.0062 12.512 26.5006M6.41061 20.3992C4.2916 23.8857 3.57995 26.8208 4.8352 28.076C6.09046 29.3313 9.02554 28.6196 12.512 26.5006M6.41061 20.3992C5.43998 17.731 5.61778 14.74 6.9443 12.1921M6.9443 12.1921C5.94872 10.0591 5.7545 8.33943 6.59286 7.50107C7.43123 6.6627 9.15088 6.85692 11.2839 7.8525M6.9443 12.1921C7.41324 11.2914 8.02574 10.4461 8.78181 9.69002C9.53788 8.93395 10.3832 8.32145 11.2839 7.8525"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Built-in grammar & clarity checker',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={34} viewBox="0 0 33 34" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5 17.9569H19.027L28.5538 27.4837L27.0735 28.964L17.5467 19.4373V32.9102H15.4533V19.4372L5.9264 28.964L4.44611 27.4837L13.973 17.9569H0.5V15.8634H13.9729L4.44611 6.33663L5.9264 4.85634L15.4533 14.3832V0.910156H17.5467V14.3831L27.0735 4.85634L28.5538 6.33663L19.027 15.8634H32.5V17.9569Z"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'AI resume tailoring & summary writing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={34} height={33} viewBox="0 0 34 33" fill="none" aria-hidden="true">
        <path
          d="M31.6278 16.967C31.6278 11.1905 28.268 6.19697 23.3921 3.82602M31.6278 16.967C30.8697 16.967 30.2548 17.5802 30.2548 18.3366C30.2548 19.0931 30.8693 19.7063 31.6274 19.7063C32.3855 19.7063 33 19.0931 33 18.3366C33 17.5802 32.3859 16.967 31.6278 16.967ZM23.3921 3.82602C23.0282 4.48962 22.1941 4.73338 21.529 4.3703C20.864 4.00722 20.6198 3.17492 20.9837 2.51132C21.3476 1.84771 22.1817 1.60409 22.8467 1.96718C23.5118 2.33026 23.7559 3.16242 23.3921 3.82602ZM16.9865 2.35732C10.0004 2.35732 4.15723 7.23952 2.69655 13.7711M2.60213 19.7063C3.88711 26.4656 9.83866 31.5766 16.9865 31.5766C22.179 31.5766 26.7402 28.8794 29.3396 24.8126M26.6223 17.3216C26.6223 22.8688 22.1156 27.3657 16.5564 27.3657C10.9971 27.3657 6.49049 22.8688 6.49049 17.3216C6.49049 13.0629 9.14662 9.42328 12.8961 7.96217M16.5564 7.27745C20.863 7.27745 24.5379 9.97613 25.9754 13.7711M3.70794 15.4217C3.53169 16.1574 2.7911 16.6112 2.0538 16.4354C1.31649 16.2595 0.861674 15.5205 1.03793 14.7848C1.21418 14.0491 1.95477 13.5952 2.69208 13.7711C3.42938 13.947 3.8842 14.6859 3.70794 15.4217ZM22.962 17.3216C22.962 20.8516 20.0941 23.7133 16.5564 23.7133C13.0187 23.7133 10.1508 20.8516 10.1508 17.3216C10.1508 13.7915 13.0187 10.9299 16.5564 10.9299C20.0941 10.9299 22.962 13.7915 22.962 17.3216Z"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Chrome extension to bookmark jobs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={35} height={33} viewBox="0 0 35 33" fill="none" aria-hidden="true">
        <path
          d="M1 12.9102C3.2 23.5768 5.4 23.5768 7.6 12.9102C9.8 23.5768 12 23.5768 14.2 12.9102C16.4 23.5768 18.6 23.5768 20.8 12.9102C23 23.5768 25.2 23.5768 27.4 12.9102C29.6 23.5768 31.8 23.5768 34 12.9102"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Export as PDF, TXT & more!',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={34} height={33} viewBox="0 0 34 33" fill="none" aria-hidden="true">
        <path
          d="M27.1867 20.2979C26.9456 20.9985 26.6272 21.6699 26.251 22.2927C24.3604 25.4553 20.9264 27.5766 17.0004 27.5766C11.29 27.5766 6.62125 23.1101 6.23541 17.4564M27.1867 20.2979C24.3025 20.3563 20.5695 20.1227 16.5471 19.5778M27.1867 20.2979C28.5661 20.2687 29.7622 20.1714 30.6979 20.006C32.0869 19.7627 32.9165 19.3832 32.9937 18.8674C33.1287 17.9916 31.0933 16.9115 27.7751 15.919C27.7944 16.172 27.8041 16.425 27.8041 16.6877C27.8041 17.1743 27.7655 17.651 27.7076 18.1181C27.6015 18.8674 27.4279 19.5973 27.1867 20.2979ZM6.23541 17.4564C6.21612 17.2035 6.20647 16.9505 6.20647 16.6877C6.20647 16.2012 6.23541 15.7243 6.30294 15.2572C8.78199 16.6099 12.1195 18.0792 15.8815 19.4124C15.9876 19.4513 16.0937 19.4902 16.1998 19.5291M6.23541 17.4564C8.88808 18.2544 12.3607 18.9939 16.1998 19.5291M6.23541 17.4564C2.89787 16.4639 0.862544 15.3837 1.00723 14.508C1.0844 13.9923 1.91397 13.6128 3.303 13.3695C4.23867 13.2041 5.43479 13.1067 6.81418 13.0775C6.57303 13.7782 6.39939 14.508 6.29329 15.2572C8.77236 16.6099 12.1099 18.0792 15.8719 19.4124C15.9876 19.4513 16.0937 19.4902 16.1998 19.5291M16.5471 19.5778C16.4313 19.5583 16.3156 19.5486 16.1998 19.5291M16.5471 19.5778C20.5791 20.1325 24.3025 20.366 27.1867 20.3076C27.4279 19.607 27.6015 18.8772 27.7076 18.1278C28.9423 18.7993 29.9552 19.4416 30.7075 20.0254C31.7783 20.8525 32.2991 21.5629 32.0966 22.0494C31.7686 22.8571 29.5307 22.896 26.251 22.3024C23.473 21.8061 19.9522 20.8525 16.1998 19.5291M27.7944 16.6877C27.7944 17.1743 27.7655 17.651 27.698 18.1181C27.6015 18.8772 27.4279 19.607 27.177 20.2979C24.2929 20.3563 20.5695 20.1227 16.5374 19.5681C16.4217 19.5486 16.3059 19.5389 16.1902 19.5194C16.0841 19.4805 15.978 19.4416 15.8719 19.4026C12.1099 18.0695 8.76267 16.6001 6.29329 15.2475C6.38975 14.4885 6.56338 13.7587 6.81418 13.0678C7.05533 12.3672 7.37364 11.6958 7.74983 11.073C9.63083 7.91043 13.0649 5.79883 17.0004 5.79883C22.7109 5.79883 27.3796 10.2653 27.7655 15.919C27.7847 16.172 27.7944 16.4347 27.7944 16.6877ZM7.7402 11.0827C7.36401 11.7055 7.05533 12.3769 6.80453 13.0775C6.56338 13.7782 6.38975 14.508 6.28364 15.2572C5.04895 14.5858 4.03611 13.9436 3.28371 13.3598C2.21299 12.5229 1.69211 11.8125 1.89468 11.326C2.22264 10.5183 4.46053 10.4891 7.7402 11.0827Z"
          stroke="#12161F"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '6',
    title: 'Translation tool for resumes',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={34} viewBox="0 0 33 34" fill="none" aria-hidden="true">
        <path
          d="M9.10768 9.51783C7.13853 7.54869 7.13853 4.35613 9.10768 2.387C11.0768 0.417875 14.2694 0.417875 16.2385 2.387L16.5 2.64847M9.10768 9.51783C7.13853 7.54869 3.94597 7.54869 1.97684 9.51783C0.00771861 11.487 0.00771861 14.6796 1.97684 16.6487L2.23831 16.9101M9.10768 9.51783L16.5 16.9101M16.5 2.64847L16.7615 2.387C18.7306 0.417875 21.9232 0.417875 23.8923 2.387C25.8615 4.35613 25.8615 7.54869 23.8923 9.51783M16.5 2.64847V31.1718M2.23831 16.9101L1.97684 17.1716C0.00771861 19.1407 0.00771861 22.3333 1.97684 24.3025C3.94597 26.2716 7.13853 26.2716 9.10768 24.3025M2.23831 16.9101H30.7617M16.5 16.9101L23.8923 9.51783M16.5 16.9101L9.10768 24.3025M16.5 16.9101L23.8923 24.3025M23.8923 9.51783C25.8615 7.54869 29.054 7.54869 31.0231 9.51783C32.9923 11.487 32.9923 14.6796 31.0231 16.6487L30.7617 16.9101M9.10768 24.3025C7.13853 26.2716 7.13853 29.4641 9.10768 31.4333C11.0768 33.4024 14.2694 33.4024 16.2385 31.4333L16.5 31.1718M23.8923 24.3025C25.8615 26.2716 29.054 26.2716 31.0231 24.3025C32.9923 22.3333 32.9923 19.1407 31.0231 17.1716L30.7617 16.9101M23.8923 24.3025C25.8615 26.2716 25.8615 29.4641 23.8923 31.4333C21.9232 33.4024 18.7306 33.4024 16.7615 31.4333L16.5 31.1718"
          stroke="#12161F"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '7',
    title: 'AI cover letter & more builder',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={34} height={33} viewBox="0 0 34 33" fill="none" aria-hidden="true">
        <path
          d="M33 3.73265C33 4.89544 32.2184 5.94142 30.8995 6.85434M30.8995 6.85434C32.2184 7.77654 33 8.86402 33 10.1099C33 11.2727 32.2183 12.3188 30.8992 13.2317M30.8995 6.85434C28.8132 8.29836 25.3828 9.40947 21.5748 10.1235M30.8995 6.85434C23.7793 1.87578 1 1.71384 1 7.45263C1 8.90387 2.65706 9.88724 5.21703 10.4529M30.8992 13.2317C32.2183 14.154 33 15.2416 33 16.4875C33 17.6637 32.2003 18.7221 30.8537 19.6452M30.8992 13.2317C28.7767 14.7008 25.2628 15.8253 21.3758 16.5376M30.8992 13.2317C28.813 11.7731 25.3826 10.7279 21.5748 10.1235M30.8537 19.6452C32.2003 20.5742 33 21.6724 33 22.9326C33 24.0955 32.2183 25.1415 30.8992 26.0545M30.8537 19.6452C28.7267 18.1779 25.2352 17.1326 21.3758 16.5376M30.8537 19.6452C28.74 21.0943 25.279 22.2103 21.4485 22.9263M21.3758 16.5376C15.8033 17.5587 9.46362 17.7327 5.35638 16.8603M21.3758 16.5376C15.8033 15.6784 9.46362 15.7578 5.35638 16.8603M21.5748 10.1235C15.8916 9.22127 9.36755 9.30086 5.21703 10.4529M21.5748 10.1235C15.8916 11.1891 9.36755 11.3701 5.21703 10.4529M30.8992 26.0545C23.7788 30.9828 1 32.0332 1 26.6526C1 25.1011 2.66486 23.981 5.23509 23.2707M30.8992 26.0545C32.2183 26.9768 33 28.0643 33 29.3103M30.8992 26.0545C28.79 24.5797 25.3067 23.5276 21.4485 22.9263M5.23509 23.2707C2.66486 22.7111 1 21.73 1 20.2753C1 18.6997 2.71736 17.5688 5.35638 16.8603M5.23509 23.2707C9.35571 22.1319 15.8034 22.0465 21.4485 22.9263M5.23509 23.2707C9.35571 24.1678 15.8034 23.9815 21.4485 22.9263M5.35638 16.8603C2.71736 16.2998 1 15.3073 1 13.8298C1 12.2821 2.65706 11.1635 5.21703 10.4529"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '8',
    title: 'Real-time feedback sharing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={34} viewBox="0 0 33 34" fill="none" aria-hidden="true">
        <path
          d="M17.2404 0.910156L6.875 19.8193H15.7596V32.9102L26.125 14.001H17.2404V0.910156Z"
          stroke="#12161F"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="xl:pt-28 pt-14 xl:pb-43.5 pb-30" aria-labelledby="services-heading">
      <div className="main-container">
        <div className="lg:space-y-19 space-y-12">
          <div className="flex items-center justify-between lg:flex-row flex-col gap-y-5">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 id="services-heading" className="lg:max-w-[470px] lg:text-left text-center" itemProp="name">
                  Everything you need to stand out
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[400px] lg:mx-0 mx-auto lg:text-left text-center" itemProp="description">
                  From AI-powered writing to ATS-ready optimization— NestSaaS helps you create resumes that get noticed,
                  fast.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <div className="mt-auto mb-0 md:w-auto w-full flex items-center justify-center">
                <div className="group w-[90%] sm:w-auto">
                  <Link
                    href="/pricing-01"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-5 border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Build your resume now
                    </span>
                    <div className="relative overflow-hidden size-6">
                      {/* one  */}
                      <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path d="M11 5H13V7H11V5Z" fill="white" />
                          <path d="M5 5H7V7H5V5Z" fill="white" />
                          <path d="M14 8H16V10H14V8Z" fill="white" />
                          <path d="M8 8H10V10H8V8Z" fill="white" />
                          <path d="M17 11H19V13H17V11Z" fill="white" />
                          <path d="M11 11H13V13H11V11Z" fill="white" />
                          <path d="M14 14H16V16H14V14Z" fill="white" />
                          <path d="M8 14H10V16H8V14Z" fill="white" />
                          <path d="M11 17H13V19H11V17Z" fill="white" />
                          <path d="M5 17H7V19H5V17Z" fill="white" />
                        </svg>
                      </span>
                      {/* two  */}
                      <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path d="M11 5H13V7H11V5Z" fill="white" />
                          <path d="M5 5H7V7H5V5Z" fill="white" />
                          <path d="M14 8H16V10H14V8Z" fill="white" />
                          <path d="M8 8H10V10H8V8Z" fill="white" />
                          <path d="M17 11H19V13H17V11Z" fill="white" />
                          <path d="M11 11H13V13H11V11Z" fill="white" />
                          <path d="M14 14H16V16H14V14Z" fill="white" />
                          <path d="M8 14H10V16H8V14Z" fill="white" />
                          <path d="M11 17H13V19H11V17Z" fill="white" />
                          <path d="M5 17H7V19H5V17Z" fill="white" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div
            className="items-center justify-center gap-3 grid grid-cols-12 w-full"
            role="list"
            aria-label="NextSaaS service features">
            {servicesData.map((service, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={service.id}>
                <ServiceCard service={service} index={index} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
