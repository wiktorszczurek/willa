"use client";

import React from "react";
import Image from "next/image";

type MenuHeaderItem = {
  img: string;
};

type MenuHeaderProps = {
  menuHeader: MenuHeaderItem[];
};

const MenuHeader: React.FC<MenuHeaderProps> = ({ menuHeader }) => {
  if (!menuHeader || menuHeader.length === 0) return null;

  const { img } = menuHeader[0];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        width: "100px",
        maxWidth: "700px",
        height: "auto",
      }}
    >
      <Image
        src={img}
        alt="Menu Header"
        layout="responsive"
        width={500}
        height={400}
        objectFit="contain"
      />
    </div>
  );
};

export default MenuHeader;
