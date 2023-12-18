import React from "react";
import Logo from "./Logo/Logo";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import MenuForDesktop from "./Menu/MenuForDesktop";
import MenuForHandsets from "./Menu/MenuForHandsets";

const Nav = () => {
  return (
    <nav className="h-[65px] sticky shadow left-0 top-0 bg-white z-40">
      <div className="max-w-[74rem] px-8 py-3 mx-auto flex justify-between items-center ">
        <Logo />
        <div className="flex">
          <MenuForDesktop />
          <LanguageSwitcher />
          <MenuForHandsets />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
