"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaRegWindowClose,
} from "react-icons/fa";
import { TbLetterPSmall, TbSquareRoundedLetterP } from "react-icons/tb";
import logo from "../public/assets/images/logo/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { FaMobile } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Header = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return ( 
    <nav className="bg-white h-[120px] sm:h-[140px] md:h-[180px] w-full flex shadow sticky top-0 z-10 justify-between px-3  py-3 ">
      <Image className="w-24 h-24 md:w-36 sm:w-32 md:h-36 sm:h-32 xl:h-40 xl:w-40 object-contain" src={logo} alt="" />
      <div className="md:flex justify-start items-center hidden">
          <Link className="hover:underline text-blue-500 pr-3" href="/">Home</Link>
          <Link className="hover:underline text-blue-500 pr-3" href="/dashboard">Project Details</Link>
          <Link className="hover:underline text-blue-500" href="/history">Work History</Link>
      </div>
      <div className="flex justify-start sm:mr-5 items-center md:w-1/3">
        <div className="md:flex flex-col hidden justify-center  border-gray-300 h-[1/2] pr-1">
          <div className="flex flex-row py-2">
            <FaMobile className="mr-2 text-blue-900"/>
            <div className="flex flex-col justify-center  pr-1 md:text-sm">
              <p className="font-bold  text-blue-900"><a href="tel:+919445512287">+91 9445512287</a></p>
            </div>
          </div>
          <div className="flex flex-row py-2">
            <IoMdMail className="mr-2  text-blue-900"/>
            <div className="flex flex-col justify-center w-24 pr-1 md:text-sm">
              <p className="font-bold  text-blue-900"><a href="mailto:narayanarajk23@gmail.com">narayanarajk23@gmail.com</a></p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setTogglemenu(!togglemenu)}
          className="block md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-blue-600 p-1 border-blue-600 border  rounded-sm w-8 h-8"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {togglemenu && (
        <div className="bg-white w-full md:w-full md:h-full h-full rounded-md fixed top-0 right-0">
          <div className="p-10">
            <div className="flex justify-between px-2 pt-5">
              <div className="border-b-2 border-blue-500 p3-5 ">
                <Image
                  className="w-24 md:w-36 h-28  object-contain"
                  src={logo}
                  alt=""
                />
              </div>
              <FaRegWindowClose
                className="text-blue-700 w-8 h-8 cursor-pointer"
                onClick={() => setTogglemenu(!togglemenu)}
              />
            </div>
            <div className="py-2 mt-3">
              <p className="text-lg font-bold pt-1 text-black">Navigation</p>
              <ul className=" ml-5 text-base list-disc font-medium py-1 w-[150px] text-gray-500">
                <li className="cursor-pointer" onClick={() => setTogglemenu(!togglemenu)}><Link className="hover:underline text-blue-500" href="/">Home</Link> </li>
                <li className="cursor-pointer" onClick={() => setTogglemenu(!togglemenu)}><Link className="hover:underline text-blue-500" href="/dashboard">Project Details</Link> </li>
                <li className="cursor-pointer" onClick={() => setTogglemenu(!togglemenu)}><Link className="hover:underline text-blue-500" href="/history">Work History</Link> </li>
              </ul>
            </div>
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Mobile Number</p>
              <p className="text-base font-medium py-1 w-[150px] text-gray-500">
                {" "}
                +91 9445512287
              </p>
            </div>
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Email Address</p>
              <p className="text-base font-medium py-1 w-[250px] text-gray-500">
                narayanarajk23@gmail.com
              </p>
            </div>
            {/* <div className="flex justify-between mt-5 w-[85%]   ">
              <FaFacebookF className="w-8 h-8 text-blue-600 rounded-full cursor-pointer" />
              <FaTwitter className="w-8 h-8 text-blue-600 rounded-full cursor-pointer" />
              <FaInstagram className="w-8 h-8 text-blue-600 rounded-full cursor-pointer" />
              <TbSquareRoundedLetterP className="w-8 h-8 text-blue-600 rounded-full cursor-pointer" />
              <FaYoutube className="w-8 h-8 text-blue-600 rounded-full cursor-pointer" />
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
