"use client";

import React from "react";
import CourseCard from "./shared/CourseCard";
import { courses } from "@/constants/course";

const Courses: React.FC = () => {
  return (
    <section className="px-4 md:px-[106.5px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[14px]">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
