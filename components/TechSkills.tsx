import React from "react";

import { GiPlayerTime } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { GoContainer } from "react-icons/go";
import { FaTools } from "react-icons/fa";
import { GoVersions } from "react-icons/go";

import {API_URL} from "../lib/dataConstants"

export default async function TechSkills() {

  const icon = {
   "work-experience" : <GiPlayerTime className="w-5 h-5" />,
   "front-end" : <RiComputerFill className="w-5 h-5" />,
   "back-end" : <FaServer className="w-5 h-5" />,
   "database" : <FaDatabase className="w-5 h-5" />,
   "workflow" : <LuWorkflow className="w-5 h-5" />,
   "cloud-technologies" : <FaCloud className="w-5 h-5" />,
   "cicd" : <TbSettingsAutomation className="w-5 h-5" />,
   "container" : <GoContainer className="w-5 h-5" />,
   "tools" : <FaTools className="w-5 h-5" />,
   "vcs" : <GoVersions className="w-5 h-5" />,
  } as any;

  let data = await fetch(`${API_URL}/tech-skills-data`, { next: { revalidate: 3600 } })
  let techSkills = await data.json()

  return (
    <section className="bg-[#3e3b5a] services_sec">
      <div className="py-20">
        <div className=" w-full rounded-sm">
          <div className="w-full items-center flex flex-row justify-center ">
            <h1 className=" font-semibold w-[500px]  text-center text-2xl mb-7 md:text-3xl text-[#fff]">
              Summary on Technical Skills
            </h1>
          </div>
          <div className="px-3 md:px-10 grid md:grid-cols-5 grid-cols-3 gap-y-10 gap-3 md:gap-10">
            {techSkills.map((item:any ,index:number) => {
              return ( <div key={index} className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-4 ">
                  <div className="flex text-white underline" key={index}>
                    {icon[item.icon]}
                    <span className="text-white text-sm md:text-base ml-2">{item.title}</span>
                  </div>
                  <p className="text-white text-base md:text-lg pt-5">{item.description}</p>
                </div>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

