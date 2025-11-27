// <!-- =========================
// Feature section
// ===========================-->

import FeatureListOne from './FeatureListOne';
import FeatureListTwo from './FeatureListTwo';

const Feature = () => {
  return (
    <section className="dark:bg-background-6 relative overflow-hidden bg-white py-14 max-[426px]:py-10 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap lg:gap-4 xl:gap-8">
          <FeatureListOne />
          <FeatureListTwo />
        </div>
      </div>
    </section>
  );
};

Feature.displayName = 'Feature';
export default Feature;
