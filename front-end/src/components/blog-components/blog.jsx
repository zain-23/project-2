import React from "react";
import BlogSection from "./blog-section/blogSection";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi2";

const Blog = () => {
  const imageBlog = [
    {
      id: 1,
      img: "/blog1.jpg",
    },
    {
      id: 2,
      img: "/blog2.jpg",
    },
    {
      id: 3,
      img: "/blog3.jpg",
    },
    {
      id: 4,
      img: "/blog4.jpg",
    },
    {
      id: 5,
      img: "/blog5.jpg",
    },
    {
      id: 6,
      img: "/blog6.jpg",
    },
  ];
  const latest = [
    {
      id: 1,
      img: "/p6.jpg",
      title: "a place of Silence",
    },
  ];
  return (
    <section className="lg:h-[100vh] h-auto mt-5 mb-4 py-10" id="section5">
      <div className="px-3 h-full flex items-center">
        <div className="w-full">
          <div className="flex flex-col items-center gap-y-10">
            <img
              src="/teabook.png"
              className="lg:w-[10%] w-[20%]"
              alt=""
              srcset=""
            />
            <div>
              <h3 className="text-center text-white lg:text-5xl md:text-3xl text-2xl">
                From The Blog
              </h3>
              <p className="text-center md:text-lg text-base">
                Latest news and updates
              </p>
            </div>
          </div>
          <BlogSection />
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
