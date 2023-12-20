"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  quizs: {
    category: TQuizCategory;
    img: string;
    title: string;
    desc: string;
  }[];
} = {
  quizs: [
    {
      category: "stressAnxiety",
      img: "/images/stress_anxiety.webp",
      title: "Stress / anxiety",
      desc: "Don’t allow stress to control your life",
    },
    {
      category: "adhd",
      img: "/images/adhd.webp",
      desc: "It’s time to achieve your full potential",
      title: "ADHD",
    },
    {
      category: "procrastination",
      img: "/images/procrastination.webp",
      desc: "Quit procrastinating – reap the rewards",
      title: "Procrastination",
    },
  ],
};

export const appInitSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appInitSlice.actions;

export default appInitSlice.reducer;
