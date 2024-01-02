"use client";
import Logo from "@/components/Nav/Logo/Logo";
import React, { ChangeEvent, useRef, useState, FocusEvent } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

const Email = () => {
  const [taint, setTaint] = useState(false);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathName = usePathname();
  const handleClick = async () => {
    if (valid) {
      try {
        const { status } = await fetch("/api/quiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: value,
            quiz: pathName.split("/")[1],
            score: 10,
          }),
        });
        if (status === 200) router.push("checkout");
      } catch (error) {
        console.log("error ", error);
      }
    }
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
      <nav className="flex h-[65px] items-center justify-center shadow">
        <Logo />
      </nav>
      <div className="mt-10">
        {/* content */}
        <div className="mx-auto flex h-[calc(100vh-65px)] max-w-[74rem] items-center justify-between px-8 py-8">
          <div className="max-w-[22rem]">
            <div className="text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
              Enter your email
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="email"
                className={`pointer-events-none absolute left-4 select-none transition-[font-size] delay-0 duration-[250ms] ease-linear ${
                  focus
                    ? "top-0 translate-y-[0.375rem] text-[0.75rem] leading-[1.125rem] tracking-tight"
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
                className={`w-full rounded-lg border-[1px] border-[1px_solid_rgb(209,213,219)] px-4 py-[0.375rem] pt-[1.375rem] tracking-tight outline-none ${
                  taint
                    ? valid
                      ? "border-[rgb(0,193,183)] text-[rgb(17,24,39)]"
                      : "border-[rgb(253,106,120)] bg-[rgb(255,245,246)] text-[rgb(253,106,120)]"
                    : valid
                      ? "border-[rgb(0,193,183)] text-[rgb(17,24,39)]"
                      : "border-[rgb(107,114,128)] text-[rgb(107,114,128)]"
                }`}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
              />
            </div>
            <div className="mt-1 flex h-5 items-center text-[rgb(253,106,120)]">
              {taint && value && !valid && (
                <>
                  <span className="icon-[mdi--alert-circle-outline] mr-1"></span>
                  <span className="text-[0.75rem] leading-[1.125rem] tracking-tight">
                    Please enter valid email
                  </span>
                </>
              )}
              {taint && !value && (
                <>
                  <span className="icon-[mdi--alert-circle-outline] mr-1"></span>
                  <span className="text-[0.75rem] leading-[1.125rem] tracking-tight">
                    Please enter your email
                  </span>
                </>
              )}
            </div>
            <Button enable={valid} content="Continue" onClick={handleClick} />
            <div className="mt-4 text-[0.75rem] leading-[1.125rem] tracking-tight text-[rgb(107,114,128)]">
              By providing your email, you agree that Sensa.health will process
              your email address for target advertising purpose and will share
              your email address with social media, advertising and newsletters
              platforms as described in our T&Cs and Privacy Policy. We respect
              your privacy and do not tolerate spam. We will never share or sell
              your information to third parties.
            </div>
          </div>
          <div className="relative w-[30rem]">
            <Image
              src={"/images/bean_in_heart.webp"}
              width={1000}
              height={0}
              className="h-auto w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto max-w-[74rem] px-8 text-center">
        {/* Tips */}
        <div className="text-xs font-light">
          Disclaimer: Results may vary due to individual differences. In
          addition, mental self-help apps like Sensa are not a replacement for
          or a form of therapy, nor are they intended to cure, treat, or
          diagnose medical conditions, including psychiatric conditions. Please
          consult a qualified health care provider for a medical treatment plan.
        </div>
        {/* Copyright */}
        <div className="my-8 text-xs font-light">
          © 2023 Sensa. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Email;
