"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const MenuForHandsets = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="desktop:hidden phone:flex tablet:flex items-center cursor-pointer relative w-[28px]"
      onClick={() => setShow(!show)}
    >
      <Icon
        icon="mdi:menu"
        fontSize={28}
        className={`transition-all absolute left-0 ${
          show ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      />
      <Icon
        icon="mdi:close"
        fontSize={24}
        className={`transition-all absolute left-0 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </div>
  );
};

export default MenuForHandsets;
