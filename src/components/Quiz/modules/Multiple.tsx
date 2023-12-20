"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import RectangleOption from "../Options/RectangleOption";
import SquareOption from "../Options/SquareOption";

const RectangleMultiple = (props: {
  sharp: "rectangle" | "square";
  question: TQuestion;
  onNext: () => void;
  category: TQuizCategory;
}) => {
  const { sharp, question, onNext, category } = props;
  const allowContinue: boolean = useAppSelector((state) => {
    return state.quiz[category].answers![question.name!].length > 0;
  });
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
      {sharp === "rectangle" && (
        <div className="w-full grid columns-2 grid-cols-2 gap-2 mt-4">
          {question.options!.map((v, k) => (
            <RectangleOption
              key={k}
              option={v}
              questionName={question.name!}
              category={category}
            />
          ))}
        </div>
      )}
      {sharp === "square" && (
        <div className="w-full flex flex-wrap justify-center gap-4 mt-4">
          {question.options!.map((v, k) => (
            <SquareOption
              key={k}
              option={v}
              questionName={question.name!}
              category={category}
            />
          ))}
        </div>
      )}
      <button
        className={`w-[22rem] mt-4 rounded-lg text-base font-semibold tracking-[-0.02rem] py-2 px-6 min-h-[3rem] ${
          allowContinue
            ? "bg-[rgb(0,193,183)] text-white cursor-pointer"
            : "bg-[rgb(243,244,246)] text-[rgb(156,163,175)] cursor-not-allowed"
        }`}
        onClick={handleNext}
      >
        Continue
      </button>
    </div>
  );
};

export default RectangleMultiple;