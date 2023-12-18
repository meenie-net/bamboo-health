"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const MenuForHandsets = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="hidden max_55:flex items-center cursor-pointer relative w-[1.75rem]">
      <Icon
        icon="mdi:menu"
        fontSize={28}
        className={`transition-all absolute left-0 ${
          show ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        onClick={() => setShow(true)}
      />
      <Icon
        icon="mdi:close"
        fontSize={24}
        className={`transition-all absolute left-0 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShow(false)}
      />
      <div
        className={`w-[100vw] h-[calc(100vh-65px)] flex justify-start fixed top-[65px] left-0 ${
          show ? "visible" : "invisible"
        }`}
      >
        <div
          className={`h-full flex-auto transition-all bg-black ${
            show ? "opacity-10" : "opacity-0"
          }`}
          onClick={() => setShow(false)}
        ></div>
        <div
          className={`h-full transition-all duration-300 bg-white ${
            show ? "w-[22rem] max_22d5:w-full" : "w-0"
          }`}
        >
          <div className="p-8">
            <div className="flex flex-col">
              <Link href={"/about"}>About</Link>
              <Link href={"/features"}>App Features</Link>
              <Link href={"/employers"}>For Employers</Link>
              <Link href={"/blog"}>Blog</Link>
            </div>
            <div className="flex flex-col">
              <Link href={"/subscription"}>My Subscription</Link>
              <Link href={"/policy"}>Privacy Policy</Link>
              <Link href={"/contacts"}>Contacts</Link>
              <Link href={"/terms"}>Terms & Conditions</Link>
              <Link href={"/help"}>Help Center</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuForHandsets;
