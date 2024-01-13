import React from "react";
import Header from "../../../components/sections/header";
import BannerCareer from "../../../components/pages/careers/banner";
import Job from "../../../components/pages/careers/currentjob";
import Culture from "../../../components/pages/careers/culture";

export default function page() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <BannerCareer />
      <Job />
      <Culture />
    </main>
  );
}
