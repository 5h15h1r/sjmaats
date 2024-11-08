import { Card, CardContent } from "@/components/ui/card";
import { type Member } from "@/types/types";
import { committeeMembers } from "@/utils/committemembers";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface MembersProps {
  value: "half" | "full";
}

interface MemberCardProps {
  member: Member;
}

const HalfCommitteeMembers: React.FC = () => {
  const topRow: Member[] = [
    {
      name: "RAJKUMAR AGRAWAL",
      batch: "1982 Batch",
      role: "CHAIRMAN",
      imageUrl: "https://github.com/shadcn.png",
      dob: "11/11/1982",
      annidate: "11/01/2022",
    },
    {
      name: "PUNEET AGRAWAL",
      batch: "1984 Batch",
      role: "VICE-CHAIRMAN",
      imageUrl: "https://github.com/shadcn.png",
      dob: "02/02/1984",
      annidate: "02/11/2022",
    },
    {
      name: "PANKAJ AGRAWAL",
      batch: "1989 Batch",
      role: "VICE-CHAIRMAN",
      imageUrl: "https://github.com/shadcn.png",
      dob: "03/11/1989",
      annidate: "03/03/2022",
    },
  ];

  const bottomRow: Member[] = [
    {
      name: "ABHINAV PANDEY",
      batch: "1999 Batch",
      role: "PRESIDENT",
      imageUrl: "https://github.com/shadcn.png",
      dob: "04/04/1999",
      annidate: "04/11/2022",
    },
    {
      name: "DIGVIJAY SINGH",
      batch: "2000 Batch",
      role: "VICE PRESIDENT",
      imageUrl: "https://github.com/shadcn.png",
      dob: "05/05/2000",
      annidate: "05/05/2022",
    },
    {
      name: "HARSH MADHOK",
      batch: "1999 Batch",
      role: "SECRETARY",
      imageUrl: "https://github.com/shadcn.png",
      dob: "06/06/1999",
      annidate: "06/06/2022",
    },
    {
      name: "MANISH KATARIA",
      batch: "1993 Batch",
      role: "TREASURER",
      imageUrl: "https://github.com/shadcn.png",
      dob: "07/07/1993",
      annidate: "07/11/2022",
    },
  ];

  const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
    <div className="w-full rounded-lg border border-blue-900 bg-white p-4 md:w-[320px]">
      <div className="flex items-center space-x-4">
        <Image
          src={member.imageUrl}
          alt={""}
          width={48}
          height={48}
          className="rounded-full border-2 border-orange-500 object-cover"
          style={{ width: "48px", height: "48px" }}
        />
        <div className="flex flex-col">
          <h3 className="text-base font-bold tracking-wide text-orange-500">
            {member.name}
          </h3>
          <p className="text-sm font-bold text-gray-400">{member.batch}</p>
          <p className="mt-0.5 text-sm font-semibold uppercase text-gray-300">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-0">
      {/* Combined rows for mobile, separate for desktop */}
      <div className="flex w-full flex-col space-y-4 md:hidden">
        {[...topRow, ...bottomRow].map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-col md:space-y-4">
        {/* Top Row */}
        <div className="flex justify-center gap-4">
          {topRow.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {bottomRow.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
      <Link
        href="/committemembers"
        className="mb-11 flex h-16 w-1/2 items-center justify-center rounded-full bg-blue-600 font-bold text-white transition-shadow duration-300 hover:shadow-2xl md:w-1/4"
      >
        View more members
      </Link>
    </div>
  );
};

const CommitteeMembers = () => {
  const committeemembers: Member[] = committeeMembers;

  const MemberCard = ({ member }: { member: Member }) => (
    <Card className="h-24 border border-blue-900 bg-white shadow-lg transition-shadow duration-300 hover:border-blue-700 hover:shadow-xl">
      <CardContent className="h-full p-4">
        <div className="flex h-full items-center gap-4">
          <Image
            src={member.imageUrl}
            alt={""}
            width={48}
            height={48}
            className="flex-shrink-0 rounded-full border-2 border-orange-500 object-cover shadow-md"
            style={{ width: "48px", height: "48px" }}
          />
          <div className="overflow-hidden">
            <div className="flex items-center gap-1">
              <h3 className="truncate text-lg font-bold text-orange-500">
                {member.name}
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-400">{member.batch}</p>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              {member.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8">
      <div className="mx-auto max-w-[2000px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committeemembers.map((member, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:-translate-y-1"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Members: React.FC<MembersProps> = ({ value }) => {
  return (
    <div>
      {value === "half" ? (
        <div>
          <HalfCommitteeMembers />
        </div>
      ) : (
        <div>
          <CommitteeMembers />
        `</div>
      )}
    </div>
  );
};

export default Members;
