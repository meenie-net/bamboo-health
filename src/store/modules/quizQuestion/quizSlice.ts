"use client";
import quiz from "@/config/quiz/quiz";
import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: quiz,
  reducers: {
    resetAnswer: () => quiz,
    setAnswer: (
      state,
      action: { payload: { category: TQuizCategory; name: string; value: any } }
    ) => {
      const { category, name, value } = action.payload;
      const answer: any[] = state[category].answers![name];
      answer.find((a) => a.label === value.label)
        ? answer.splice(
            answer.findIndex((a) => a.label === value.label),
            1
          )
        : answer.push(value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswer, resetAnswer } = quizSlice.actions;

export default quizSlice.reducer;
