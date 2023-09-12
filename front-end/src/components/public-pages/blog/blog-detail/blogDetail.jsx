"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogDetail = ({ id }) => {
  const [singleBlog, setSingleBlog] = useState();
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(`/api/blog/getbyid/${id}`);
      setSingleBlog(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
      <div className="lg:flex justify-center">
        <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
          <img
            src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
            alt="fingerprint recognition"
            className="lg:w-full w-auto rounded-md"
          />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-base leading-4 text-white">
                  {singleBlog &&
                    new Date(singleBlog.createdAt).toLocaleDateString()}
                </p>
                <p className="text-base leading-none text-white ml-12">
                  5 min read
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width={64}
                  height={2}
                  viewBox="0 0 64 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 1H0" stroke="#6B7280" />
                </svg>
                <p className="text-base leading-none text-white ml-2">
                  Jeff Bill
                </p>
              </div>
            </div>
            <p className="lg:text-3xl text-2xl font-semibold mt-4 text-white">
              {singleBlog?.title}
            </p>
            {singleBlog && (
              <div
                as="p"
                className="text-base leading-6 text-white mt-2"
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(singleBlog?.content),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
