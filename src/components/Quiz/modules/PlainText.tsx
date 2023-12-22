"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

const PlainText = (props: { question: TQuestion; onNext: () => void }) => {
  const { question, onNext } = props;
  const handleNext = () => {
    onNext();
  };
  return (
    <div className="w-[38rem] flex flex-col items-center justify-center my-8 p-8">
      <div>
        <Image src={question.img} alt="" width={272} height={272} />
      </div>
      <div className="max-w-[34rem] font-semibold text-[2rem] leading-10 text-center break-words">
        {question.label}
      </div>
      <div className="text-[rgb(134,134,219)] text-2xl mt-10 italic text-center">
        {question.payload!.tips}
      </div>
      <div className="mt-4 text-lg text-center">
        {question.payload!.content}
      </div>
      <Button
        enable={true}
        width={"22rem"}
        content="Continue"
        onClick={handleNext}
      />
    </div>
  );
};

export default PlainText;
