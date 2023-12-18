"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  stressAnxiety: {
    questions: TQuestion[];
    answers: {
      [key: string]: any;
    };
  };
} = {
  stressAnxiety: {
    questions: [
      {
        type: "rectangleMultiple",
        name: "often_notice",
        label: "“I notice that I often”",
        options: ["Overthink and over plan", "Struggle with making decisions"],
        img: "/images/bean_in_heart.webp",
      },
      {
        type: "squareMultiple",
        name: "",
        label:
          "What do you want to get out of this journey to stop procrastinating?",
        options: ["Improve my overall mental health"],
        img: "/images/bean_in_heart.webp",
      },
    ],
    answers: { often_notice: [] },
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: { payload: { category: TQuizCategory; name: string; value: any } }
    ) => {
      const { category, name, value } = action.payload;
      const answer: any[] = state[category]["answers"][name];
      answer.includes(value)
        ? answer.splice(answer.indexOf(value), 1)
        : answer.push(value);
      console.log("answer", answer.toString());
    },
    getAnswer: (
      state,
      action: { payload: { category: TQuizCategory; name: string; value: any } }
    ) => {
      const { category, name, value } = action.payload;
      return state[category]["answers"][name];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswer, getAnswer } = quizSlice.actions;

export default quizSlice.reducer;
