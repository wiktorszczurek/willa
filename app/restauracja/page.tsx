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
import TripleSection from "@/components/TripleSection";
import Reservation from "@/components/Reservation";
import MenuGallery from "@/components/MenuGallery";
import MenuHeader from "@/components/MenuHeader";

const images = [
  "/img-restauracja/Carousel1.jpg",
  "/img-restauracja/Carousel4.jpg",
  "/img-restauracja/Carousel2.jpg",

  "/img-restauracja/Carousel3.jpg",
];

const thumbnails = [
  {
    img: "/img-restauracja/SlowFood.jpg",
    label: "SLOW FOOD",

    caption: `Slow Food to filozofia kulinarna, która celebruje
    regionalne tradycje, dobre jedzenie, przyjemność z
    jedzenia i trwałe tempo życia. W Willi Poprad
    przyjmujemy te zasady, serwując naszym gościom
    potrawy przygotowywane z miłością, z najświeższych,
    lokalnie pozyskanych składników. Nasze menu
    odzwierciedla bogactwo lokalnej kultury kulinarnej,
    promując produkty z okolicznych gospodarstw, które
    praktykują zrównoważone metody upraw.
    `,
  },

  {
    img: "/img-restauracja/Tradycje.jpg",
    label: "TRADYCJE",

    caption: `W sercu naszej restauracji leży głębokie przekonanie, że
    każde danie ma swoją historię, a autentyczność i regionalne
    smaki są kluczem do prawdziwych kulinarnych przeżyć.
    Duma naszej kuchni opiera się na korzystaniu z bogactwa
    lokalnych tradycji i składników, które czynią nasze potrawy
    niepowtarzalnymi.
    `,
  },
  {
    img: "/img-restauracja/Nowoczesnosc.jpg",
    label: "NOWOCZESNOŚĆ",

    caption: `Nasze podejście do gotowania łączy w sobie sztukę i naukę, wykorzystując najnowsze technologie kulinarnych, aby
    podkreślić naturalne piękno i smak świeżych, sezonowych
    produktów. Od sous-vide po zaawansowane techniki
    fermentacji - każda metoda jest starannie dobierana, by jak najlepiej wydobyć esencję każdego składnika.
    `,
  },
  {
    img: "/img-restauracja/Altana.jpg",
    label: "ALTANA",

    caption: `W Willi Poprad znajdziesz idealne miejsce na letni odpoczynek. Nasza altanka położona jest w urokliwej lokalizacji tuż nad rzeką Poprad, oferując gościom spokój i bezpośredni kontakt z naturą. Przytulne leżaki i przestronny taras zapewniają komfortowy wypoczynek oraz doskonałe warunki do relaksu w cieniu lub na słońcu. To idealne miejsce na ciepłe popołudnia czy romantyczne wieczory z pięknym widokiem na rzekę. Zapraszamy do odwiedzin i cieszenia się każdą chwilą spędzoną w Willi Poprad.`,
  },
];

const galleryImages = [
  { img: "/img-restauracja/RestauracjaGaleria1.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria15.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria2.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria3.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria4.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria5.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria6.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria7.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria8.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria9.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria10.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria11.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria12.jpg", title: "" },
  { img: "/img-restauracja/RestauracjaGaleria14.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria13.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria16.jpg", title: "" },

  { img: "/img-restauracja/RestauracjaGaleria17.jpg", title: "" },
];

const menuImages = [
  { img: "/img-menu/3.png", title: "" },

  { img: "/img-menu/4.png", title: "" },

  { img: "/img-menu/5.png", title: "" },

  { img: "/img-menu/6.png", title: "" },

  { img: "/img-menu/7.png", title: "" },

  { img: "/img-menu/8.png", title: "" },

  { img: "/img-menu/9.png", title: "" },

  { img: "/img-menu/10.png", title: "" },

  { img: "/img-menu/11.png", title: "" },
];
const menuHeader = [{ img: "/img-menu/NapisMenu2.png" }];
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
              <div>
                <HeaderText color="customBlue" text="Tu życie nabiera smaku" />
              </div>
              <TripleSection />
            </div>
          </div>
        </div>
      </div>
      <div id="MenuLink">
        <MenuHeader menuHeader={menuHeader} />
      </div>
      <MenuGallery menuImages={menuImages} /> {}
      <HeaderText color="customYellow" text="RESTAURACJA WILLA POPRAD" />
      <ImageGallery menuImages={galleryImages} /> {}
      <Reservation />
    </div>
  );
};

export default Page;
