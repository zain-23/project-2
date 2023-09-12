"use client";
import BitcafeSpecial from "@/components/marketing/landingpage/home/BitcafeSpecial";
import Hero2 from "@/components/marketing/landingpage/home/hero2";
import Version from "@/components/marketing/landingpage/home/version";
import Version2 from "@/components/marketing/landingpage/home/version2";
import Version3 from "@/components/marketing/landingpage/home/version3";
import Version4 from "@/components/marketing/landingpage/home/version4";
import Version5 from "@/components/marketing/landingpage/home/version5";
import Version6 from "@/components/marketing/landingpage/home/version6";
import Version7 from "@/components/marketing/landingpage/home/version7";

export default function Page() {
  return (
    <>
      <section className="overflow-x-hidden">
        <Hero2 />
        <Version />
        <BitcafeSpecial />
        <Version3 />
        <Version4 />
        <Version5 />
        <Version6 />
        <Version7 />
      </section>
    </>
  );
}
