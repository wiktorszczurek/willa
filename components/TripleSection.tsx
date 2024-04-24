"use client";

import React from "react";

const TripleSection = () => {
  return (
    <div className="max-w-custom mx-auto px-4 text-center font-josefin">
      <div className="flex flex-col md:flex-row justify-between items-stretch border-customBlue">
        {/* Pierwsza sekcja */}
        <div className="flex flex-col items-center justify-center flex-1 p-10 border-b md:border-b-0 md:border-r border-customBlue">
          <img
            src="/img-restauracja/1.png"
            alt="Restauracja Willi Poprad - dania"
            className="w-1/2 mb-4 mx-auto"
          />
          Szef Kuchni serwuje autorskie dania w niebanalnym połączeniu produktów
          najwyższej jakości, wiele z nich pochodzi od lokalnych dostawców. W
          karcie restauracji Willi Poprad znajdą się również dania sezonowe.
        </div>

        {/* Druga sekcja */}
        <div className="flex flex-col items-center justify-center flex-1 p-10 border-b md:border-b-0 md:border-r border-customBlue ">
          <img
            src="/img-restauracja/2.png"
            alt="Restauracja Willi Poprad - wnętrze"
            className="w-1/2 mb-4 mx-auto"
          />
          Restauracja Willi Poprad zachwyca swym kameralnym wnętrzem i pysznym
          jedzeniem. Wygodne siedziska i aromatyczna kawa sprawią, że nie
          będziesz chciał opuszczać tego miejsca. Punktowe oświetlenie nadają
          romantyczności, co sprawia, że to idealne miejsce na kolację we dwoje.
          Kuchnia nawiązuje do okresu międzywojnia, a jednocześnie wykorzystuje
          najnowsze trendy kulinarne takie jak sous-vide czy slow food –
          połączenie tradycji i nowoczesności z wykorzystaniem lokalnych smaków.
        </div>

        {/* Trzecia sekcja */}
        <div className="flex flex-col items-center justify-center flex-1 p-10 ">
          <img
            src="/img-restauracja/3.png"
            alt="Restauracja Willi Poprad - atmosfera"
            className="w-1/2 mb-4 mx-auto"
          />
          Celebracja cudownych chwil z najbliższymi – to zapewnia ta
          restauracja. Nowy Sącz obfituje w wiele miejsc, ale tylko w Rytrze
          znajdziecie to wyjątkowe. Rodzinny obiad, kawa i deser z przyjaciółmi,
          romantyczna kolacja – tu życie nabiera smaku! Wyjątkowość naszej
          kuchni jest wynikiem kulinarnej pasji Szefa Kuchni Willi Poprad –
          Artura Pasonia.
        </div>
      </div>
    </div>
  );
};

export default TripleSection;
