"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/account/signup", account);
      // router.push("/dashboard");
      alert("your account successfully created");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="py-10">
        <div className="flex w-[30%] mx-auto h-auto rounded-md flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-md h-full">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register
            </h2>
            <p className="text-center">Become a part of our community!</p>
          </div>
          <div className="mx-auto w-full max-w-md h-full">
            <form className="space-y-4 py-50" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
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
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
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
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-button-color/hover-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                >
                  Create account
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">
              <Link
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Already have an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
