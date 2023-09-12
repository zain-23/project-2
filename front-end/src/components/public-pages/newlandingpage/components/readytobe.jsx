export default function ReadyToBe() {
  return (
    <section className='text-white mb-6' id='section5'>
      <div className='w-[90%] mx-auto'>
        <div>
          <h1 className='text-center py-14 text-7xl'>
            Ready to be Future-Proof
          </h1>
        </div>
        <div>
          <p className='text-center pb-6 text-white'>
            With The BitCafe, you are not just getting a coffee shop you
            aregetting a glimpse into the future. We offer hands-on
            learningexperiences about all the hot topics and emerging
            technologieslike decentralized finance, digital currencies, AI, ML,
            andblockchain use cases.
          </p>
          <p className='text-center pb-6 text-white'>
            All those words may sound scary now, but trust us, with a
            littleBitCafe magic, you ll be talking the tech talk in no time.
          </p>
          <div
            className='w-[70%] mx-auto h-[100vh] border'
            style={{
              backgroundImage: 'url(/paint.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div>
              <h1>The BitCafe</h1>
              <h3>Coffee</h3>
              <h3>Conversation</h3>
              <h3>Community</h3>
            </div>
            <div>
              <img
                src='/remove-uncle.png'
                alt=''
                className='w-full h-full rounded-md'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
