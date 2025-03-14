import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Beaconsfield Group
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Beaconsfield Group is an independent commodity trading house with a primary focus on physical oil trading and structured trade finance. Our expertise in emerging markets, combined with our strong financial partnerships, enables us to provide innovative solutions across the energy trading value chain.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              With offices strategically located in London, Geneva, and Singapore, we maintain a global presence while delivering personalized service to our partners. Our team's extensive experience in physical oil trading and structured finance allows us to navigate complex markets effectively.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">15M+</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">Barrels Traded Annually</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900">25+</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Global trading operations"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;