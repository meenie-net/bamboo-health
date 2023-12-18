"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import Rate from "../Rate/Rate";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(window.innerWidth / 3);
  const [dotsShow, setDotsShow] = useState(false);
  const [newX, setNewX] = useState(0);
  const [oldX, setOldX] = useState(0);
  const [move, setMove] = useState(false);

  useEffect(() => {
    const screenWidthObersver = new ResizeObserver(() => {
      const bodyWidth = window.innerWidth;
      if (bodyWidth >= 1200) {
        setItemWidth((1200 - 80) / 3);
        setNewX(0);
        setDotsShow(false);
      } else if (bodyWidth >= 880 && bodyWidth < 1200) {
        setItemWidth((bodyWidth - 80) / 3);
        setNewX(0);
        setDotsShow(false);
      } else if (bodyWidth >= 640 && bodyWidth < 880) {
        setItemWidth(bodyWidth / 2.35);
        setDotsShow(true);
      } else {
        setItemWidth(bodyWidth / 1.2);
        setDotsShow(true);
      }
    });
    screenWidthObersver.observe(document.body);
    return () => {
      screenWidthObersver.disconnect();
    };
  }, []);

  const handleMoveMove = (e: any) => {
    const bodyWidth = window.innerWidth;
    if (move && bodyWidth < 880) {
      setNewX(newX + e.clientX - oldX);
    }
    setOldX(e.clientX);
  };

  const handleMouseUp = (e: any) => {
    setMove(false);
    const bodyWidth = window.innerWidth;
    if (move && bodyWidth < 880) {
      const diffX = newX + e.clientX - oldX;
      const outerX = diffX + newX;
      if (bodyWidth >= 640) {
        if (
          diffX < 0 &&
          -diffX >= (bodyWidth * 1.5) / 2.35 + 16 - bodyWidth / 2
        ) {
          setNewX(-((bodyWidth * 3) / 2.35 + 16 * 5 - bodyWidth));
        } else {
          setNewX(0);
        }
      } else {
        if (diffX < 0) {
          if (
            -diffX >= (bodyWidth * 0.5) / 1.2 &&
            -diffX < (bodyWidth * 1.5) / 1.2 + 16 - bodyWidth / 2
          ) {
            setNewX(-(bodyWidth / 1.2 + 16));
          } else if (-diffX >= (bodyWidth * 1.5) / 1.2 + 16 - bodyWidth / 2) {
            setNewX(-((bodyWidth * 3) / 1.2 + 16 * 5 - bodyWidth));
          } else {
            setNewX(0);
          }
        } else {
          if (
            outerX >= (bodyWidth * 0.5) / 1.2 &&
            outerX < (bodyWidth * 1.5) / 1.2 + 16 - bodyWidth / 2
          ) {
            setNewX(-(bodyWidth / 1.2 + 16));
          } else if (outerX >= (bodyWidth * 1.5) / 1.2 + 16 - bodyWidth / 2) {
            setNewX(-((bodyWidth * 3) / 1.2 + 16 * 5 - bodyWidth));
          } else {
            setNewX(0);
          }
        }
      }
    }
  };

  return (
    <div>
      <div
        style={{ transform: `translateX(${newX}px)` }}
        className={`flex p-4 delay-0 ${move ? "duration-0" : "duration-300"}`}
        onMouseDown={() => setMove(true)}
        onMouseMove={handleMoveMove}
        onMouseUp={handleMouseUp}
      >
        {Array.from(new Array(3)).map((v, k) => {
          return (
            <div
              key={k}
              style={{ width: itemWidth }}
              className="bg-white p-6 rounded-2xl mr-4 shadow-lg overflow-hidden flex-shrink-0 select-none cursor-pointer"
            >
              {/* info */}
              <div>
                <div className="text-sm font-bold">Ellie F,25</div>
                <div className="text-xs my-2">Brighton,UK</div>
              </div>
              {/* rate */}
              <Rate rate={5} />
              {/* content */}
              <div className="text-sm">
                I always viewed my ADHD as just a part of my life, until it
                started causing me serious issues with my performance at work.
                Through Sensa, I learned to plan and manage my daily tasks
                effectively, and without causing me to feel overwhelmed.
              </div>
            </div>
          );
        })}
      </div>
      {dotsShow && (
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default HomeSlider;
