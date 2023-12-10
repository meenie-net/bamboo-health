import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-[5.5rem] px-4 bg-emerald-50 min-h-[calc(100vh-65px)] overflow-x-hidden">
      <div className="h-[850px]  max-w-[74rem] mx-auto">
        <div className="flex justify-between desktop:flex-row-reverse tablet:flex-col phone:flex-col tablet:items-center phone:items-center">
          <Image
            src={"/images/bean_in_heart.webp"}
            alt=""
            width={500}
            height={340}
          />
          <h1 className="text-[2.5rem] font-extrabold max-w-[31.5rem]">
            Your mental health is important – Sensa gives you the tools to help
            you improve it
          </h1>
        </div>
        <div className="text-center text-xl">
          What are you struggling with the most right now?
        </div>
        <div className="flex justify-center desktop:gap-x-6 desktop:gap-y-8 tablet:gap-x-6 tablet:gap-y-8 flex-wrap mt-6 phone:gap-2">
          <Link
            href={"/stress-anxiety"}
            className="w-full py-1 rounded-2xl bg-white shadow-xl flex desktop:flex-col items-center phone:flex-row tablet:flex-col desktop:max-w-[13rem] tablet:max-w-[13rem] hover:hover-shadow"
          >
            <Image
              src={"/images/stress_anxiety.webp"}
              alt=""
              width={88}
              height={88}
              className="phone:w-[4rem] phone:h-[4rem]"
            />
            <div className="leading-8 font-medium">Stress / anxiety</div>
          </Link>
          <Link
            href={"/adhd"}
            className="w-full py-1 rounded-2xl bg-white shadow-xl flex desktop:flex-col items-center phone:flex-row tablet:flex-col desktop:max-w-[13rem] tablet:max-w-[13rem] hover:hover-shadow"
          >
            <Image
              src={"/images/adhd.webp"}
              alt=""
              width={88}
              height={88}
              className="phone:w-[4rem] phone:h-[4rem]"
            />
            <div className="leading-8 font-medium">ADHD</div>
          </Link>
          <Link
            href={"/procrastination"}
            className="w-full py-1 rounded-2xl bg-white shadow-xl flex desktop:flex-col items-center phone:flex-row tablet:flex-col desktop:max-w-[13rem] tablet:max-w-[13rem] hover:hover-shadow"
          >
            <Image
              src={"/images/procrastination.webp"}
              alt=""
              width={88}
              height={88}
              className="phone:w-[4rem] phone:h-[4rem]"
            />
            <div className="leading-8 font-medium">Procrastination</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
