"use client";

import React from "react";
import Image from "next/image"; // Import the Image component from next/image

// Define a type for the items within the menuHeader prop
type MenuHeaderItem = {
  img: string;
};

// Define the prop type for the component
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
        marginLeft: "auto", // Centering the div horizontally in its parent
        marginRight: "auto", // Centering the div horizontally in its parent
        position: "relative", // Required for Image component with layout="fill"
        width: "40%", // Use full container width
        maxWidth: "700px", // Set a maximum width to maintain design consistency
        height: "auto", // Adjust as necessary
      }}
    >
      {/* Next/Image component with appropriate properties */}
      <Image
        src={img}
        alt="Menu Header"
        layout="responsive" // Responsive layout to maintain aspect ratio
        width={700} // Provide specific dimensions for optimization
        height={400} // Adjust these dimensions based on your actual needs
        objectFit="contain" // Ensures the image scales to fit within its element
      />
    </div>
  );
};

export default MenuHeader;
