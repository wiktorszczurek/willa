import React from "react";
import Image from "next/image";

const Recommended = () => {
  return (
    <div className="w-full bg-gray-100 h-auto flex justify-around py-5 mt-10">
      <div>
        <Image
          src="/img-footer/Best100.jpg"
          alt="Nagroda 1"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src="/img-footer/Gault.jpg"
          alt="Nagroda 3"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src="/img-footer/Forbes.jpg"
          alt="Nagroda 2"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <div>
        <Image
          src="/img-footer/Tripadvisor.jpg"
          alt="Nagroda 4"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Recommended;
