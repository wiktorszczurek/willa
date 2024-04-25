"use client";

import React, { useState } from "react";
import ImageGalleryModal from "@/components/ImageGalleryModal";
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

  const selectImage = (index: number) => {
    setSelectedMenuImageIndex(index);
  };

  const goToNextImage = () => {
    if (selectedMenuImageIndex !== null) {
      setSelectedMenuImageIndex(
        selectedMenuImageIndex + 1 >= menuImages.length
          ? 0
          : selectedMenuImageIndex + 1
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
    <div className="flex justify-center flex-wrap gap-5 p-4">
      {menuImages.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/3 md:w-1/5 lg:w-1/6 p-1"
          onClick={() => openModal(index)}
          style={{ height: "300px", overflow: "hidden" }}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={300}
            className="cursor-pointer transition-transform duration-300 hover:scale-101 w-full h-full object-cover border border-gray-100"
          />
        </div>
      ))}
      {selectedMenuImageIndex !== null && (
        <ImageGalleryModal
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

export default ImageGallery;
