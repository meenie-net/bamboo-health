"use client";
import SubNav from "@/components/SubNav/SubNav";
import React from "react";

const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SubNav />
      <div className="min-h-[calc(100vh-65px)] flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default QuizLayout;
