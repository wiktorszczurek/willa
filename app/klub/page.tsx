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

    caption: `Tradycyjny pakiet weselny oferuje bogate menu z zupą,
    wieloporcjowym daniem głównym, przekąskami, sałatkami,
    ciastami, owocami oraz trzema gorącymi daniami
    serwowanymi w trakcie wieczoru, bufetem staropolskim,
    nieograniczoną ilością napojów, tortem weselnym oraz
    słodkim poczęstunkiem dla połowy gości. To kompleksowa
    propozycja, która zapewnia wyjątkową oprawę kulinarą i
    elegancką atmosferę przyjęcia.
    `,
  },

  {
    img: "/img-klub/ImprezyOkolicznosciowe.jpg",
    label: "IMPREZY OKOLICZNOŚCIOWE",

    caption: `Pakiet weselny klasyczny łączy w sobie elegancję i
    różnorodność kulinarną, obejmując przystawkę, zupę,
    wieloporcjowe danie główne z dodatkami, a także wino białe
    i czerwone do obiadu. Uzupełnieniem oferty są przekąski,
    sałatki, ciasta, owoce, trzy dodatkowe dania gorące
    wieczorem, wybór z trzech bufetów, nieograniczone napoje
    oraz tort i słodki poczęstunek dla połowy gości, zapewniając
    kompleksowe doświadczenie kulinarne.
    `,
  },
  {
    img: "/img-klub/Konferencje.jpg",
    label: "KONFERENCJE",

    caption: `Pakiet weselny premium oferuje wyjątkową ucztę kulinarą z przystawką, zupą, wieloporcjowym daniem głównym, wyselekcjonowanymi winami, a także bogatym wyborem
    bufetów: sushi, słonych mono-porcji, staropolskim, gorącym, oraz słodkim z fontanną czekoladową lub barem prosecco. Uzupełnia go nieograniczony wybór napojów, tort weselny oraz słodki poczęstunek dla wybranych gości, gwarantując niezapomniane wrażenia smakowe i elegancję na
    najwyższym poziomie.
    `,
  },
  {
    img: "/img-klub/Szkolenia.jpg",
    label: "SZKOLENIA",

    caption: `Poprawiny to wyjątkowa oferta obejmująca pełen zakres dań: od zupy, przez danie główne z dodatkami i deser, aż po bogaty wybór na bufetach z ciastami, zimnymi przekąskami
    i sałatkami. W ofercie znajduje się również danie gorące
    serwowane oraz danie jednogarnkowe w bufecie, dopełnione
    szeroką gamą napojów zimnych i gorących, co zapewnia
    kontynuację uczty weselnej w przyjemnej, swobodnej atmosferze.`,
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
