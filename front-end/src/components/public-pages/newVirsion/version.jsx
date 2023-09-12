import React from "react";

const Version = () => {
  return (
    <section>
      <div className="max-w-[95%] mx-auto px-6">
        <h2 className="text-6xl text-center py-20 text-white">The BitCafe</h2>
        <div className="flex flex-col gap-y-52 py-20">
          <div className="grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <h3 className="text-4xl text-justify text-white">The Lowdown:</h3>
              <p className="text-4xl leading-normal">
                Get ready for a steamy brew of finance, tech, and social
                goodness, because were The BitCafe, your local not-for-profit
                chill spot for tech innovation, a hub for hands-on learners,
                budding entrepreneurs, and anyone feeling marginalized in todays
                chaotic world, curious about career-changing tech, future
                finance, global supply chain economics, and community building!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1 h-[400px]">
              <img
                src="/coffee1.jpg"
                className="w-full h-full rounded-md"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <p className="text-4xl leading-normal">
                <span className="text-white">Picture this:</span> a fresh,
                innovative, and cozy hub of financial and tech-savvy savants
                mingling and sharing a laugh over cups of fine El Salvadoran
                coffee. Sound good? Then keep reading!
              </p>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <p className="text-4xl text-justify leading-normal">
                <span className="text-white">
                  Location, location, location:
                </span>
                Nestled in the heart of downtown New Haven on the corner of
                Orange and Grove Street, our inviting space is a hub for the
                ultimate cafe experience, financial innovation, and
                entrepreneurship. Our door is always open.
              </p>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 h-[400px]">
              <img src="/map.jpg" className="w-full h-full rounded-md" alt="" />
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <p className="text-4xl text-justify leading-normal">
                <span className="text-white">Who Invited? </span>
                Everyone! We are here for the bright-eyed young learners, the
                ambitious students, and the determined local business
                go-getters. We welcome anyone with a spark in their eye and a
                thirst for knowledge (and coffee, of course).
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1 h-[400px]">
              <img
                src="girlscafe.jpg"
                className="w-full h-full rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version;
