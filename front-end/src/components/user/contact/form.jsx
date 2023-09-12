"use client";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";

const Form = () => {
  const email = [
    {
      id: 1,
      data: "support@coffeeshop.site",
      icon: <BsFillTelephoneFill />,
    },
    {
      id: 2,
      icon: <BsFillTelephoneFill />,
      data: "Phone: 001 234 456 6785",
    },
  ];
  const socialMedia = [
    {
      id: 1,
      icon: <BiLogoFacebook />,
    },
    {
      id: 2,
      icon: <BsTwitter />,
    },
    {
      id: 3,
      icon: <FiInstagram />,
    },
    {
      id: 4,
      icon: <FaPinterest />,
    },
  ];
  return (
    <section className="bg-backround-Color">
      <div className="px-3">
        <div className="grid lg:grid-cols-2 grid-cols-1 py-20">
          <div className="col-span-1 flex flex-col gap-y-10">
            <div>
              <h3 className="text-white text-4xl">Get In Touch With Us</h3>
              <p>Contact us via below form ...</p>
            </div>
            <div>
              <p className="leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex flex-col gap-y-4 pt-4">
                {email.map((item) => (
                  <div className="flex gap-4 items-center" key={item.id}>
                    <span className="p-3 bg-button-color/hover-color rounded-full text-white">
                      {item.icon}
                    </span>
                    <p>{item.data}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-10 lg:mb-0 mb-4">
              {socialMedia.map((data) => (
                <span
                  key={data.id}
                  className="text-button-color/hover-color text-4xl"
                >
                  {data.icon}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 gap-x-3 gap-y-8">
                    <div className="col-span-1">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Your name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-600 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Your email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-600 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="number"
                          id="number"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-600 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Department
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="department"
                          id="department"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-600 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-600 shadow-sm placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-button-color/hover-color px-6 py-2 text-sm font-semibold text-white shadow-sm outline-none"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
