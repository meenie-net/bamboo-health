import React, { useRef, useState } from "react";

const Collapse = ({
  className,
  title,
  content,
}: {
  className?: string;
  title: string;
  content: string;
}) => {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setHeight(
      height === contentRef.current?.offsetHeight! + "px"
        ? "0px"
        : contentRef.current?.offsetHeight! + "px",
    );
  };
  return (
    <div
      className={`cursor-pointer overflow-hidden rounded-3xl bg-white ${className}`}
    >
      <div
        className="flex items-center justify-between rounded-tl-3xl rounded-tr-3xl p-4 hover:bg-[rgb(249,250,251)]"
        onClick={handleClick}
      >
        <span>{title}</span>
        <span
          className={`icon-[mdi--chevron-down] text-[1.5rem] transition-transform duration-[600ms] ease-in-out ${
            height === contentRef.current?.offsetHeight! + "px"
              ? "rotate-180"
              : ""
          }`}
        ></span>
      </div>
      <div
        className="overflow-hidden transition-all duration-[600ms] ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef} className="p-4 pt-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
