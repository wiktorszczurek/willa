import React from "react";

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
      />
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
      {/* Caption image */}
      <img
        src={captionSrc}
        alt="Caption"
        style={{
          zIndex: 2,
          maxWidth: "80%",
          maxHeight: "80%",
          position: "relative",
        }}
      />
    </div>
  );
};

export default Photo;
