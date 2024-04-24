"use client";

import React from "react";

const MenuHeader = ({ menuHeader }) => {
  if (!menuHeader || menuHeader.length === 0) return null;

  const { img } = menuHeader[0];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <img
        src={img}
        alt="Menu Header"
        style={{ maxWidth: "35%", height: "auto" }}
      />
    </div>
  );
};

export default MenuHeader;
