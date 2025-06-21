import React from "react";
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img
          src="../hostinger-waitlist/public/Assets/Logo.svg"
          alt="logo"
        ></img>
        <button className="bg-gradient-to-r from-orange-500 to bg-red-500 text-xs text-white py-1.5 px-2.5 rounded-2xl">
          Hostinger is Hiring
        </button>
      </div>
      <ul className="hidden lg:flex items-center justify-center gap-6 text-gray-400 font-lato">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hostinger</a>
        </li>
      </ul>
      <div className="hidden lg:flex items-center justify-center gap-6 font-lato">
        <a href="#">Sign In</a>
        <button className="rounded-md px-4 py-1 text-amber-300 bg-blue-400 hover:bg-amber-500 hover:text-white">
          Join Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars></FaBars>
      </div>
    </div>
  );
};

export default header;
