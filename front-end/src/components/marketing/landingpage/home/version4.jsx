import React from 'react';

const Version4 = () => {
  return (
    <section>
      <div className='max-w-[95%] mx-auto h-auto py-20 px-6'>
        <h3 className='text-6xl text-center text-white py-20'>Community</h3>
        <div className='flex flex-col gap-y-52'>
          <div className='grid grid-cols-2'>
            <div className='col-span-1'>
              <p className='text-4xl'>
                At The BitCafe,
                <span className='text-white font-bold'>
                  we are about more than just a good cup of joe.
                </span>
              </p>
              <p className='text-4xl pt-8'>
                <span className='text-white font-bold'>Profits </span>
                from our coffee and affiliate partnerships, bolstered by the
                generous support from our donors,
                <span className='text-white font-bold'>
                  go straight into our community wealth fund.
                </span>
              </p>
              <img
                src='/coffee-section3.jpg'
                className='w-full pt-12 rounded-md'
                alt=''
              />
            </div>
            <div className='col-span-1'></div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='col-span-1'></div>
            <div className='col-span-1'>
              <p className='text-4xl'>
                <span className='text-white font-bold'>
                  And the best part? This fund is for you, by you!{' '}
                </span>
                Used for democratically selected projects, the fund goes towards
                training programs, apprenticeships, scholarships, sustainability
                projects, and other community programs that our café-goers care
                about.
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='w-[40%]'>
              <p className='text-4xl pt-8'>
                It is our little way of brewing communities.{' '}
                <span className='text-white font-bold'>
                  Together, we change the world, one cup of coffee at time!
                </span>
              </p>
            </div>
            {/* <div className='col-span-2'></div> */}
            <div className='w-[40%]'>
              <img src='/p4.jpg' className='w-full rounded-md' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Version4;
