"use client";

// ./components/Loader.tsx

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img src="/loading.gif" alt="Loading..." width="200" height="200" />
    </div>
  );
};

export default Loader;
