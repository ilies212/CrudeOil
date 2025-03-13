import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "The Future of Sustainable Energy Trading",
    excerpt: "Exploring the intersection of renewable energy and traditional trading markets...",
    date: "March 15, 2024",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
    category: "Sustainability"
  },
  {
    title: "Global Oil Market Trends 2024",
    excerpt: "Analysis of current market dynamics and future predictions for oil trading...",
    date: "March 12, 2024",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    category: "Market Analysis"
  },
  {
    title: "Innovation in Energy Infrastructure",
    excerpt: "New technologies reshaping the energy infrastructure landscape...",
    date: "March 10, 2024",
    author: "Michael Brown",
    image: "https://images.unsplash.com/photo-1513828583688-c52646f9b5d9?auto=format&fit=crop&q=80",
    category: "Technology"
  }
];

const Articles = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div id="articles" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Expert analysis and industry updates
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <button className="text-blue-900 font-medium flex items-center hover:text-blue-700 transition-colors duration-300">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;