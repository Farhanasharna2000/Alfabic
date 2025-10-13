"use client";

import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface Course {
  id: number;
  title: string;
  image: string;
  mentor: string;
  experience: string;
  live?: boolean;
  timeLeft?: string;
  buttonText: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Abacus Mastering Mental Math for Kids",
    image: "/course1.png",
    mentor: "Rahim Karim",
    experience: "3+ years Experienced",
    live: true,
    buttonText: "Join Now",
  },
  {
    id: 2,
    title: "Presentation & Public Speaking for Juniors",
    image: "/course2.png",
    mentor: "Abir Hasan",
    experience: "4+ years Experienced",
    timeLeft: "03:40:20",
    buttonText: "Starts in",
  },
  {
    id: 3,
    title: "Abacus Mastering Mental Math for Junior",
    image: "/course3.png",
    mentor: "Karim Hasan",
    experience: "4+ years Experienced",
    timeLeft: "02:20:40",
    buttonText: "Starts in",
  },
  {
    id: 4,
    title: "Spoken English for Kids (Advance)",
    image: "/course1.png",
    mentor: "Abir Hasan",
    experience: "4+ years Experienced",
    timeLeft: "01:30:20",
    buttonText: "Starts in",
  },
];

const Live: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 md:px-[96px] mb-[50px]">
        <div className="bg-[#eaf8f2] rounded-[50px] pt-[154px] pb-[41px] px-4 md:px-[46px]">
      <div className="flex gap-6 relative">
        {courses.map((course) => (
          <div
            key={course.id}
            className=" bg-[#29B57E] rounded-[20px] "
          >
            {/* Top Image */}
            <div className="relative">
              <Image
                src={course.image}
                alt={course.title}
                width={271}
                height={201}
                className="rounded-[12px] w-full h-[201px] object-cover"
              />
              {course.live && (
                <span className="absolute top-2 left-2 bg-[#FF4E4E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Live
                </span>
              )}
            </div>

           <div className="py-[22px] px-6">
             {/* Mentor info */}
            <div className="mt-4 text-white">
              <div className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <User className="w-4 h-4 " />
                <span>{course.mentor}</span>
              </div>
              <p className="text-xs ml-6">{course.experience}</p>
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-base md:text-lg mt-2 mb-3">
              {course.title}
            </h3>

            {/* Button / Timer Section */}
            {course.live ? (
              <button className="cursor-pointer text-white text-sm md:text-base py-2 w-full rounded-[30px] font-semibold transition">
                {course.buttonText}
              </button>
            ) : (
              <div className="bg-[#00958A] text-white rounded-[14px] py-2 px-3 text-center absolute -bottom-10">
                <p className="text-xs font-semibold">{course.buttonText}</p>
                <div className="flex justify-center items-center gap-3 text-[11px] md:text-xs mt-1">
                  {course.timeLeft?.split(":").map((t, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="font-bold text-[13px] md:text-[15px]">
                        {t}
                      </span>
                      <span>
                        {i === 0 ? "Hours" : i === 1 ? "Minutes" : "Seconds"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
           </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-[100px]">
      <button className="text-[#00916E] font-semibold cursor-pointer">
        সব দেখুন
      </button>
      </div>
      </div>

    </section>
  );
};

export default Live;
