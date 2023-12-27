"use client";
import Multiple from "@/components/Quiz/modules/Multiple";
import PlainText from "@/components/Quiz/modules/PlainText";
import Single from "@/components/Quiz/modules/Single";
import Comment from "@/components/Quiz/modules/Comment";
import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Error from "@/components/Error/Error";

const Quiz = ({ params }: { params: { category: string } }) => {
  const pathName = usePathname();
  const router = useRouter();
  const questions = useAppSelector(
    (state) => state.quiz.stressAnxiety.questions
  );
  const category = pathName.split("/")[1] as TQuizCategory;
  const currentIndex = parseInt(pathName.split("/")[3]) - 1;
  const answers = useAppSelector((state) => state.quiz.stressAnxiety.answers);
  const question = questions[currentIndex];
  const handleNext = () => {
    if (currentIndex >= questions.length - 1) {
      const pathSplitArr = pathName.split("/");
      pathSplitArr.pop();
      router.push(pathSplitArr.join("/") + "/confirm");
    } else {
      if (pathName) {
        const pathSplitArr = pathName.split("/");
        pathSplitArr[pathSplitArr.length - 1] =
          parseInt(pathSplitArr[pathSplitArr.length - 1]) + 1 + "";
        router.push(pathSplitArr.join("/"));
      }
    }
  };
  if (answers!.hasOwnProperty(question.name!)) {
    switch (question.type) {
      case "rectangleMultiple":
        return (
          <Multiple
            sharp="rectangle"
            question={question}
            onNext={handleNext}
            category={category}
          />
        );
      case "squareMultiple":
        return (
          <Multiple
            sharp="square"
            question={question}
            onNext={handleNext}
            category={category}
          />
        );
      case "twoColumnsArrow":
        return (
          <Single
            column="two"
            question={question}
            onNext={handleNext}
            category={category}
          />
        );
      case "oneColumnArrow":
        return (
          <Single
            column="one"
            question={question}
            onNext={handleNext}
            category={category}
          />
        );
      case "comment":
        return (
          <Comment
            question={question}
            onNext={handleNext}
            category={category}
          />
        );
      case "plainText":
        return <PlainText question={question} onNext={handleNext} />;
      default:
        return <Error />;
    }
  } else {
    return <Error />;
  }
};

export default Quiz;
