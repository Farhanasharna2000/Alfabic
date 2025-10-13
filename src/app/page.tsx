import Activity from "@/components/Activity";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import OngoingBatches from "@/components/OngoingBatches";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Activity/>
      <Courses/>
      <OngoingBatches/>
      <Live/>
    </div>
  );
}
