"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  console.log("formData", formData);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract the country names from the API response
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
      const response = await axios.post(`/api/order/addorder`, formData);
      // Clear all input fields by resetting the formData state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      });
      // router.push("/dashboard/blog-cotegories");
      // alert("Your data is successfully updated");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section>
      <div className="grid grid-cols-1 blogForm my-8 rounded-md max-w-2xl mx-auto">
        <form className="col-span-1 py-10 px-6" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="">
              <h2 className="text-base font-semibold leading-7 text-white">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-white">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300  sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option>select country</option>
                    {countries.map((data) => (
                      <option key={data?._id}>{data}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="state"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="zipCode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md outline-none px-4 border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md blogForm px-3 py-2 text-sm font-semibold text-white shadow-sm outline-none"
            >
              Save
            </button>
          </div>
        </form>
        {/* <div className="col-span-1"></div> */}
      </div>
    </section>
  );
}
