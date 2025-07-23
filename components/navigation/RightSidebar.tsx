import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to create a simple nextjs app" },
  { _id: "2", title: "How to create a simple nextjs app" },
  { _id: "3", title: "How to create a simple react app" },
  { _id: "4", title: "How to create a simple dart app" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "js", questions: 100 },
  { _id: "3", name: "beauty", questions: 100 },
  { _id: "4", name: "typescript", questions: 100 },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 bg-white dark:bg-[#1e0039] border-l sticky right-0 left-0 flex h-screen w-[350px] flex-col gap-6 p-6 max-xl:hidden custom-scrollbar overflow-y-auto">
      <div>
        <h3 className="text-[30px] font-bold leading-[31px] text-[#1e0039] dark:text-white">
          Top Questions
        </h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="cursor-pointer flex items-center justify-between gap-7"
            >
              <p className="font-medium text-[14px] leading-[18px] text-[#1a0033] dark:text-[#f3e8ff]">
                {title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron"
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-bold leading-[26px] text-[#1e0039] dark:text-white">
          Popular Tags
        </h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
