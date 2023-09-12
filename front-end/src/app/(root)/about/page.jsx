'use client';
import AboutCoffee from '@/components/about-us/aboutCoffee';
import ExpertCheif from '@/components/about-us/expertCheif';
import Partners from '@/components/about-us/partners';
import ProfessionalSkill from '@/components/about-us/professionalSkill';
import { ContextData } from '@/components/context/contextApp';
import { useContext } from 'react';

const page = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-[#6F4E37] via-[#654335] to-[#51312E]'>
        <AboutCoffee />
        <ProfessionalSkill />
        <ExpertCheif />
        <Partners />
      </section>
    </>
  );
};

export default page;
