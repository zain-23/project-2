import Link from "next/link";
import React from "react";
import { HiOutlineFolder } from "react-icons/hi";

const BitcoinMeetups = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-3 py-10">
        <div className="flex flex-col items-center">
          <div className="w-[40%] flex flex-col gap-y-5 ring-1 ring-gray-300">
            <h3 className="text-center text-2xl pt-2 text-button-color/hover-color">
              Bitcoin Meetup - Wed, Feb 22, 2023, 6:00pm EST (New Haven, CT)
            </h3>
            <p className="text-center">
              Date: Wednesday, Feb 22, 2023 Time: 6pm - 9pm Location: El Segundo
              Restaurant, New Haven,…
            </p>
            <div className="bg-button-color/hover-color flex justify-end">
              <span className="flex gap-2 items-center py-3 px-2">
                <HiOutlineFolder />
                <a href="#">Meetup</a>
              </span>
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinMeetups;
