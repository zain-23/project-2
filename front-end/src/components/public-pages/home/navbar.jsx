"use client";
import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { ContextData } from "../../context/contextApp";
import { MdTroubleshoot } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Checkout from "../shop/checkout/checkout";

export default function Navbar() {
  const { getCardData } = useContext(ContextData);
  const [open, setOpen] = useState(false);
  const [calcLenght, setCalcLenght] = useState();
  useEffect(() => {
    setCalcLenght(getCardData.lenght);
  }, []);
  return (
    <>
      <header className="bg-[#0000009c] w-full h-[10vh]" id="hero">
        <nav
          className="flex items-center max-w-[95%] mx-auto justify-between h-full "
          aria-label="Global"
        >
          <Link href="/">
            <img width={50} src="logo.png" alt="" />
          </Link>
          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6 text-white z-50"
                aria-hidden="true"
              />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:justify-between h-full w-[60%]">
            <Link
              href="/"
              className="text-sm z-[70] font-semibold leading-6 text-white h-full flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Home</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                take a coffee
              </span>
            </Link>
            {/* <Link
              href="/products"
              className="text-sm z-[70] font-semibold leading-6 text-white h-full flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Shop</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                take a coffee
              </span>
            </Link> */}
            <Link
              href="/blog"
              className="text-sm z-[70] font-semibold leading-6 text-white flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Blogs</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                Join Us at blog!
              </span>
            </Link>
            <Link
              href="/story"
              className="text-sm z-[70] font-semibold leading-6 text-white flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Story</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                Join Us Our Story
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-sm z-[70] font-semibold leading-6 text-white flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Contact</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                write us
              </span>
            </Link>
            <Link
              href="/login"
              className="text-sm z-[70] cursor-pointer font-semibold leading-6 text-white flex flex-col justify-center px-4 hover:bg-[#663f24] transition-all duration-500 ease-in-out rounded-br-md rounded-bl-md"
            >
              <span className="text-center text-lg">Account</span>
              <span className="text-sm text-center text-[#aaaaaa]">
                account highlights
              </span>
            </Link>
            {/* <Checkout /> */}
          </Popover.Group>
        </nav>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Menu
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-black"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="mt-8 flex flex-col gap-y-[14px]">
                            <Link
                              href="/"
                              className="-mx-3 rounded-lg border flex items-center gap-x-[14px] px-3 py-2 text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                              </svg>
                              <h5>Home</h5>
                            </Link>
                            <Link
                              href="/products"
                              className="-mx-3 rounded-lg border px-3 py-2 flex gap-x-[14px] items-center text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                              </svg>
                              <h5>Product</h5>
                            </Link>
                            <Link
                              href="/blog"
                              className="-mx-3 rounded-lg border flex items-center gap-x-[14px] px-3 py-2 text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                              </svg>

                              <h5>Blogs</h5>
                            </Link>
                            <Link
                              href="/story"
                              className="-mx-3 rounded-lg border flex items-center gap-x-[14px] px-3 py-2 text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                />
                              </svg>
                              <h5>Story</h5>
                            </Link>
                            <Link
                              href="/contact"
                              className="-mx-3 rounded-lg border px-3 py-2 flex gap-x-[14px] items-center text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                              </svg>
                              <h5>Contact</h5>
                            </Link>
                            <Link
                              href="/login"
                              className="-mx-3 rounded-lg border px-3 py-2 flex gap-x-[14px] items-center text-base font-medium leading-7 text-black"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                              </svg>

                              <h5>Account</h5>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </header>
    </>
  );
}
