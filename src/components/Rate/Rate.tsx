import React from "react";

const Rate = (props: { rate: number }) => {
  return (
    <div className="flex gap-2 my-4">
      {Array.from(new Array(props.rate)).map((v, i) => (
        <svg
          key={i}
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
          data-testid="landing__testimonials__reviews--Ellie F, 25__card__rating__star--1"
        >
          <path
            fill="#F8BD78"
            stroke="#F8BD78"
            d="M8.41 1.879a1 1 0 0 1 1.318-.517 1 1 0 0 1 .52.52l1.563 3.6a1 1 0 0 0 .823.6l3.912.373a1 1 0 0 1 .566 1.752l-2.946 2.6a1.001 1.001 0 0 0-.314.967l.85 3.835a1 1 0 0 1-1.484 1.078l-3.384-2a1 1 0 0 0-1.017 0l-3.384 2a1 1 0 0 1-1.483-1.08l.852-3.835a1 1 0 0 0-.314-.967L1.545 8.207a1 1 0 0 1 .567-1.75l3.912-.378a1 1 0 0 0 .823-.6z"
          ></path>
        </svg>
      ))}
    </div>
  );
};

export default Rate;
