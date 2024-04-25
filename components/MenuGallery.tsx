"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuModal from "@/components/MenuModal";

interface MenuImage {
  img: string;
  title: string;
}

interface MenuGalleryProps {
  menuImages: MenuImage[];
}

const MenuGallery: React.FC<MenuGalleryProps> = ({ menuImages }) => {
  const [selectedMenuImageIndex, setSelectedMenuImageIndex] = useState<
    number | null
  >(null);

  if (!menuImages.length) {
    console.log("No images to display.");
    return null;
  }

  const openModal = () => {
    setSelectedMenuImageIndex(0);
  };

  const closeModal = () => {
    setSelectedMenuImageIndex(null);
  };

  const selectImage = (index: number) => {
    setSelectedMenuImageIndex(index);
  };

  const goToNextImage = () => {
    setSelectedMenuImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % menuImages.length : null
    );
  };

  const goToPreviousImage = () => {
    setSelectedMenuImageIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex - 1 + menuImages.length) % menuImages.length
        : null
    );
  };

  return (
    <div className="flex justify-center flex-wrap gap-5 p-4">
      <div
        className="w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/3 p-1 cursor-pointer relative"
        onClick={openModal}
      >
        <div className="w-full h-auto relative border border-gray-100 rounded-lg overflow-hidden">
          {menuImages[0] ? (
            <Image
              src={menuImages[0].img}
              alt={menuImages[0].title}
              layout="fill"
              objectFit="cover"
              unoptimized={true}
              className="transition-transform duration-300 hover:scale-101 opacity-80"
            />
          ) : (
            <p>No image found at index 0.</p>
          )}
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-customYellow p-2 rounded-lg">
            <p className="text-white text-3xl font-josefin text-center"></p>
          </div>
        </div>
      </div>
      {selectedMenuImageIndex !== null && (
        <MenuModal
          image={menuImages[selectedMenuImageIndex].img}
          images={menuImages.map((item) => item.img)}
          onImageSelect={selectImage}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrevious={goToPreviousImage}
        />
      )}
    </div>
  );
};

export default MenuGallery;
