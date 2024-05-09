import React from "react";
import Image from "next/image";

interface Item {
  descUp?: string;
  descUp2?: string;
  name?: string;
  price?: string;
  description?: string;
  add?: string;
  star?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

interface Section2Props {
  id: string;
  title: string;
  items: Item[];
  numberColor?: string;
}

const Section2: React.FC<Section2Props> = ({
  id,
  title,
  items,
  numberColor = "text-customYellow",
}) => {
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
          <div key={index} className="bg-white rounded w-full text-center">
            <h4 className="text-base font-sm text-center">{item.descUp}</h4>
            <h4 className="text-base font-sm mb-4 text-center">
              {item.descUp2}
            </h4>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-wrap items-center justify-center">
                <div className="flex items-center flex-1 justify-center">
                  <h3 className="text-base font-sm">
                    <span className={`${numberColor}`}>{index + 1}.</span>{" "}
                    {item.name}
                  </h3>
                </div>
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
              </div>
              <span className="text-lg font-sm text-customYellow whitespace-nowrap">
                {item.price}
              </span>
            </div>
            <p className="text-gray-700 text-center">{item.description}</p>
            <p className="font-xs text-base mt-3 text-center">{item.add}</p>
            <p className="font-xs text-xs text-center">{item.star}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
