"use client";

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaClipboardList } from "react-icons/fa";
import DialogFormRestauracja from "./DialogFormRestauracja";

const iconColor = "#dbaf4a";

const Reservation = () => {
  return (
    <div className="text-center font-josefin text-black max-w-screen-lg mx-auto px-4 p-5 text-xl leading-relaxed">
      <div className="text-2xl ">Rezerwacja stolików</div>
      <div className="border-t-2 border-customYellow m-5"></div>

      <div className="flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105">
        <FaPhoneAlt color={iconColor} />

        <a href="tel:+48501513400">18 440 02 11</a>
      </div>
      <div className="text-2xl mt-7">Skontaktuj się z nami!</div>
      <div className="border-t-2 border-customYellow m-5"></div>
      <div className="flex justify-center items-center space-x-4 mb-2 group transform transition-transform duration-300 hover:scale-105">
        <FaClipboardList style={{ marginBottom: "0.3rem" }} color={iconColor} />

        <DialogFormRestauracja />
      </div>
    </div>
  );
};

export default Reservation;
