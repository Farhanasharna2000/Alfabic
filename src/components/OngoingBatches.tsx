"use client";

import { courses } from "@/constants/course";
import React from "react";
import Marquee from "react-fast-marquee";
import CourseCard from "./shared/CourseCard";
import Image from "next/image";

const OngoingBatches: React.FC = () => {
  return (
    <section className="md:pl-[96px] relative mb-12 md:mb-[95px] px-4 md:px-0 mt-6 md:mt-0">
      <h2 className="text-2xl md:text-[36px] font-semibold pt-8 pb-6 md:pt-[65px] md:pb-[36px] font-poppins">
        Ongoing <span className="text-[#5E2F7D]">Batches</span>
        <div className="absolute md:top-12 top-1 left-52 md:left-95">
          <Image src="/ongoing.svg" alt="" width={40.48} height={31} />
        </div>
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex gap-2 md:gap-6"
      >
        {courses.map((item) => (
          <div key={item.id} className="mx-3">
            <CourseCard course={item} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default OngoingBatches;
