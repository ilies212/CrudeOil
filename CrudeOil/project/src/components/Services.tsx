import React from 'react';
import { Fuel, BarChart3, Globe2, Shield, Anchor, Ship } from 'lucide-react';

const services = [
  {
    icon: <Fuel className="h-8 w-8 text-blue-900" />,
    title: "Physical Oil Trading",
    description: "Specialized in trading crude oil, fuel oil, middle distillates and light ends with a focus on emerging markets."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-900" />,
    title: "Structured Trade Finance",
    description: "Providing innovative financing solutions including pre-export finance, prepayment structures, and borrowing base facilities."
  },
  {
    icon: <Ship className="h-8 w-8 text-blue-900" />,
    title: "Shipping & Logistics",
    description: "Managing global transportation of oil products with a focus on operational excellence and cost efficiency."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-900" />,
    title: "Risk Management",
    description: "Comprehensive solutions for price risk management, hedging strategies, and market analysis."
  },
  {
    icon: <Globe2 className="h-8 w-8 text-blue-900" />,
    title: "Global Presence",
    description: "Strategic presence in key markets with offices in London, Geneva, and Singapore."
  },
  {
    icon: <Anchor className="h-8 w-8 text-blue-900" />,
    title: "Storage Solutions",
    description: "Access to strategic storage facilities worldwide, enabling efficient supply chain management."
  }
];

const Services = () => {
  return (
    <div id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Comprehensive solutions across the energy trading value chain
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;