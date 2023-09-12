import React from "react";

const Version6 = () => {
  return (
    <section>
      <h3 className="text-6xl text-center bg-black text-white py-20">
        Our Partners
      </h3>
      <div className="max-w-[1400px] mx-auto h-auto pb-20 px-6">
        <div className="grid grid-cols-2">
          <div className="">
            <img src="/partner.jpg" className="w-full pt-12 rounded-md" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center mb-14 ">
              <div className="w-24 h-24 bg-cover rounded-md mr-5">
                <img
                  src="/steve.jpg"
                  alt
                  className="rounded-full h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <h3 className="text-5xl font-bold leading-4 text-white">
                  Steve Doe
                </h3>
                <p className="text-3xl leading-3 pt-7">Sales Representative</p>
              </div>
            </div>
            <div className="flex items-center mb-14 ">
              <div className="w-24 h-24 bg-cover rounded-md mr-5">
                <img
                  src="/steve.jpg"
                  alt
                  className="rounded-full h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <h3 className="text-5xl font-bold leading-4 text-white">
                  Steve Doe
                </h3>
                <p className="text-3xl leading-3 pt-7">Sales Representative</p>
              </div>
            </div>
            <div className="flex items-center  ">
              <div className="w-24 h-24 bg-cover rounded-md mr-5">
                <img
                  src="/steve.jpg"
                  alt
                  className="rounded-full h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <h3 className="text-5xl font-bold leading-4 text-white">
                  Steve Doe
                </h3>
                <p className="text-3xl leading-3 pt-7">Sales Representative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version6;
