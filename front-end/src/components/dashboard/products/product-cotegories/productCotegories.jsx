import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ProductCotegories = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <form className="px-4 py-6 rounded-lg blogForm">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-white">
                Add Product Categories
              </h2>
              <p className="mt-1 text-sm leading-6 text-white">
                This information will be displayed only Admin
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="Title"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
                      <input
                        type="text"
                        name="Title"
                        id="Title"
                        autoComplete="Title"
                        className="block flex-1 border-0 bg-transparent rounded-md py-1.5 pl-1 text-gray-600 outline-none placeholder:text-gray-600 bg-white sm:text-sm sm:leading-6"
                        placeholder="Enter product name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="rounded-md bg-white px-3 w-full py-2 text-sm font-semibold text-grasy-600 shadow-sm outline-none"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto col-span-2 rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-gray-200 border-dashed">
          <thead className="text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <BiEditAlt className="text-white text-xl cursor-pointer hover:text-green-600" />
                  <RiDeleteBin6Line className="text-white text-xl cursor-pointer hover:text-red-600" />
                </div>
              </td>
            </tr>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <BiEditAlt className="text-white text-xl cursor-pointer hover:text-green-600" />
                  <RiDeleteBin6Line className="text-white text-xl cursor-pointer hover:text-red-600" />
                </div>
              </td>
            </tr>
            <tr className="dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <BiEditAlt className="text-white text-xl cursor-pointer hover:text-green-600" />
                  <RiDeleteBin6Line className="text-white text-xl cursor-pointer hover:text-red-600" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCotegories;
