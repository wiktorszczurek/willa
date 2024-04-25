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
import DialogFormWesela from "@/components/DialogFormWesela";
import { FaClipboardList } from "react-icons/fa";

const images = [
  "/img-wesela/Carousel1.jpg",
  "/img-wesela/Carousel2.jpg",
  "/img-wesela/Carousel5.jpg",

  "/img-wesela/Carousel3.jpg",
  "/img-wesela/Carousel4.jpg",
];

const thumbnails = [
  {
    img: "/img-wesela/PakietTradycyjny.jpg",
    label: "PAKIET TRADYCYJNY",

    caption: `Tradycyjny pakiet weselny oferuje bogate menu z zupą,
    wieloporcjowym daniem głównym, przekąskami, sałatkami,
    ciastami, owocami oraz trzema gorącymi daniami
    serwowanymi w trakcie wieczoru, bufetem staropolskim,
    nieograniczoną ilością napojów, tortem weselnym oraz
    słodkim poczęstunkiem dla połowy gości. To kompleksowa
    propozycja, która zapewnia wyjątkową oprawę kulinarą i
    elegancką atmosferę przyjęcia.`,
  },

  {
    img: "/img-wesela/PakietKlasyczny.jpg",
    label: "PAKIET KLASYCZNY",

    caption: `Pakiet weselny klasyczny łączy w sobie elegancję i
      różnorodność kulinarną, obejmując przystawkę, zupę,
      wieloporcjowe danie główne z dodatkami, a także wino białe
      i czerwone do obiadu. Uzupełnieniem oferty są przekąski,
      sałatki, ciasta, owoce, trzy dodatkowe dania gorące
      wieczorem, wybór z trzech bufetów, nieograniczone napoje
      oraz tort i słodki poczęstunek dla połowy gości, zapewniając
      kompleksowe doświadczenie kulinarne.`,
  },
  {
    img: "/img-wesela/PakietPremium.jpg",
    label: "PAKIET PREMIUM",

    caption: `Pakiet weselny premium oferuje wyjątkową ucztę kulinarą z przystawką, 
    zupą, wieloporcjowym daniem głównym, wyselekcjonowanymi winami, a także bogatym wyborem
      bufetów: sushi, słonych mono-porcji, staropolskim, gorącym, oraz słodkim z fontanną 
      czekoladową lub barem prosecco. Uzupełnia go nieograniczony wybór napojów, tort weselny 
      oraz słodki poczęstunek dla wybranych gości, gwarantując niezapomniane wrażenia smakowe i elegancję na
      najwyższym poziomie.`,
  },
  {
    img: "/img-wesela/Poprawiny.jpg",
    label: "POPRAWINY",

    caption: `Poprawiny to wyjątkowa oferta obejmująca pełen zakres dań: od zupy, 
    przez danie główne z dodatkami i deser, aż po bogaty wybór na bufetach z ciastami, zimnymi przekąskami
      i sałatkami. W ofercie znajduje się również danie gorące
      serwowane oraz danie jednogarnkowe w bufecie, dopełnione
      szeroką gamą napojów zimnych i gorących, co zapewnia
      kontynuację uczty weselnej w przyjemnej, swobodnej atmosferze.`,
  },
];

const icons = [
  { src: "/img-wesela/ikonki/1.png", label: "Koordynacja kierownika sali" },
  { src: "/img-wesela/ikonki/2.png", label: "Stoły okrągłe lub prostokątne" },
  {
    src: "/img-wesela/ikonki/3.png",
    label: "Tradycyjne powitanie chlebem i solą oraz toast winem musującym",
  },
  {
    src: "/img-wesela/ikonki/4.png",
    label: "Zastawa stołowa oraz kompleksowa aranżacja stołów",
  },
  {
    src: "/img-wesela/ikonki/5.png",
    label: "Papeteria: menu weselne, numerystołów, tablica z listą Gości",
  },
  { src: "/img-wesela/ikonki/6.png", label: "Pełna obsługa kelnerska" },
  {
    src: "/img-wesela/ikonki/7.png",
    label: "Nakrycia stołów, obrusy, serwetki",
  },
  {
    src: "/img-wesela/ikonki/8.png",
    label: "Specjalne ceny na pokoje dla Gości weselnych",
  },
  {
    src: "/img-wesela/ikonki/9.png",
    label: "Apartament z sejfem dla Pary Młodej",
  },
  {
    src: "/img-wesela/ikonki/10.png",
    label:
      "Bez limitu napoje zimne typu soft w szklanych butelkach, woda oraz soki w karafkach, kawa iherbata w bufecie kawowym",
  },
  { src: "/img-wesela/ikonki/11.png", label: "Bezpłatny parking dla Gości" },
  {
    src: "/img-wesela/ikonki/12.png",
    label: "Brak opłaty korkowej",
  },
  { src: "/img-wesela/ikonki/13.png", label: "Bezpłatny parking dla Gości" },
  {
    src: "/img-wesela/ikonki/14.png",
    label: "Dekoracje z żywych kwiatów oraz świece",
  },
  {
    src: "/img-wesela/ikonki/15.png",
    label: "Bezpłatne Wi-Fi w całym obiekcie",
  },
  { src: "/img-wesela/ikonki/16.png", label: "Pokój zabaw dla dzieci" },
];

const galleryImages = [
  { img: "/img-wesela/WeselaGaleria1.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria2.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria3.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria4.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria5.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria7.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria8.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria9.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria17.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria11.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria12.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria13.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria14.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria15.jpg", title: "" },

  { img: "/img-wesela/WeselaGaleria16.jpg", title: "" },
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
      <div style={{}}>
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          <div>
            <HeaderText
              color="customYellow"
              text="Cena wszystkich pakietów zawiera"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {icons.map((icon) => (
              <IconThumbnail key={icon.src} src={icon.src} label={icon.label} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <HeaderText color="customYellow" text="WESELA W WILLI POPRAD" />
      </div>
      <ImageGallery menuImages={galleryImages} /> {}
      <div className="text-center font-josefin text-black max-w-screen-lg mx-auto px-4 m-5 p-5 text-base leading-normal">
        <p>
          Ślub to jeden z najważniejszych dni w Twoim życiu. Pozwól, aby był
          wyjątkowy i na długo zapadł w pamięci Gości.
        </p>
        <p>
          Wykwalifikowany personel zorganizuje dla Ciebie wymarzone wesele. Nowy
          Sącz i cała dolina Popradu to doskonała sceneria dla celebracji tego
          wyjątkowego dnia. Malownicze położenie to zaledwie jeden z atutów
          jakim może poszczycić się nasz dom weselny.
        </p>
        <p>
          Zapraszamy na spotkanie, na którym zapoznamy Cię z naszą ofertą i
          opowiemy o możliwościach jakie stwarza Willa Poprad.
        </p>
      </div>
      <ContactSection />
      <div className="flex justify-center items-center text-xl font-josefin text-black space-x-4 mb-3 group transform transition-transform duration-300 hover:scale-105">
        <FaClipboardList style={{ marginBottom: "0.3rem" }} color={iconColor} />

        <DialogFormWesela />
      </div>
    </div>
  );
};

export default Page;
