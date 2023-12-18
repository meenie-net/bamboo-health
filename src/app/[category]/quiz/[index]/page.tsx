"use client";
import RectangleMultiple from "@/components/Quiz/RectangleMultiple/RectangleMultiple";
import SquareMultiple from "@/components/Quiz/SquareMultiple";
import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Quiz = ({ params }: { params: { category: string } }) => {
  const pathName = usePathname();
  const currentIndex = parseInt(pathName.split("/")[3]) - 1;
  const router = useRouter();
  const questions = useAppSelector(
    (state) => state.quiz.stressAnxiety.questions
  );
  const question = questions[currentIndex];
  const handleNext = () => {
    if (currentIndex === questions.length - 1) return;
    if (pathName) {
      const pathSplitArr = pathName.split("/");
      pathSplitArr[pathSplitArr.length - 1] =
        parseInt(pathSplitArr[pathSplitArr.length - 1]) + 1 + "";
      router.push(pathSplitArr.join("/"));
    }
  };
  switch (question.type) {
    case "rectangleMultiple":
      return (
        <RectangleMultiple
          question={question}
          onNext={handleNext}
          category={"stressAnxiety"}
        />
      );
    case "squareMultiple":
      return (
        <SquareMultiple
          question={question}
          onNext={handleNext}
          category={"stressAnxiety"}
        />
      );
    default:
      return <></>;
  }
};

export default Quiz;
