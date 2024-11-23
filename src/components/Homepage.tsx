import HalfEvent from "@/components/HalfEvent";
import HalfNews from "@/components/HalfNews";
import Carousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import Footer from "./Footer";
import Members from "./Members";
import MonthlyReminder from "./MonthlyReminder";
import { events } from "@/utils/events";



const Homepage = () => {
  return (
    <div className="flex h-screen flex-col md:overflow-auto overflow-x-hidden bg-gray-50">
      <Navbar />
      <div className="container mx-auto flex flex-grow flex-col px-4 py-8 md:flex-row md:justify-center justify-center items-center gap-8">
        <Carousel />
        <HalfNews
          title="SJMAA"
          description="I'll help you convert the JSX to TSX by adding proper TypeScript types and explain the type safety considerations."
        />
      </div>
      <SectionHeading title="Events" />
      <div className="mt-3 w-full">
        <HalfEvent events={events} />
      </div>
      <div className="mt-2 w-full">
        <SectionHeading title="Members" />
        <Members value="half" />
      </div>
      <SectionHeading title="Monthly Reminders" />
      <div>
        <MonthlyReminder />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
