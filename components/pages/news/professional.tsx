import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import ware from "../../../public/ware1.svg";
export default function Professional() {
  return (
    <section className="text-gray-600 body-font">
      <p className="mt-4 text-[24px] mx-auto container font-extrabold uppercase  text-[#222222]">
        insightful blogs for professionals
      </p>
      <div className="container mx-auto mt-2">
        <div className="h-1 w-32 bg-[#A93838] rounded" />
      </div>
      <div className="container px-5 mt-6 pb-24 mx-auto flex flex-wrap items-center">
        <div className="p-4 border-2 lg:w-[634px] md:w-[1/2] ">
          <Image src={ware} alt="warehouse" />
          <p className="text-[#222222] my-2 font-medium text-[14px]">
            Lorem ipsum dolor sit amet dolor sit amet{" "}
          </p>
          <div>
            <div className="flex">
              <p className="text-[14px] text-[#515151] font-normal ">About: </p>
              <div className="flex gap-2 ml-2  text-[#A93838] font-semibold text-[14px]">
                <p>Logistics,</p>
                <p>Logistics</p>
              </div>
            </div>
          </div>
          <p className="w-[624px] font-normal text-[14px] text-[#222222] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            condimentum vehicula turpis. Proin eget velit rutrum, consectetur
            arcu sed, ornare augue. asd Proin et lacus lorem. Orci varius
            natoque penatibus et magnis dis parturient Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Praesent condimentum vehicula
            turpis. Proin eget velit rutrum, consectetur arcu sed, ornare augue.
            Proin et lacus lorem. Orci varius natoque penatibus et magnis dis
            parturient
          </p>
          <p className="mt-2 text-[#A93838] uppercase font-semibold text-[14px]">
            READ MORE
          </p>
        </div>

        <Card className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Keywords
          </h2>
          <div className="relative mb-4">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div>
            <p className="font-semibold text-[14px] text-[#222222]">
              Search by tags
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg text-[14px] font-semibold text-[#222222]">
              Categories
            </h2>
            <ul className="max-w-md space-y-1 text-[#A93838] font-semibold text-[12px] leading-8 list-disc list-inside dark:text-gray-400">
              <li>Advices</li>
              <li>Cargo</li>
              <li>warehousing</li>
              <li>Advices</li>
              <li>Cargo</li>
              <li>warehousing</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
