"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { items } from "@/constants/activity";

const Activity: React.FC = () => {
  return (
    <div className="relative w-full md:pl-[96px] pt-6 pb-[17px] overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 ${item.bg} rounded-[8px] px-[28px] py-8 shadow-sm text-center mr-[18px]`}
          >
            <div className="flex gap-2 ">
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-start">
                <h4 className="text-[#292929] text-sm md:text-[22px] font-semibold">
                  {item.title}
                </h4>
                <p className="text-[#292929] text-xs md:text-base">
                  {item.lessons}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Activity;
