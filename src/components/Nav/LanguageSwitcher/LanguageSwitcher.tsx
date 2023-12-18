"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { English, Portuguese, Spanish } from "./Flags/Flags";
import { useClickOutside } from "@/hooks/useClickOutside";

type Ilanguages = "English" | "Spanish" | "Portuguese";

const LanguageSwitcher = () => {
  const [show, setShow] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Ilanguages>("English");
  const languageOptionsRef = useRef<HTMLDivElement>(null);

  const languages: {
    [key in Ilanguages]: React.JSX.Element;
  } = {
    English: <English />,
    Spanish: <Spanish />,
    Portuguese: <Portuguese />,
  };
  const handleSelect = (lang: Ilanguages) => {
    setCurrentLanguage(lang);
    setShow(false);
  };

  useClickOutside(languageOptionsRef, () => {
    setShow(false);
  });
  return (
    <div className="relative cursor-pointer mx-6">
      {/* selected */}
      <div
        className="w-[70px] h-[45px] border rounded-xl flex justify-between items-center relative p-2"
        onClick={() => setShow(!show)}
      >
        {languages[currentLanguage]}
        <Icon
          icon="mdi:chevron-down"
          fontSize={24}
          className={`transition-all absolute right-0 ${
            show ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        />
        <Icon
          icon="mdi:chevron-up"
          fontSize={24}
          className={`transition-all absolute right-0 ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      </div>
      {/* options */}
      <div
        className={`absolute top-[50px] left-0 rounded-xl text-sm overflow-hidden transition-all border bg-white z-50 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {Object.entries(languages).map((lang) => {
          const language = lang[0] as Ilanguages;
          return (
            <div
              ref={languageOptionsRef}
              key={lang[0]}
              className={`flex cursor-pointer justify-start items-center gap-2 p-2 text-sm ${
                currentLanguage === lang[0] && "bg-cyan-200"
              }`}
              onClick={() => handleSelect(language)}
            >
              {lang[1]}
              <div>{lang[0]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
