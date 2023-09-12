"use client";
import React, { useContext, useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import DeletePopup from "@/components/popups/deletePopup";
import Link from "next/link";
import { ContextData } from "@/components/context/contextApp";

const BlogCotegories = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { fetchSingleBlog } = useContext(ContextData);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const handleOpen = (deleteid) => {
    setId(deleteid);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get("/api/blog/allblogs"); // Adjust the API endpoint
      setBlogPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`/api/blog/${id}`);
    setBlogPosts((prevBlogPosts) =>
      prevBlogPosts.filter((post) => post._id !== id)
    );
    setOpen(false);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-6 py-4">
        <div className="relative overflow-x-auto col-span-1 flex flex-col gap-y-4 rounded-lg">
          <div className="flex justify-between px-1">
            <p className="text-3xl text-white">Blog Cotegories</p>
            <div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                disabled={blogPosts.length === 0}
                className={`text-white outline-none border font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${
                  blogPosts.length === 0 && "cursor-not-allowed opacity-70"
                }`}
                type="button"
                onClick={() => setDropDown(!dropdown)}
              >
                Categories
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 ${
                    dropdown
                      ? "-rotate-180 duration-500"
                      : "rotate-0 duration-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdown && (
                <div
                  id="dropdown"
                  className="z-10 absolute top-[12%] bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {blogPosts.map((data) => (
                      <li key={data?._id}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {data?.cotegory}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 blogForm px-4">
            <thead className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.no
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Cotegory
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? [1, 2, 3, 4, 5, 6, 7, 9, 10, 11].map((index) => {
                    return (
                      <tr key={index} className="border-b animate-pulse">
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                      </tr>
                    );
                  })
                : blogPosts &&
                  blogPosts.map((data, index) => (
                    <tr key={index} className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-white whitespace-nowrap"
                      >
                        {index}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-white whitespace-nowrap"
                      >
                        {truncateText(data?.title, 10)}
                      </th>
                      <td className="px-6 py-4 text-white whitespace-nowrap">
                        {data?.author}
                      </td>
                      <td className="px-6 py-4 text-white whitespace-nowrap">
                        {truncateText(data?.cotegory, 15)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-4">
                          <Link href="/dashboard/blog/update-blog">
                            <BiEditAlt
                              className="text-white text-xl cursor-pointer hover:text-green-600"
                              onClick={() => fetchSingleBlog(data?._id)}
                            />
                          </Link>
                          <RiDeleteBin6Line
                            className="text-white text-xl cursor-pointer hover:text-red-600"
                            onClick={() => handleOpen(data?._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              {!loading && blogPosts.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center px-6 py-4 text-white">
                    No Blog Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {open && (
        <DeletePopup
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          id={id}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default BlogCotegories;
