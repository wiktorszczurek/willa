import React from "react";
import Menu from "@/components/Menu";
import Section from "@/components/Section";

import {
  faLeaf,
  faUtensils,
  faUtensilSpoon,
  faFish,
  faHamburger,
  faDrumstickBite,
  faPizzaSlice,
  faIceCream,
  faCoffee,
  faMugHot,
  faBottleWater,
  faBeer,
  faWineGlassAlt,
  faCocktail,
  faGlassMartiniAlt,
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const menuItems = [
    { icon: faUtensils, text: "Przystawki", sectionId: "appetizersSection" },
    { icon: faLeaf, text: "Sałatki", sectionId: "saladsSection" },
    { icon: faUtensilSpoon, text: "Zupy", sectionId: "soupsSection" },
    { icon: faFish, text: "Ryby", sectionId: "fishSection" },
    { icon: faHamburger, text: "Burgery", sectionId: "burgersSection" },
    { icon: faDrumstickBite, text: "Mięsa", sectionId: "meatSection" },
    { icon: faPizzaSlice, text: "Proziaki", sectionId: "pizzasSection" },
    { icon: faIceCream, text: "Desery", sectionId: "dessertsSection" },
    { icon: faCoffee, text: "Kawa", sectionId: "coffeeSection" },
    { icon: faMugHot, text: "Herbata", sectionId: "teaSection" },
    { icon: faBottleWater, text: "Napoje", sectionId: "drinksSection" },
    { icon: faBeer, text: "Piwo", sectionId: "beerSection" },
    { icon: faWineGlassAlt, text: "Wino", sectionId: "wineSection" },
    { icon: faCocktail, text: "Drinki", sectionId: "cocktailsSection" },
    { icon: faGlassMartiniAlt, text: "Alkohole", sectionId: "alcoholSection" },
  ];

  const appetizers = [
    {
      name: "Pierożki z jagnięciną",
      description:
        "wędzona kwaśna śmietana / chrust z kaszy gryczanej z czarnuszką / burak / borowik",
      price: "35zł",
    },
    {
      name: "Placek po rytersku z jesiotrem wędzonym",
      description:
        "maślanka czosnek confit / brusznica / chips z boczku / edamame / grzyby shimeji",
      price: "34 zł",
    },
    {
      name: "Powędzany tatar z polskiej polędwicy wołowej",
      description: "kapary / żółtko suszone / majonez wasabi/ pikle",
      price: "48 zł",
    },
  ];

  const salads = [
    { name: "Sałatka 1", description: "Opis sałatki 1", price: "30 zł" },
    { name: "Sałatka 1", description: "Opis sałatki 1", price: "30 zł" },
    { name: "Sałatka 1", description: "Opis sałatki 1", price: "30 zł" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Menu items={menuItems} />

      <Section id="appetizersSection" title="PRZYSTAWKI" items={appetizers} />

      <Section id="saladsSection" title="Sałatki" items={salads} />
    </div>
  );
};
export default Page;
