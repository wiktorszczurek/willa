import React from "react";
import Menu from "@/components/Menu";
import Section from "@/components/Section";
import Section2 from "@/components/Section2";
import BeerSection from "@/components/BeerSection";
import RestaurantMenuHeader from "@/components/RestaurantMenuHeader";

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
  faClipboard,
  faBookOpen,
  faStar,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const menuItems = [
    { icon: faCalendarAlt, text: "Sezonówka", sectionId: "sezonSection" },

    { icon: faUtensils, text: "Przystawki", sectionId: "appetizersSection" },
    { icon: faLeaf, text: "Sałatki", sectionId: "saladsSection" },
    { icon: faUtensilSpoon, text: "Zupy", sectionId: "soupsSection" },
    { icon: faFish, text: "Ryby", sectionId: "fishSection" },
    { icon: faHamburger, text: "Burgery", sectionId: "burgersSection" },
    { icon: faDrumstickBite, text: "Mięsa", sectionId: "meatSection" },
    { icon: faIceCream, text: "Desery", sectionId: "dessertsSection" },
    { icon: faPizzaSlice, text: "Proziaki", sectionId: "proziakSection" },

    { icon: faCoffee, text: "Kawa", sectionId: "coffeeSection" },
    { icon: faMugHot, text: "Herbata", sectionId: "teaSection" },
    { icon: faBottleWater, text: "Napoje", sectionId: "drinksSection" },
    { icon: faBeer, text: "Piwo", sectionId: "beerSection" },
    { icon: faWineGlassAlt, text: "Wino", sectionId: "wineSection" },
    { icon: faCocktail, text: "Drinki", sectionId: "cocktailsSection" },
    { icon: faGlassMartiniAlt, text: "Alkohole", sectionId: "alcoholSection" },
  ];

  const menuHeader = [{ img: "/img-menu/NapisMenu2.png" }];

  const sezon = [
    {
      name: "Sałatka",
      description:
        "Wybór sałat / rabarbar / truskawka / ser owczy / orzechy ziemne / grzanka",
      price: "33 zł",
    },
    {
      name: "Danie Główne",
      description:
        "Wędzona Szynka z Kamionki / rabarbar / ogórek kiszony / majonez / sorgo czerwone",
      price: "48 zł",
    },
    {
      name: "Deser",
      description: "Rabarbar / tartaletka / parfait / mus różany",
      price: "29 zł",
    },
    {
      name: "Proziak",
      description:
        "Rabarbar / kwaśna śmietana / cukier trzcinowy / napój migdałowy",
      price: "32 zł",
    },
    {
      name: "Drink",
      description: "Rabarbar / truskawki / rum / cytryna / 7up",
      price: "26 zł",
    },
    {
      name: "Winno Blanc z Winnicy Amelie",
      description: "Kieliszek / Butelka",
      price: "27 zł / 150 zł",
    },
    {
      name: "Soki Świeżo Wyciskane",
      description: "Pomarańcza, grejpfrut, mix",
      price: "20 zł",
    },
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
        "maślanka / czosnek confit / brusznica / chips z boczku / edamame / grzyby shimeji",
      price: "34 zł",
      isVegetarian: true,
    },
    {
      name: "Powędzany tatar z polskiej polędwicy wołowej",
      description: "kapary / żółtko suszone / majonez wasabi / pikle",
      add: "*Podawany z Podpłomykiem  z zatarem",
      price: "48 zł",
      star: "*Rekomendowany alkohol - Ostoya Czarna 9 zł",
      isGlutenFree: true,
    },
  ];

  const salads = [
    {
      name: "Pierś z kurczaka w curry",
      description:
        "mini sałata rzymska / pomidorki cherry / słonecznik / cukinia / chorizo / chipotle",
      price: "37 zł",
      add: "*Podawana z Podpłomykiem z zatarem",
      isGlutenFree: true,
    },
    {
      name: "Seler confit z płynnym oscypkiem",
      description:
        "liście sałat / awokado / orzech włoski / jabłko / żurawina / sos aioli",
      price: "35 zł",
      add: "*Podawana z Podpłomykiem z zatarem",
      isVegetarian: true,
    },
    {
      name: "Podwędzana pierś z kaczki",
      description:
        "wybór sałat / granat / burak / orzech nerkowca / ser brie / chałka / wiśnia",
      price: "42 zł",
      isGlutenFree: true,
    },
  ];

  const soups = [
    {
      name: "Rosół z pieczonej wołowiny i kury z limonią i imbirem",
      description: "makaron domowy / lubczyk / por confit",
      price: "27 zł",
    },
    {
      name: "Barszcz czerwony kiszony na wędzonce",
      description:
        "pieczony boczek / ziemniak / jajko przepiórcze / Crème fraîche / ser rubin",
      price: "27 zł",
      isGlutenFree: true,
    },
    {
      name: "Kremowy żurek z karczochami",
      description: "biała kiełbasa / hummus z czarnym czosnkiem / kurka",
      add: "*Opcja wegańska z kaszą jęczmienną",
      price: "27 zł",
      star: "*Rekomendowany alkohol - Gin Wasabi 16 zł",
      isVegetarian: true,
    },
  ];

  const fish = [
    {
      name: "Sandacz z sosem beurre blanc",
      description: "kuskus perłowy / młode warzywa / blanszowany szpinak",
      price: "58 zł",
      star: "*Rekomendowany alkohol - Cuvee Blanc, wino białe wytrawne z Winnicy Gródek 27 zł",
    },
    {
      name: "Pieczony Pstrąg z gospodarstwa Pstrągowa Dolina z masłem szałwiowym",
      description:
        "kluski kładzione / groszek / wędzona słonina / grzyby shimeji",
      price: "58 zł",
    },
  ];

  const burgers = [
    {
      name: "Burger z polskiej wołowiny z frytkami",
      description:
        "bułka ciemna lub jasna z dodatkiem ziemniaków / roszponka / korniszon / boczek podegrodzki / jajko sadzone / ser cheddar / pomidor / pieczarka / nasz sos z chipotle",
      price: "53 zł",

      add: "*opcja wegetariańska: kotlet z kaszy bulgur, cieciorki, kalafiora i szalotki",

      isVegetarian: true,
    },
    {
      name: "Maczanka Willi Poprad",
      description:
        "wołowina / bułka bawarska / sałata rzymska / czerwona cebula / boczniki / rozmaryn / konfitura z suski sechlońskiej / sos chrzanowy",
      price: "52 zł",
    },
  ];

  const meats = [
    {
      name: "Pierś z kurczaka",
      description:
        "makaron / suszone pomidory / pieczarka / żółtawe pesto / boczek / ser bursztyn",
      price: "44 zł",
    },
    {
      name: "Kotlet schabowy",
      description:
        "ziemniaki / masło / koperek / kapusta kiszona z chrzanicy / sos kimchi",
      price: "46 zł",
    },
    {
      name: "Comber z królika",
      description: "soczewica / marchewka / kalafior / edamame / sos polski",
      price: "55 zł",
      star: "*Rekomendowany alkohol - Cuvee Rouge, wino czerwone wytrawne z Winnicy Gródek 27 zł",
    },
    {
      name: "Policzki wieprzowe",
      description:
        "kaszanka / moskol / jabłko / seler / musztarda francuska / kapary",
      price: "49 zł",
      star: "*Rekomendowany alkohol - wódka Okowita ziemniaczana 13 zł",
    },
    {
      name: "Kurczak kukurydziany baby",
      description:
        "risotto słonecznikowe / ser szafir / szparagi / sos szafranowy",
      price: "57 zł",
      isGlutenFree: true,
    },
    {
      name: "Żeberko wieprzowe marynowane w sosie BBQ i limoniach",
      description:
        "kapusta włoska / kapusta czerwona / rzodkiewka / papryka zielona / chipotle / ziemniaki / czosnek niedźwiedzi",
      price: "58 zł",
      star: "*Rekomendowany alkohol - Piwo Relaks 16 zł",
    },
    {
      name: "Pierś z kaczki w teriyaki i sezamie",
      description:
        "kopytka / jabłko / ser lazure / pietruszka / palona biała czekolada / malina",
      price: "63 zł",
    },
    {
      name: "Ragoût z dzika z sosem z ciemnego piwa",
      description: "placki z kaszy / karmelizowany burak / bryndza",
      price: "64 zł",
    },
    {
      name: "Polędwica wołowa 250g",
      description:
        "croissant ziemniaczany / pasternak / kurka / brukselka / sos koniakowo-pieprzowy",
      price: "99 zł",
      star: "*Rekomendowany alkohol - Rondo, wino czerwone wytrawne z Winnicy Chodorowa 24 zł",
    },
    {
      name: "Stek z kością Porterhouse 500g",
      description:
        "Dodatki w cenie: ziemniak w aromacie dymnym / kukurydza / jarmuż / sos chimichurri",
      price: "155 zł",
    },
    {
      name: "Antrykot premium 300g",
      description:
        "Dodatki w cenie: ziemniak w aromacie dymnym / kukurydza / jarmuż / sos chimichurri",
      price: "135 zł",
    },
  ];
  const proziak = [
    {
      descUp:
        "Placek 30cm z mąki pszenno-żytniej z dodatkiem maślanki wywodzący się z kuchni Lachów Sądeckich",
      descUp2:
        "Zasmakuj prostej kuchni naszych dziadków w nowoczesnym i smacznym wydaniu Szefa Kuchni",
      name: "Sól morska, rozmaryn, chili, oliwa",
      price: "27 zł",
    },
    {
      name: "Bundz, pomidor, pesto bazyliowe",
      price: "30 zł",
    },
    {
      name: "Chorizo, por, ogórek kiszony, czosnek, jalapeño",
      price: "33 zł",
    },
    {
      name: "Mascarpone, oscypek, suska sechlońska, boczek dojrzewający",
      price: "35 zł",
    },
    {
      name: "Kindziuk, bryndza sądecka, pomidorki cherry, rukola",
      price: "36 zł",
    },
    {
      name: "Pstrąg wędzony, kapary, suszone marynowane pomidory, rukola",
      price: "37 zł",
    },
    {
      name: "Bundz, oscypek, bryndza sądecka, ser kozi, pesto z rosponki",
      price: "38 zł",
      add: "*Proziak od 3 do 7 - dodatek mozzarelli i sosu pomidorowego",
      star: "*Możliwość wyboru Proziaka Lachowskiego bez glutenu",
    },
  ];

  const desserts = [
    {
      name: "Beza z kremem migdałowym",
      description: "porzeczka czarna / rozmaryn / rokitnik",
      price: "30 zł",
    },
    {
      name: "Kremowy sernik",
      description: "brusznica / orzech włoski / limonka / ciastko cygaretowe",
      price: "30 zł",
      star: "*Rekomendowany alkohol - Solaris, wino białe półsłodkie z Winnicy Amelie 27 zł",
    },
    {
      name: "Crème brûlée",
      description: "mascarpone / malina / słona pistacja",
      price: "33 zł",
      star: "*Rekomendowany alkohol - Bumbu Oryginal 9 zł",
      isGlutenFree: true,
    },
    {
      name: "Assiette z jabłka od Potonców",
      description: "karmel / wanilia / cynamon / czekolada / kokos / mięta",
      price: "30 zł",
    },
  ];

  const coffee = [
    { name: "Espresso", price: "12 zł" },
    { name: "Podwójne Espresso", price: "15 zł" },
    { name: "Espresso macchiato", price: "13 zł" },
    { name: "Kawa czarna", price: "13 zł" },
    { name: "Cappuccino", price: "14 zł" },
    { name: "Americano", price: "15 zł" },
    { name: "Latte macchiato", price: "16 zł" },
    { name: "Flat white", price: "16 zł" },
    { name: "Latte macchiato smakowe", price: "19 zł" },
    { name: "Mokka (espresso, czekolada, mleko)", price: "20 zł" },
    { name: "Irish Coffee", price: "25 zł", star: "*mleko roślinne - 2 zł" },
  ];

  const tea = [
    {
      name: "English Breakfast",
      description: "250ml / 500ml",
      price: "9 zł / 13 zł",
    },
    {
      name: "Earl Grey Classic / Royal",
      description: "250ml / 500ml",
      price: "9 zł / 13 zł",
    },
    {
      name: "Sencha Select / Senpai",
      description: "250ml / 500ml",
      price: "9 zł / 13 zł",
    },
    { name: "Jasmine Ting Yuan", description: "500ml", price: "13 zł" },
    { name: "Fine Jasmine", description: "250ml", price: "9 zł" },
    {
      name: "Rooibos Vanilla / Vanilla Toffie",
      description: "250ml / 500ml",
      price: "9 zł / 13 zł",
    },
    { name: "Wild Berries", description: "250ml", price: "9 zł" },
    { name: "Persischer Apfel", description: "500ml", price: "13 zł" },
    { name: "Pure Peppermint", description: "250ml", price: "9 zł" },
  ];

  const drinks = [
    {
      name: "Woda mineralna Piwniczanka: Wysokonasycona, średnionasycona i niskonasycona",
      description: "0,3l",
      price: "7 zł",
    },
    {
      name: "Soki Tymbark 100%: pomarańcza, jabłko",
      description: "0,2l",
      price: "8 zł",
    },
    {
      name: "Nektar Tymbark: czarna porzeczka",
      description: "0,2l",
      price: "8 zł",
    },
    {
      name: "Napoje soft: Pepsi, Pepsi Max, 7UP, Mirinda, Tonic",
      description: "0,2l",
      price: "9 zł",
    },
    { name: "Napój Lipton", description: "0,2l", price: "8 zł" },
    {
      name: "Napój energetyczny RED BULL",
      description: "0,25l",
      price: "15 zł",
    },
    { name: "Lemoniada", description: "0,25l", price: "13 zł" },
    { name: "Karafka wody", description: "1l", price: "10 zł" },
    { name: "Karafka soku", description: "1l", price: "20 zł" },
    { name: "Karafka lemoniady", description: "1l", price: "35 zł" },
  ];

  const beer = [
    {
      name: "Piwo lane",
      items: [
        {
          name: "Czeski Budweiser Budvar",
          description: "0,5l / 0,3l",
          price: "16 zł / 11 zł",
        },
        {
          name: "Czeski Budweiser Budvar (bezalkoholowe)",
          description: "0,5l / 0,3l",
          price: "16 zł / 11 zł",
        },
      ],
    },
    {
      name: "Piwo butelkowe",
      items: [
        { name: "Piwo Relaks", description: "0,5l", price: "16 zł" },
        {
          name: "Czeski Primator pszeniczne",
          description: "0,5l",
          price: "16 zł",
        },
        {
          name: "Czeski Primator ciemne",
          description: "0,5l",
          price: "16 zł",
        },
        { name: "Heineken", description: "0,5l", price: "13 zł" },
        { name: "Desperados", description: "0,4l", price: "13 zł" },
      ],
    },
    {
      name: "Piwo bezalkoholowe",
      items: [
        { name: "Warka Radler", description: "0,5l", price: "11 zł" },
        { name: "Desperados", description: "0,4l", price: "13 zł" },
        { name: "Heineken", description: "0,5l", price: "12 zł" },
      ],
    },
  ];

  const wine = [
    {
      name: "Wina Domowe",
      items: [
        {
          name: "Białe (półwytrawne)",
          description: "125ml / Karafka 0,75l",
          price: "20 zł / 60 zł",
        },
        {
          name: "Czerwone (półwytrawne, słodkie)",
          description: "125ml / Karafka 0,75l",
          price: "20 zł / 60 zł",
        },
        {
          name: "Prosecco",
          description: "125ml / Karafka 0,75l",
          price: "22 zł / 74 zł",
        },
      ],
    },
    {
      name: "Wino Bezalkoholowe",
      items: [
        {
          name: "Vi-no ze-ro",
          description: "125ml / Butelka 0,75l",
          price: "18 zł / 80 zł",
        },
      ],
    },
    {
      name: "Wina Polskie Regionalne",
      items: [
        {
          nameWinnica: "Winnica Chodorowa",
          add: "Położona w sercu Ziemi Sądeckiej, pośród wzgórz Pogórza Rożnowskiego, na Szlaku Architektury Drewnianej. Winnica powraca do staropolskiej tradycji winiarskiej, tworząc wina najwyższej jakości i wyjątkowej świeżości. O dostępność poszczególnych win pytać kelnera.",

          name: "Czerwone wytrawne - Rondo",

          description: "125ml / Butelka 0,75l",
          price: "24 zł / 140zł",
        },
        {
          name: "Białe wytrawne - Johanniter",

          description: "125ml / Butelka 0,75l",
          price: "24 zł / 140zł",
        },
        {
          name: "Białe półwytrawne - Jutrzenka",

          description: "125ml / Butelka 0,75l",
          price: "24 zł / 140zł",
        },
        {
          name: "Różowe półwytrawne - Rondo Rose",

          description: "125ml / Butelka 0,75l",
          price: "24 zł / 140zł",
        },
        {
          name: "Białe słodkie - Hibernal",

          description: "125ml / Butelka 0,5l",
          price: "23 zł / 115zł",
        },
        {
          nameWinnica: "Winnica Gródek",
          add: "To, co wyróżnia Winnicę Gródek to wyjątkowe położenie. Południowo - zachodnie zbocza obsadzone winnymi krzewami bezpośrednio schodzą do Jeziora Rożnowskiego. W tej części Doliny Dunajca panują unikalne warunki mikroklimatyczne, które sprzyjają uprawie winorośli.",

          name: "Czerwone wytrawne - Cuvée Rouge",

          description: "125ml / Butelka 0,75l",
          price: "27 zł / 150zł",
        },
        {
          name: "Białe wytrawne - Cuvée Blanc",

          description: "125ml / Butelka 0,5l",
          price: "27 zł / 150zł",
        },
        {
          name: "Białe półwytrawne - Solaris",

          description: "125ml / Butelka 0,5l",
          price: "27 zł / 150zł",
        },
        {
          nameWinnica: "Winnica Amelie",
          add: "Amelie założyli w 2010 roku bracia: Grzegorz i Wojciech Pachotowie. Początkowo było to kilkadziesiąt krzaków. W 2015 posadzony pierwszy hektar, obecnie winorośl rośnie na powierzchni 6 hektarów w kilku lokalizacjach, czyniąc producenta jednym z większych w tym regionie.",

          name: "Białe wytrawne - Blanc",

          description: "125ml / Butelka 0,75l",
          price: "27 zł / 150zł",
        },
        {
          name: "Białe półsłodkie - Solaris",

          description: "125ml / Butelka 0,5l",
          price: "27 zł / 150zł",
        },
      ],
    },
    {
      name: "Wina",
      items: [
        {
          name: "Czerwone wytrawne - Tezza Vapolicella Corte Majoli",
          description: "Butelka 0,75l",
          price: "195 zł",
        },
        {
          name: "Białe wytrawne - Abbotts - Chardonnay Pays D'oc",
          description: "Butelka 0,75l",
          price: "215 zł",
        },
      ],
    },
    {
      name: "Szampan",
      items: [
        {
          name: "Mumm grand cordon - biały wytrawny",
          description: "Butelka 0,75l",
          price: "360 zł",
        },
        {
          name: "Mumm grand cordon ice extra - biały półsłodki",
          description: "Butelka 0,75l",
          price: "380 zł",
        },
      ],
    },
  ];

  const cocktails = [
    {
      name: "Aperol Spritz",
      description: "Prosecco, Aperol, woda gazowana, pomarańcza",
      price: "21 zł",
    },
    {
      name: "Tom Collins Mango",
      description: "Gin, sok z cytryny, syrop mango, woda gazowana",
      price: "23 zł",
    },
    {
      name: "Mohito",
      description: "Rum, cukier trzcinowy, limonka, mięta",
      price: "25 zł",
    },
    {
      name: "Whisky Sour",
      description:
        "Whisky, syrop cukrowy, angostura, białko jaja kurzego, sok z cytryny",
      price: "26 zł",
    },
    {
      name: "Ekstrawaganz",
      description:
        "Wódka, malibu, likier blue curacao, sok pomarańczowy, grenadine",
      price: "28 zł",
    },
    {
      name: "Espresso Martini Creme",
      description: "Wódka, espresso, kahlua, bambu crème",
      price: "29 zł",
    },
    {
      name: "Porn Star Martini",
      description:
        "Wódka, puree z marakui, syrop waniliowy, prosecco, sok z limonki, passoa",
      price: "29 zł",
    },
    {
      name: "Twoje Życzenie",
      description: "Powiedz barmanowi na co masz ochotę",
      price: "30 zł",
    },
    {
      name: "Drink Bezkalkoholowy",
      description: "Sok mango, pomarańcza, sok z cytryny, syrop truskawkowy",
      price: "20 zł",
    },
  ];

  const alcohol = [
    {
      name: "Wódki czyste",
      items: [
        {
          name: "Ostoya",
          description: "40ml / 0,5l",
          price: "15 zł / 135 zł",
        },
        {
          name: "Ostoya Czarna",
          description: "40ml / 0,7l",
          price: "17 zł / 205 zł",
        },
        {
          name: "Wyborowa",
          description: "40ml / 0,5l",
          price: "13 zł / 115 zł",
        },
        {
          name: "Wyborowa Exquisite",
          description: "40ml / 0,7l",
          price: "23 zł / 325 zł",
        },
        {
          name: "GW Wasabi",
          description: "40ml / 0,7l",
          price: "30 zł / 400 zł",
        },
        {
          name: "Ziemniaczana Okowita",
          description: "40ml / 0,7l",
          price: "25 zł / 300 zł",
        },
      ],
    },
    {
      name: "Whiskey",
      items: [
        {
          name: "Wild Turkey 81",
          description: "40ml / 0,7l",
          price: "16 zł / 205 zł",
        },
        {
          name: "Bulleit Rye",
          description: "40ml / 0,7l",
          price: "18 zł / 235 zł",
        },
        {
          name: "Jameson",
          description: "40ml / 0,7l",
          price: "17 zł / 235 zł",
        },
        {
          name: "Gentleman Jack",
          description: "40ml / 0,7l",
          price: "19 zł / 260 zł",
        },
        {
          name: "Jameson Black Barrel",
          description: "40ml / 0,7l",
          price: "22 zł / 315 zł",
        },
        {
          name: "Woodford Reserve",
          description: "40ml / 0,7l",
          price: "24 zł / 350 zł",
        },
        {
          name: "Redbreast",
          description: "40ml / 0,7l",
          price: "31 zł / 415 zł",
        },
      ],
    },
    {
      name: "Whisky",
      items: [
        {
          name: "Chivas 12",
          description: "40ml / 0,7l",
          price: "20 zł / 270 zł",
        },
        {
          name: "Chivas 15",
          description: "40ml / 0,7l",
          price: "26 zł / 370 zł",
        },
        {
          name: "Chivas 18",
          description: "40ml / 0,7l",
          price: "25 zł / 370 zł",
        },
        {
          name: "Aberlour 12",
          description: "40ml / 0,7l",
          price: "32 zł / 470 zł",
        },
        {
          name: "Monkey Shoulder",
          description: "40ml / 0,7l",
          price: "26 zł / 370 zł",
        },
        {
          name: "The Glenlivet 12YO",
          description: "40ml / 0,7l",
          price: "25 zł / 380 zł",
        },
        {
          name: "The Glenlivet 15YO",
          description: "40ml / 0,7l",
          price: "34 zł / 465 zł",
        },
      ],
    },
    {
      name: "Koniak",
      items: [
        {
          name: "Hennessy VS",
          description: "40ml / 0,7l",
          price: "30 zł / 395 zł",
        },
        {
          name: "Martell VSOP",
          description: "40ml / 0,7l",
          price: "29 zł / 385 zł",
        },
      ],
    },
    {
      name: "Rum",
      items: [
        {
          name: "Havana Club 3",
          description: "40ml",
          price: "18 zł",
        },
        {
          name: "Havana Club Especial",
          description: "40ml",
          price: "19 zł",
        },
        {
          name: "Havana Club 7",
          description: "40ml",
          price: "20 zł",
        },
        {
          name: "Bumbu: XO, Oryginal, Creme",
          description: "40ml",
          price: "19 zł",
        },
      ],
    },
    {
      name: "Tequila",
      items: [
        {
          name: "Olmeca Altos Plata",
          description: "40ml",
          price: "20 zł",
        },
        {
          name: "Olmeca Altos Reposado",
          description: "40ml",
          price: "21 zł",
        },
      ],
    },
    {
      name: "Gin",
      items: [
        {
          name: "Beefeater",
          description: "40ml",
          price: "18 zł",
        },
        {
          name: "Beefeater Orange",
          description: "40ml",
          price: "19 zł",
        },
        { name: "Monkey 47", description: "40ml", price: "34 zł" },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <RestaurantMenuHeader
        imageUrl="/img-restauracja/Menu.jpg"
        overlayImageUrl="/img-menu/NapisMenu3.png"
      />

      <Menu items={menuItems} />

      <Section
        id="sezonSection"
        title="Menu Sezonowe - RABARBAR"
        items={sezon}
      />

      <Section id="appetizersSection" title="PRZYSTAWKI" items={appetizers} />

      <Section id="saladsSection" title="Sałatki" items={salads} />

      <Section id="soupsSection" title="Zupy" items={soups} />

      <Section id="fishSection" title="Ryby" items={fish} />

      <Section id="burgersSection" title="Burgery" items={burgers} />

      <Section id="meatSection" title="Mięsa" items={meats} />

      <Section id="dessertsSection" title="Desery" items={desserts} />

      <Section2
        id="proziakSection"
        title="LACHOWSKIE PROZIAKI"
        items={proziak}
      />

      <Section id="coffeeSection" title="Kawa Mauro" items={coffee} />

      <Section id="teaSection" title="Herbata Althaus" items={tea} />

      <Section id="drinksSection" title="Napoje" items={drinks} />

      <BeerSection id="beerSection" title="" categories={beer} />

      <BeerSection id="wineSection" title="" categories={wine} />

      <Section id="cocktailsSection" title="Drinki" items={cocktails} />

      <BeerSection id="alcoholSection" title="" categories={alcohol} />
    </div>
  );
};
export default Page;
