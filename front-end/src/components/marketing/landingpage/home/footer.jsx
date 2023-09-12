import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { MdGpsFixed } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi2";

const Footer = () => {
  return (
    <section
      className="relative z-[1] py-20"
      style={{ backgroundImage: `url(/footer-image.jpg)` }}
    >
      <div className="bg-black absolute top-0 h-full w-full opacity-80 z-[-2]"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-y-0 md:gap-y-3 gap-y-4 grid-cols-1 px-3 z-[1]">
        <div className="lg:col-span-1 lg:py-0 py-3">
          <h3 className="text-white text-2xl">Office Information</h3>
          <div className="flex flex-col gap-y-3 pt-6">
            <div className="flex items-center gap-3">
              <MdGpsFixed className="text-white" />
              <p>121 King Street, New York</p>
            </div>
            <div className="flex items-center gap-3">
              <BsFillTelephoneFill className="text-white" />
              <p>+1(800) 3000 400 55</p>
            </div>
            <div className="flex items-center gap-3">
              <BiMessageDetail className="text-white" />
              <p>coffee@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <BsReceiptCutoff className="text-white" />
              <p>+1(800) 3000 400 55</p>
            </div>
            <div className="flex items-center gap-3">
              <AiFillFacebook className="text-white" />
              <p>@xtratheme</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:py-0 py-3">
          <h3 className="text-white text-2xl">News</h3>
          <div className="flex flex-col gap-y-4 pt-6">
            <div className="flex gap-3">
              <img src="/p4.jpg" className="w-[40%] rounded-md" alt="" />
              <div>
                <p>a Place of Silence</p>
                <p>June 10, 2017</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/p6.jpg" className="w-[40%] rounded-md" alt="" />
              <div>
                <p>How to create a Logo like a Pro</p>
                <p>June 10, 2017</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:py-0 py-3">
          <h3 className="text-white text-2xl">Quick Shortcuts</h3>
          <div className="grid grid-cols-2 pt-6">
            <div className="col-span-1 flex flex-col gap-y-3">
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Home</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>City Store</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Toolkits</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Employees</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Teams</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Benefits</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180" />
                <p>Support</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-y-3">
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>Maps</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>Careers</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>News</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>Clients</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>Consultation</p>
              </div>
              <div className="flex items-center gap-3">
                <BsArrowLeftShort className="text-white -rotate-180 " />
                <p>Publicity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:py-0 py-3">
          <h3 className="text-white text-2xl  ">Working Hours</h3>
          <div className="flex flex-col gap-y-3 pt-6">
            <p>
              Our support available to help you 24 hours a day, seven days a
              week.
            </p>
            <div className="flex justify-between">
              <p>Monday to Friday</p>
              <p>8:00 - 16:30</p>
            </div>
            <div className="flex justify-between">
              <p>Saturday</p>
              <p>8:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="hero"
        smooth={true}
        duration={1000}
        className="cursor-pointer rotate-180 lg:flex hidden gap-2 bottom-16 p-3 rounded-full bg-white right-10 items-center absolute border z-[10]"
      >
        <HiArrowDown className="text-black text-xl" />
      </Link>
    </section>
  );
};

export default Footer;
