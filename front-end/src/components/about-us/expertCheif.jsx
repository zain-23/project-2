import React from "react";

const ExpertCheif = () => {
  const cheifDetail = [
    {
      id: 1,
      name: "Jimmy Roland",
      designation: "Founder",
      img: "/cheif1.jpg",
    },
    {
      id: 2,
      name: "Nicolas Xavier",
      designation: "Chef",
      img: "/cheif2.jpg",
    },
    {
      id: 3,
      name: "Alex Hernandez",
      designation: "Chef",
      img: "/cheif3.jpg",
    },
    {
      id: 4,
      name: "Robert Gary",
      designation: "Chef",
      img: "/cheif4.jpg",
    },
  ];
  return (
    <section className="bg-backround-Color py-20 px-3">
      <div className="">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col items-center gap-y-3">
            <h2 className="text-[5vmax] text-white">Our Expert Chefs</h2>
            <p className="text-[2vmax]">Meet our professional team meambers</p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {cheifDetail.map((data) => (
              <div className="col-span-1 flex flex-col gap-y-4" key={data.id}>
                <img src={data.img} className="rounded-md" alt="" />
                <div className="flex flex-col items-center">
                  <span className="text-white text-2xl">{data.name}</span>
                  <p>{data.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCheif;
