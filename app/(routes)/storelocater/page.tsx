import React from "react";
import Header from "../../../components/sections/header";
import BannerLocator from "../../../components/pages/storelocater/banner";

export default function Locater() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <BannerLocator />
    </main>
  );
}