import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className=" shadow bg-slate-50 mt-[425px]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src={logo} alt="logo" className="w-9 h-9 object-contain mt-2" />

              <p className="text-logo-100 text-[18px] font-bold  flex gap-2 mt-4 ml-3">
              SECO ENGINEERING 
            <span className="text-[#DC282F]">& CONSULTANT</span>
              </p>

            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="mr-4 hover:underline md:mr-6">
                Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="mr-4 hover:underline md:mr-6 ">
                    Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-700">
            © 2023{" "}
            <a href="/" className="hover:underline">
            Seco Engineering & Consultant
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
