import React from "react";
import Carousel from "@/components/Carousel";

import ThumbnailLinks from "@/components/ThumbnailMainPage";
const ScrollButton = dynamic(() => import("@/components/ScrollButton"), {
  ssr: false,
});
import dynamic from "next/dynamic";

import Photo from "@/components/Photo";

const images = [
  "/img-carousel/Carousel2.jpg",
  "/img-carousel/Carousel1.jpg",
  "/img-carousel/Carousel4.jpg",
  "/img-carousel/Carousel5.jpg",
  "/img-carousel/Carousel8.jpg",
  "/img-carousel/Carousel7.jpg",
];

const thumbnails = [
  {
    img: "/thumbnail-page/restauracja.jpg",
    label: "RESTAURACJA",
    href: "/restauracja",
    caption:
      "Nasze komfortowe siedziska i aromatyczna kawa tworzą niepowtarzalną atmosferę, zachęcając do dłuższego relaksu i rozmów w naszej restauracji.",
  },
  {
    img: "/thumbnail-page/wesela.jpg",
    label: "WESELA",
    href: "/wesela",
    caption:
      "Ślub to jeden z najważniejszych dni w Twoim życiu. Pozwól, aby był wyjątkowy i na długo zapadł w pamięci gości.",
  },
  {
    img: "/thumbnail-page/klub.jpg",
    label: "KLUB",
    href: "/klub",
    caption:
      "Klub Rytro Retro jest inspirowany stylem dwudziestolecia międzywojennego salonu towarzyskiego. ",
  },
  {
    img: "/thumbnail-page/pokoje.jpg",
    label: "POKOJE",
    href: "/pokoje",
    caption:
      "Willa Poprad oferuje pokoje dwuosobowe z łóżkami małżeńskimi, kilkuosobowe z łóżkami pojedynczymi oraz pokoje rodziny z łóżeczkami dla dzieci.",
  },
];


const Page = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Carousel images={images} />
      <ScrollButton targetId="thumbnailLinks" arrowColor="#00abd7" />
      <div id="thumbnailLinks">
        <ThumbnailLinks thumbnails={thumbnails} />
      </div>
      <Photo src="/mainpic.jpg" captionSrc="/caption2.png" />{" "}
    </div>
  );
};

export default Page;
