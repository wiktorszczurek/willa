"use client";

import Image from "next/image"; // Importing Next.js Image component

interface PhotoProps {
  src: string;
  captionSrc: string; // New prop for the image source
}

const Photo: React.FC<PhotoProps> = ({ src, captionSrc }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: "20px",
        marginBottom: "20px",
        overflow: "hidden", 
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${src})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
        className="background"
      />
      {/* Media query for mobile devices */}
      <style jsx>{`
        @media (max-width: 768px) {
          .background {
            background-attachment: scroll; // Change to scroll on mobile devices
          }
        }
      `}</style>
      {/* Darkening overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></div>
      {/* Caption image using Next.js Image component */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "80%", // Width for Image container
          height: "80%", // Height for Image container
        }}
      >
        <Image
          src={captionSrc}
          alt="Caption"
          layout="fill" // Makes the Image component fill the parent container
          objectFit="contain" // Similar to css's max-width/max-height but for Next.js Image
        />
      </div>
    </div>
  );
};

export default Photo;
