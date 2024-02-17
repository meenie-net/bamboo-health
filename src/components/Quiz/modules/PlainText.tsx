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
    <div className="my-8 flex w-[38rem] flex-col items-center justify-center p-8">
      <div>
        <Image src={question.img} alt="" width={272} height={272} />
      </div>
      <div className="max-w-[34rem] break-words text-center text-[2rem] font-semibold leading-10">
        {question.label}
      </div>
      <div className="mt-10 text-center text-2xl italic text-[rgb(134,134,219)]">
        {question.payload!.tips}
      </div>
      <div className="my-4 text-center text-lg">
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
