import { Card, CardContent } from "@/components/ui/card";
import { type Member } from "@/types/types";
import { committeeMembers } from "@/utils/committemembers";
import Image from "next/image";

const CommitteeMembers = () => {
  const committeemembers: Member[] = committeeMembers;

  const MemberCard = ({ member }: { member: Member }) => (
    <Card className="h-24 border border-blue-900 bg-white shadow-lg transition-shadow duration-300 hover:border-blue-700 hover:shadow-xl">
      <CardContent className="h-full p-4">
        <div className="flex h-full items-center gap-4">
          <Image
            src={member.image}
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

export default CommitteeMembers;
