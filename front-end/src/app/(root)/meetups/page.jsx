"use client";
import { ContextData } from "@/components/context/contextApp";
import BitcoinMeetups from "@/components/meetups/bitcoinMeetups";
import React, { useContext } from "react";

const Page = () => {
  return (
    <>
      <BitcoinMeetups />
    </>
  );
};

export default Page;
