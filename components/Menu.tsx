import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MenuItemProps {
  icon: IconDefinition;
  text: string;
  sectionId: string;
}

interface MenuProps {
  items: MenuItemProps[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap mt-10 font-josefin">
      <div className="flex justify-center flex-wrap">
        {items.map((item, index) => (
          <a
            href={`#${item.sectionId}`}
            key={index}
            className="text-black mx-4 text-center mb-4 relative group"
          >
            <div className="flex flex-col items-center transition-all">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl mb-2 cursor-pointer transition-colors duration-500 group-hover:text-customYellow"
              />
              <div className="text-lg transition-colors duration-500 group-hover:text-customYellow hover-line">
                {item.text}
              </div>
            </div>
            <div className="absolute left-0 w-full h-0.5 bg-customYellow origin-left transform scale-x-0 transition-all duration-500 group-hover:scale-x-100"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
