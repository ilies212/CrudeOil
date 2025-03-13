import React from 'react';
import { Ship, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900">
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Ship className="h-8 w-8 md:h-10 md:w-10 text-white" />
              <span className="text-2xl md:text-3xl font-bold text-white ml-2">Beaconsfield</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-white mb-2">Global Energy Trading Excellence</h2>
            <p className="text-sm md:text-base text-gray-300">
              Your trusted partner in global energy trading and pre-financing solutions.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#home" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#articles" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
                  Articles
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center text-sm md:text-base text-gray-300">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" />
                <span>London Office</span>
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-300">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" />
                <span className="break-all">contact@beaconsfieldgrp.com</span>
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-300">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" />
                <span>+44 (0) 20 XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-sm md:text-base text-gray-300">
            © {new Date().getFullYear()} Beaconsfield Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;