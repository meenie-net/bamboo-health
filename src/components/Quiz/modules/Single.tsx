"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import ArrowOption from "../Options/ArrowOption";

const RectangleMultiple = (props: {
  column: "one" | "two";
  question: TQuestion;
  onNext: () => void;
  category: TQuizCategory;
}) => {
  const { column, question, onNext, category } = props;
  const allowContinue: boolean = useAppSelector(
    (state) => state.quiz[category].answers![question.name!].length > 0
  );
  const handleNext = () => {
    allowContinue && onNext();
  };
  return (
    <div className="w-[46rem] flex flex-col items-center py-8">
      <div>
        <Image src={question.img} alt="" width={160} height={160} />
      </div>
      <div className="max-w-[34rem] font-semibold text-[2rem] leading-10 text-center">
        {question.label}
      </div>
      {column === "one" && (
        <div className="w-[22rem] grid columns-1 grid-cols-1 gap-2 py-6">
          {question.options!.map((v, k) => (
            <ArrowOption
              key={k}
              option={v.label}
              questionName={question.name!}
              category={category}
              onNext={onNext}
            />
          ))}
        </div>
      )}
      {column === "two" && (
        <div className="w-full grid columns-2 grid-cols-2 gap-2 py-6">
          {question.options!.map((v, k) => (
            <ArrowOption
              key={k}
              option={v.label}
              questionName={question.name!}
              category={category}
              onNext={onNext}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RectangleMultiple;
