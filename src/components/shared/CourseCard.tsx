import { course } from "@/types/course";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

const CourseCard: React.FC<{ course: course }> = ({ course }) => {
  return (
    <div className="p-3 md:p-4 rounded-[18px] border border-[#CFC5C5]  shadow-md hover:shadow-md transition">
      <div className="w-full">
        <Image
          src={course.image}
          alt={course.title}
          width={362}
          height={194}
          className="object-cover w-full h-[194px] rounded-[8px]"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="bg-[#FFD7D7] text-[#F26A6A] px-4 py-1 rounded-[20px] text-xs md:text-md md:text-base font-bold">
          লাইভ
        </div>

        <div className="flex items-center gap-2">
          <button className="hover:scale-110 transition">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#FFD41E] text-[#FFD41E]" />
            <span className="text-xs  md:text-base font-bold text-[#1E1E1E]">
              {course.rating}
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-[#292929] font-semibold text-md md:text-[22px] py-3 md:py-[18px] font-poppins">
        {course.title}
      </h3>

      <div className="flex flex-col xs:flex-row md:flex-row items-start md:items-center justify-between gap-3">
        <div className="text-base md:text-[28px] font-bold text-[#29B57E]">
          {course.price}
        </div>
        <button className="w-full md:w-auto bg-[#29B57E] hover:bg-[#249868] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-[40px] text-md md:text-base md:text-[18px] font-semibold transition">
          বিস্তারিত দেখি
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
