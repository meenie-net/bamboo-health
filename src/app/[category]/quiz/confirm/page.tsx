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
    <div className="flex h-[calc(100vh-65px)] w-full flex-col items-center justify-center bg-[linear-gradient(rgba(229,249,248,0)_0%,rgb(229,249,248)_100%)] p-8">
      <div>
        <Image
          src="/images/bean_in_heart.webp"
          alt=""
          width={448}
          height={448}
        />
      </div>
      <div className="w-[38rem] break-words text-center text-[2rem] font-semibold leading-10">
        Ready to see your plan?
      </div>
      <div className="my-4 w-[38rem] text-center text-lg">
        Taking the time to focus on your problems and work on them takes a lot
        of effort – that’s why we designed Sensa to work from just 5 minutes of
        your time dedicated to it each day! Small steps lead to big changes.
      </div>
      <Button enable={true} content="Continue" onClick={handleNext} />
    </div>
  );
};

export default QuizConfirm;
