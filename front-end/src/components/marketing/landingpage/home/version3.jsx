import React from "react";

const Version3 = () => {
  return (
    <section>
      <div className="max-w-[95%] mx-auto px-6">
        <div className="flex flex-col gap-y-20">
          <h3 className="text-5xl text-center text-white">Conversation</h3>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <p className="text-4xl">
                <span className="text-white font-bold">
                  Imagine a co-working
                </span>
                space so cozy, you think you are in a Salvadoran café, not in
                downtown New Haven.
              </p>
              <p className="text-4xl pt-12">
                Add to that
                <span className="text-white font-bold">
                  a pulsating hub of meetup spaces,
                </span>
                where educational, community-building activities, and big ideas
                are always on the menu.
              </p>
              <img src="/sec1.jpg" className="w-full pt-12 rounded-md" alt="" />
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <p className="text-4xl">
                Add to that Our regular programming serves a hearty mix of chats
                about
                <span className="text-white font-bold">
                  business operations, entrepreneurship, finance, supply chain
                  management, sustainability, and social progress.
                </span>
              </p>
              <p className="text-4xl pt-12">
                All this in a laid-back, café atmosphere
                <span className="text-white font-bold">
                  where everyones ideas are brewed to perfection.
                </span>
              </p>
              <img src="/sec2.jpg" className="w-full pt-12 rounded-md" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version3;
