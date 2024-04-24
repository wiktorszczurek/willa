"use client";
import React from "react";

interface IconThumbnailProps {
  src: string;
  label: string;
}

const IconThumbnail: React.FC<IconThumbnailProps> = ({ src, label }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4 text-customYellow font-josefin font-normal">
      <img src={src} alt={label} className="w-32 h-32 object-cover" />
      <div className="text-sm text-center mt-2 w-full h-16 overflow-hidden">
        {label}
      </div>
    </div>
  );
};

export default IconThumbnail;
