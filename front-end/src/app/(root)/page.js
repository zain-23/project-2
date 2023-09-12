"use client";
import Model from "@/components/3Dmodel/model";
import Version from "@/components/public-pages/newVirsion/version";
import Version3 from "@/components/public-pages/newVirsion/version3";
import Version2 from "@/components/public-pages/newVirsion/version2";
import Video from "@/components/video";
import Version5 from "@/components/public-pages/newVirsion/version5";
import Version4 from "@/components/public-pages/newVirsion/version4";
import Version1 from "@/components/public-pages/newVirsion/version1";
import Version6 from "@/components/public-pages/newVirsion/version6";
import Version7 from "@/components/public-pages/newVirsion/version7";
export default function Page() {
  return (
    <>
      <section className="overflow-x-hidden">
        <Version1 />
        <Model />
        <Version />
        <Version2 />
        <Version3 />
        <Version4 />
        <Version5 />
        <Version6 />
        <Version7 />
        <Video />
      </section>
    </>
  );
}
