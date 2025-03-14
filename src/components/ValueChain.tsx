import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Factory, Baseline as Pipeline, Fuel, Power, Building2, Droplet, Gauge, Container, Train, Citrus as Industry } from 'lucide-react';

const sections = [
  {
    id: 'upstream',
    title: 'Upstream',
    icon: <Droplet className="h-12 w-12 text-blue-900" />,
    description: 'Exploration and production of crude oil and natural gas from underground reservoirs.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80',
    activities: [
      'Exploration & Production',
      'Reservoir Management',
      'Drilling Operations',
      'Field Development'
    ]
  },
  {
    id: 'midstream',
    title: 'Midstream',
    icon: <Pipeline className="h-12 w-12 text-blue-900" />,
    description: 'Transportation, storage, and wholesale marketing of crude or refined petroleum products.',
    image: 'https://images.unsplash.com/photo-1471613883559-4cc6d4756535?auto=format&fit=crop&q=80',
    activities: [
      'Pipeline Networks',
      'Storage Terminals',
      'Transportation',
      'Processing Facilities'
    ]
  },
  {
    id: 'downstream',
    title: 'Downstream',
    icon: <Fuel className="h-12 w-12 text-blue-900" />,
    description: 'Refining of petroleum crude oil and processing of raw natural gas.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    activities: [
      'Refining',
      'Product Distribution',
      'Retail Operations',
      'Marketing'
    ]
  },
  {
    id: 'power',
    title: 'Power',
    icon: <Power className="h-12 w-12 text-blue-900" />,
    description: 'Generation, transmission, and distribution of electricity from various energy sources.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    activities: [
      'Power Generation',
      'Grid Management',
      'Energy Trading',
      'Renewable Integration'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: <Building2 className="h-12 w-12 text-blue-900" />,
    description: 'Development and maintenance of critical energy infrastructure assets.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80',
    activities: [
      'Asset Management',
      'Facility Construction',
      'Maintenance Services',
      'Technology Integration'
    ]
  }
];

const ValueChain = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Energy Value Chain
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions across the entire energy sector
          </p>
        </div>

        {sections.map((section, index) => {
          const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true
          });

          return (
            <div
              key={section.id}
              ref={ref}
              className={`mb-32 transform transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                    <div className="absolute inset-0">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    {section.icon}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {section.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="h-2 w-2 bg-blue-900 rounded-full" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ValueChain;