"use client"
import React, { useState } from "react";
import men from "../public/assets/images/men.jpg";
import myImage from "../public/assets/images/MyImage.png";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [introLink, setIntroLink] = useState("https://www.youtube.com/embed/CwsjN7fBmc4?si=tu0s000DboLtVmrS");
  return (
    <div>
      <div className="md:px-20 px-5 pt-5 shadow pb-1 sm:px-0 bg-white">
        <div className="flex md:flex-row flex-col justify-around items-center h-full px-5">
          <div className="flex items-center flex-col justify-center py-10">
            <p className="text-blue-600 text-center rounded-xl bg-blue-100 p-1 px-5 w-fit py-2 font-semibold">
              K.Narayanaraj <br/> B.Tech - Computer Science Engineering
            </p>
            <h1 className="font-bold text-black md:text-5xl text-3xl text-center lg:w-[450px] sm:w-[100%] py-3">
              Career Objective 
            </h1>
            <p className="text-gray-400 text-center text-lg md:w-[500px] w-[80%] py-2">
              Experienced Technical lead with over 15 years of expertise in software development, system architecture, and project management. Seeking a leadership role to leverage my technical acumen, problem-solving skills, and strategic vision to foster innovation, mentor teams, and drive the successful execution of cutting-edge projects.
            </p>

            <div className="flex items-center justify-evenly md:justify-center md:w-[400px] lg:w-[90%] sm:w-[100%] py-2">
              <div className="flex justify-between px-2 items-center mr-2  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <button
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center text-white"
                >
                  Watch video
                </button>
                <svg
                  className="w-8 h-8  bg-blue-800 text-white rounded-full p-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                  onClick={() => setIsOpen(true)}
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
              <p
                onClick={() => setIsOpen(true)}
                className="cursor-pointer text-blue-900 border-b-2 mx -1 border-blue-900 "
              >
                An Intro on me..
              </p>
            </div>
          </div>
          <div>
            <Image
              src={men}
              className="md:h-[493px] h-full mt-10 md:mt-0  md:w-[350px] w-full   "
              alt=""
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 w-full h-full  flex justify-center items-center">
          <div className="relative bg-white rounded-lg shadow border-gray-200 border-2 ">
            <MdClose
              onClick={() => setIsOpen(!isOpen)}
              className="absolute text-red-600 right-2 top-1  cursor-pointer text-3xl"
            />
            <div className="flex items-center justify-between px-2 pt-10 py-5 md:px-5  border-b rounded-t ">
              <iframe
                className="rounded-md w-[370px] h-[250px] md:w-[500px] md:h-[350px]"
                src={introLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
