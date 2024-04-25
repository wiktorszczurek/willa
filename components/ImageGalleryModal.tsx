"use client";

import React from "react";
import Image from "next/image"; // Ensure Image is imported
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
          {/* Replace <img> with <Image> */}
          <Image
            src={image}
            alt="Menu"
            layout="fill" // Use "fill" to make the image responsive
            objectFit="contain" // Keeps the aspect ratio of the image
            quality={75} // Optional: Adjust quality of the image
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
          <div
            key={index}
            className="cursor-pointer m-1"
            onClick={() => onImageSelect(index)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={100} // Specify width
              height={100} // Specify height
              objectFit="cover"
              className={`${
                image === img ? "opacity-80 border-2 border-white" : ""
              }`}
            />
          </div>
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
