import React from "react";

const Version5 = () => {
  return (
    <section id="ready">
      <div className="max-w-[95%] mx-auto h-auto pt-20 px-6">
        <h3 className="text-6xl text-center text-white py-20">
          Ready to be Future-Proof?
        </h3>
        <div className="flex flex-col gap-y-6">
          <p className="text-4xl text-center leading-normal">
            With The BitCafe, your not just getting a coffee shop your getting a
            glimpse into the future. We offer hands-on learning experiences
            about all the hot topics and emerging technologies like
            decentralized finance, digital currencies, AI, ML, and blockchain
            use cases.
          </p>
          <p className="text-4xl text-center leading-normal">
            All those words may sound scary now, but trust us, with a little
            BitCafe magic, you will be talking the tech talk in no time.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2"></div>
          <div className="col-span-1 text-center">
            <p className="font-bold text-4xl text-center leading-normal">
              Reach out to the <br /> BitCafe Guys!
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="/paint.png" className="w-[80%] mx-auto" alt="" />
          <img
            src="/remove-uncle.png"
            className="w-[50%] bottom-0 right-0 absolute"
            alt=""
          />
          <div className="absolute top-[40%] flex flex-col gap-y-6">
            <h3 className="text-7xl text-white">The BitCafe Projects</h3>
            <h4 className="text-5xl text-orange-400">Coffee</h4>
            <h4 className="text-5xl text-orange-400">Community</h4>
            <h4 className="text-5xl text-orange-400">Conversation</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version5;
