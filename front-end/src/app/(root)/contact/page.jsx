'use client';
import Form from '@/components/public-pages/contact/form';
import Map from '@/components/public-pages/contact/map';

const Page = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-[#6F4E37] via-[#654335] to-[#51312E]'>
        <Form />
        <Map />
      </section>
    </>
  );
};

export default Page;
