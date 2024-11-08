import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { TbLetterPSmall, TbSquareRoundedLetterP } from "react-icons/tb";
import Image from "next/image";
import b_1 from "../public/assets/images/blog/b-1.jpg";
import b_2 from "../public/assets/images/blog/b-2.jpg";
import b_3 from "../public/assets/images/blog/b-3.jpg";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-[#0a023a] shadow md:px-10 px-5 py-5 rounded-sm w-full md:m-0 ">
      {/* <div className="flex md:flex-row flex-col justify-between md:items-center mb-5">
        <div className="flex justify-between py-3 md:py-1 w-[300px] text-[#fff]">
          <FaFacebookF className="w-10 h-10 bg-[#3924b170] rounded-full p-2" />
          <FaTwitter className="w-10 h-10 bg-[#3924b170] rounded-full p-2" />
          <FaInstagram className="w-10 h-10 bg-[#3924b170] rounded-full p-2" />
          <TbSquareRoundedLetterP className="w-10 h-10 bg-[#3924b170] rounded-full p-2" />
          <FaYoutube className="w-10 h-10 bg-[#3924b170] rounded-full p-2" />
        </div>
      </div> */}
      <div className="flex md:flex-row flex-col justify-between border-[#7979cf] text-[#a7a7ef]">
        <div className="mt-0 mb-5">
            <h1 className="text-white text-3xl font-bold  py-2">Professional Summary</h1>
            <ul className="list-disc ml-3">
              <li className="py-1 mr-6">Overall 14+ years of experience in development of Web & Enterprise applications.</li>
              <li className="py-1 mr-6">6 + years of experience in react and 2+ years of experience in Next js.</li>
              <li className="py-1 mr-6">Hands on experience in PERN Stack, Next 14, Express, Strapi.</li>
              <li className="py-1 mr-6">Good skill in MySql and Postgres.</li>
              <li className="py-1 mr-6">On-Site Experience in Canada for product installation, configuration and Customer training.</li>
              <li className="py-1 mr-6">Had experience in Agile Methodology and played the role of Product Owner.</li>
            </ul>
        </div>
        <div className="mt-0 mb-5 w-[350px]">
            <h1 className="text-white text-3xl font-bold  py-2">Address</h1>
            <div  className="flex flex-row mt-3">
              <IoLocation className="w-20 h-30"/>
              <div className="pl-2 text-lg">
                <p className="font-bold">Aadinath Aura Apartments</p>
                408, Block 4, 2<sup>nd</sup> Floor, Thazhampoo st, Kattabomman nagar, Pallavaram, Chennai, Tamil Nadu-600043
              </div>
            </div>
        </div>
        <div className="mt-0 mb-5 w-[350px]">
            <h1 className="text-white text-3xl font-bold  py-2">Location</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2176037141467!2d80.15944777531952!3d12.95792308735615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f237e0c32eb%3A0xc16d2647258cf005!2sAadinath%20Aura%20Apartments!5e0!3m2!1sen!2sin!4v1730883812336!5m2!1sen!2sin" 
                width="100%" 
                height="75%" 
                className="border-spacing-0"
                loading="lazy" >

            </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
