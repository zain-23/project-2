"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const AllBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get("/api/blog/allblogs"); // Adjust the API endpoint
      setBlogPosts(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      {/* <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <BiSearch className="text-gray-500 sm:text-sm" />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
            placeholder="search blogs"
          />
        </div>
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 w-full gap-10 justify-center">
        {blogPosts.map((data) => (
          <Link
            href={`/blog/${data._id}`}
            className="col-span-1 bg-[#2f251e] rounded-md blog-container cursor-pointer max-h-[60vh] min-h-[20vh] w-full"
            key={data._id}
          >
            <img
              src="/product1.jpg"
              className="rounded-md image max-h-[40vh]"
              alt=""
            />
            <div>
              <div className="flex flex-col gap-y-2 py-3 px-3">
                <span className="text-white text-[22px] text-center">
                  {data.title}
                </span>
              </div>
            </div>
            <div className="middle">
              <PiCoffeeFill className="text-white text-7xl" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
