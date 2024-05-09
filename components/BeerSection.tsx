"use client";

import React from "react";
import Image from "next/image";

interface Item {
  nameWinnica?: string;
  add?: string;
  name: string;
  description: string;
  price: string;
}

interface Category {
  name: string;
  items: Item[];
}

interface BeerSectionProps {
  id: string;
  title: string;
  categories: Category[];
}

const BeerSection: React.FC<BeerSectionProps> = ({ id, title, categories }) => {
  return (
    <div
      id={id}
      className="section-container my-8 font-josefin shadow-md border border-gray-100 rounded-lg p-6"
    >
      <h2 className="text-2xl font-sm mb-4 text-center text-customYellow">
        {title}
      </h2>
      {categories.map((category, index) => (
        <div key={index} className="category-container my-4">
          <div className="mx-4 border-b border-customYellow mb-5">
            <div className="flex items-center justify-center">
              <h3 className="text-2xl font-sm mx-4 text-center text-customYellow uppercase">
                {category.name}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {category.items.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded mb-4">
                <h4 className="text-2xl font-sm mb-0 mt-3 text-center text-customYellow">
                  {item.nameWinnica}
                </h4>
                <p className="font-sm text-sm mb-4 text-center text-gray-400">
                  {item.add}
                </p>

                <h4 className="text-lg font-sm mb-2 text-center text-customYellow">
                  {item.name}
                </h4>
                <p className="text-gray-700 text-center">{item.description}</p>
                <p className="font-sm text-center text-customYellow m-1">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeerSection;
