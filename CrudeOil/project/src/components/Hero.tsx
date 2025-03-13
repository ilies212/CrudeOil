import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gradient-to-b from-blue-900 to-blue-800 pt-16 md:pt-20 overflow-hidden">
      <div className="absolute inset-0">
        {/* Ocean Animation */}
        <div className="absolute inset-0 bg-blue-800 opacity-30">
          <div className="wave-animation"></div>
        </div>
        
        {/* Ship Animation - Hidden on small screens */}
        <div className="hidden md:block ship-container">
          <div className="ship">
            <div className="ship-body"></div>
            <div className="ship-chimney"></div>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto py-12 md:py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-white text-center md:text-left">
          Empowering Global Energy Trade
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 max-w-3xl text-center md:text-left">
          Beaconsfield Group is a leading independent commodity trading house specializing in physical oil trading, structured trade finance, and risk management solutions.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#services" className="w-full sm:w-auto text-center bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition duration-300">
            Discover More
          </a>
          <a href="#contact" className="w-full sm:w-auto text-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-900 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;