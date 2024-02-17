"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { notFound, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { resetAnswer } from "@/store/modules/quizQuestion/quizSlice";
import Nav from "@/components/Nav/Nav";

const QuizByCategory = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  const quizCategory = useAppSelector((state) =>
    state.appInit.quizs.find((cate) => "/" + cate.category === pathName),
  );
  if (!quizCategory) notFound();
  const handleClickGender = (gender: string) => {
    router.push(pathName + "/quiz/1");
  };

  useEffect(() => {
    return () => {
      dispatch(resetAnswer());
    };
  });
  return (
    <div>
      <Nav />
      {quizCategory && (
        <div className="mx-auto flex min-h-[calc(100vh+65px)] max-w-[74rem] items-center px-8">
          <div className="w-[34rem]">
            <div className="text-[2.5rem] font-extrabold leading-[3rem] text-[rgb(17,24,39)]">
              {quizCategory.desc}
            </div>
            <div className="mb-6 mt-8 font-semibold tracking-tight text-[rgb(17,24,39)]">
              Let’s start simply – how do you identify?
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="min-h-[3rem] min-w-[9rem] rounded-lg border-none bg-[rgb(115,115,220)] px-6 py-2 text-base leading-6 tracking-tight text-white shadow-[rgba(134,134,219,0.2)_0px_16px_32px] outline-none transition-all hover:shadow-none"
                onClick={() => handleClickGender("male")}
              >
                Male
              </button>
              <button
                className="min-h-[3rem] min-w-[9rem] rounded-lg border-none bg-[rgb(0,193,183)] px-6 py-2 text-base leading-6 tracking-tight text-white shadow-[rgba(134,134,219,0.2)_0px_16px_32px] outline-none transition-all hover:shadow-none"
                onClick={() => handleClickGender("female")}
              >
                Female
              </button>
              <button
                className="min-h-[3rem] min-w-[9rem] rounded-lg border-none bg-white px-6 py-2 text-base leading-6 tracking-tight text-[rgb(115,115,220)] shadow-[rgba(134,134,219,0.2)_0px_16px_32px] outline-none transition-all hover:shadow-none"
                onClick={() => handleClickGender("other")}
              >
                Other
              </button>
            </div>
          </div>
          <div className="flex-auto">
            <Image
              src={quizCategory?.img}
              alt=""
              width={544}
              height={0}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      )}{" "}
      <div className="mx-auto max-w-[74rem] px-8 text-center">
        {/* Tips */}
        <div className="text-xs font-light">
          Disclaimer: Results may vary due to individual differences. In
          addition, mental self-help apps like Sensa are not a replacement for
          or a form of therapy, nor are they intended to cure, treat, or
          diagnose medical conditions, including psychiatric conditions. Please
          consult a qualified health care provider for a medical treatment plan.
        </div>
        <div className="my-6">Bamboo Health</div>
        {/* Copyright */}
        <div className="text-xs font-light">
          © 2023 Sensa. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default QuizByCategory;
