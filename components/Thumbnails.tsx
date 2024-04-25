"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Ensure Image is imported

type ThumbnailProps = {
  img: string;
  label: string;
  caption: string;
};

type ThumbnailsProps = {
  thumbnails: ThumbnailProps[];
};

const Thumbnail: React.FC<ThumbnailsProps> = ({ thumbnails }) => {
  const refs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    thumbnails.map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          // Add an additional check here
          if (ref.current) {
            ref.current.style.opacity = "1";
            ref.current.classList.add("thumbnail-enter");
          }
        }, index * 250);
      }
    });
  }, [thumbnails]);

  return (
    <div
      className="thumbnails-container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "0",
        maxWidth: "1920px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
      }}
    >
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          ref={refs.current[index]}
          className="thumbnail-link font-josefin"
          style={{
            margin: "20px",
            textAlign: "center",
            position: "relative",
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textDecoration: "none",
            overflow: "hidden",
            opacity: 0,
            borderRadius: "9px",
          }}
        >
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Image
              src={thumbnail.img}
              alt={thumbnail.label}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-120"
            />
          </div>
          <div
            className="thumbnail-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "10px",
            }}
          >
            <h3
              className="thumbnail-title"
              style={{ margin: "10px 0", fontSize: "1.3em" }}
            >
              {thumbnail.label}
            </h3>
            <p
              className="thumbnail-caption"
              style={{ fontSize: "0.7em", lineHeight: "1.2" }}
            >
              {thumbnail.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
