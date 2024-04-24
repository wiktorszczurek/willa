"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClipboardList,
  FaMapMarkerAlt,
} from "react-icons/fa";

const iconColor = "#dbaf4a";

const ContactSectionKontakt = () => {
  return (
    <div className="text-center font-josefin text-black max-w-screen-lg mx-auto px-4 text-xl leading-relaxed">
      <div className="border-t-2 border-customYellow m-5"></div>
      <div className="flex justify-center items-center space-x-4 mb-2">
        <FaEnvelope color={iconColor} />
        <span>biuro@willapoprad.com</span>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105">
        <FaPhoneAlt color={iconColor} />
        <a href="tel:501513400">501 513 400</a>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105">
        <FaPhoneAlt color={iconColor} />
        <a href="tel:18 440 02 11">18 440 02 11</a>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-2">
        <FaMapMarkerAlt color={iconColor} />
        <span>Rytro 306. Rytro 33-343</span>
      </div>
    </div>
  );
};

export default ContactSectionKontakt;
