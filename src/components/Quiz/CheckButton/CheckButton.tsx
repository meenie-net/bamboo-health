"use client";
import React, { useState } from "react";

const CheckButton = (props: { checked: boolean }) => {
  const { checked } = props;
  return (
    <button className={`w-5 h-5 rounded`}>
      <span
        className={`w-5 h-5 rounded block ${
          checked
            ? "bg-[rgb(0,193,183)]"
            : "bg-slate-100 shadow-[rgb(209,213,219)_0px_0px_0px_1px_inset]"
        }`}
      >
        <span
          className={`text-white text-lg ${
            checked ? "icon-[ic--baseline-check]" : ""
          }`}
        ></span>
      </span>
    </button>
  );
};

export default CheckButton;
