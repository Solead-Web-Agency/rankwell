import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';

export default function AboutMap() {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <RevealAnimation>
          <div className="rounded-[20px] bg-white dark:bg-background-8 p-2.5">
            <div className="h-[300px] lg:h-[566px] w-full rounded-xl overflow-hidden">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
