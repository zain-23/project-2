const Party2 = () => {
  return (
    <section className="lg:h-[100vh] h-[80vh]" id="section2">
      <div
        className="h-full flex lg:items-center items-start justify-end py-5 px-3"
        id="party"
      >
        <div
          className="flex relative items-center rounded-md lg:w-[60%] md:h-full h-[300px] w-full party bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(./gif3.gif)` }}
        >
          <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
          <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
            <h2 className="text-[#ff9800] z-[1] lg:text-4xl text-2xl">
              Investing in Our Communitys Wealth and Success
            </h2>
            <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
              All profits from our coffee and affiliate partnerships go straight
              into our community wealth fund. This fund supports democratically
              selected projects that serve our community and make a real
              difference in peoples lives.
            </p>
            {/* <p className="lg:text-xl z-[1] lg:text-left text-center text-base">
              Exclusive deals on drinks, delivered straight to your inbox, Join
              Now.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Party2;
