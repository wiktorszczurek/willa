"use client";
import React, { useState } from "react";
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
    setSelectedMenuImageIndex((prevIndex) => {
      if (prevIndex !== null) {
        return (prevIndex + 1) % menuImages.length;
      }
      return null;
    });
  };

  const goToPreviousImage = () => {
    setSelectedMenuImageIndex((prevIndex) => {
      if (prevIndex !== null) {
        return (prevIndex - 1 + menuImages.length) % menuImages.length;
      }
      return null;
    });
  };

  return (
    <div className="flex justify-center flex-wrap gap-5 p-4">
      {/* Change the clickable area to include the entire image and overlay text */}
      <div
        className="w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/3 p-1 cursor-pointer relative"
        onClick={openModal} // Move onClick here to cover the entire div including image and overlay text
      >
        <img
          src={menuImages[0].img}
          alt={menuImages[0].title}
          className="transition-transform bg-black duration-300 opacity-80 hover:scale-101 w-full h-auto object-cover border border-gray-100 rounded-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-customYellow p-2 rounded-lg">
            <p className="text-white text-3xl font-josefin text-center">
              Kliknij, aby zobaczyć pełne menu
            </p>
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
