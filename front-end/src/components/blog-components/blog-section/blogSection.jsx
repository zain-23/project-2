import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { PiCoffeeFill } from "react-icons/pi";

const BlogSection = () => {
  const blogSection = [
    {
      id: 1,
      title: "a Place of Silence",
      anchar: "Coffee Shop, Tutorials",
      img: "/p6.jpg",
    },
    {
      id: 2,
      title: "How to create a Logo like a pro",
      anchar: "Coffee, Tea",
      img: "/p4.jpg",
    },
    {
      id: 3,
      title: "Principles of Coldness",
      anchar: "Uncategorized",
      img: "/p4.jpg",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 w-full gap-10 justify-center">
        {blogSection.map((data) => (
          <div
            className="col-span-1 bg-[#2f251e] rounded-md blog-container cursor-pointer max-h-[60vh] min-h-[20vh] w-full"
            key={data.id}
          >
            <img
              src={data.img}
              className="rounded-md image max-h-[40vh]"
              alt=""
            />
            <div>
              <div className="flex flex-col gap-y-2 py-3 px-3">
                <span className="text-white text-[22px]">{data.title}</span>
                <p className="flex items-center text-sm font-light gap-2">
                  <HiOutlineFolder />
                  {data.anchar}
                </p>
              </div>
            </div>
            <div className="middle">
              <PiCoffeeFill className="text-white text-7xl" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogSection;
