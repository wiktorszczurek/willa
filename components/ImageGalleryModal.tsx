"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface MenuModalProps {
  image: string;
  images: string[];
  onImageSelect: (index: number) => void;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({
  image,
  images,
  onImageSelect,
  onClose,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 p-4">
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="relative max-w-5xl mx-auto">
        <div
          className="flex justify-center items-center overflow-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src={image}
            alt="Menu"
            style={{
              maxHeight: "80vh",
              objectFit: "contain",
              width: "90%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="flex overflow-x-auto py-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`cursor-pointer m-1 ${
              image === img ? "opacity-80 border-2 border-white" : ""
            }`}
            onClick={() => onImageSelect(index)}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        ))}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl"
      >
        &times; {/* Close button */}
      </button>
    </div>
  );
};

export default MenuModal;
