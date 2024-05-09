"use client";

import React, { useState } from "react";
import Image from "next/image";

type RestaurantMenuLinkProps = {
  imageUrl: string;
  linkUrl: string;
  overlayImageUrl: string;
};

const RestaurantMenuLink: React.FC<RestaurantMenuLinkProps> = ({
  imageUrl,
  linkUrl,
  overlayImageUrl,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <a
      href={linkUrl}
      className="relative w-full h-72 block overflow-hidden m-5"
    >
      {" "}
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
    </a>
  );
};

export default RestaurantMenuLink;
