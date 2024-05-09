"use client";

import React, { useState } from "react";
import Image from "next/image";

type RestaurantMenuHeaderProps = {
  imageUrl: string;
  overlayImageUrl: string;
};

const RestaurantMenuHeader: React.FC<RestaurantMenuHeaderProps> = ({
  imageUrl,
  overlayImageUrl,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-72 block overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={imageUrl}
          alt="Menu Restauracji"
          layout="fill"
          objectFit="cover"
          quality={100}
          onLoadingComplete={handleImageLoad}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center font-josefin"></div>
      <div
        className="absolute inset-0 flex justify-center items-center"
        style={{ zIndex: 10 }}
      >
        <Image
          src={overlayImageUrl}
          alt="Overlay Image"
          width={120}
          height={120}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default RestaurantMenuHeader;
