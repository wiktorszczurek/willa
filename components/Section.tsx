import React from "react";
import Image from "next/image";

// Define the type for each item in the items array
interface Item {
  name?: string;
  description?: string;
  add?: string;
  price: string;
  star?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

// Define the props for the Section component
interface SectionProps {
  id: string;
  title: string;
  items: Item[];
}

const Section: React.FC<SectionProps> = ({ id, title, items }) => {
  return (
    <div
      id={id}
      className="section-container my-8 font-josefin shadow-md border border-gray-100 rounded-lg p-6"
    >
      <div className="mx-4 border-b border-customYellow mb-5">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-sm mx-4 text-center text-customYellow uppercase">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded mb-4">
            <h3 className="text-lg font-sm mb-2 text-center text-customYellow flex items-center justify-center">
              {item.name}
              {item.isVegetarian && (
                <div style={{ marginLeft: "5px" }}>
                  <Image
                    src="/vege.jpg"
                    alt="Vegetarian"
                    width={20}
                    height={20}
                  />
                </div>
              )}
              {item.isGlutenFree && (
                <div style={{ marginLeft: "5px" }}>
                  <Image
                    src="/gluten-free.png"
                    alt="Gluten Free"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </h3>
            <p className="text-gray-700 text-center">{item.description}</p>
            <p className="font-xs text-xs text-center">{item.add}</p>
            <p className="font-sm text-center text-customYellow m-1">
              {item.price}
            </p>
            <p className="font-xs text-xs text-center">{item.star}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
