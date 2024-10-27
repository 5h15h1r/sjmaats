import HalfEvent from "./HalfEvent";
import HalfNews from "./HalfNews";
import Carousel from "./ImageCarousel";
import Navbar from "./Navbar";

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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex flex-col px-4 py-8 md:flex md:flex-row">
        <Carousel />
        <HalfNews
          title="SJMAA"
          description=" I'll help you convert the JSX to TSX by adding proper TypeScript types and explain the type safety considerations.Let me explain the key type safety considerations and improvements made in this TypeScript version:"
        />
      </div>
      <div className="mt-3 w-full">
        <HalfEvent events={events} />
      </div>
    </div>
  );
};

export default Homepage;
