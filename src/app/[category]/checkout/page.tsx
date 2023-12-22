"use client";
import Button from "@/components/Button/Button";
import Logo from "@/components/Nav/Logo/Logo";
import React from "react";

const Checkout = () => {
  return (
    <div>
      <nav className="max-w-[74rem] mx-auto h-[65px] sticky z-40 flex justify-between px-8 items-center">
        <Logo />
        <Button
          height={"1.5rem"}
          enable
          content="Claim my plan"
          onClick={() => {}}
        />
      </nav>
    </div>
  );
};

export default Checkout;
