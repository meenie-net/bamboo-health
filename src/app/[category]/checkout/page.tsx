"use client";
import Button from "@/components/Button/Button";
import CardCarousel from "@/components/CardCarousel/CardCarousel";
import Collapse from "@/components/Collapse/Collapse";
import Logo from "@/components/Nav/Logo/Logo";
import Plan from "@/components/Plan/Plan";
import Image from "next/image";
import React, { useRef } from "react";

const Checkout = () => {
  const planRef = useRef<HTMLDivElement>(null);
  const handleClickScrollToPlan = () => {
    window.scrollTo({
      top: planRef.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <nav className="sticky top-0 z-40 bg-white shadow">
        <div className="mx-auto flex h-[65px] max-w-[74rem] items-center justify-between px-8">
          <Logo />
          <Button
            height={"1.5rem"}
            enable
            content="Claim my plan"
            onClick={handleClickScrollToPlan}
          />
        </div>
      </nav>
      <div className="mt-8">
        <div className="mx-auto mt-8 w-[46rem]">
          <div className="grid columns-2 grid-cols-2 gap-8">
            <div className="flex w-[22rem] flex-col justify-center text-left text-[rgb(17,24,39)]">
              <h1 className="text-[2.5rem] font-extrabold leading-[3rem]">
                It’s time to kick-start your life
              </h1>
              <p>
                Using the answers you provided, we have calculated your stress
                and anxiety levels.
              </p>
            </div>
            <div className="min-h-[17rem] w-[22rem] rounded-2xl p-6 shadow-lg">
              <h5 className="text-[0.875rem] leading-5 tracking-tight text-[rgb(107,114,128)]">
                Your Stress/Anxiety symptom level is:
              </h5>
              <div className="text-left font-semibold">
                <span className="tracking-tight text-[rgb(17,24,39)]">
                  11/67
                </span>
                <span className="text-[0.875rem] leading-5 tracking-tight text-[rgb(253,106,120)]">
                  (Mild)
                </span>
              </div>
              <Image
                width={100}
                height={0}
                className="h-auto w-full"
                alt=""
                src={"/images/bean_in_heart.webp"}
              />
            </div>
            <div className="min-h-[17rem] w-[22rem] rounded-2xl p-6 shadow-lg">
              <h3 className="text-[1.25rem] font-semibold leading-6">
                Stop feeling overwhelmed
              </h3>
              <h5 className="text-[0.875rem] leading-5 tracking-tight text-[rgb(107,114,128)]">
                Unleash your inner potential
              </h5>
              <Image
                width={100}
                height={0}
                className="h-auto w-full"
                alt=""
                src={"/images/bean_in_heart.webp"}
              />
            </div>
            <div className="min-h-[17rem] w-[22rem] rounded-2xl p-6 shadow-lg">
              <Image
                width={100}
                height={0}
                className="h-auto w-full"
                alt=""
                src={"/images/bean_in_heart.webp"}
              />
              <h5 className="tracking-tight text-[rgb(17,24,39)]">
                Based on your data, we recommend to start with our{" "}
                <b>6-month plan</b> for the most effective results.
              </h5>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              width="13rem"
              height={"1.5rem"}
              enable
              content="Claim my plan"
              onClick={handleClickScrollToPlan}
            />
          </div>
        </div>
        <div className="mt-[8rem] flex flex-col items-center pb-16 pt-6">
          <h1 className="text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
            Your personal summary
          </h1>
          <p className="tracking-tight text-[rgb(17,24,39)]">
            Based on the answers you provided, you may be suffering with:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from(new Array(3)).map((v, k) => (
              <div
                key={k}
                className="flex max-w-[22rem] items-center gap-2 rounded-3xl p-6 shadow"
              >
                <Image
                  width={80}
                  height={80}
                  alt=""
                  src={"/images/bean_in_heart.webp"}
                />
                <div>
                  <h3 className="font-medium text-[rgb(17,24,39)]">
                    Heightened stress levels
                  </h3>
                  <p className="text-[0.875rem] leading-5 tracking-tight text-[rgb(107,114,128)]">
                    Your scores indicate to us that you could be struggling with
                    distractions and an increased level of underlying stress.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[rgb(255,252,240)] py-[4rem]">
          <div className="flex items-center justify-center gap-4">
            <Image
              width={576}
              height={576}
              className="h-auto w-[18rem]"
              alt=""
              src={"/images/bean_in_heart.webp"}
            />
            <div className="flex max-w-[24rem] flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[2.5rem] font-extrabold leading-[3rem] text-[rgb(134,134,219)]">
                  83%
                </span>
                <span className="tracking-tight text-[rgb(17,24,39)]">
                  of users reported improved sleep after just a few weeks
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[2.5rem] font-extrabold leading-[3rem] text-[rgb(134,134,219)]">
                  83%
                </span>
                <span className="tracking-tight text-[rgb(17,24,39)]">
                  of users reported improved sleep after just a few weeks
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[2.5rem] font-extrabold leading-[3rem] text-[rgb(134,134,219)]">
                  83%
                </span>
                <span className="tracking-tight text-[rgb(17,24,39)]">
                  of users reported improved sleep after just a few weeks
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgb(229,249,248)]">
          <div className="flex flex-col items-center justify-center">
            {/* Award */}
            <div className="my-[3.5rem] flex w-[34rem] items-center gap-4 rounded-2xl bg-[rgb(238,238,250)] px-4 py-2 shadow-[rgba(0,0,0,0.08)_0px_9px_25px]">
              <Image
                width={1000}
                height={0}
                className="h-auto w-[6.5rem]"
                alt=""
                src={"/images/bean_in_heart.webp"}
              />
              <p>
                Sensa is proudly nominated for an{" "}
                <b> UCSF Health Hub Digital Health Award – 2022.</b>
              </p>
            </div>
            <h2 className="text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
              Real people. Real stories.
            </h2>
            <p className="tracking-tight text-[rgb(17,24,39)]">
              See how we’ve helped others:
            </p>
            <CardCarousel />
            <div className="my-[3.5rem] flex w-[34rem] items-center gap-4 rounded-2xl bg-[rgb(213,239,237)] p-6 shadow-[rgba(0,0,0,0.08)_0px_9px_25px]">
              <Image
                width={100}
                height={0}
                className="h-auto w-full"
                alt=""
                src={"/images/bean_in_heart.webp"}
              />
              <p>
                In a study published in the{" "}
                <b> National Library of Medicine,</b> it was determined that
                using the Sensa mobile app was related to decreased depression,
                anxiety, and stress symptoms.[1]
              </p>
            </div>
          </div>
        </div>
        {/* plan */}
        <Plan />
        {/* promise */}
        <div className="bg-[rgb(229,249,248)] py-20">
          <div className="mx-auto flex max-w-[74rem] gap-8 px-8">
            <div className="w-[34rem]">
              <h1 className="mb-8 text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
                Our promise
              </h1>
              <p>
                <b>I know how you feel</b>. Waking up every day feeling like the
                world is on your shoulders – or being so paralyzed by anxiety
                that even the smallest of tasks feels unbearable.
                <br />
                <br />
                It can affect you in many areas, from school, to the workplace,
                and even your personal life, if left untreated.
                <br />
                <br />
                Sensa was designed to work <b>with you</b> on a daily basis – it
                teaches you how to effectively manage both stress and anxiety,
                and helps you learn how to reduce distractions in order to stay
                on top of things.
                <br />
                <br />
                We know that admitting to yourself that you need some help can
                be difficult, but don’t worry – we’re in this together, and{" "}
                <b>you will beat this</b> .
                <br />
                <br />
                Dainius
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col justify-center rounded-3xl bg-white p-6 shadow-sm">
                <Image
                  width={312}
                  height={312}
                  alt=""
                  src={"/images/bean_in_heart.webp"}
                />
                <h3 className="mt-6 font-semibold tracking-tight text-[rgb(17,24,39)]">
                  Dainius Jakučionis MD
                </h3>
                <p className="mt-1 text-[0.875rem] leading-5 tracking-tight text-[rgb(17,24,39)]">
                  The brains behind Sensa
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* perfect for you */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="mb-8 max-w-[48rem] text-center text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
              If you feel like{" "}
              <span className="whitespace-nowrap text-[rgb(18,222,211)]">
                you’ve done all you can
              </span>{" "}
              – the Sensa anxiety-relief plan is perfect for you
            </h1>
            <Image
              width={1000}
              height={0}
              className="h-auto w-[22rem]"
              alt=""
              src={"/images/bean_in_heart.webp"}
            />
            <div className="flex gap-8">
              <div className="w-[22rem] flex-1 rounded-3xl p-6 shadow">
                <h1 className="text-2xl font-bold text-[rgb(17,24,39)]">
                  Life before you start using Sensa
                </h1>
                <ul>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--close-circle-outline] text-[1.5rem] text-[rgb(156,163,175)]"></span>
                    <span>Anxiety and stress</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--close-circle-outline] text-[1.5rem] text-[rgb(156,163,175)]"></span>
                    <span>Inability to focus</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--close-circle-outline] text-[1.5rem] text-[rgb(156,163,175)]"></span>
                    <span>Difficulty controlling emotions</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--close-circle-outline] text-[1.5rem] text-[rgb(156,163,175)]"></span>
                    <span>Low self-confidence</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--close-circle-outline] text-[1.5rem] text-[rgb(156,163,175)]"></span>
                    <span>Emotional instability</span>
                  </li>
                </ul>
              </div>
              <div className="w-[22rem] flex-1 rounded-3xl border-[2px] border-[rgb(115,115,220)] bg-[rgb(248,248,255)] p-6">
                <h1 className="text-2xl font-medium text-[rgb(17,24,39)]">
                  Life after you start using Sensa
                </h1>
                <ul>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--check-circle] text-[1.5rem] text-[rgb(0,193,183)]"></span>
                    <span className="tracking-tight text-[rgb(17,24,39)]">
                      A relaxed state of mind
                    </span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--check-circle] text-[1.5rem] text-[rgb(0,193,183)]"></span>
                    <span>Concise, laser-focus</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--check-circle] text-[1.5rem] text-[rgb(0,193,183)]"></span>
                    <span>The ability to control how you think</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--check-circle] text-[1.5rem] text-[rgb(0,193,183)]"></span>
                    <span>Confidence to be truly yourself</span>
                  </li>
                  <li className="item-center mt-2 flex gap-2">
                    <span className="icon-[mdi--check-circle] text-[1.5rem] text-[rgb(0,193,183)]"></span>
                    <span>Emotional balance</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* as featured in */}
            <div className="mt-14">
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold tracking-tight text-[rgb(17,24,39)]">
                  As featured in:
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="544"
                    height="98"
                    fill="none"
                    data-testid="common__featured-in"
                    viewBox="0 0 544 98"
                  >
                    <path
                      fill="#111827"
                      d="M37.89 95.037a7.86 7.86 0 0 1-3.654 2.233c-1.81.48-3.494.296-5.433-.255a22.422 22.422 0 0 1-4.716-2.025 22.402 22.402 0 0 1 4.729-1.993c1.941-.536 3.626-.71 5.432-.22 1.4.4 2.662 1.183 3.642 2.26M38.94 93.138a7.851 7.851 0 0 0-.048-4.282c-.557-1.786-1.61-3.114-3.104-4.464a22.433 22.433 0 0 0-4.223-2.917c.081 1.715.358 3.415.825 5.067.578 1.929 1.327 3.448 2.704 4.716a7.84 7.84 0 0 0 3.847 1.88M26.193 87.978a7.557 7.557 0 0 1-4.008.988c-1.802-.085-3.296-.746-4.916-1.814a21.659 21.659 0 0 1-3.745-3.234c1.62-.34 3.273-.493 4.927-.456 1.94.073 3.539.404 5.056 1.383a7.572 7.572 0 0 1 2.686 3.133M27.71 86.539a7.557 7.557 0 0 0 1.2-3.949c.01-1.805-.57-3.331-1.551-5.007a21.574 21.574 0 0 0-3.031-3.91 21.652 21.652 0 0 0-.716 4.896c-.03 1.94.215 3.555 1.112 5.12a7.56 7.56 0 0 0 2.986 2.85M17.138 78.047a7.039 7.039 0 0 1-3.826.24 8.804 8.804 0 0 1-4.19-2.473 20.13 20.13 0 0 1-2.884-3.574c1.535-.042 3.07.092 4.575.4 1.631.273 3.153 1 4.39 2.098a7.03 7.03 0 0 1 1.935 3.309M18.765 76.984a7.024 7.024 0 0 0 1.75-3.408 8.804 8.804 0 0 0-.588-4.83 20.155 20.155 0 0 0-2.121-4.074 20.146 20.146 0 0 0-1.466 4.353 8.81 8.81 0 0 0 .167 4.863 7.022 7.022 0 0 0 2.258 3.096M10.475 65.744a6.609 6.609 0 0 1-3.547-.7 8.303 8.303 0 0 1-3.23-3.264 18.945 18.945 0 0 1-1.77-3.954c1.41.33 2.779.822 4.078 1.465a8.314 8.314 0 0 1 3.5 2.971 6.63 6.63 0 0 1 .969 3.482M12.213 65.167a6.621 6.621 0 0 0 2.417-2.69 8.303 8.303 0 0 0 .626-4.548 19.007 19.007 0 0 0-.956-4.226 18.927 18.927 0 0 0-2.384 3.618 8.306 8.306 0 0 0-1.017 4.48 6.63 6.63 0 0 0 1.314 3.366M7.07 53.385a6.569 6.569 0 0 1-3.285-1.447 8.238 8.238 0 0 1-2.423-3.859A18.803 18.803 0 0 1 .5 43.867a18.773 18.773 0 0 1 3.634 2.3A8.234 8.234 0 0 1 6.883 49.8a6.571 6.571 0 0 1 .187 3.584M8.88 53.198a6.574 6.574 0 0 0 2.922-2.083 8.248 8.248 0 0 0 1.588-4.271 18.8 18.8 0 0 0-.013-4.301 18.844 18.844 0 0 0-3.09 2.99 8.24 8.24 0 0 0-1.953 4.117 6.578 6.578 0 0 0 .545 3.548M6.758 40.738a5.954 5.954 0 0 1-2.625-1.923 7.467 7.467 0 0 1-1.391-3.889 17.05 17.05 0 0 1 .06-3.899 17.036 17.036 0 0 1 2.766 2.747 7.479 7.479 0 0 1 1.724 3.753 5.966 5.966 0 0 1-.534 3.21M8.397 40.925a5.958 5.958 0 0 0 2.995-1.273 7.491 7.491 0 0 0 2.24-3.47c.42-1.235.698-2.513.828-3.81a17.017 17.017 0 0 0-3.32 2.045 7.466 7.466 0 0 0-2.533 3.262 5.958 5.958 0 0 0-.21 3.246M8.836 29.66a5.51 5.51 0 0 1-2.015-2.24 6.918 6.918 0 0 1-.522-3.788c.13-1.2.397-2.383.795-3.523a15.814 15.814 0 0 1 1.987 3.013 6.926 6.926 0 0 1 .85 3.73 5.523 5.523 0 0 1-1.095 2.808M10.284 30.143a5.52 5.52 0 0 0 2.955-.586 6.915 6.915 0 0 0 2.69-2.72 15.79 15.79 0 0 0 1.475-3.294 15.797 15.797 0 0 0-3.398 1.221 6.927 6.927 0 0 0-2.914 2.476 5.532 5.532 0 0 0-.808 2.903M13.133 19.37a5.299 5.299 0 0 1-1.56-2.437 6.648 6.648 0 0 1 .097-3.673c.31-1.118.747-2.197 1.303-3.215a15.16 15.16 0 0 1 1.412 3.168 6.643 6.643 0 0 1 .223 3.668 5.3 5.3 0 0 1-1.475 2.49M14.432 20.054a5.303 5.303 0 0 0 2.893-.093 6.65 6.65 0 0 0 2.973-2.16 15.16 15.16 0 0 0 1.913-2.893c-1.157.079-2.302.29-3.411.628a6.656 6.656 0 0 0-3.15 1.893 5.308 5.308 0 0 0-1.218 2.625M18.97 10.286a5.038 5.038 0 0 1-1.011-2.557 6.33 6.33 0 0 1 .76-3.408 14.488 14.488 0 0 1 1.8-2.758 14.43 14.43 0 0 1 .742 3.21 6.315 6.315 0 0 1-.462 3.46 5.034 5.034 0 0 1-1.83 2.053M20.055 11.16a5.041 5.041 0 0 0 2.716.44 6.305 6.305 0 0 0 3.167-1.471A14.441 14.441 0 0 0 28.25 7.78a14.35 14.35 0 0 0-3.296-.036 6.312 6.312 0 0 0-3.282 1.19 5.032 5.032 0 0 0-1.616 2.225M25.065 4.955c.854.159 1.736.077 2.547-.236a5.877 5.877 0 0 0 2.51-2.062A13.404 13.404 0 0 0 31.658 0c-1.017.13-2.016.378-2.977.735a5.877 5.877 0 0 0-2.68 1.838 4.678 4.678 0 0 0-.937 2.382"
                    ></path>
                    <path
                      fill="#111827"
                      d="m48.261 97.703-1.268-.296A44.994 44.994 0 0 1 43.41 96.4a50.979 50.979 0 0 1-25.533-18.388 54.493 54.493 0 0 1-5.368-9.059A55.454 55.454 0 0 1 8.89 58.711 56.9 56.9 0 0 1 7.777 37.48a54.533 54.533 0 0 1 5.676-17.655 55.268 55.268 0 0 1 7.418-10.838A50.447 50.447 0 0 1 23.394 6.3l.93-.915.108.112-.92.918a54.983 54.983 0 0 0-9.792 13.548 54.178 54.178 0 0 0-5.5 17.574A56.357 56.357 0 0 0 9.49 58.561a54.8 54.8 0 0 0 3.651 10.091 53.9 53.9 0 0 0 5.366 8.895A50.056 50.056 0 0 0 47.23 96.368l1.27.285z"
                    ></path>
                    <g fill="#111827" clipPath="url(#trust_badge_svg__a)">
                      <path d="M88.545 31.852c-9.206 0-16.546 7.627-16.546 16.95 0 9.422 7.34 17.05 16.546 17.05 9.279 0 16.52-7.628 16.52-17.05 0-9.323-7.241-16.95-16.52-16.95m0 7.178c7.536 0 13.059 4.861 15.391 9.772-2.332 4.985-7.855 9.87-15.391 9.87-7.586 0-13.036-4.885-15.367-9.87 2.332-4.91 7.806-9.772 15.367-9.772m0 .773c-4.91 0-8.912 4.038-8.912 8.999 0 5.035 4.002 9.048 8.912 9.048 4.91 0 8.861-4.013 8.861-9.048 0-4.96-3.952-8.999-8.861-8.999M120.875 33.867c-8.641 0-14.68 6.656-14.68 14.782v.1c0 8.225 6.162 14.706 14.459 14.706 5.425 0 8.666-1.944 11.562-5.11l-3.952-4.038c-2.209 2.044-4.198 3.364-7.413 3.364-4.812 0-8.175-4.112-8.175-9.022v-.075c0-4.91 3.437-8.924 8.175-8.924 2.823 0 5.032 1.221 7.217 3.24l3.952-4.636c-2.627-2.617-5.818-4.387-11.145-4.387M134.549 34.344v28.615h13.428c6.358 0 10.53-2.592 10.53-7.827v-.1c0-3.838-1.988-5.757-5.253-7.028 2.013-1.147 3.682-2.942 3.682-6.182v-.075c0-1.97-.638-3.565-1.939-4.886-1.595-1.62-4.124-2.517-7.34-2.517zm6.039 5.508h6.137c2.626 0 4.075 1.072 4.075 2.942v.1c0 2.118-1.743 3.016-4.493 3.016h-5.719zm0 11.292h7.192c3.167 0 4.59 1.197 4.59 3.116v.1c0 2.118-1.669 3.09-4.393 3.09h-7.389zM170.683 33.922c-5.744 0-9.868 3.44-9.868 8.65v.074c0 5.683 3.682 7.279 9.353 8.75 4.713 1.245 5.695 2.043 5.695 3.639v.1c0 1.67-1.547 2.691-4.075 2.691-3.241 0-5.892-1.346-8.42-3.465l-3.682 4.462c3.387 3.066 7.707 4.562 11.979 4.562v-.025c6.063 0 10.335-3.19 10.335-8.85v-.074c0-5.01-3.241-7.079-8.936-8.6-4.86-1.27-6.088-1.894-6.088-3.763v-.075c0-1.396 1.252-2.517 3.633-2.517 2.382 0 4.837 1.072 7.316 2.841l3.216-4.76c-2.848-2.319-6.334-3.64-10.458-3.64"></path>
                    </g>
                    <g clipPath="url(#trust_badge_svg__b)">
                      <path
                        fill="#111827"
                        fillRule="evenodd"
                        d="M243.024 48.904c0-9.354 7.341-16.922 16.441-16.922 9.065 0 16.372 7.568 16.372 16.922 0 9.354-7.307 16.922-16.372 16.922-9.1 0-16.441-7.533-16.441-16.922m-21.026 17.448v-35h20.646l.621 9.6h-11.547v4.589h9.444V55h-9.444v11.35zm80-.105-10.34-18.079 9.444-16.676h-10.444l-4.205 7.427-4.274-7.427h-10.65l9.547 16.781-10.168 17.974h10.444l4.929-8.69 4.998 8.69zM262.291 55.84V41.967c0-1.646-1.206-3.048-2.826-3.048-1.482 0-2.758 1.402-2.758 3.048v13.874c0 1.542 1.276 2.838 2.758 2.838 1.62 0 2.826-1.121 2.826-2.838"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <g fill="#111827" clipPath="url(#trust_badge_svg__c)">
                      <path d="M349.623 41.704c-2.312 2.141-3.155 6.993 1.014 9.829l16.632 11.67-8.064-18.895c-1.69-4.46-6.312-5.432-9.582-2.604M363.94 32.518c-2.704.056-6.763 3.349-4.956 8.377l8.34 20.118 2.931-21.16c.678-5.259-3.212-7.686-6.315-7.336M371.556 39.044h1.578s.842 0 .956.406c-.62.519-2.31.583-2.086 3.352l2.652 18.206 8.283-20.17c1.695-4.504-1.862-8.266-5.016-8.38a5.955 5.955 0 0 0-.449-.02c-2.831 0-6.076 2.104-5.918 6.606M382.607 44.483l-7.836 18.669 16.627-11.732c3.833-2.78 3.215-7.226 1.069-9.423-.899-1.034-2.55-1.833-4.3-1.833-2.067 0-4.278 1.12-5.56 4.319M389.536 54.076 373.921 65.23h19.226c3.945 0 6.479-4.16 5.353-7.977-.755-2.4-2.988-4.282-5.58-4.285-1.091 0-2.247.336-3.384 1.107M349.176 65.232h18.942L352.5 54.077c-3.609-2.371-7.666-.983-9.131 2.951-1.241 4.505 1.859 8.204 5.807 8.204M435.937 53.104h5.06c1.163.075 3.225 1.114 3.225 3.574 0 2.573-2.139 3.611-3.299 3.728h-4.986zm-.077-11.454h4.165c1.424.079 3.107 1.154 3.107 3.152 0 1.96-1.272 3.265-2.92 3.499h-4.352zm-5.694-4.767v28.286h13.419c3.184 0 6.971-3.266 6.971-7.532 0-4.458-2.847-6.647-4.649-7.53 0 0 3.299-1.96 3.153-6.19-.151-5.687-5.288-7.034-7.05-7.034zM409.584 48.878l17.393 17.368V36.885h-5.845V52.76l-17.397-17.026V65.17h5.849zM451.496 50.72c.147 8.945 6.43 15.633 14.509 15.633 1.915 0 3.933-.37 5.995-1.183v-5.764a9.871 9.871 0 0 1-5.235 1.514c-4.889 0-9.501-3.7-9.31-10.43.329-5.458 4.698-9.227 9.408-9.227 1.724 0 3.498.508 5.137 1.617v-5.608c-1.911-.793-3.811-1.147-5.641-1.147-8.058 0-14.708 6.952-14.863 14.595"></path>
                    </g>
                    <path
                      fill="#111827"
                      d="M506.11 95.037a7.86 7.86 0 0 0 3.654 2.233c1.81.48 3.494.296 5.433-.255a22.422 22.422 0 0 0 4.716-2.025 22.396 22.396 0 0 0-4.729-1.993c-1.941-.536-3.626-.71-5.432-.22a7.837 7.837 0 0 0-3.642 2.26M505.059 93.138a7.858 7.858 0 0 1 .049-4.282c.557-1.786 1.609-3.114 3.104-4.464a22.417 22.417 0 0 1 4.223-2.917 22.539 22.539 0 0 1-.825 5.067c-.579 1.929-1.327 3.448-2.704 4.716a7.84 7.84 0 0 1-3.847 1.88M517.807 87.978a7.555 7.555 0 0 0 4.008.988c1.802-.085 3.296-.746 4.917-1.814a21.699 21.699 0 0 0 3.744-3.234 21.642 21.642 0 0 0-4.927-.456c-1.939.073-3.539.404-5.056 1.383a7.572 7.572 0 0 0-2.686 3.133M516.29 86.539a7.555 7.555 0 0 1-1.201-3.949c-.009-1.805.571-3.331 1.552-5.007a21.57 21.57 0 0 1 3.031-3.91c.425 1.6.665 3.242.716 4.896.03 1.94-.215 3.555-1.111 5.12a7.57 7.57 0 0 1-2.987 2.85M526.862 78.047a7.04 7.04 0 0 0 3.825.24 8.803 8.803 0 0 0 4.191-2.473 20.163 20.163 0 0 0 2.884-3.574 20.1 20.1 0 0 0-4.575.4 8.811 8.811 0 0 0-4.39 2.098 7.032 7.032 0 0 0-1.935 3.309M525.235 76.984a7.028 7.028 0 0 1-1.75-3.408 8.801 8.801 0 0 1 .588-4.83 20.129 20.129 0 0 1 2.121-4.074 20.086 20.086 0 0 1 1.465 4.353 8.802 8.802 0 0 1-.166 4.863 7.022 7.022 0 0 1-2.258 3.096M533.525 65.744a6.607 6.607 0 0 0 3.547-.7 8.3 8.3 0 0 0 3.229-3.264 18.914 18.914 0 0 0 1.771-3.954c-1.411.33-2.779.822-4.078 1.465a8.312 8.312 0 0 0-3.499 2.971 6.631 6.631 0 0 0-.97 3.482M531.787 65.167a6.63 6.63 0 0 1-2.417-2.69 8.304 8.304 0 0 1-.626-4.548c.157-1.44.477-2.858.956-4.226.93 1.11 1.73 2.325 2.383 3.618a8.307 8.307 0 0 1 1.018 4.48 6.635 6.635 0 0 1-1.314 3.366M536.93 53.385a6.572 6.572 0 0 0 3.285-1.447 8.242 8.242 0 0 0 2.423-3.859c.448-1.366.737-2.78.862-4.212a18.778 18.778 0 0 0-3.634 2.3 8.231 8.231 0 0 0-2.749 3.634 6.574 6.574 0 0 0-.187 3.584M535.121 53.198a6.572 6.572 0 0 1-2.923-2.083 8.249 8.249 0 0 1-1.588-4.271 18.8 18.8 0 0 1 .013-4.301 18.855 18.855 0 0 1 3.091 2.99 8.238 8.238 0 0 1 1.952 4.117 6.576 6.576 0 0 1-.545 3.548M537.242 40.738a5.959 5.959 0 0 0 2.625-1.923 7.469 7.469 0 0 0 1.391-3.889 17.064 17.064 0 0 0-.06-3.899 17.045 17.045 0 0 0-2.766 2.747 7.476 7.476 0 0 0-1.724 3.753 5.968 5.968 0 0 0 .534 3.21M535.603 40.925a5.96 5.96 0 0 1-2.995-1.273 7.495 7.495 0 0 1-2.24-3.47 17.078 17.078 0 0 1-.828-3.81 17.042 17.042 0 0 1 3.32 2.045 7.469 7.469 0 0 1 2.533 3.262 5.958 5.958 0 0 1 .21 3.246M535.164 29.66a5.512 5.512 0 0 0 2.015-2.24 6.925 6.925 0 0 0 .522-3.788c-.13-1.2-.397-2.383-.795-3.523a15.811 15.811 0 0 0-1.987 3.013 6.918 6.918 0 0 0-.849 3.73 5.522 5.522 0 0 0 1.094 2.808M533.716 30.143a5.52 5.52 0 0 1-2.955-.586 6.912 6.912 0 0 1-2.69-2.72 15.78 15.78 0 0 1-1.475-3.294c1.176.276 2.316.686 3.398 1.221a6.93 6.93 0 0 1 2.914 2.476c.533.874.812 1.879.808 2.903M530.867 19.37a5.303 5.303 0 0 0 1.56-2.437 6.65 6.65 0 0 0-.097-3.673 15.17 15.17 0 0 0-1.303-3.215 15.179 15.179 0 0 0-1.412 3.168 6.643 6.643 0 0 0-.223 3.668c.251.95.762 1.813 1.475 2.49M529.568 20.054a5.3 5.3 0 0 1-2.893-.093 6.647 6.647 0 0 1-2.973-2.16 15.183 15.183 0 0 1-1.913-2.893c1.157.079 2.302.29 3.411.628a6.657 6.657 0 0 1 3.15 1.893 5.302 5.302 0 0 1 1.218 2.625M525.031 10.286a5.04 5.04 0 0 0 1.01-2.557 6.329 6.329 0 0 0-.759-3.408 14.48 14.48 0 0 0-1.802-2.758 14.436 14.436 0 0 0-.741 3.21 6.319 6.319 0 0 0 .462 3.46 5.027 5.027 0 0 0 1.83 2.053M523.945 11.16a5.04 5.04 0 0 1-2.716.44 6.304 6.304 0 0 1-3.167-1.471 14.41 14.41 0 0 1-2.311-2.349 14.35 14.35 0 0 1 3.296-.036 6.312 6.312 0 0 1 3.282 1.19 5.026 5.026 0 0 1 1.616 2.225M518.936 4.955a4.684 4.684 0 0 1-2.548-.236 5.876 5.876 0 0 1-2.51-2.062A13.424 13.424 0 0 1 512.342 0c1.017.13 2.016.378 2.977.735a5.878 5.878 0 0 1 2.679 1.838c.528.691.853 1.516.938 2.382"
                    ></path>
                    <path
                      fill="#111827"
                      d="m495.739 97.703 1.268-.296a45.053 45.053 0 0 0 3.584-1.007 50.977 50.977 0 0 0 25.533-18.388 54.416 54.416 0 0 0 5.368-9.059 55.406 55.406 0 0 0 3.618-10.242 56.898 56.898 0 0 0 1.113-21.231 54.53 54.53 0 0 0-5.676-17.655 55.294 55.294 0 0 0-7.418-10.838 50.395 50.395 0 0 0-2.523-2.687l-.93-.915-.108.112.92.918c.6.6 1.461 1.502 2.492 2.7a54.936 54.936 0 0 1 7.3 10.848 54.148 54.148 0 0 1 5.499 17.574 56.36 56.36 0 0 1-1.268 21.024 54.825 54.825 0 0 1-3.651 10.091 53.88 53.88 0 0 1-5.366 8.895 50.06 50.06 0 0 1-28.723 18.821l-1.271.285z"
                    ></path>
                    <defs>
                      <clipPath id="trust_badge_svg__a">
                        <path fill="#fff" d="M72 31.852h110v34H72z"></path>
                      </clipPath>
                      <clipPath id="trust_badge_svg__b">
                        <path fill="#fff" d="M222 31.352h80v35h-80z"></path>
                      </clipPath>
                      <clipPath id="trust_badge_svg__c">
                        <path fill="#fff" d="M342 31.352h130v35H342z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what's included */}
      <div className="bg-[rgb(255,252,240)] py-20">
        <div className="mx-auto flex max-w-[74rem] flex-col items-center">
          <h1 className="text-2xl font-semibold text-[rgb(17,24,39)]">
            So, what’s included?
          </h1>
          <div className="grid columns-2 grid-cols-2 gap-8 pt-8">
            {Array.from(new Array(6)).map((v, k) => (
              <div key={k} className="flex w-[21rem] gap-4">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/images/bean_in_heart.webp"}
                  key={v}
                />
                <div>
                  <h1 className="mb-1 font-bold text-[rgb(17,24,39)]">
                    28+ self-paced lessons
                  </h1>
                  <p className="text-[0.875rem] leading-5 tracking-tight text-[rgb(17,24,39)]">
                    developed by professional behavioral therapists.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* plan */}
      <div id="plan" ref={planRef}>
        <Plan />
      </div>
      {/* often ask us */}
      <div className="bg-[rgb(229,249,248)] py-10">
        <div className="mx-auto flex max-w-[48rem] flex-col items-center">
          <h1 className="mb-8 text-[2rem] font-semibold leading-10 text-[rgb(17,24,39)]">
            People often ask us
          </h1>
          <div className="flex flex-col gap-2">
            <Collapse
              title="What is Bamboo?"
              content="Sensa is a mobile app designed to help people fight against multiple
          mental health issues, find their inner peace, and calm their mind. App
          content is crafted by behavioral psychologists and you can choose to
          follow the plan for 1, 3, or 6 months, depending on how you feel.
          You'll be able to access the plan and content through the Sensa mobile
          app – available on both iOS and Android."
            />
            <Collapse
              title="What is Bamboo?"
              content="Sensa is a mobile app designed to help people fight against multiple
          mental health issues, find their inner peace, and calm their mind. App
          content is crafted by behavioral psychologists and you can choose to
          follow the plan for 1, 3, or 6 months, depending on how you feel.
          You'll be able to access the plan and content through the Sensa mobile
          app – available on both iOS and Android."
            />
            <Collapse
              title="What is Bamboo?"
              content="Sensa is a mobile app designed to help people fight against multiple
          mental health issues, find their inner peace, and calm their mind. App
          content is crafted by behavioral psychologists and you can choose to
          follow the plan for 1, 3, or 6 months, depending on how you feel.
          You'll be able to access the plan and content through the Sensa mobile
          app – available on both iOS and Android."
            />
            <Collapse
              title="What is Bamboo?"
              content="Sensa is a mobile app designed to help people fight against multiple
          mental health issues, find their inner peace, and calm their mind. App
          content is crafted by behavioral psychologists and you can choose to
          follow the plan for 1, 3, or 6 months, depending on how you feel.
          You'll be able to access the plan and content through the Sensa mobile
          app – available on both iOS and Android."
            />
            <Collapse
              title="What is Bamboo?"
              content="Sensa is a mobile app designed to help people fight against multiple
          mental health issues, find their inner peace, and calm their mind. App
          content is crafted by behavioral psychologists and you can choose to
          follow the plan for 1, 3, or 6 months, depending on how you feel.
          You'll be able to access the plan and content through the Sensa mobile
          app – available on both iOS and Android."
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto mt-4 max-w-[74rem] px-8 text-center">
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

export default Checkout;
