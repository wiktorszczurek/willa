import React from "react";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel";
import ThumbnailsRooms from "@/components/ThumbnailsRooms";
import HeaderText from "@/components/HeaderText";
import ImageGallery from "@/components/ImageGallery";
import ContactSection from "@/components/ContactSection";
import {
  faWifi,
  faCoffee,
  faChild,
  faBed,
  faBaby,
  faUsers,
  faTv,
  faFan,
  faShower,
  faSoap,
  faBath,
  faLock,
  faDoorOpen,
  faUtensils,
  faBottleWater,
  faSpa,
  faHardDrive,
  faWind,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import DialogFormPokoje from "@/components/DialogFormPokoje";
import { FaClipboardList } from "react-icons/fa";

const ScrollButton = dynamic(() => import("@/components/ScrollButton"), {
  ssr: false,
});

const images = [
  "/img-pokoje/Carousel1.jpg",
  "/img-pokoje/Carousel2.jpg",
  "/img-pokoje/Carousel3.jpg",
  "/img-pokoje/Carousel4.jpg",
];

const thumbnails = [
  {
    img: "/img-pokoje/Komfort.jpg",
    label: "POKÓJ KOMFORT",
    caption: "ZOBACZ WIĘCEJ",
    text: `Pokój dwuosobowy, trzyosobowy lub czteroosobowy. Łazienki w pokojach wyposażone są w kabiny prysznicowe, 
    suszarki do włosów, ręczniki oraz kosmetyki hotelowe. Pozostałe udogodnienia obejmują zestaw do parzenia herbaty, wodę butelkowaną, szafę, telewizor, żelazko oraz sejf.
    Pokoje komfort z balkonem od strony rzeki Poprad to pokoje o numerach 102, 103, 104, 105. Pokoje komfort z balkonem od strony drogi to pokoje 108A i 108B.
    `,

    features: [
      { icon: faWifi, text: "WiFi" },
      { icon: faCoffee, text: "Herbata" },
      { icon: faBottleWater, text: "Woda butelkowana" },
      { icon: faTv, text: "TV" },
      { icon: faShower, text: "Prysznic" },
      { icon: faSoap, text: "Kosmetyki" },
      { icon: faWind, text: "Suszarka do włosów" },
      { icon: faSpa, text: "Ręczniki" },
      { icon: faLock, text: "Sejf" },
      { icon: faDoorOpen, text: "Balkon" },
    ],
    descriptions: [
      "-Cena za wynajem pokoju 2 osobowego: 290zł/doba",
      "-Zniżka dla 1 osoby wynajmującej pokój KOMFORT 80zł taniej",
    ],
  },
  {
    img: "/img-pokoje/standard.jpeg",
    label: "POKÓJ STANDARD",
    caption: "ZOBACZ WIĘCEJ",
    text: `Pokój dwuosobowy lub czteroosobowy. Łazienki w pokojach wyposażone są w kabiny prysznicowe, suszarki 
    do włosów, ręczniki oraz kosmetyki hotelowe. Pozostałe udogodnienia obejmują zestaw do parzenia herbaty, wodę butelkowaną, szafę, telewizor, żelazko oraz sejf.
    Pokój standard od strony drogi, bez balkonu, to pokój o numerze 101, pokój standard od strony rzeki Poprad, bez balkonu to pokój o numerze 107. 
    
    `,
    features: [
      { icon: faWifi, text: "WiFi" },
      { icon: faCoffee, text: "Herbata" },
      { icon: faBottleWater, text: "Woda butelkowana" },
      { icon: faTv, text: "TV" },
      { icon: faShower, text: "Prysznic" },
      { icon: faSoap, text: "Kosmetyki" },
      { icon: faWind, text: "Suszarka do włosów" },
      { icon: faSpa, text: "Ręczniki" },
      { icon: faLock, text: "Sejf" },
      { icon: faDoorOpen, text: "Balkon" },
    ],
    descriptions: [
      "-Cena za wynajem pokoju 2 osobowego: 250zł/doba",
      "-Cena za wynajem pokoju 3 osobowego: 360zł/doba",
      "-Zniżka dla 1 osoby wynajmującej pokój STANDARD 60zł taniej",
    ],
  },
  {
    img: "/img-pokoje/ekonomiczny.jpeg",
    label: "POKÓJ EKONOMICZNY",
    caption: "ZOBACZ WIĘCEJ",
    text: `Pokój dwuosobowy. Łazienki w pokojach wyposażone są w kabiny prysznicowe, suszarki do
     włosów, ręczniki oraz kosmetyki hotelowe. Pozostałe udogodnienia obejmują wodę butelkowaną, szafę, telewizor.
    Pokoje ekonomiczne, to pokoje na poddaszu od strony drogi o numerach 201, 202, 203, 204.
    `,
    features: [
      { icon: faWifi, text: "WiFi" },
      { icon: faBottleWater, text: "Woda butelkowana" },
      { icon: faTv, text: "TV" },
      { icon: faShower, text: "Prysznic" },
      { icon: faSoap, text: "Kosmetyki" },
      { icon: faWind, text: "Suszarka do włosów" },
      { icon: faSpa, text: "Ręczniki" },
    ],
    descriptions: [
      "-Cena za wynajem pokoju 2 osobowego: 210zł/doba",
      "-Zniżka dla 1 osoby wynajmującej pokój EKONOMICZNY: 50zł taniej",
      "-Dostawka: 90zł",
      "-Łóżeczko dziecięce: 30zł",
    ],
  },
  {
    img: "/img-pokoje/rodzinny.jpeg",
    label: "POKÓJ RODZINNY",
    caption: "ZOBACZ WIĘCEJ",
    text: `Pokój czteroosobowy lub pięcioosobowy. Łazienki w pokojach wyposażone są w
     kabiny prysznicowe, suszarki do włosów, ręczniki oraz kosmetyki hotelowe. Pozostałe udogodnienia 
     obejmują zestaw do parzenia herbaty, wodę butelkowaną, szafę, telewizor.
    Pokój rodzinny od strony drogi, bez balkonu, to pokój o numerze 106 oraz WIEŻA (pokój dwupoziomowy).
    `,
    features: [
      { icon: faWifi, text: "WiFi" },
      { icon: faCoffee, text: "Herbata" },
      { icon: faBottleWater, text: "Woda butelkowana" },
      { icon: faTv, text: "TV" },
      { icon: faShower, text: "Prysznic" },
      { icon: faSoap, text: "Kosmetyki" },
      { icon: faWind, text: "Suszarka do włosów" },
      { icon: faSpa, text: "Ręczniki" },
    ],
    descriptions: [
      "-Cena za wynajem pokoju 2 osobowego: 250zł/doba",
      "-Cena za wynajem pokoju 3 osobowego: 360zł/doba",
      "-Zniżka dla 1 osoby wynajmującej pokój RODZINNY: 60zł taniej",
      "-Łóżeczko dziecięce: 30zł",
    ],
  },
];
const galleryImages = [
  { img: "/img-pokoje/PokojeGaleria1.jpg", title: "" },

  { img: "/img-pokoje/PokojeGaleria4.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria6.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria7.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria8.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria9.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria10.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria2.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria3.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria11.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria12.jpg", title: "" },
  { img: "/img-pokoje/PokojeGaleria13.jpg", title: "" },
];

const iconColor = "#dbaf4a";
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
      <ScrollButton targetId="thumbnailRooms" />
      <div id="thumbnailRooms">
        <ThumbnailsRooms thumbnails={thumbnails} />
      </div>
      <div>
        <HeaderText color="customYellow" text="POKOJE" />
      </div>
      <ImageGallery menuImages={galleryImages} />
      <ContactSection />
      <div className="flex justify-center items-center text-xl font-josefin text-black space-x-4 mb-3 group transform transition-transform duration-300 hover:scale-105">
        <FaClipboardList style={{ marginBottom: "0.3rem" }} color={iconColor} />

        <DialogFormPokoje />
      </div>
    </div>
  );
};

export default Page;
