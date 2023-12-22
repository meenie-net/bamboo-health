"use client";
import Logo from "@/components/Nav/Logo/Logo";
import React, { ChangeEvent, useRef, useState, FocusEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

const Email = () => {
  const [taint, setTaint] = useState(false);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick = () => {
    if (valid) router.push("checkout");
  };
  const onFocus = () => {
    if (!taint) {
      setValid(true);
    }
    setFocus(true);
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTaint(true);
    const value = e.target.value;
    setFocus(!!value);
    setValid(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value));
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaint(true);
    const value = e.target.value;
    setValid(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value));
    setValue(value);
  };
  return (
    <div>
      {/* nav */}
      <nav className="h-[65px] flex justify-center items-center shadow">
        <Logo />
      </nav>
      <div className="mt-10">
        {/* content */}
        <div className="max-w-[74rem] mx-auto px-8 flex justify-between py-8">
          <div className="max-w-[22rem]">
            <div className="text-[2rem] leading-10 text-[rgb(17,24,39)] font-semibold">
              Enter your email
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="email"
                className={`absolute select-none pointer-events-none transition-[font-size] duration-[250ms] ease-linear delay-0 left-4 ${
                  focus
                    ? "text-[0.75rem] leading-[1.125rem] top-0 translate-y-[0.375rem] tracking-tight"
                    : "top-1/2 translate-y-[-50%]"
                } ${
                  taint
                    ? valid
                      ? "text-[rgb(0,193,183)]"
                      : "text-[rgb(253,106,120)]"
                    : valid
                    ? "text-[rgb(0,193,183)]"
                    : "text-[rgb(107,114,128)]"
                }`}
              >
                Email*
              </label>
              <input
                ref={inputRef}
                type="email"
                name="email"
                className={`tracking-tight w-full outline-none border-[1px] rounded-lg pt-[1.375rem] px-4 py-[0.375rem] border-[1px_solid_rgb(209,213,219)] ${
                  taint
                    ? valid
                      ? "text-[rgb(17,24,39)] border-[rgb(0,193,183)]"
                      : "text-[rgb(253,106,120)] border-[rgb(253,106,120)] bg-[rgb(255,245,246)]"
                    : valid
                    ? "text-[rgb(17,24,39)] border-[rgb(0,193,183)]"
                    : "text-[rgb(107,114,128)] border-[rgb(107,114,128)]"
                }`}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
              />
            </div>
            <div className="text-[rgb(253,106,120)] flex items-center mt-1 h-5">
              {taint && value && !valid && (
                <>
                  <span className="icon-[mdi--alert-circle-outline] mr-1"></span>
                  <span className="text-[0.75rem] tracking-tight leading-[1.125rem]">
                    Please enter valid email
                  </span>
                </>
              )}
              {taint && !value && (
                <>
                  <span className="icon-[mdi--alert-circle-outline] mr-1"></span>
                  <span className="text-[0.75rem] tracking-tight leading-[1.125rem]">
                    Please enter your email
                  </span>
                </>
              )}
            </div>
            <Button enable={valid} content="Continue" onClick={handleClick} />
            <div className="text-[rgb(107,114,128)] text-[0.75rem] tracking-tight leading-[1.125rem] mt-4">
              By providing your email, you agree that Sensa.health will process
              your email address for target advertising purpose and will share
              your email address with social media, advertising and newsletters
              platforms as described in our T&Cs and Privacy Policy. We respect
              your privacy and do not tolerate spam. We will never share or sell
              your information to third parties.
            </div>
          </div>
          <div className="w-[30rem] relative">
            <Image
              src={"/images/bean_in_heart.webp"}
              fill
              alt=""
              sizes="contain"
              priority
            />
          </div>
        </div>
        {/* footer */}
        <div className="max-w-[74rem] text-center mx-auto px-8">
          {/* Tips */}
          <div className="text-xs font-light">
            Disclaimer: Results may vary due to individual differences. In
            addition, mental self-help apps like Sensa are not a replacement for
            or a form of therapy, nor are they intended to cure, treat, or
            diagnose medical conditions, including psychiatric conditions.
            Please consult a qualified health care provider for a medical
            treatment plan.
          </div>
          {/* Copyright */}
          <div className="text-xs font-light my-8">
            © 2023 Sensa. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
