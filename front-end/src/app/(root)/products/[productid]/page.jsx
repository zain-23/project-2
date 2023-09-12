"use client";
import Link from "next/link";
import { useState } from "react";

const SingleProduct = ({ params }) => {
  const id = params.productid;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="pb-6">
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-white mt-2">
            Balenciaga Signature Sweatshirt
          </h1>
        </div>
        <div>
          <p className="text-base lg:leading-tight leading-normal text-white mt-2">
            It is a long established fact that a reader will be distracted by
            thereadable content of a page when looking at its layout. The point
            of usingLorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <p className="text-base leading-4 mt-7 text-white">
            Product Code: 8BN321AF2IF0NYA
          </p>
          <p className="text-base leading-4 mt-4 text-white">Price: 13$</p>
        </div>
        <Link className="mt-4" href="/products/checkout">
          <button className="outline-none text-base flex items-center justify-center leading-none text-white w-full py-4 blogForm rounded-md">
            <svg
              className="mr-3"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66699 4.83333V4.84166"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.333 11.5V11.5083"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Buy Now
          </button>
        </Link>
        <div className="py-4 blogForm mt-4 px-4 rounded-md">
          <div
            onClick={() => setShow2(!show2)}
            className="flex justify-between items-center cursor-pointer"
          >
            <p className="text-base leading-4 text-white">Contact us</p>
            <button
              className="cursor-pointer outline-none text-white rounded"
              aria-label="show or hide"
            >
              <svg
                className={
                  "transform text-white" + (show2 ? "rotate-180" : "rotate-0")
                }
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "pt-4 text-base leading-normal pr-12 mt-4 text-white " +
              (show2 ? "block" : "hidden")
            }
            id="sect"
          >
            If you have any questions on how to return your item to us, contact
            us.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
