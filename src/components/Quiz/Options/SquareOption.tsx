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
    (state) => state.quiz[category].answers![questionName]
  );
  const handleCheck = () => {
    dispatch(
      setAnswer({
        category,
        name: questionName,
        value: option,
      })
    );
  };
  return (
    <div
      className={`w-[10rem] flex flex-col flex-wrap relative py-4 px-2 rounded-xl bg-white items-center cursor-pointer ${
        answer.includes(option) ? "hover-shadow" : "option-shadow"
      }`}
      onClick={handleCheck}
    >
      <div className="absolute top-[0.625rem] left-[0.625rem]">
        <CheckButton checked={answer.includes(option)} />
      </div>
      <Image alt="" src={option.img!} width={120} height={120} />
      <h5 className="select-none text-center text-base font-medium">
        {option.label}
      </h5>
    </div>
  );
};

export default SquareOption;
