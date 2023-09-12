import React from "react";

const Partners = () => {
  const imageBlog = [
    {
      id: 1,
      img: "/blog1.jpg",
    },
    {
      id: 2,
      img: "/blog2.jpg",
    },
    {
      id: 3,
      img: "/blog3.jpg",
    },
    {
      id: 4,
      img: "/blog4.jpg",
    },
    {
      id: 5,
      img: "/blog5.jpg",
    },
    {
      id: 6,
      img: "/blog6.jpg",
    },
  ];
  return (
    <section className="bg-backround-Color">
      <div className="px-3 lg:py-20 md:py-16 py-10">
        <h2 className="text-white text-[5vmax] text-center">Our Partners</h2>
        <p className="text-center text-[2vmax] pt-3">
          Famous companies trusted us, why you are not
        </p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-center gap-6 pt-7">
          {imageBlog.map((data) => (
            <div className="col-span-1" key={data.id}>
              <img src={`${data.img}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
