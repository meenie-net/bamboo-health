"use client";
import React from "react";
import Rate from "@/components/Rate/Rate";
import Button from "@/components/Button/Button";

const RectangleMultiple = (props: {
  question: TQuestion;
  onNext: () => void;
  category: TQuizCategory;
}) => {
  const { question, onNext } = props;
  const handleNext = () => {
    onNext();
  };
  return (
    <div className="w-[38rem] flex flex-col items-center my-8 p-8">
      {/* info */}
      <div className="font-medium">{question.payload!.userInfo}</div>
      {/* rate */}
      <div className="my-2">
        <Rate rate={5} />
      </div>
      {/* Verified buyer */}
      <div className="flex items-center gap-1">
        <span className="w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[rgb(0,193,183)]">
          <span className="text-white icon-[ic--baseline-check]"></span>
        </span>
        <span className="text-[0.875rem] leading-6">Verified buyer</span>
      </div>
      {/* label */}
      <div className="max-w-[34rem] font-semibold text-[2rem] my-6 leading-10 text-center">
        {question.label}
      </div>
      {/* content */}
      <div
        className="text-sm text-center color-[rgb(107,114,128)] tracking-tight"
        dangerouslySetInnerHTML={{ __html: question.payload!.content }}
      ></div>
      <Button
        width={"22rem"}
        enable={true}
        content="Continue"
        onClick={handleNext}
      />
    </div>
  );
};

export default RectangleMultiple;
