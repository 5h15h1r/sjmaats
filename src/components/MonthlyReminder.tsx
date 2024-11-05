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

const BirthdayCard = () => {
  const [birthdays, setBirthdays] = useState<Card[]>([]);
  const currentMonth = new Date().getMonth() + 1;

  useEffect(() => {
    const birthdaysThisMonth = sampleCards.filter((card) => {
      const dobMonth = parseInt(card.dob.split("/")[0]);
      return dobMonth === currentMonth;
    });
    setBirthdays(birthdaysThisMonth);
  }, [currentMonth]);

  const getMonthName = (month: number) => {
    return new Date(2024, month - 1).toLocaleString("default", {
      month: "long",
    });
  };

  return (
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
                className="flex items-center gap-4 rounded-lg bg-gray-50 p-1 transition-all duration-200 hover:bg-blue-100 md:flex-row"
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
  );
};

const AnniversaryCard = () => {
  const [anniversaries, setAnniversaries] = useState<Card[]>([]);
  const currentMonth = new Date().getMonth() + 1;

  useEffect(() => {
    const anniversariesThisMonth = sampleCards.filter((card) => {
      const anniMonth = parseInt(card.annidate.split("/")[0]);
      return anniMonth === currentMonth;
    });
    setAnniversaries(anniversariesThisMonth);
  }, [currentMonth]);

  const getMonthName = (month: number) => {
    return new Date(2024, month - 1).toLocaleString("default", {
      month: "long",
    });
  };

  return (
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
                className="flex items-center gap-4 rounded-lg bg-blue-200 p-1 transition-all duration-200 hover:bg-blue-100 md:flex-row"
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
                  {getMonthName(currentMonth)} {person.annidate.split("/")[1]}
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
  );
};

const MonthlyReminder = ({
  type,
}: {
  type?: "birthday" | "anniversary" | "both";
}) => {
  return (
    <div className="h-full">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid w-full gap-1 md:grid-cols-2">
          {(type === "birthday" || type === "both") && <BirthdayCard />}
          {(type === "anniversary" || type === "both") && <AnniversaryCard />}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReminder;
