"use client";
import { ContextData } from "@/components/context/contextApp";
import ProductDelete from "@/components/popups/productDelete";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function AllProduct() {
  const [open, setOpen] = useState(false);
  const [product, setProducts] = useState([]);
  const { fetchSingleProduct } = useContext(ContextData);
  const [dropdown, setDropDown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/product/allproducts"); // Adjust the API endpoint
      setProducts(response.data);
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

  const handleOpen = (deleteid) => {
    setId(deleteid);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`/api/product/${id}`);
    setProducts((prevProductPosts) =>
      prevProductPosts.filter((post) => post._id !== id)
    );
    setOpen(false);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-6 py-4">
        <div className="relative overflow-x-auto col-span-1 flex flex-col gap-y-4 rounded-lg">
          <div className="sm:flex items-center justify-between px-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-white">
              All Products
            </p>
            <div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                disabled={product.length === 0}
                className={`text-white outline-none border font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${
                  product.length === 0 && "cursor-not-allowed opacity-70"
                }`}
                type="button"
                onClick={() => setDropDown(!dropdown)}
              >
                Dropdown button
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
                  className="z-10 absolute top-[18%] bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {product.map((data) => (
                      <li key={data?._id}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {data?.productCotegory}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto rounded-md blogForm">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-white">
                <th className="font-normal text-left pl-4">S.no</th>
                <th className="font-normal text-left pl-4">Product</th>
                <th className="font-normal text-left pl-12">
                  Product Cotegory
                </th>
                <th className="font-normal text-left pl-20">Product Price</th>
                <th className="font-normal text-left pl-8">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
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
                : product &&
                  product.map((data, index) => (
                    <tr
                      className="h-20 text-sm leading-none border-b border-t border-gray-100"
                      key={index}
                    >
                      <td className="text-center">
                        <p className="font-medium text-white">{index}</p>
                      </td>
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img
                              className="w-full h-full"
                              src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                            />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium text-white">
                              {data?.productName}
                            </p>
                            <p className="text-xs leading-3 pt-2 text-white">
                              {truncateText(data?.productContent, 20)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium text-white">
                          {data?.productCotegory}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.productPrice}$`}</p>
                      </td>
                      <td className="px-7 2xl:px-0">
                        <div className="flex gap-4">
                          <Link href="/dashboard/product/update-product">
                            <BiEditAlt
                              className="text-xl text-white cursor-pointer hover:text-green-600"
                              onClick={() => fetchSingleProduct(data?._id)}
                            />
                          </Link>
                          <RiDeleteBin6Line
                            className="text-xl text-white cursor-pointer hover:text-red-600"
                            onClick={() => handleOpen(data._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              {!loading && product.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center px-6 py-4 text-white">
                    No Product Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {open && (
          <ProductDelete
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            setOpen={setOpen}
            id={id}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
}

export default AllProduct;
