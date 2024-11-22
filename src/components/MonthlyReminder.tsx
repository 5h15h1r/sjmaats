import { committeeMembers } from "@/utils/ReminderData";
import { FC } from "react";
import MonthlyCard from "./MonthlyCard";

const MonthlyReminders: FC = () => {
  // Get the current month
  const currentMonth = new Date().getMonth() + 1;

  // Filter the data for birthdays and anniversaries in the current month
  const dobData = committeeMembers.filter((member) => {
    if (member.dob) {
      const [, dobMonth] = member.dob.split("/");
      return dobMonth ? parseInt(dobMonth) === currentMonth : false;
    }
    return false;
  });

  const annidateData = committeeMembers.filter((member) => {
    if (member.annidate) {
      const [, annidateMonth] = member.annidate.split("/");
      return annidateMonth ? parseInt(annidateMonth) === currentMonth : false;
    }
    return false;
  });

  return (
    <div className="h-auto">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid w-full gap-8 md:grid-cols-2 md:gap-1">
          {dobData.length > 0 && (
            <MonthlyCard data={dobData} title="💑 Anniversaries" />
          )}
          {annidateData.length > 0 && (
            <MonthlyCard data={annidateData} title="🎂 Birthdays" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReminders;
