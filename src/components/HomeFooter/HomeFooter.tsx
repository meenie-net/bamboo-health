import Link from "next/link";
import React from "react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  PinterestIcon,
} from "./LinkIcons/LinkIcons";

const HomeFooter = () => {
  return (
    <div className="max-w-[74rem] mx-auto px-4 py-8 flex max_55:flex-col-reverse gap-4 max_55:gap-6 justify-between items-start">
      <div className="max-w-[32rem] max_55:max-w-none">
        <div className="flex justify-between">
          {/* Logo */}
          <div>Bamboo Health</div>
          {/* links */}
          <div className="hidden max_55:flex flex-row gap-4">
            <Link href={"/help"}>
              <InstagramIcon />
            </Link>
            <Link href={"/help"}>
              <FacebookIcon />
            </Link>
            <Link href={"/help"}>
              <YoutubeIcon />
            </Link>
            <Link href={"/help"}>
              <PinterestIcon />
            </Link>
          </div>
        </div>
        {/* Tips */}
        <div className="text-xs font-light py-6">
          Disclaimer: Results may vary due to individual differences. In
          addition, mental self-help apps like Sensa are not a replacement for
          or a form of therapy, nor are they intended to cure, treat, or
          diagnose medical conditions, including psychiatric conditions. Please
          consult a qualified health care provider for a medical treatment plan.
        </div>
        {/* Copyright */}
        <div className="text-xs font-light">
          © 2023 Sensa. All rights reserved.
        </div>
      </div>
      {/* Menu-Rest */}
      <div className="flex max_55:block gap-4 w-[29rem]">
        <div className="flex flex-row max_55:flex-col flex-wrap text-sm gap-4 font-light">
          <Link href={"/subscription"} className="min-w-[10rem]">
            My Subscription
          </Link>
          <Link href={"/policy"} className="min-w-[10rem]">
            Privacy Policy
          </Link>
          <Link href={"/contacts"} className="min-w-[10rem]">
            Contacts
          </Link>
          <Link href={"/terms"} className="min-w-[10rem]">
            Terms & Conditions
          </Link>
          <Link href={"/help"} className="min-w-[10rem]">
            Help Center
          </Link>
        </div>
        {/* links */}
        <div className="flex max_55:hidden gap-4">
          <Link href={"/help"}>
            <InstagramIcon />
          </Link>
          <Link href={"/help"}>
            <FacebookIcon />
          </Link>
          <Link href={"/help"}>
            <YoutubeIcon />
          </Link>
          <Link href={"/help"}>
            <PinterestIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
