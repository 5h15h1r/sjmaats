import { ArrowRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Event {
  id: number;
  date: {
    day: string;
    month: string;
    weekday: string;
  };
  title: string;
  time: string;
  location: string;
}

interface HalfEventProps {
  events: Event[];
}

const HalfEvent: React.FC<HalfEventProps> = ({ events }) => {
  return (
    <div className="min-w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">ALUMNI EVENTS</h2>
      </div>

      {/* Events Grid */}
      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
          >
            {/* Date Display */}
            <div className="mb-3 flex items-baseline gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-600">
                  {event.date.day}
                </span>
                <div className="flex flex-col text-sm text-gray-500">
                  <span>{event.date.month}</span>
                  <span>{event.date.weekday}</span>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {event.title}
            </h3>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Events Button */}
      <div className="flex justify-center">
        <Link
          href="/events"
          className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          View All Events
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default HalfEvent;
