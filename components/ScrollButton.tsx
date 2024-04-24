"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ScrollButtonProps {
  targetId: string;
  arrowColor?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  targetId,
  arrowColor = "#dbaf4a",
}) => {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: arrowColor,
        fontSize: "60px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        marginTop: "20px",
      }}
    >
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  );
};

export default ScrollButton;
