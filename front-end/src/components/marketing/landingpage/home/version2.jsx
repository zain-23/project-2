const Version2 = () => {
  return (
    <section>
      <div className="max-w-[95%] px-6 mx-auto">
        <div className="py-10">
          <div className="w-[60%] mx-auto py-20">
            <h3 className="text-6xl text-center text-white">
              The BitCafe Special Blend
            </h3>
            <h3 className="text-6xl text-center  text-white">
              Coffee. Conversation . Community
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-y-52">
          <div className="flex justify-between">
            <div className="w-[35%]">
              <p className="text-4xl text-center leading-normal">
                <span className="text-white font-bold">Who can resist </span>
                the intoxicating aroma of specialty coffee, brought to you
                directly from the small farms of El Salvador?
              </p>
            </div>
            <div className="w-[35%]">
              <p className="text-4xl text-center leading-normal">
                <span className="text-white font-bold">
                  Our bean-to-cup mantra
                </span>
                ensures a uniquely high quality café experience that does not
                break the bank.
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[35%]">
              <p className="text-4xl text-center leading-normal">
                <span className="text-white font-bold">
                  Want to take a trip on the wild side?{" "}
                </span>
                Try a peer-to-peer payment with Bitcoin over the Lightning
                Network. Speedy, low-fee, and super cool!
              </p>
            </div>
            <div className="w-[35%]">
              <p className="text-4xl text-center leading-normal">
                <span className="text-white font-bold">Need help? </span>
                Our Genius Bar wizards are always ready to help you through
                the setup, acquisition, and transaction process. But do not
                worry, we have not forgotten our roots good old-fashioned cash
                works just fine, too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version2;
