"use client";

import React, { useState } from "react";
import ImageGalleryModalMenu from "@/components/ImageGalleryModalMenu";
import Image from "next/image";

interface MenuImage {
  title: string;
  img: string;
}

interface ImageGalleryProps {
  menuImages: MenuImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ menuImages }) => {
  const [selectedMenuImageIndex, setSelectedMenuImageIndex] = useState<
    number | null
  >(null);

  const openModal = (index: number) => {
    setSelectedMenuImageIndex(index);
  };

  const closeModal = () => {
    setSelectedMenuImageIndex(null);
  };

  const goToNextImage = () => {
    if (selectedMenuImageIndex !== null) {
      setSelectedMenuImageIndex(
        (selectedMenuImageIndex + 1) % menuImages.length
      );
    }
  };

  const goToPreviousImage = () => {
    if (selectedMenuImageIndex !== null) {
      setSelectedMenuImageIndex(
        selectedMenuImageIndex - 1 < 0
          ? menuImages.length - 1
          : selectedMenuImageIndex - 1
      );
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-5 ">
      {menuImages.slice(0, 1).map((item, index) => (
        <div
          key={index}
          className="relative w-full p-1 cursor-pointer"
          onClick={() => openModal(index)}
          style={{
            height: "750px",
            overflow: "hidden",
            fontFamily: "Josefin, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="relative">
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={300}
              className="transition-transform duration-300 hover:scale-101 w-full h-full object-cover border border-gray-100"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0">
              <p className="text-white text-lg font-bold bg-customYellow p-5 opacity-90 rounded-lg">
                Kliknij, aby zobaczyć pełne menu
              </p>
            </div>
          </div>
          <p className="text-white text-lg font-bold ">{item.title}</p>
        </div>
      ))}
      {selectedMenuImageIndex !== null && (
        <ImageGalleryModalMenu
          isOpen={selectedMenuImageIndex !== null}
          images={menuImages}
          selectedIndex={selectedMenuImageIndex}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrevious={goToPreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
