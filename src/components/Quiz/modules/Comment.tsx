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
    <div className="my-8 flex w-[38rem] flex-col items-center p-8">
      {/* info */}
      <div className="font-medium">{question.payload!.userInfo}</div>
      {/* rate */}
      <div className="my-2">
        <Rate rate={5} />
      </div>
      {/* Verified buyer */}
      <div className="flex items-center gap-1">
        <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[rgb(0,193,183)]">
          <span className="icon-[ic--baseline-check] text-white"></span>
        </span>
        <span className="text-[0.875rem] leading-6">Verified buyer</span>
      </div>
      {/* label */}
      <div className="my-6 max-w-[34rem] text-center text-[2rem] font-semibold leading-10">
        {question.label}
      </div>
      {/* content */}
      <div
        className="color-[rgb(107,114,128)] mb-4 text-center text-sm tracking-tight"
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
