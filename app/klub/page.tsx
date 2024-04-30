import React from "react";
import Carousel from "@/components/Carousel";
import ThumbnailLinks from "@/components/Thumbnails";
const ScrollButton = dynamic(() => import("@/components/ScrollButton"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import IconThumbnail from "@/components/IconThumbnail";
import ImageGallery from "@/components/ImageGallery";
import HeaderText from "@/components/HeaderText";
import ContactSection from "@/components/ContactSection";
import DialogFormKlub from "@/components/DialogFormKlub";
import { FaClipboardList } from "react-icons/fa";
const images = [
  "/img-klub/Carousel1.jpg",
  "/img-klub/Carousel2.jpg",
  "/img-klub/Carousel3.jpg",

  "/img-klub/Carousel4.jpg",
];

const thumbnails = [
  {
    img: "/img-klub/PrzyjeciaWeselne.jpg",
    label: "PRZYJĘCIA WESELNE",

    caption: `Elegancka i magiczna atmosfera Klubu 
    stanowi wyjątkowe tło dla ślubnych celebracji w gronie najbliższych.  
    Przestrzeń klubu można zaaranżować w różnorodny sposób, ustawiając okrągłe
     lub prostokątne stoły. Istnieje możliwość wydzielenia przestrzeni dla DJa i parkietu do zabaw. Ponadto klub wyposażony jest w bar.
    `,
  },

  {
    img: "/img-klub/ImprezyOkolicznosciowe.jpg",
    label: "IMPREZY OKOLICZNOŚCIOWE",

    caption: `Klub Rytro Retro jest inspirowany stylem dwudziestolecia międzywojennego salonu towarzyskiego. 
    Elegancka i magiczna przestrzeń jest idealna do celebrowania mniejszych imprez okolicznościowych jak urodziny czy imieniny do 40 osób. 
    `,
  },
  {
    img: "/img-klub/Konferencje.jpg",
    label: "KONFERENCJE",

    caption: `Klub oferuje elastyczne układy przestrzenne, umożliwiając rozmieszczenie prostokątnych lub okrągłych stołów, a także wygodnych loży, 
    które sprzyjają networkingowi i rozmowom. 
    Ponadto istnieje możliwość wynajęcia projektora i ekranu, co ułatwia prezentacje i wystąpienia.
    `,
  },
  {
    img: "/img-klub/Szkolenia.jpg",
    label: "SZKOLENIA",

    caption: `Sala klubowa wyposażona jest w niezależne wejście, osobne toalety, sprzęt multimedialny, dostęp do internetu i idealnie nadaje się na spotkania biznesowe lub szkolenia dla firm. 
    Układ stołów oraz krzeseł dopasowywany do potrzeb. Podczas szkoleń zapewniamy stół kawowy z przekąskami oraz ciepłe dania.`,
  },
];

const galleryImages = [
  { img: "/img-klub/KlubGaleria5.jpg", title: "" },

  { img: "/img-klub/KlubGaleria2.jpg", title: "" },

  { img: "/img-klub/KlubGaleria3.jpg", title: "" },

  { img: "/img-klub/KlubGaleria4.jpg", title: "" },

  { img: "/img-klub/KlubGaleria6.jpg", title: "" },
  { img: "/img-klub/KlubGaleria1.jpg", title: "" },

  { img: "/img-klub/KlubGaleria7.jpg", title: "" },

  { img: "/img-klub/KlubGaleria8.jpg", title: "" },

  { img: "/img-klub/KlubGaleria9.jpg", title: "" },

  { img: "/img-klub/KlubGaleria10.jpg", title: "" },
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
      <ScrollButton targetId="thumbnailLinks" />
      <div id="thumbnailLinks">
        <ThumbnailLinks thumbnails={thumbnails} />
      </div>
      <div>
        <HeaderText color="customYellow" text="KLUB RETRO RYTRO" />
      </div>
      <ImageGallery menuImages={galleryImages} /> {}
      <div className="text-center font-josefin text-black max-w-screen-lg mx-auto px-4 m-5 p-5 text-base leading-normal">
        <p>
          W podziemiu Willi Poprad powstał magiczny klub RYTRO RETRO w którym
          można zorganizować imprezy okolicznościowe, szkolenia lub spotkania
          biznesowe.
        </p>
        <br></br>
        <p>
          Uroczystości - Klub Rytro Retro jest inspirowany stylem
          dwudziestolecia międzywojennego salonu towarzyskiego. Elegancka i
          magiczna przestrzeń jest idealna do celebrowania mniejszych imprez
          okolicznościowych jak urodziny czy imieniny do 40 osób. W klubie jest
          możliwość aranżacji przestrzeni w stoły okrągłe, prostokątne bądź
          komfortowe i dające poczucie intymności loże. Istnieje możliwość
          wydzielenia przestrzeni dla DJa i parkietu do zabaw. Ponadto klub
          wyposażony jest w drink bar.
        </p>
        <br></br>
        <p>
          Szkolenia - Sala klubowa wyposażona jest w niezależne wejście, osobne
          toalety, sprzęt multimedialny, dostęp do internetu i idealnie nadaje
          się na spotkania biznesowe lub szkolenia dla firm. Układ stołów oraz
          krzeseł dopasowywany do potrzeb. Podczas szkoleń zapewniamy stół
          kawowy z przekąskami oraz ciepłe dania.
        </p>
      </div>
      <ContactSection />
      <div className="flex justify-center items-center text-xl font-josefin text-black space-x-4 mb-3 group transform transition-transform duration-300 hover:scale-105">
        <FaClipboardList style={{ marginBottom: "0.3rem" }} color={iconColor} />

        <DialogFormKlub />
      </div>
    </div>
  );
};

export default Page;
