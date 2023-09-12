"use client";
import OrderDelete from "@/components/popups/orderDelete";
import ProductDelete from "@/components/popups/productDelete";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function AllOrders() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setOrders] = useState([]);
  const [id, setId] = useState(null);
  console.log("id order", id);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const response = await axios.get("/api/order/allorder");
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOpen = (deleteid) => {
    setId(deleteid);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`/api/order/${id}`);
    setOrders((prevBlogPosts) =>
      prevBlogPosts.filter((item) => item._id !== id)
    );
    setOpen(false);
  };
  return (
    <>
      <div className="w-full">
        <div className="px-4 md:px-10 py-4 md:py-7 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-white">
              All Orders
            </p>
          </div>
        </div>
        <div className="shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto rounded-md blogForm">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-white">
                <th className="font-normal text-left pl-4">S.no</th>
                <th className="font-normal text-left pl-12">First Name</th>
                <th className="font-normal text-left pl-20">Last Name</th>
                <th className="font-normal text-left pl-20">Email</th>
                <th className="font-normal text-left pl-12">Country</th>
                <th className="font-normal text-left pl-20">Address</th>
                <th className="font-normal text-left pl-20">City</th>
                <th className="font-normal text-left pl-12">State</th>
                <th className="font-normal text-left pl-20">Zip Code</th>
                <th className="font-normal text-left pl-8">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {loading
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                    return (
                      <tr key={index} className="border-b animate-pulse">
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                        <td className="bg-slate-200 opacity-20 h-10"></td>
                      </tr>
                    );
                  })
                : order &&
                  order.map((data, index) => (
                    <tr
                      className="h-20 text-sm leading-none border-b border-t border-gray-100"
                      key={data._id}
                    >
                      {/* <td className="pl-4 cursor-pointer">
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
                      </td> */}
                      <td className="text-center">
                        <p className="font-medium text-white">{index}</p>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium text-white">
                          {data?.firstName}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.lastName}`}</p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.email}`}</p>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium text-white">
                          {data?.country}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.address}`}</p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.city}`}</p>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium text-white">{data?.state}</p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium text-white">{`${data?.zipCode}`}</p>
                      </td>

                      <td className="px-7 2xl:px-0">
                        <div className="flex justify-center">
                          <RiDeleteBin6Line
                            className="text-xl text-white cursor-pointer hover:text-red-600"
                            onClick={() => handleOpen(data._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              {!loading && order.length === 0 && (
                <tr>
                  <td colSpan={10} className="text-center px-6 py-4 text-white">
                    No Orders Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {open && (
        <OrderDelete
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          id={id}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default AllOrders;
