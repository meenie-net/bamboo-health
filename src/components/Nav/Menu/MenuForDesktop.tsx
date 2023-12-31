import Link from "next/link";
import React from "react";

const MenuForDesktop = () => {
  return (
    <div className="gap-8 items-center max_55:hidden flex text-xs">
      <Link href={"/about"}>About</Link>
      <Link href={"/features"}>App Features</Link>
      <Link href={"/employers"}>For Employers</Link>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};

export default MenuForDesktop;
