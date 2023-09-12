import React from "react";

const Party3 = () => {
  return (
    <section className="lg:h-[100vh] h-[80vh]" id="section2">
      <div
        className="h-full flex lg:items-center items-start py-10 px-3"
        id="party"
      >
        <div
          className="flex relative items-center rounded-md lg:w-[60%] md:h-full h-[300px] w-full party bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(./meetup.jpg)` }}
        >
          <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
          <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
            <h2 className="text-[#ff9800] z-[1] lg:text-4xl text-2xl">
              The Perfect Meetup Space
            </h2>
            <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
              Looking for a place to host your next big event or community
              meeting? Look no further than The BitCafe, where great ideas are
              born and amazing people come together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party3;
