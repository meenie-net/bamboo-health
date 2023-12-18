"use client";
import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./modules/quizQuestion/quizSlice";
import appInitSlice from "./modules/appInit/appInitSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      quiz: quizSlice,
      appInit: appInitSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
