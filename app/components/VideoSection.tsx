"use client";
// import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[220px] lg:h-[785px] overflow-hidden bg-black">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/about/dwarka_hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

    </section>
  );
};

export default VideoSection;