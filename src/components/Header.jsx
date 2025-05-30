import React from "react";
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="..\Assets\Logo.svg" alt="logo"></img>
        <button className="bg-gradient-to-r from-orange-500 to bg-red-500 text-xs text-white py-1.5 px-2.5 rounded-2xl">
          Hostinger is Hiring
        </button>
      </div>
      <div>
        <FaBars></FaBars>
      </div>
    </div>
  );
};

export default header;
