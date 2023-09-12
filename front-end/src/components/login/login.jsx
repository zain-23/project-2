"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ContextData } from "../context/contextApp";

export default function Login() {
  const { show, setShow } = useContext(ContextData);
  const router = useRouter();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleModal = () => {
    setShow(true);
    // setTimeout(() => {
    //   setShow(false);
    // }, 2000000000); // 2000 milliseconds = 2 seconds
  };
  const handleEmail = () => {
    setCheckEmail(true);
    setTimeout(() => {
      setCheckEmail(false);
    }, 2000);
  };
  const handlePassword = () => {
    setCheckPassword(true);
    setTimeout(() => {
      setCheckPassword(false);
    }, 2000);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/account/login`, formData);
      console.log("response login", response.data.message);
      if (response.data.message === "User not found") {
        handleEmail();
      } else if (response.data.message === "Incorrect Password") {
        handlePassword();
      } else if (response.data.admin) {
        handleModal();
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="py-10 bg-gradient-to-r from-[#6F4E37] via-[#654335] to-[#51312E] px-4">
        <div className="flex max-w-lg mx-auto h-auto rounded-md flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-md h-full">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in
            </h2>
            <p className="text-center">Become a part of our community!</p>
          </div>
          <div className="mx-auto w-full max-w-md h-full">
            <form className="space-y-4 py-50" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ${
                      checkEmail ? "ring-red-600" : "ring-gray-300"
                    } placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6`}
                    onChange={handleInputChange}
                  />
                </div>
                {checkEmail && (
                  <p className="text-red-600 mt-2 text-sm">
                    Incorrect email try again
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ${
                      checkPassword ? "ring-red-600" : "ring-gray-300"
                    } placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6`}
                    onChange={handleInputChange}
                  />
                </div>
                {checkPassword && (
                  <p className="text-red-600 mt-2 text-sm">
                    Incorrect password try again
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-button-color/hover-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                >
                  Log in
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">
              <Link
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
