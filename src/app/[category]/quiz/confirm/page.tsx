"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";

const QuizConfirm = () => {
  const router = useRouter();
  const path = usePathname();
  const handleNext = () => {
    router.push("/" + path.split("/")[1] + "/email");
  };
  return (
    <div className="w-full h-[calc(100vh-65px)] flex flex-col items-center justify-center p-8 bg-[linear-gradient(rgba(229,249,248,0)_0%,rgb(229,249,248)_100%)]">
      <div>
        <Image
          src="/images/bean_in_heart.webp"
          alt=""
          width={448}
          height={448}
        />
      </div>
      <div className="w-[38rem] font-semibold text-[2rem] leading-10 text-center break-words">
        Ready to see your plan?
      </div>
      <div className="w-[38rem] mt-4 text-lg text-center">
        Taking the time to focus on your problems and work on them takes a lot
        of effort – that’s why we designed Sensa to work from just 5 minutes of
        your time dedicated to it each day! Small steps lead to big changes.
      </div>
      <Button enable={true} content="Continue" onClick={handleNext} />
    </div>
  );
};

export default QuizConfirm;
