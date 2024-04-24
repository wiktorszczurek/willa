"use client";

import React from "react";

interface HeaderTextProps {
  color?: "customYellow" | "customBlue";
  text: string;
}

const HeaderText = ({ color = "customYellow", text }: HeaderTextProps) => {
  const textColorClass =
    color === "customBlue" ? "text-customBlue" : "text-customYellow";

  return (
    <div
      className={`font-josefin ${textColorClass} text-center text-4xl p-4 mt-3`}
    >
      {text}
    </div>
  );
};

export default HeaderText;
