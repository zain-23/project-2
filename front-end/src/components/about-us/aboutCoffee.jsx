import React from "react";

const AboutCoffee = () => {
  return (
    <section className="bg-backround-Color px-3">
      <div className="py-10">
        <div className="flex flex-col items-center lg:gap-y-20 gap-y-10 lg:w-[60%] w-full mx-auto">
          <div className="flex flex-col items-center gap-y-6">
            <img src="coffee-cup.png" className="lg:w-auto w-[30%]" alt="" />
            <h2 className="text-white lg:text-4xl text-2xl text-center">
              About Our Coffee House
            </h2>
          </div>
          <p className="text-white text-[2vmax] text-center font-extralight lg:leading-[40px] leading-[30px]">
            Simply put, ourn mission is to help people grow their happiness.
            This is why millions of executives in growing companies rely on
            XtraTheme.com to acquire the knowledge, products and services they
            need to run and grow their businesses and careers. Its also where
            thousands of advertisers reach and engage these valuable buyers,
            generating well over $1.6 billion in incremental annual revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCoffee;
