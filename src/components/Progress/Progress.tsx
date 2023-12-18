"use client";
import React, { memo, useEffect, useState } from "react";

const Progress = (props: { progress: number | string }) => {
  const { progress } = props;
  const [width, setWidth] = useState(localStorage.getItem("width") || "0");

  useEffect(() => {
    setTimeout(() => {
      setWidth(() => {
        if (typeof progress === "number") {
          return progress * 100 + "%";
        } else if (typeof progress === "string") {
          return progress;
        } else {
          return "0";
        }
      });
      localStorage.setItem("width", width);
    }, 0);
  });

  return (
    <div className="w-full fixed">
      <div
        className="h-[5px] bg-cyan-300 transition-all"
        style={{ width }}
      ></div>
    </div>
  );
};

export default memo(Progress);
