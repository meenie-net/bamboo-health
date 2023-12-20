import React, { useState } from "react";
import CheckButton from "../CheckButton/CheckButton";
import { useDispatch } from "react-redux";
import { setAnswer } from "@/store/modules/quizQuestion/quizSlice";
import { useAppSelector } from "@/store/hooks";

const RectangleOption = (props: {
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
      className={`flex justify-between gap-6 p-4 rounded-xl bg-white items-center cursor-pointer ${
        answer.includes(option) ? "hover-shadow" : "option-shadow"
      }`}
      onClick={handleCheck}
    >
      <label className="select-none text-base font-medium">
        {option.label}
      </label>
      <CheckButton checked={answer.includes(option)} />
    </div>
  );
};

export default RectangleOption;
