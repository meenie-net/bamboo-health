import React from "react";

const Button = ({
  width,
  height,
  enable,
  content,
  onClick,
}: {
  width?: string;
  height?: string;
  enable: boolean;
  content: string;
  onClick: () => void;
}) => {
  return (
    <button
      style={{ width, lineHeight: height }}
      className={`rounded-lg text-base font-semibold tracking-[-0.02rem] py-2 px-6 ${
        enable
          ? "bg-[rgb(0,193,183)] text-white cursor-pointer"
          : "bg-[rgb(243,244,246)] text-[rgb(156,163,175)] cursor-not-allowed"
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
