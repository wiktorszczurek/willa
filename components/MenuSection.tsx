import React from "react";
import Image from "next/image";

// Define the type for a single menu item
type MenuItem = {
  img: string;
  title: string;
};

// Define the type for the props expected by MenuSection
type MenuSectionProps = {
  menuItems: MenuItem[];
};

const MenuSection = ({ menuItems }: MenuSectionProps) => {
  return (
    <div className="w-full py-12 bg-gray-100 font-josefin">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Nasze Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
