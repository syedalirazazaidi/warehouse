import React from "react";
import Header from "../../../components/sections/header";
import NewsBanner from "../../../components/pages/news/banner";
import Professional from "../../../components/pages/news/professional";

export default function Blog() {
  return (
    <main>
      <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
      <NewsBanner />
      <Professional />
    </main>
  );
}
