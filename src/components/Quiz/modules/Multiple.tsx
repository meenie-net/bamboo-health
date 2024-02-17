"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import RectangleOption from "../Options/RectangleOption";
import SquareOption from "../Options/SquareOption";
import Button from "@/components/Button/Button";

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
    <div className="flex w-[46rem] flex-col items-center py-8">
      <div>
        <Image src={question.img} alt="" width={160} height={160} />
      </div>
      <div className="max-w-[34rem] text-center text-[2rem] font-semibold leading-10">
        {question.label}
      </div>
      <div className="mt-10 text-[0.875rem] font-normal tracking-[-0.02rem] text-[rgb(134,134,219)]">
        Choose as many or few options as you like
      </div>
      {sharp === "rectangle" && (
        <div className="my-4 grid w-full columns-2 grid-cols-2 gap-2">
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
        <div className="my-4 flex w-full flex-wrap justify-center gap-4">
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
      <Button
        width={"22rem"}
        enable={allowContinue}
        content="Continue"
        onClick={handleNext}
      />
    </div>
  );
};

export default RectangleMultiple;
