"use client";
import React, { useContext } from "react";
import { ContextData } from "../../context/contextApp";

const Party = () => {
  const { isMobile } = useContext(ContextData);
  // if (isMobile === false) {
  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.from(".party", {
  //       x: 250,
  //       delay: 1,
  //       duration: 2,
  //       opacity: 0,
  //       scrollTrigger: {
  //         markers: false,
  //         trigger: "#party",
  //         start: "top 15%",
  //         end: "top top",
  //         scrub: 1,
  //       },
  //     });
  //   }, []);
  // }
  return (
    <section className="lg:h-[100vh] h-[80vh]" id="section2">
      <div
        className="h-full flex lg:items-center items-start py-10 px-3"
        id="party"
      >
        <div
          className="flex relative items-center rounded-md lg:w-[60%] md:h-full h-[300px] w-full party bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(./sec2.jpg)` }}
        >
          <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
          <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
            <h2 className="text-[#ff9800] z-[1] lg:text-4xl text-2xl">
              Biodynamic, Sustainable, Fair, and Just
            </h2>
            <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
              Our specialty coffee comes directly from small farms in El
              Salvador, where the farmers care about their land and the
              environment.
            </p>
            {/* <p className="lg:text-xl z-[1] lg:text-left text-center text-base">
              Exclusive deals on drinks, delivered straight to your inbox, Join
              Now.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
