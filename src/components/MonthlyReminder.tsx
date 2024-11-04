"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Card {
  name: string;
  dob: string; // MM/DD/YYYY
  annidate: string; // MM/DD/YYYY
  imageUrl: string;
}

// Sample data with image URLs
const sampleCards: Card[] = [
  {
    name: "John Doe",
    dob: "11/15/1990",
    annidate: "06/20/2015",
    imageUrl: "/images/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    dob: "03/25/1985",
    annidate: "11/10/2018",
    imageUrl: "/images/jane-smith.jpg",
  },
  {
    name: "Alice Johnson",
    dob: "11/05/1992",
    annidate: "07/15/2019",
    imageUrl: "/images/alice-johnson.jpg",
  },
  {
    name: "Bob Wilson",
    dob: "07/22/1988",
    annidate: "11/25/2016",
    imageUrl: "/images/bob-wilson.jpg",
  },
];

const MonthlyReminder = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [birthdays, setBirthdays] = useState<Card[]>([]);
  const [anniversaries, setAnniversaries] = useState<Card[]>([]);

  useEffect(() => {
    const birthdaysThisMonth = sampleCards.filter((card) => {
      const dobMonth = parseInt(card.dob.split("/")[0]);
      return dobMonth === currentMonth;
    });

    const anniversariesThisMonth = sampleCards.filter((card) => {
      const anniMonth = parseInt(card.annidate.split("/")[0]);
      return anniMonth === currentMonth;
    });

    setBirthdays(birthdaysThisMonth);
    setAnniversaries(anniversariesThisMonth);
  }, [currentMonth]);

  const getMonthName = (month: number) => {
    return new Date(2024, month - 1).toLocaleString("default", {
      month: "long",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Month Selector */}
        <div className="mb-8 text-center">
          <select
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
            className="rounded-lg border border-blue-300 bg-white px-6 py-2 font-medium text-blue-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {getMonthName(month)}
              </option>
            ))}
          </select>
        </div>

        {/* Cards Container */}
        <div className="grid w-full gap-6 md:grid-cols-2">
          {/* Birthdays Card */}
          <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                🎂 Birthdays
              </h3>
            </div>
            <div className="p-6">
              {birthdays.length > 0 ? (
                <ul className="space-y-3">
                  {birthdays.map((person, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 rounded-lg bg-blue-50 p-3 transition-all duration-200 hover:bg-blue-100 md:flex-row"
                    >
                      <Image
                        src={person.imageUrl}
                        alt={""}
                        width={48}
                        height={48}
                        className="flex-shrink-0 rounded-full border-2 border-orange-500 object-cover shadow-md"
                        style={{ width: "48px", height: "48px" }}
                      />

                      <p className="font-medium text-blue-900">{person.name}</p>
                      <p className="text-sm text-blue-600">
                        {getMonthName(currentMonth)} {person.dob.split("/")[1]}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center italic text-blue-400">
                  No birthdays this month
                </p>
              )}
            </div>
          </div>

          {/* Anniversaries Card */}
          <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                💑 Anniversaries
              </h3>
            </div>
            <div className="p-6">
              {anniversaries.length > 0 ? (
                <ul className="space-y-3">
                  {anniversaries.map((person, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 rounded-lg bg-blue-50 p-3 transition-all duration-200 hover:bg-blue-100 md:flex-row"
                    >
                      <Image
                        src={person.imageUrl}
                        alt={""}
                        width={48}
                        height={48}
                        className="flex-shrink-0 rounded-full border-2 border-orange-500 object-cover shadow-md"
                        style={{ width: "48px", height: "48px" }}
                      />

                      <p className="font-medium text-blue-900">{person.name}</p>
                      <p className="text-sm text-blue-600">
                        {getMonthName(currentMonth)}{" "}
                        {person.annidate.split("/")[1]}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center italic text-blue-400">
                  No anniversaries this month
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReminder;
