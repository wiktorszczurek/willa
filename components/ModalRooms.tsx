"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Feature {
  icon: IconDefinition;
  text: string;
}

interface ModalRoomsProps {
  isOpen: boolean;
  onClose: () => void;
  label: string | null;
  img: string;
  text: string | null;
  features: Feature[];
  descriptions: string[];
}

const ModalRooms: React.FC<ModalRoomsProps> = ({
  isOpen,
  onClose,
  label,
  img,
  text,
  features,
  descriptions = [],
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimation(true), 1);
    } else {
      setAnimation(false);
    }
  }, [isOpen]);

  if (!isOpen && !animation) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 py-4 font-josefin overflow-y-auto"
      style={{ zIndex: "1000" }}
    >
      <div
        className="bg-white p-5 rounded-lg w-full max-w-4xl space-y-4 relative transition-all duration-500 ease-out transform overflow-y-auto"
        style={{
          opacity: animation ? 1 : 0,
          transform: `scale(${animation ? 1 : 0.95})`,
          maxHeight: "100vh",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-7xl bg-transparent border-none font-extralight"
          style={{ top: "-15px" }}
        >
          &times;
        </button>
        {label && (
          <h2 className="text-center text-2xl font-semibold sm:text-xl">
            {label}
          </h2>
        )}
        <div className="flex justify-center my-2">
          <img
            src={img}
            alt={label ?? ""}
            className="rounded-lg max-w-full h-auto"
            style={{ maxHeight: "30vh" }}
          />
        </div>
        {text && <p className="text-center  text-base sm:text-sm">{text}</p>}
        {descriptions && descriptions.length > 0 && (
          <div className="flex justify-center text-lg text-center sm:text-base">
            <ul>
              {descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center flex-wrap gap-4 m-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-icon flex flex-col items-center text-center" // Dodano klasę 'feature-icon'
              style={{
                animation: `fadeInUp 1s ease forwards ${index * 150}ms`,
                width: "calc(33.333% - 1rem)",
              }}
            >
              <FontAwesomeIcon icon={feature.icon} size="sm" />
              <span className="mt-1">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalRooms;
