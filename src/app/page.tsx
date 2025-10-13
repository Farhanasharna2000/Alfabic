import Activity from "@/components/Activity";
import Courses from "@/components/Courses/Courses";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Activity/>
      <Courses/>
    </div>
  );
}
