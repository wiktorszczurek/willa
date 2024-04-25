import React from "react";
import Image from "next/image";

interface IconThumbnailProps {
  src: string;
  label: string;
}

const IconThumbnail: React.FC<IconThumbnailProps> = ({ src, label }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4 text-customYellow font-josefin font-normal">
      <Image
        src={src}
        alt={label}
        width={128}
        height={128}
        className="object-cover"
      />
      <div className="text-sm text-center mt-2 w-full h-16 overflow-hidden">
        {label}
      </div>
    </div>
  );
};

export default IconThumbnail;
