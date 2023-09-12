"use client";
import Link from "next/link";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { TbArticleFilledFilled } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 outline-none"
        onClick={() => setMenu(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 blogForm left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
          menu ? "translate-x-0" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <div className="flex justify-between">
            <Link href="/dashboard" className="flex items-center pl-2.5 mb-5">
              <img
                src="/logo.png"
                className="h-10 mr-3 sm:h-10"
                alt="Flowbite Logo"
              />
              <span className="sm:text-3xl text-2xl font-semibold">
                <span className="text-[#f9980f] ">₿</span>itCafe
              </span>
            </Link>
            <HiXMark
              className="sm:hidden text-black text-2xl mt-2"
              onClick={() => setMenu(false)}
            />
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <div
                className="flex cursor-pointer items-center p-2 text-black rounded-lg hover:bg-gray-100"
                onClick={() => setMenu2(!menu2)}
              >
                <TbArticleFilledFilled className="flex-shrink-0 w-5 h-5 transition duration-75 text-black" />
                <span className="flex-1 ml-3 whitespace-nowrap">Blogs</span>
                <svg
                  className={`w-3 h-3 ${
                    menu2 ? "-rotate-180 duration-500" : "rotate-0 duration-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
              {menu2 && (
                <ul className="py-2 space-y-2">
                  <li>
                    <Link
                      href="/dashboard/blog/add-blogs"
                      className="flex items-center w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                      Add Blogs
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/dashboard/blog/all-blogs"
                      className="flex items-center w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark: dark:hover:bg-gray-700"
                    >
                      All Blogs
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/dashboard/blog/all-blogs"
                      className="flex items-center w-full p-2  text-black transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark: dark:hover:bg-gray-700"
                    >
                      All Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="flex cursor-pointer items-center p-2 text-black rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setMenu1(!menu1)}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-black transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                <svg
                  className={`w-3 h-3 ${
                    menu1 ? "-rotate-180 duration-500" : "rotate-0 duration-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
              {menu1 && (
                <ul className={`py-2 space-y-2 transition-transform`}>
                  <li>
                    <Link
                      href="/dashboard/product/add-products"
                      className="flex items-center w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark: dark:hover:bg-gray-700"
                    >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/product/all-products"
                      className="flex items-center w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark: dark:hover:bg-gray-700"
                    >
                      All Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/dashboard/orders"
                className="flex cursor-pointer items-center p-2 text-black rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiShoppingCart className="flex-shrink-0 text-2xl text-black transition duration-75" />
                <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg dark: hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-black transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
