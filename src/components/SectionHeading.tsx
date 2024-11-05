import type { FC } from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, className = "" }) => {
  return (
    <div className={`flex w-full items-center gap-6 py-8 ${className}`}>
      {/* Title with classic font and styling */}
      <h2 className="min-w-fit font-serif text-3xl font-semibold tracking-wide text-blue-900 md:text-4xl">
        {title}
      </h2>

      {/* Decorative Separator */}
      <div className="flex w-full items-center gap-3">
        <div className="h-1 w-16 rounded-full bg-blue-500 md:w-24"></div>
        <div className="h-1 flex-grow rounded-full bg-blue-500"></div>
        <div className="h-2 w-2 rounded-full bg-blue-500 shadow-md"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
