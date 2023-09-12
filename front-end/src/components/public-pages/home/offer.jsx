"use client";
import React, { useContext } from "react";
import { HiUserCircle } from "react-icons/hi2";
import { ContextData } from "../../context/contextApp";

const Offer = () => {
  const { isMobileSize } = useContext(ContextData);
  const items = [
    {
      id: 1,
      img: <HiUserCircle className="text-7xl" />,
      title: "Steve",
      para: "Founder of BitCafe",
    },
    {
      id: 2,
      img: <HiUserCircle className="text-7xl" />,
      title: "Steve",
      para: "Founder of BitCafe",
    },
    {
      id: 3,
      img: <HiUserCircle className="text-7xl" />,
      title: "Steve",
      para: "Founder of BitCafe",
    },
  ];
  // useLayoutEffect(() => {
  //   gsap.from(".offerText", {
  //     x: 450,
  //     delay: 1,
  //     duration: 2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       markers: false,
  //       trigger: "#offerText",
  //       start: "top 28%",
  //       end: "top 25%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.from(".offer1", {
  //     x: isMobileSize ? 0 : 350,
  //     delay: 1,
  //     duration: 2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       markers: false,
  //       trigger: "#offer1",
  //       start: "top 43%",
  //       end: "top 38%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.from(".offer2", {
  //     x: isMobileSize ? 0 : -350,
  //     delay: 1,
  //     duration: 2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       markers: false,
  //       trigger: "#offer1",
  //       start: "top 43%",
  //       end: "top 38%",
  //       scrub: 1,
  //     },
  //   });
  // }, []);
  return (
    <section
      className="lg:h-[100vh] h-[850px] lg:py-0 py-10 relative"
      id="section4"
    >
      <div className="px-3 flex items-center h-full">
        <div className="w-full lg:block flex flex-col justify-between lg:h-auto h-full">
          <h2 className="text-white lg:text-5xl md:text-4xl text-3xl text-center">
            Our Partners
          </h2>
          {/* <div className="lg:w-[60%] w-full offerText" id="offerText"></div> */}
          <div className="lg:flex lg:flex-row flex-col lg:justify-between items-center gap-10 mt-4">
            <div className="lg:w-[35%] w-full offer1" id="offer1">
              <img src="./partner.jpg" className="rounded-md" alt="" />
            </div>
            <div className="lg:w-[35%] w-full offer2" id="offer2">
              <div className="grid grid-cols-1 lg:gap-y-12 gap-y-10">
                {items.map((data) => (
                  <div className="flex items-center gap-4" key={data.id}>
                    {/* <div className="w-20 h-20 rounded-full border">{data.img}</div> */}
                    {data.img}
                    <div>
                      <span className="text-white lg:text-3xl md:text-2xl text-lg">
                        {data.title}
                      </span>
                      <p>{data.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
