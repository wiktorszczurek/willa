"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  images: string[];
}
import Image from "next/image";
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    };

    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, activeImage]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="carousel-container">No images available</div>;
  }

  return (
    <div className="carousel-container w-full" style={{ height: "60vh" }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full h-full object-cover ${
            index === activeImage ? "image-enter-active" : "image-exit-active"
          }`}
          style={{ position: "absolute" }}
        >
          <Image
            src={image}
            alt={`Slideshow image ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="carousel-controls">
        <button
          onClick={() =>
            setActiveImage(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() =>
            setActiveImage((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === activeImage ? "active" : ""}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
