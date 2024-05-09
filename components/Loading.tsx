"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingProps {
  src: string;
}

function Loading({ src }: LoadingProps) {
  const [loading, setLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    fetch("jakiesAPIniewiem")
      .then(() => {
        setStartAnimation(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch(() => {
        setStartAnimation(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, []);

  if (!loading) return null;

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    zIndex: 1000,
    animation: startAnimation ? "fadeOutScale 1.5s forwards" : "none",
  };

  return (
    <div style={containerStyle}>
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <Image src={src} alt="Loading" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default Loading;
