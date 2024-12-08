'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    content: "This platform helped me pass my AWS certification on the first try!"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Cloud Architect",
    company: "Microsoft",
    content: "The practice questions were exactly what I needed for my Azure exam."
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "DevOps Engineer",
    company: "Amazon",
    content: "Excellent resource for cloud certification preparation!"
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="w-full bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          What Our Users Say
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
          
          <div 
            className="flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className={`flex gap-8 infinite-scroll-reverse ${isHovered ? 'paused' : ''}`}
              style={{ animationDuration: '30s' }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="inline-block w-[400px] flex-shrink-0 bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right shadow overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 