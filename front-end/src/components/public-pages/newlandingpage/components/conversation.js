export default function Conversation() {
  return (
    <section className="text-white pt-10">
      <div className="w-[90%] mx-auto">
        <div>
          <h1 className="text-center py-14 text-7xl">Conversation</h1>
        </div>
        <div className=" grid grid-cols-5 pb-20">
          <div className="col-span-3">
            <section className="lg:h-[100vh] h-[80vh]">
              <div className="h-full flex lg:items-center items-start py-10 px-3">
                <div className="flex relative items-center rounded-md lg:w-[100%] md:h-full bg-[url('/firstcomm.jpg')] h-[300px] w-full party bg-no-repeat bg-center bg-cover">
                  <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
                  <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
                    <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
                      Imagine a co-working space so cozy, you d think you rein a
                      Salvadoran café, not indowntown New Haven.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-2"></div>
        </div>
        <div className=" grid grid-cols-5 pb-20">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <section className="lg:h-[100vh] h-[80vh]">
              <div className="h-full flex lg:items-center items-start py-10 px-3">
                <div className="flex relative items-center rounded-md lg:w-[100%] md:h-full bg-[url('/secondcomm.jpg')] h-[300px] w-full party bg-no-repeat bg-center bg-cover">
                  <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
                  <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
                    {/* <h2 className="text-[#ff9800] z-[1] lg:text-4xl text-2xl">
                      The Perfect Meetup Space
                    </h2> */}
                    <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
                      Add to that a pulsating hub ofmeetup spaces , where
                      educational,community-building activities, andbig ideas
                      are always on the menu.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className=" grid grid-cols-5">
          <div className="col-span-3">
            <section className="lg:h-[100vh] h-[80vh]">
              <div className="h-full flex lg:items-center items-start py-10 px-3">
                <div className="flex relative items-center rounded-md lg:w-[100%] md:h-full bg-[url('/thirdcomm.jpg')] h-[300px] w-full party bg-no-repeat bg-center bg-cover">
                  <div className="bg-black absolute top-0 rounded-md h-full w-full opacity-60"></div>
                  <div className="flex flex-col items-center md:gap-y-10 gap-y-3 px-3 absolute z-[1]">
                    {/* <h2 className="text-[#ff9800] z-[1] lg:text-4xl text-2xl">
                      The Perfect Meetup Space
                    </h2> */}
                    <p className="text-white z-[1] text-center lg:text-3xl text-lg font-extralight md:leading-[50px] leading-[30px]">
                      Our regular programming serves ahearty mix of chats about
                      businessoperations, entrepreneurship,finance, supply chain
                      management,sustainability, and social progress .
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </section>
  );
}
