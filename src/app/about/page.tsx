import AboutCard from "@/components/AboutCard";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full items-center justify-center ">
        <div className="flex flex-col gap-y-10">
          <div className=" flex flex-col gap-y-6">
            <h1 className="text-3xl text-blue-600 ">About us</h1>
            <AboutCard />
          </div>

          <div>
            <h1 className="text-3xl">COA</h1>
          </div>
        </div>
    </div>
  );
};

export default page;
