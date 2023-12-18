"use client";
import Progress from "@/components/Progress/Progress";
import SubNav from "@/components/SubNav/SubNav";
import { useAppSelector } from "@/store/hooks";
import { usePathname } from "next/navigation";
import React from "react";

const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const category = pathName.split("/")[1];
  const index = parseInt(pathName.split("/")[3]) - 1;
  const total = useAppSelector(
    (state) => state.quiz[category as TQuizCategory].questions.length
  );
  return (
    <>
      <SubNav />
      <Progress progress={(index + 1) / total} />
      <div className="min-h-[calc(100vh-65px)] flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default QuizLayout;
