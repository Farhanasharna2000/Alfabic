"use client";

import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full md:pt-[95px] pt-10 flex items-center justify-between md:h-[730px] ">
      <div className="w-full  h-full  pl-6 md:pl-[105px]  z-10 relative">
        <div className="absolute md:-top-5 -top-7">
          <Image src="/h.svg" alt="flag" width={40.48} height={31} />
        </div>
        <div className="absolute left-20 top-10">
          <Image src="/h1.svg" alt="flag" width={40.48} height={31} />
        </div>
        <div className="absolute right-100 top-20">
          <Image src="/h1.svg" alt="flag" width={40.48} height={31} />
        </div>

        <div className="md:pl-[37px]">
          <h1 className="text-3xl md:text-[45px] font-semibold text-left md:pr-[238px]">
            <span className="text-[#29B57E]">আপনার শিশুর</span>{" "}
            <span className="text-[#0D0D0D]">শিখার যাত্রা শুরু হোক আজই!</span>
          </h1>

          <p className="text-[#4E4E4E] text-base md:text-lg leading-relaxed mt-[17px] md:w-[465px]">
            আমাদের প্ল্যাটফর্মটি শিশুদের জন্য সম্পূর্ণ নিরাপদ এবং সহজে
            ব্যবহারযোগ্য। পিতামাতারা তাদের সন্তানের শেখার অগ্রগতি খুব সহজেই
            পর্যবেক্ষণ করতে পারবেন। শিশুদের শেখার প্রতিটি ধাপে আমরা রাখছি তাদের
            জন্য বিশেষ গাইডলাইন।
          </p>

          <button className="mt-[33px] bg-[#5E2F7D] text-white md:px-[42px] px-4 py-3 rounded-[40px] text-sm md:text-[18px] font-semibold hover:bg-[#4b2364] transition">
            ফ্রী-তে যোগ দিন
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute right-65 top-120 ">
          <Image src="/world.png" alt="flag" width={100} height={100} />
        </div>
        <div className="absolute left-150 rotate-210 top-62 ">
          <Image src="/rocket.png" alt="flag" width={100} height={100} />
        </div>
        <div className="absolute left-135 top-140 ">
          <Image src="/book.png" alt="flag" width={100} height={100} />
        </div>
      </div>
      {/* ---  Background Image --- */}
      <div
        className="hidden md:block absolute ml-[391px] top-45 w-full  md:h-[512.15px] bg-no-repeat bg-right z-[20] right-[43px]"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      ></div>
    </section>
  );
};

export default Hero;
