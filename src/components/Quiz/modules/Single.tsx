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
    <div className="w-[46rem] flex flex-col items-center">
      <div>
        <Image src={question.img} alt="" width={160} height={160} />
      </div>
      <div className="max-w-[34rem] font-semibold text-[2rem] leading-10">
        {question.label}
      </div>
      <div className="text-[rgb(134,134,219)] text-[0.875rem] font-normal tracking-[-0.02rem] mt-10">
        Choose as many or few options as you like
      </div>
      {column === "one" && (
        <div className="w-full grid columns-2 grid-cols-2 gap-2 mt-4">
          {question.options.map((v, k) => (
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
        <div className="w-full grid columns-2 grid-cols-2 gap-2 mt-4">
          {question.options.map((v, k) => (
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
