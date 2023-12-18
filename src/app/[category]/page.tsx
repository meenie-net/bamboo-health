"use client";
import Nav from "@/components/Nav/Nav";
import { useAppSelector } from "@/store/hooks";
import { notFound, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const QuizByCategory = () => {
  const router = useRouter();
  const pathName = usePathname();

  const quizCategory = useAppSelector((state) =>
    state.appInit.quizCategory.find((cate) => cate.url === pathName)
  );
  if (!quizCategory) notFound();
  const handleClickGender = (gender: string) => {
    router.push(pathName.split("/")[1] + "/quiz/1");
  };
  return (
    <div>
      <Nav />
      {quizCategory && (
        <div className="flex max-w-[74rem] min-h-[calc(100vh+65px)] mx-auto items-center px-8">
          <div className="w-[34rem]">
            <div className="text-[2.5rem] leading-[3rem] text-[rgb(17,24,39)] font-extrabold">
              {quizCategory.desc}
            </div>
            <div className="mt-8 mb-6 font-semibold tracking-tight text-[rgb(17,24,39)]">
              Let’s start simply – how do you identify?
            </div>
            <div className="flex gap-4 flex-wrap">
              <button
                className="min-w-[9rem] outline-none rounded-lg border-none transition-all text-base leading-6 tracking-tight px-6 py-2 min-h-[3rem] bg-[rgb(115,115,220)] text-white shadow-[rgba(134,134,219,0.2)_0px_16px_32px] hover:shadow-none"
                onClick={() => handleClickGender("male")}
              >
                Male
              </button>
              <button
                className="min-w-[9rem] outline-none rounded-lg border-none transition-all text-base leading-6 tracking-tight px-6 py-2 min-h-[3rem] bg-[rgb(0,193,183)] text-white shadow-[rgba(134,134,219,0.2)_0px_16px_32px] hover:shadow-none"
                onClick={() => handleClickGender("female")}
              >
                Female
              </button>
              <button
                className="min-w-[9rem] outline-none rounded-lg border-none transition-all text-base leading-6 tracking-tight px-6 py-2 min-h-[3rem] bg-white text-[rgb(115,115,220)] shadow-[rgba(134,134,219,0.2)_0px_16px_32px] hover:shadow-none"
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
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
      <div className="max-w-[74rem] text-center mx-auto px-8">
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
