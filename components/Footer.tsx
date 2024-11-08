import React from "react";
import { FaAirbnb, FaDiscord } from "react-icons/fa";
import { PiCopyrightDuotone } from "react-icons/pi";

import { GrNorton } from "react-icons/gr";
import { BiWater } from "react-icons/bi";
import { SiDoordash, SiVuedotjs } from "react-icons/si";
const Footer = () => {
  return (
    <div className="m-0">
      <div className="bg-[#0a023a] text-[#b9b9de] md:flex  md:justify-around md:text-sm items-center md:px-1 px-2 md:mt-1 md:m-0 w-full grid grid-cols-1 gap-3  py-3 mt-1">
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <PiCopyrightDuotone className="w-12 h-12 rounded-full p-2" />
            <p className="text-xl font-semibold pl-2">K.Narayanaraj.</p>
            <p className="text-xl font-semibold pl-2"> All rights reserved </p>
        </div>

        {/* <div className="flex justify-center items-center">
          <FaAirbnb className="w-12 h-12 rounded-full p-2" />
          <p className="text-xl font-semibold pl-2">airbnb</p>
        </div>
        <div className="flex justify-center items-center">
          <GrNorton className="w-12 h-12 rounded-full p-2" />
          <p className="text-xl font-semibold pl-2">Norton</p>
        </div>
        <div className="flex justify-center items-center">
          <BiWater className="w-12 h-12 rounded-full p-2" />
          <p className="text-xl font-semibold pl-2">
            <span className="font-light">nature</span>Wave
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
