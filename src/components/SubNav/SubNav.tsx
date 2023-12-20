import React from "react";
import Logo from "../Nav/Logo/Logo";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import Progress from "../Progress/Progress";

const SubNav = () => {
  const pathName = usePathname();
  const category = pathName.split("/")[1];
  const router = useRouter();
  const total = useAppSelector(
    (state) => state.quiz[category as TQuizCategory].questions.length
  );
  const handleBack = () => {
    if (pathName.split("/")[3] === "confirm") {
      router.push("" + total);
    } else {
      if (!Number.isNaN(parseInt(pathName.split("/")[3]))) {
        if (pathName.split("/")[3] === "1") {
          router.push("/" + category);
        } else {
          if (pathName) {
            const pathSplitArr = pathName.split("/");
            pathSplitArr[pathSplitArr.length - 1] =
              parseInt(pathSplitArr[pathSplitArr.length - 1]) - 1 + "";
            router.push(pathSplitArr.join("/"));
          }
        }
      }
    }
  };
  return (
    <>
      <nav className="h-[65px] sticky shadow left-0 top-0 bg-white z-40">
        <div className="max-w-[74rem] px-8 py-3 mx-auto flex justify-between items-center">
          <div
            onClick={handleBack}
            className="h-[45px] cursor-pointer flex items-center"
          >
            <span className="icon-[ic--baseline-arrow-back-ios]"></span>Back
          </div>
          <Logo />
          <div className="w-[5rem]">
            {!Number.isNaN(parseInt(pathName.split("/")[3])) && (
              <>
                <b>{pathName.split("/")[3]}</b> of {total}
              </>
            )}
          </div>
        </div>
      </nav>
      {!Number.isNaN(parseInt(pathName.split("/")[3])) && (
        <Progress progress={parseInt(pathName.split("/")[3]) / total} />
      )}
    </>
  );
};

export default SubNav;
