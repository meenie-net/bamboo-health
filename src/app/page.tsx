"use client";
import HomeFooter from "@/components/HomeFooter/HomeFooter";
import Nav from "@/components/Nav/Nav";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import CardCarousel from "@/components/CardCarousel/CardCarousel";

export default function Home() {
  const quizCategorys = useAppSelector((state) => state.appInit.quizs);
  return (
    <div>
      <Nav />
      {/* Main */}
      <div className="py-[5.5rem] px-4 bg-emerald-50 min-h-[calc(100vh-65px)] overflow-x-hidden">
        <div className="max-w-[74rem] mx-auto">
          <div className="flex justify-between items-center flex-row-reverse max_55:flex-col max_55:items-center">
            <Image
              src={"/images/bean_in_heart.webp"}
              alt=""
              width={500}
              height={340}
              priority
            />
            <h1 className="text-[2.5rem] font-extrabold max-w-[31.5rem]">
              Your mental health is important – Sensa gives you the tools to
              help you improve it
            </h1>
          </div>
          <div className="text-center text-xl">
            What are you struggling with the most right now?
          </div>
          {/* Menu-1 */}
          <div className="flex justify-center flex-row flex-wrap gap-x-6 gap-y-8 max_40:flex-col mt-6 max_40:gap-2">
            {quizCategorys.map((category, k) => (
              <Link
                key={k}
                href={"/" + category.category}
                className="w-full py-1 rounded-2xl bg-white shadow-xl flex flex-col items-center max_40:flex-row max-w-[13rem] max_40:max-w-none hover:hover-shadow"
              >
                <Image
                  src={category.img}
                  alt=""
                  width={88}
                  height={88}
                  className="max_40:w-[4rem] max_40:h-[4rem]"
                />
                <div className="leading-8 font-medium">{category.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Introduction-1 */}
      <div className="p-4 max-w-[74rem] mx-auto">
        <div className="py-8 text-center max-w-[38rem] mx-auto">
          <h2 className="text-4xl font-bold">Why Bamboo-Health?</h2>
          <p className="text-base font-light">
            Sensa is designed to cater to a wide range of users, suffering from
            many forms of mental health issues. Here’s some of the ways it can
            help you.
          </p>
        </div>
        <div className="text-center flex flex-wrap gap-8 items-center justify-center text-base font-light text-[rgb(17,24,39)]">
          <div className="flex flex-col items-center max-w-[22rem]">
            <Image
              width={108}
              height={0}
              className="h-auto"
              src={"/images/beans_with_flag_bg.webp"}
              alt=""
            />
            <div>
              Guides you through your journey with advice tailored to your exact
              needs.
            </div>
          </div>
          <div className="flex flex-col items-center max-w-[22rem]">
            <Image
              width={108}
              height={0}
              className="h-auto"
              src={"/images/bean_purple_taking_notes.webp"}
              alt=""
            />
            <div>Provides you with the tools you need to work on yourself.</div>
          </div>
          <div className="flex flex-col items-center max-w-[22rem]">
            <Image
              width={108}
              height={0}
              className="h-auto"
              src={"/images/bean_green_taking_notes.webp"}
              alt=""
            />
            <div>
              Constantly-evolving content reviewed by professional behavioral
              therapists.
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="bg-[rgb(255,252,240)] pt-8 pb-16">
        <div className="max-w-[74rem] mx-auto">
          <div className="text-2xl font-medium text-center leading-12">
            Don’t just take our word for it
          </div>
          <div className="text-base text-center py-4">
            Hear how Sensa has improved the lives of these users:
          </div>
          <CardCarousel />
        </div>
      </div>
      {/* Introduction-2 */}
      <div className="max-w-[74rem] px-8 mx-auto">
        <div className="flex flex-row max_55:flex-col py-10 max_55:justify-between">
          <div className="flex-1">
            <Image
              width={448}
              height={0}
              className="h-auto mx-auto py-5 max_55:py-0"
              src={"/images/bean_working_late.webp"}
              alt=""
            />
          </div>
          <div className="max_55:max-w-[34rem] flex-1">
            <div className="text-3xl font-medium leading-[5rem]">
              Why does it matter?
            </div>
            <div className="text-sm font-light">
              Did you know that 76% of Americans encountered stress or anxiety
              issues in the past year alone?
              <br />
              <br />
              Unfortunately, the seriousness of conditions like stress, anxiety,
              and depression is often understated – these issues can manifest
              into physical symptoms if not treated properly.
              <br />
              <br />
              Sensa is built to help you through whatever mental health issues
              affect you most. From burnout to procrastination, ADHD to anxiety,
              and everything in between.
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse max_55:flex-col max_55:py-10 max_55:justify-between">
          <div className="flex-1">
            <Image
              width={448}
              height={0}
              className="h-auto mx-auto py-5 max_55:py-0"
              src={"/images/app_screens.webp"}
              alt=""
            />
          </div>
          <div className="max_55:max-w-[34rem] flex-1">
            <div className="text-3xl font-medium leading-[5rem]">
              What is Bamboo-Health?
            </div>
            <div className="text-sm font-light">
              Sensa is a mobile application designed to work as your complete
              guide to improved mental health. Built upon the principles of
              Cognitive Behavioral Therapy (CBT), Sensa utilizes developed
              techniques to fight against a plethora of mental health issues,
              including anxiety, stress, depression, procrastination, ADHD,
              Self-esteem and burnout.
              <br />
              <br />
              This list is constantly growing, however; and Sensa is always
              looking for new ways to help users no matter what they suffer
              from.
            </div>
          </div>
        </div>
      </div>
      {/* Menu-2 */}
      <div className="max-w-[74rem] px-4 py-10 mx-auto">
        <div className="text-2xl font-medium text-center">
          What are you struggling with the most right now?
        </div>
        <div className="flex justify-center flex-row flex-wrap gap-x-6 gap-y-8 max_40:flex-col mt-6 max_40:gap-2">
          {quizCategorys.map((category, k) => (
            <Link
              key={k}
              href={"/" + category.category}
              className="w-full py-1 rounded-2xl bg-white shadow-xl flex flex-col items-center max_40:flex-row max-w-[13rem] max_40:max-w-none hover:hover-shadow"
            >
              <Image
                src={category.img}
                alt=""
                width={88}
                height={88}
                className="max_40:w-[4rem] max_40:h-[4rem]"
              />
              <div className="leading-8 font-medium">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>
      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
