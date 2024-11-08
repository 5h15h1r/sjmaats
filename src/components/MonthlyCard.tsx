import Image from "next/image";
import { FC } from "react";

interface Card {
  name: string;
  dob: string; // MM/DD/YYYY
  annidate: string; // MM/DD/YYYY
  imageUrl: string;
}

interface MonthlyCardProps {
  data: Card[];
  title: string;
}

const MonthlyCard: FC<MonthlyCardProps> = ({ data, title }) => {
  return (
    <div className="w-full overflow-hidden rounded-sm bg-white shadow-lg">
      <div className="bg-blue-600 px-6 py-4">
        <div
          className="font-extralight flex items-center justify-center gap-2 text-2xl   text-white"
          
        >
          {title}
        </div>
      </div>
      <div className="p-6">
        {data.length > 0 ? (
          <ul className="space-y-3">
            {data.map((person, index) => (
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
                <div className="flex flex-1 items-center justify-between">
                  <p className="font-medium text-blue-900">{person.name}</p>
                  <p className="text-sm text-blue-600">
                    {title == "Birthdays" ? person.dob : person.annidate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          `No ${title} this month`
        )}
      </div>
    </div>
  );
};

export default MonthlyCard;
