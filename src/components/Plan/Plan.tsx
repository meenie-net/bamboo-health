"use client";
import React, { ChangeEvent, useRef, useState, FocusEvent } from "react";
import Button from "../Button/Button";
import CheckButton from "../Quiz/CheckButton/CheckButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCountdown } from "@/hooks/useCountdown";

const Plan = () => {
  const [value, setValue] = useState("");
  const [TCsCheck, setTCsCheck] = useState(false);
  const [TCsWarning, setTCsWarning] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { MM, SS } = useCountdown({ duration: 600 });
  const plans = [
    {
      duration: "3",
      original_price: "89.97",
      current_price: "59.97",
      bill_frequency: "3",
      original_price_per_day: "0.99",
      current_price_per_day: "0.66",
    },
    {
      duration: "6",
      original_price: "179.94",
      current_price: "59.97",
      bill_frequency: "6",
      original_price_per_day: "0.99",
      current_price_per_day: "0.33",
    },
    {
      duration: "1",
      original_price: "",
      current_price: "29.99",
      bill_frequency: "1",
      original_price_per_day: "",
      current_price_per_day: "0.99",
    },
  ];
  const findMinIndex = (
    array: {
      current_price_per_day: string;
    }[],
  ) => {
    let minIndex = 0;
    let minValue = array[minIndex];
    array.forEach((element, i) => {
      if (element.current_price_per_day < minValue.current_price_per_day) {
        minValue = element;
        minIndex = i;
      }
    });
    return minIndex;
  };
  const [planIndex, setPlanIndex] = useState(findMinIndex(plans));
  const handleChangeTCs = (value: boolean) => {
    setTCsCheck(value);
    setTCsWarning(!value);
  };
  const handleClickClaimPlan = () => {
    if (!TCsCheck) {
      setTCsWarning(true);
      return;
    }
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFocus(!!value);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        {/* special offer timer */}
        <div className="my-[3rem] flex w-[26rem] items-center justify-between gap-6 rounded-3xl bg-[rgb(255,226,128)] px-6 py-3 text-[rgb(96,66,0)]">
          <div className="font-medium">Your special offer expires soon!</div>
          <div className="flex justify-evenly font-semibold">
            <div className="flex flex-col items-center">
              <span className="text-[2rem] leading-10">{MM}</span>
              <span className="text-[0.75rem] leading-[0.875rem]">MINUTES</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[2rem] leading-10">:</span>
              <span className="text-[0.75rem] leading-[0.875rem]"></span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[2rem] leading-10">{SS}</span>
              <span className="text-[0.75rem] leading-[0.875rem]">SECONDS</span>
            </div>
          </div>
        </div>
        <h1 className="text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
          Choose your plan:
        </h1>
        <div className="mt-4 flex flex-col gap-2">
          {plans.map((v, k) => {
            return (
              <div
                key={k}
                className={`flex cursor-pointer items-center gap-4 rounded-2xl p-4 ${
                  k === planIndex
                    ? "shadow-[rgba(0,0,0,0.08)_0px_9px_25px,rgb(134,134,219)_0px_0px_0px_0.125rem_inset]"
                    : "shadow"
                }`}
                onClick={() => setPlanIndex(k)}
              >
                <input
                  type="radio"
                  checked={k === planIndex}
                  readOnly
                  className="h-5 w-5"
                />
                <div className="flex flex-col items-start justify-between">
                  {k === findMinIndex(plans) && (
                    <div className="rounded bg-[rgb(255,226,128)] p-1 text-[0.75rem] font-semibold leading-[1.125rem] tracking-tight text-[rgb(96,66,0)]">
                      Most popular
                    </div>
                  )}
                  <div className="mb-[0.625rem] font-semibold text-[rgb(17,24,39)]">
                    {v.duration}-month plan
                  </div>
                  <div className="text-[0.75rem] leading-[1.125] tracking-tight text-[rgb(107,114,128)]">
                    <div>
                      <del className="text-[rgb(253,106,120)]">
                        {v.original_price} USD
                      </del>
                      {v.current_price} USD
                    </div>
                    <div>Billed every {v.duration} months</div>
                  </div>
                </div>
                <div className="text-center">
                  {v.original_price_per_day !== "" && (
                    <del className="text-[0.875rem] leading-5 tracking-tight text-[rgb(107,114,128)]">
                      {v.original_price_per_day} USD
                    </del>
                  )}
                  <div className="text-2xl font-medium leading-8 text-[rgb(17,24,39)]">
                    {v.current_price_per_day} USD
                  </div>
                  <div className="text-[0.875rem] leading-5 tracking-tight text-[rgb(17,24,39)]">
                    per day
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex w-[28rem] gap-4">
          <div className="relative flex-auto">
            <label
              htmlFor="email"
              className={`pointer-events-none absolute left-4 select-none transition-[font-size] delay-0 duration-[250ms] ease-linear ${
                focus
                  ? "top-0 translate-y-[0.375rem] text-[0.75rem] leading-[1.125rem] tracking-tight"
                  : "top-1/2 translate-y-[-50%]"
              } ${focus ? "text-[rgb(0,193,183)]" : "text-[rgb(107,114,128)]"}`}
            >
              Have a coupon code?
            </label>
            <input
              ref={inputRef}
              type="email"
              name="email"
              className={`w-full rounded-lg border-[1px] border-[1px_solid_rgb(209,213,219)] px-4 py-[0.375rem] pt-[1.375rem] tracking-tight outline-none ${
                focus
                  ? "border-[rgb(0,193,183)] text-[rgb(17,24,39)]"
                  : "border-[rgb(107,114,128)] text-[rgb(107,114,128)]"
              }`}
              onFocus={onFocus}
              onBlur={onBlur}
              value={value}
              onChange={onChange}
            />
          </div>
          <Button
            enable={value !== ""}
            height="2.375rem"
            onClick={() => {}}
            content="Apply"
          />
        </div>
        <div className="my-4 flex w-[28rem] justify-start">
          <CheckButton
            checked={TCsCheck}
            onChange={(value) => handleChangeTCs(value)}
          />
          <span className="ml-2 text-[0.75rem] leading-[1.125rem] tracking-tight text-[rgb(107,114,128)]">
            By choosing a payment method you agree to the T&Cs and Privacy
            Policy
          </span>
        </div>
        {TCsWarning && (
          <div className="mb-4 w-[28rem] bg-[rgb(255,245,246)] text-[0.75rem] leading-[1.125rem] tracking-tight text-[rgb(253,106,120)]">
            <span className="icon-[ic--round-warning-amber]"></span> Please
            check that you agree with the Terms and Conditions
          </div>
        )}
        <Button
          width="28rem"
          height={"2.5rem"}
          enable
          content="Claim my plan"
          onClick={handleClickClaimPlan}
        />
        <div className="mt-4 flex flex-col items-center gap-[0.625rem]">
          <h3 className="text-[0.75rem] leading-[0.875rem] text-[rgb(17,24,39)]">
            GUARANTEED <b>SAFE</b> CHECKOUT
          </h3>
          <Image
            width={256}
            height={0}
            className="h-auto w-full"
            alt=""
            src={"/images/payment_methods.webp"}
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
