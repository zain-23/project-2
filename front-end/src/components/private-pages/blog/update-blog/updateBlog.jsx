"use client";
import React, { useContext, useRef, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ContextData } from "@/components/context/contextApp";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiCheck } from "react-icons/hi";
const JoditEditor = dynamic(
  () => import("jodit-react").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const UpdateBlog = () => {
  const { singleBlog, blogId } = useContext(ContextData);
  const editor = useRef(null);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    title: singleBlog?.title,
    cotegory: singleBlog?.cotegory,
    content: singleBlog?.content,
    author: singleBlog?.author,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleModal = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `/api/blog/updateBlog/${blogId}`,
        formData
      );
      if (response.data) {
        handleModal();
      }
      router.push("/dashboard/blog/blog-cotegories");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-3xl lg:px-8">
        <form
          className="px-4 py-6 rounded-lg blogForm bg-white"
          onSubmit={handleSubmit}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-black">
                Update Blog
              </h2>
              <p className="mt-1 text-sm leading-6 text-black">
                This information will be displayed only Admin
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="title"
                    className="block text-sm font-bold leading-6 text-black"
                  >
                    Blog Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-gray-400">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        className="block flex-1 border-0 bg-transparent rounded-md py-1.5 pl-1 text-gray-800 outline-none placeholder:text-gray-400 bg-white sm:text-sm sm:leading-6"
                        placeholder="Product Name"
                        value={formData?.title}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="cotegory"
                    className="block text-sm font-bold leading-6 text-black"
                  >
                    Blog Cotegory
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1  ring-gray-400">
                      <input
                        type="text"
                        name="cotegory"
                        id="cotegory"
                        autoComplete="ProductCotegory"
                        className="block flex-1 border-0 bg-transparent rounded-md py-1.5 pl-1 text-gray-800 outline-none placeholder:text-gray-400 bg-white sm:text-sm sm:leading-6"
                        placeholder="cotegory of product"
                        value={formData?.cotegory}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="AuthorName"
                    className="block text-sm font-bold leading-6 text-black"
                  >
                    Author Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1  ring-gray-400">
                      <input
                        type="text"
                        name="author"
                        id="AuthorName"
                        autoComplete="AuthorName"
                        className="block flex-1 border-0 bg-transparent rounded-md py-1.5 pl-1 text-gray-800 outline-none placeholder:text-gray-400 bg-white sm:text-sm sm:leading-6"
                        placeholder="Author Name"
                        value={formData?.author}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="content"
                    className="block text-sm font-bold leading-6 text-black"
                  >
                    Content of Blog
                  </label>
                  <JoditEditor
                    ref={editor}
                    value={formData?.content && JSON.parse(formData?.content)}
                    onChange={(data) =>
                      setFormData((con) => ({
                        ...con,
                        content: JSON.stringify(data),
                      }))
                    }
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-bold leading-6 text-black"
                  >
                    Blog Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white ring-1 ring-gray-400 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-white items-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold px-3 py-2"
                        >
                          <span className="text-black">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-black">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-black">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="rounded-md border-white ring-1  ring-gray-400  px-3 w-full py-2 text-sm font-semibold text-grasy-600 shadow-sm outline-none"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {show && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="flex flex-col gap-y-4 items-center">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20">
                          <HiCheck
                            className="sm:text-5xl text-2xl text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="p"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Blog Updated Successfully
                          </Dialog.Title>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};

export default UpdateBlog;
