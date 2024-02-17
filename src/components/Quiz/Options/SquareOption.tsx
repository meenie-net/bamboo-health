import React, { useState } from "react";
import CheckButton from "../CheckButton/CheckButton";
import { useDispatch } from "react-redux";
import { setAnswer } from "@/store/modules/quizQuestion/quizSlice";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

const SquareOption = (props: {
  option: TOption;
  questionName: string;
  category: TQuizCategory;
}) => {
  const { option, questionName, category } = props;
  const dispatch = useDispatch();
  const answer: Array<any> = useAppSelector(
    (state) => state.quiz[category].answers![questionName],
  );
  const handleCheck = () => {
    dispatch(
      setAnswer({
        category,
        name: questionName,
        value: option,
      }),
    );
  };
  return (
    <div
      className={`relative flex w-[10rem] cursor-pointer flex-col flex-wrap items-center rounded-xl bg-white px-2 py-4 ${
        answer.includes(option) ? "hover-shadow" : "option-shadow"
      }`}
    >
      <div className="absolute left-[0.625rem] top-[0.625rem]">
        <CheckButton checked={answer.includes(option)} onChange={handleCheck} />
      </div>
      <Image alt="" src={option.img!} width={120} height={120} />
      <h5 className="select-none text-center text-base font-medium">
        {option.label}
      </h5>
    </div>
  );
};

export default SquareOption;
