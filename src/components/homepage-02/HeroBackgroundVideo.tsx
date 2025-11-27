const HeroBackgroundVideo = () => {
  return (
    <>
      <figure className="hero-bg-overlay-light dark:hero-bg-overlay-dark absolute h-full w-full"></figure>
      <video
        className="absolute -top-[220px] left-0 z-[-1] block h-full min-h-[100vh] w-full scale-100 object-cover object-center dark:hidden"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/Tube.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="absolute -top-[220px] left-0 z-[-1] hidden h-full min-h-[100vh] w-full scale-100 object-cover object-center dark:block"
        autoPlay
        muted
        loop
        playsInline>
        <source src="/video/Tube-dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

HeroBackgroundVideo.displayName = 'HeroBackgroundVideo';
export default HeroBackgroundVideo;
