"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";

interface Member {
  name: string;
  batch: string;
  role: string;
  image: string;
}

interface MemberCardProps {
  member: Member;
}

const HalfCommitteeMembers: React.FC = () => {
  const topRow: Member[] = [
    {
      name: "XJ RAJKUMAR AGRAWAL",
      batch: "1982 Batch",
      role: "CHAIRMAN",
      image: "/api/placeholder/80/80",
    },
    {
      name: "XJ PUNEET AGRAWAL",
      batch: "1984 Batch",
      role: "VICE-CHAIRMAN",
      image: "/api/placeholder/80/80",
    },
    {
      name: "XJ PANKAJ AGRAWAL",
      batch: "1989 Batch",
      role: "VICE-CHAIRMAN",
      image: "/api/placeholder/80/80",
    },
  ];

  const bottomRow: Member[] = [
    {
      name: "XJ ABHINAV PANDEY",
      batch: "1999 Batch",
      role: "PRESIDENT",
      image: "/api/placeholder/80/80",
    },
    {
      name: "XJ DIGVIJAY SINGH",
      batch: "2000 Batch",
      role: "VICE PRESIDENT",
      image: "/api/placeholder/80/80",
    },
    {
      name: "XJ HARSH MADHOK",
      batch: "1999 Batch",
      role: "SECRETARY",
      image: "/api/placeholder/80/80",
    },
    {
      name: "XJ MANISH KATARIA",
      batch: "1993 Batch",
      role: "TREASURER",
      image: "/api/placeholder/80/80",
    },
  ];

  const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
    <div className="w-full rounded-lg border border-blue-900 bg-white p-4 md:w-[320px]">
      <div className="flex items-center space-x-4">
        <Image
          src={member.image}
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
        className="mb-11 flex h-16 w-1/2 items-center justify-center rounded-md bg-blue-600 font-bold text-white transition-shadow duration-300 hover:shadow-2xl md:w-1/4"
      >
        View more members
      </Link>
    </div>
  );
};

export default HalfCommitteeMembers;
