"use client";

import homeHeroVideo from "../data/homeHeroVideo.json";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[220px] lg:h-[785px] overflow-hidden bg-black">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={homeHeroVideo.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

    </section>
  );
};

export default VideoSection;
