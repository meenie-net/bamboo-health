"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  quizCategory: { url: string; img: string; title: string; desc: string }[];
} = {
  quizCategory: [
    {
      url: "/stressAnxiety",
      img: "/images/stress_anxiety.webp",
      title: "Stress / anxiety",
      desc: "Don’t allow stress to control your life",
    },
    {
      url: "/adhd",
      img: "/images/adhd.webp",
      desc: "It’s time to achieve your full potential",
      title: "ADHD",
    },
    {
      url: "/procrastination",
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
