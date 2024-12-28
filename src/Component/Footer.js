import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import file from "../utils/file.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 pt-72 font-economy px-5 hs:px-2">
      <div className="container mx-auto px-6">
        {/* Top Section: Branding & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Branding Section */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
            <img src={file} alt="weather logo" className="h-15 w-14 hs:h-11 hs:w-10" />
            <h1 className="text-3xl font-bold">Weatherly</h1>

            </div>
            <p className="text-sm text-gray-400 mt-2">
              Your reliable partner for weather forecasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#about" className="hover:text-white">
              About Us
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Middle Section: Social Media */}
        <div className="flex justify-center md:justify-between items-center mt-8">
          <p className="text-gray-400 text-sm flex items-center gap-1">

            <p>Follow on :</p> <a
              href="https://www.linkedin.com/in/rohit-thapliyal31/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={30}/>
            </a>
          </p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-thapliyal31/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section: Acknowledgment & Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Data provided by <a href="https://open-meteo.com" className="hover:underline">Open-Meteo API</a>
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} Weatherly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
