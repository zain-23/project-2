import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="fixed w-full h-full right-0 top-0 z-[-2] object-cover
        "
      >
        <source src="/video7.mp4" type="video/mp4" />
      </video>
      <div className="bg-black fixed w-full h-full right-0 top-0 z-[-1] opacity-60"></div>
    </div>
  );
};

export default Video;
