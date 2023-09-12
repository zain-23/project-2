import React from "react";

const ProfessionalSkill = () => {
  const years = [
    {
      id: 1,
      years: "53+",
      para: "Years of Experience",
    },
    {
      id: 2,
      years: "102",
      para: "Awards Wins",
    },
    {
      id: 3,
      years: "36k",
      para: "Happy Clients",
    },
    {
      id: 4,
      years: "99",
      para: "Perfect Products",
    },
  ];
  return (
    <section
      style={{ backgroundImage: `url(/skill.jpg)` }}
      className="bg-no-repeat bg-cover bg-center px-3"
    >
      <div className="flex flex-col items-center gap-y-12 lg:py-28 md:py-20 py-10">
        <div className="flex-col flex items-center">
          <h2 className="text-white text-[4vmax]">
            We Are Professional at Our Skills
          </h2>
          <p className="text-white text-lg text-center font-extralight pt-4">
            More than 2000+ customers trusted us
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-6 w-full">
          {years.map((data) => (
            <div
              key={data.id}
              className="col-span-1 flex flex-col items-center gap-y-3"
            >
              <h3 className="text-[#945d34] text-[7vmax]">{data.years}</h3>
              <p className="text-white font-semibold">{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkill;
