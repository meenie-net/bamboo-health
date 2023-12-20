import React, { useState } from "react";
import CheckButton from "../CheckButton/CheckButton";
import { useDispatch } from "react-redux";
import { setAnswer } from "@/store/modules/quizQuestion/quizSlice";
import { useAppSelector } from "@/store/hooks";

const ArrowOption = (props: {
  option: string;
  questionName: string;
  category: TQuizCategory;
  onNext: () => void;
}) => {
  const { option, questionName, category, onNext } = props;
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
    onNext();
  };
  return (
    <div
      className={`flex justify-between gap-6 p-4 rounded-xl bg-white items-center cursor-pointer ${
        answer.includes(option) ? "hover-shadow" : "option-shadow"
      }`}
      onClick={handleCheck}
    >
      <label className="select-none text-base font-medium">{option}</label>
      <span className="icon-[ic--baseline-arrow-forward]"></span>
    </div>
  );
};

export default ArrowOption;
