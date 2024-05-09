import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar bg-white text-customBlue font-josefin flex items-center justify-between px-5 mt-2 text-sm">
      <div className="contact-links flex items-center space-x-4">
        <a
          href="tel:+184400211"
          className="phone-link flex items-center transition-transform duration-300 hover:scale-105"
        >
          <FaPhoneAlt className="mr-1" style={{ marginBottom: "0.3rem" }} /> 18
          440 02 11
        </a>
        <a
          href="mailto:biuro@willapoprad.com"
          className="email-link flex items-center transition-transform duration-300 hover:scale-105"
        >
          <FaEnvelope className="mr-1" style={{ marginBottom: "0.3rem" }} />{" "}
          biuro@willapoprad.com
        </a>
        <div className="map-link">
      <a
  href="https://maps.google.com/?q=Willa+Poprad"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-end transition-transform duration-300 hover:scale-105"
>
  <FaMapMarkerAlt className="mr-1" style={{ marginBottom: "0.3rem" }} />{" "}
  Jak dojechać?
</a>

      </div>
      </div>
      <div className="map-link-mobile">
      <a
  href="https://maps.google.com/?q=Willa+Poprad"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-end transition-transform duration-300 hover:scale-105"
>
  <FaMapMarkerAlt className="mr-1" style={{ marginBottom: "0.3rem" }} />{" "}
  Jak dojechać?
</a>

      </div>

      <div className="social-links flex items-center space-x-4">
        <a
          href="https://www.facebook.com/willapoprad"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/willa_poprad/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
