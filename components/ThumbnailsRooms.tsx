"use client";

import React, { useEffect, useRef, useState } from "react";
import ModalRooms from "@/components/ModalRooms";
import Image from "next/image"; // Ensure Image is imported
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Feature {
  icon: IconDefinition;
  text: string;
}

interface Thumbnail {
  href: string;
  img: string;
  label: string;
  caption: string;
  text: string;
  features: Feature[];
  descriptions?: string[];
}

interface ModalRoomsProps {
  isOpen: boolean;
  onClose: () => void;
  label: string | undefined;
  img: string | undefined;
  text: string | undefined;
  features: Feature[] | undefined;
  descriptions: string[] | undefined;
}

interface ThumbnailsRoomsProps {
  thumbnails: Thumbnail[];
}

const ThumbnailsRooms: React.FC<ThumbnailsRoomsProps> = ({ thumbnails }) => {
  const refs = useRef<Array<React.RefObject<HTMLAnchorElement>>>(
    thumbnails.map(() => React.createRef<HTMLAnchorElement>())
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState<Thumbnail | null>(
    null
  );

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current!.style.opacity = "1";
          ref.current!.classList.add("thumbnail-enter");
        }, index * 250);
      }
    });
  }, [thumbnails]);

  const handleThumbnailClick = (thumbnail: Thumbnail) => {
    setSelectedThumbnail(thumbnail);
    setModalOpen(true);
  };

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
        <a
          key={index}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleThumbnailClick(thumbnail);
          }}
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
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <Image
              src={thumbnail.img}
              alt={thumbnail.label}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-120"
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
        </a>
      ))}
      <ModalRooms
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        label={selectedThumbnail?.label ?? "Default Label"}
        img={selectedThumbnail?.img ?? "default-image.png"}
        text={selectedThumbnail?.text ?? "Default Text"}
        features={selectedThumbnail?.features ?? []}
        descriptions={selectedThumbnail?.descriptions ?? []}
      />
    </div>
  );
};

export default ThumbnailsRooms;
