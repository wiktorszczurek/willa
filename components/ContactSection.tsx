"use client";

import React from "react";
import DialogFormKlub from "./DialogFormKlub";
import { FaEnvelope, FaPhoneAlt, FaClipboardList } from "react-icons/fa";

const iconColor = "#dbaf4a";

const ContactSection = () => {
  return (
    <div className="text-center font-josefin text-black max-w-screen-lg mx-auto px-4  text-xl leading-relaxed">
      <div className="text-2xl ">Potrzebujesz więcej informacji?</div>
      <div className="text-2xl ">Skontaktuj się z nami!</div>
      <div className="border-t-2 border-customYellow m-5"></div>

      <div className="flex justify-center items-center space-x-4 mb-2">
        <FaEnvelope color={iconColor} />
        <span>biuro@willapoprad.com</span>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105">
        <FaPhoneAlt color={iconColor} />

        <a href="tel:+48501513400">501 513 400</a>
      </div>
    </div>
  );
};

export default ContactSection;
