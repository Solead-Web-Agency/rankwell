'use client';
import { useDividerExpand } from '@/hooks/useDividerExpand';
import RevealAnimation from '../animation/RevealAnimation';

const SearchCta = () => {
  const dividerRef = useDividerExpand();
  return (
    <section className="py-14 md:py-20 xl:py-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-6 relative -z-0 mx-auto max-w-[900px] overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat text-center xl:max-w-full xl:rounded-4xl">
            {/* Gradient  */}
            <div className="pointer-events-none absolute -top-[22%] left-[28%] z-10 h-[982px] w-[108px] -rotate-[50deg] bg-(image:--color-gradient-5) blur-[85px] select-none" />
            <div className="pointer-events-none absolute -top-[22%] right-[8%] z-10 h-[982px] w-[108px] -rotate-45 bg-(image:--color-gradient-5) blur-[85px] select-none" />
            <div>
              <div className="p-5 sm:p-10 xl:p-[70px]">
                <RevealAnimation delay={0.1}>
                  <h3 className="mx-auto max-w-[571px] text-white">Discover the ideal domain name for your business</h3>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <form className="mx-auto mt-8 mb-6 flex w-full max-w-full flex-col items-center justify-center gap-3 sm:max-w-[481px] sm:flex-row">
                    <fieldset className="w-[90%] max-w-full flex-1 sm:max-w-[340px]">
                      <input
                        type="text"
                        aria-label="domain name"
                        placeholder="Search"
                        className="bg-accent/20 shadow-1 focus:ring-primary-500 placeholder:text-accent/60 h-12 w-full rounded-full px-[18px] py-3 font-normal text-white ring-[0.7px] ring-transparent placeholder:font-normal focus:outline-0"
                      />
                    </fieldset>
                    <button
                      type="submit"
                      className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent h-12 w-[90%] sm:w-auto">
                      <span>Check domain</span>
                    </button>
                  </form>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <div className="mx-auto flex w-full max-w-[383px] items-center justify-center gap-6 xl:gap-12">
                    <p className="text-tagline-2 text-accent/60">.info</p>
                    <p className="text-tagline-2 text-accent/60">.com</p>
                    <p className="text-tagline-2 text-accent/60">.biz</p>
                    <p className="text-tagline-2 text-accent/60">.org</p>
                    <p className="text-tagline-2 text-accent/60">.io</p>
                  </div>
                </RevealAnimation>
              </div>
              <div ref={dividerRef} className="bg-accent/10 divider mx-auto h-px w-0 origin-center" />
              <div className="space-y-3 p-5 sm:p-10 xl:p-[70px]">
                <RevealAnimation delay={0.4}>
                  <p className="xl:text-heading-4 text-accent max-md:text-tagline-1 font-normal">
                    Reliable hosting services chosen by over 2.8 million domain owners.
                  </p>
                </RevealAnimation>

                <RevealAnimation delay={0.5}>
                  <div className="flex items-center justify-center gap-3 max-md:flex-wrap">
                    <span className="xl:text-tagline-1 text-tagline-2 text-accent/60">Excellent</span>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={16}
                            viewBox="0 0 17 16"
                            fill="none">
                            <path
                              d="M8.96962 13.2135L12.9099 15.7099C13.4136 16.029 14.0389 15.5544 13.8894 14.9665L12.751 10.4881C12.7189 10.3634 12.7227 10.2322 12.762 10.1095C12.8012 9.98683 12.8742 9.87772 12.9727 9.79472L16.5061 6.85382C16.9703 6.4674 16.7307 5.69689 16.1342 5.65817L11.5199 5.3587C11.3956 5.34982 11.2764 5.30582 11.1761 5.23181C11.0759 5.15781 10.9987 5.05685 10.9536 4.94069L9.23265 0.606857C9.18587 0.483564 9.10269 0.377419 8.99415 0.302517C8.88562 0.227615 8.75687 0.1875 8.625 0.1875C8.49313 0.1875 8.36438 0.227615 8.25585 0.302517C8.14732 0.377419 8.06414 0.483564 8.01736 0.606857L6.2964 4.94069C6.2513 5.05685 6.17414 5.15781 6.0739 5.23181C5.97365 5.30582 5.85444 5.34982 5.73015 5.3587L1.11578 5.65817C0.519294 5.69689 0.279664 6.4674 0.743936 6.85382L4.27732 9.79472C4.37579 9.87772 4.44883 9.98683 4.48805 10.1095C4.52726 10.2322 4.53106 10.3634 4.499 10.4881L3.44324 14.6413C3.26389 15.3468 4.01429 15.9163 4.61869 15.5334L8.28039 13.2135C8.38337 13.1479 8.50292 13.1131 8.625 13.1131C8.74708 13.1131 8.86663 13.1479 8.96962 13.2135Z"
                              fill="#39BD09"
                            />
                          </svg>
                        </span>
                      ))}
                    </div>
                    <span className="xl:text-tagline-1 text-tagline-2 text-accent/60">436 reviews on</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" fill="none">
                        <path
                          d="M8.96962 13.2135L12.9099 15.7099C13.4136 16.029 14.0389 15.5544 13.8894 14.9665L12.751 10.4881C12.7189 10.3634 12.7227 10.2322 12.762 10.1095C12.8012 9.98683 12.8742 9.87772 12.9727 9.79472L16.5061 6.85382C16.9703 6.4674 16.7307 5.69689 16.1342 5.65817L11.5199 5.3587C11.3956 5.34982 11.2764 5.30582 11.1761 5.23181C11.0759 5.15781 10.9987 5.05685 10.9536 4.94069L9.23265 0.606857C9.18587 0.483564 9.10269 0.377419 8.99415 0.302517C8.88562 0.227615 8.75687 0.1875 8.625 0.1875C8.49313 0.1875 8.36438 0.227615 8.25585 0.302517C8.14732 0.377419 8.06414 0.483564 8.01736 0.606857L6.2964 4.94069C6.2513 5.05685 6.17414 5.15781 6.0739 5.23181C5.97365 5.30582 5.85444 5.34982 5.73015 5.3587L1.11578 5.65817C0.519294 5.69689 0.279664 6.4674 0.743936 6.85382L4.27732 9.79472C4.37579 9.87772 4.44883 9.98683 4.48805 10.1095C4.52726 10.2322 4.53106 10.3634 4.499 10.4881L3.44324 14.6413C3.26389 15.3468 4.01429 15.9163 4.61869 15.5334L8.28039 13.2135C8.38337 13.1479 8.50292 13.1131 8.625 13.1131C8.74708 13.1131 8.86663 13.1479 8.96962 13.2135Z"
                          fill="#39BD09"
                        />
                      </svg>
                    </span>
                    <span className="xl:text-tagline-1 text-tagline-2 text-accent/60">Trustpilot</span>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SearchCta;
