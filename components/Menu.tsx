"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MenuItemProps {
  icon: IconDefinition;
  text: string;
  sectionId: string;
}

const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
};

const MenuItem = ({ item, index }: { item: MenuItemProps, index: number }) => (
  <div
    onClick={() => smoothScrollToSection(item.sectionId)}
    className="text-gray-500 mx-4 text-center mb-4 relative group cursor-pointer font-josefin"
    style={{
      animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`,
      opacity: 0, // Start invisible
      transform: 'scale(1)', // Ensure consistent scaling
    }}
  >
    <div className="flex flex-col items-center transition-all">
      <FontAwesomeIcon
        icon={item.icon}
        className="text-2xl mb-2 transition-colors duration-500 group-hover:text-customYellow"
      />
      <div className="text-lg transition-colors duration-500 group-hover:text-customYellow hover-line">
        {item.text}
      </div>
    </div>
    <div className="absolute left-0 w-full h-0.5 bg-customYellow origin-left transform scale-x-0 transition-all duration-500 group-hover:scale-x-100"></div>
  </div>
);

interface MenuProps {
  items: MenuItemProps[];
}

const Menu = ({ items }: MenuProps) => (
  <div className="overflow-x-hidden whitespace-nowrap mt-10 font-josefin" style={{ overflowY: 'hidden' }}>
    <div className="flex justify-center flex-wrap">
      {items.map((item, index) => (
        <MenuItem item={item} key={index} index={index} />
      ))}
    </div>
  </div>
);

export default Menu;
