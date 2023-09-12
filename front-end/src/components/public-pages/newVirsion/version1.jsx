"use client";
const Version1 = () => {
  const head = [
    {
      id: 1,
      title: "Coffee.",
    },
    {
      id: 2,
      title: "Conversation.",
    },
    {
      id: 3,
      title: "Community.",
    },
  ];
  return (
    <section
      className={`relative z-[1] overflow-hidden lg:h-[90vh] h-[70vh] bg-no-repeat bg-center bg-cover flex items-center`}
      style={{ backgroundImage: `url(./val.gif)` }}
    >
      <div className="max-w-[95%] w-full mx-auto">
        <div className="">
          <h2 className="lg:text-[75px] md:text-5xl text-4xl text-white">
            The
            <span className="text-[#f9980f] "> ₿</span>
            itCafe Project
          </h2>
        </div>
        <div className="">
          {head.map((data) => (
            <h2 key={data.id} className="text-5xl text-[#f9980f] mt-6">
              {data.title}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Version1;
