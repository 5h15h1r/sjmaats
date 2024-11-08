import HalfEvent from "@/components/HalfEvent";
import HalfNews from "@/components/HalfNews";
import Carousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import Members from "./Members";
import MonthlyReminder from "./MonthlyReminder";
import Footer from "./Footer";

const events = [
  {
    id: 1,
    date: {
      day: "27",
      month: "Oct",
      weekday: "Sun",
    },
    title: "Omaha Reads: Theodore Wheeler Author Visit",
    time: "03:00pm",
    location: "Nebraska",
  },
  {
    id: 2,
    date: {
      day: "07",
      month: "Nov",
      weekday: "Thu",
    },
    title: "Silent Ignation Retreat for Women",
    time: "All Day",
    location: "Iowa",
  },
  {
    id: 3,
    date: {
      day: "22",
      month: "Nov",
      weekday: "Fri",
    },
    title: "Recent Alumni Pregame-Friendsgiving",
    time: "04:30pm",
    location: "Nebraska",
  },
];

const Homepage = () => {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-50">
      <Navbar />
      <div className="container mx-auto flex flex-grow flex-col px-4 py-8 md:flex-row md:justify-center">
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
      <div >
        <MonthlyReminder />
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
