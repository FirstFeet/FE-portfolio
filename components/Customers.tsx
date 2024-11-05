
'use client'
import React from "react";
import Image from "next/image";
import { LuCircleDot } from "react-icons/lu";
import { AiFillRightSquare } from "react-icons/ai";
import { AiFillLeftSquare } from "react-icons/ai";


import Ratting from "../assets/rating.png";
import c_1 from "../public/assets/images/coustomer/c-1.png";
import c_2 from "../public/assets/images/coustomer/c-2.png";
import c_3 from "../public/assets/images/coustomer/c-3.png";
import Carousel from "react-multi-carousel";
import {responsive,achievments} from "@/lib/dataConstants";


const Customers = () => {
  return (
    <div className="pb-20 shadow container">
      <div className="flex justify-center pt-3">
        <LuCircleDot className="text-[#acaa3ea0] w-12 h-12" />
        <div className="pl-1 flex flex-col justify-center items-center">
          <p className="text-[#d8d46f] text-lg font-semibold">
            Achivements in 
          </p>
          <h1 className="text-4xl font-bold text-black">Career</h1>
        </div>
      </div>
      <div className="w-50 flex px-5 justify-center">
        <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={true}
              showDots={true}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={3000}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="all 1.5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              partialVisible={false}
              itemClass="carousel-item"
              customLeftArrow={
                <AiFillLeftSquare
                  className="absolute top-1/2 left-4 max-w-6 cursor-pointer text-blue-500 text-4xl"
                />
              }
              customRightArrow={
                <AiFillRightSquare
                  className="absolute top-1/2 right-4 max-w-6 cursor-pointer text-blue-500 text-4xl"
                />
              }
            >
              {achievments.map((item, index) => {

                  return (
                    <div
                      key={index}
                      className=" bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center"
                    >
                      <div className="relative">
                        <div className="w-full h-[280px]">
                            <Image
                              className="rounded-t-lg h-full w-full object-cover"
                              src={item.image}
                              alt="Not found"
                            />
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-sm">
                            {item.title}
                        </div>
                        <div className="mb-3 font-normal text-gray-700 my-5 dark:text-gray-400 text-center text-xs pb-5 md:text-sm">
                            {item.description}
                        </div>  
                      </div>
                    </div>
                  )
              })}
        </Carousel>     

        {/* <CarouselComponent items={[
          {title:"First",description:"This is first card. Here are the biggest enterprise technology acquisitions of 2021 order",imageTop:true,image:c_1},
          {title:"Second",description:"This is Second card. Here are the biggest enterprise technology acquisitions of 2021 order",imageTop:true,image:c_3},
          {title:"Third",description:"This is Third card",imageTop:true,image:c_1},
          {title:"Fourth",description:"This is Fourth card",imageTop:true,image:c_2}]}/> */}
        {/* <CarouselComponent items={[{value:"First"},{value:"Second"},{value:"Third"},{value:"Fourth"}]}/> */}
      </div>
      {/* <div className="grid md:grid-cols-3 gap-5 p-5">
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="img" src={Ratting} className="h-24 -mb-7 w-24" />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Preminum quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_1}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Mathhew Taylor
                </p>
                <p className="text-lg text-gray-500 font-normal">Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="img" src={Ratting} className="h-24 -mb-7 w-24 " />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Code Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_2}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Shoko Mugikura
                </p>
                <p className="text-lg text-gray-500 font-normal">Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image alt="noimg" src={Ratting} className="h-24 -mb-7 w-24" />
            <h5 className=" md:text-xl text-bage font-semibold tracking-tight text-gray-900  ">
              Creative evolution
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300  dark:text-gray-400  text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="w-20  h-20 ">
                <Image
                  alt="img"
                  src={c_3}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Jacob Kalling
                </p>
                <p className="text-lg text-gray-500 font-normal">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Customers;
