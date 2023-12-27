"use client";
import React, { useState } from "react";

const CheckButton = (props: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) => {
  const { checked, onChange } = props;
  const handleClick = () => {
    onChange(!checked);
  };
  return (
    <button className={`h-5 w-5 rounded`} onClick={handleClick}>
      <span
        className={`block h-5 w-5 rounded ${
          checked
            ? "bg-[rgb(0,193,183)]"
            : "bg-slate-100 shadow-[rgb(209,213,219)_0px_0px_0px_1px_inset]"
        }`}
      >
        <span
          className={`text-lg text-white ${
            checked ? "icon-[ic--baseline-check]" : ""
          }`}
        ></span>
      </span>
    </button>
  );
};

export default CheckButton;
