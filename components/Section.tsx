import React from "react";

const Section = ({ id, title, items }) => {
  return (
    <div
      id={id}
      className="my-8 font-josefin shadow-md border border-gray-100 rounded-lg p-6"
    >
      <h2 className="text-2xl font-sm mb-4 text-center text-customYellow">
        {title}
      </h2>
      <div className="flex flex-col items-center">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded  mb-4 ">
            <h3 className="text-lg font-sm mb-2  text-center text-customYellow">
              {item.name}
            </h3>
            <p className="text-gray-700 mb-2 text-center">{item.description}</p>
            <p className=" font-sm text-center text-customYellow">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
