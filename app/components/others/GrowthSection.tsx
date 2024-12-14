import React from 'react';
import Link from 'next/link';

const GrowthSection = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-6 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
        {/* Text Content */}
        <div className="space-y-6 w-full max-w-2xl lg:max-w-none">
          <h2 className="text-2xl lg:text-4xl sm:text-5xl font-bold text-black dark:text-white">
          We&apos;re still growing our question base
          </h2>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p className="text-base md:text-lg">
              We&apos;re continuously expanding our question bank with high-quality exam preparation materials. New questions and detailed explanations are added daily to help you succeed in your certification journey.
            </p>
            
            <p className="text-base md:text-lg">
              Have a specific certification in mind?{' '}
              <Link 
                href="/contact" 
                className="text-[#F59558] hover:text-[#F59558]/90 transition-colors duration-200"
              >
                Let us know
              </Link>{' '}
              and we&apos;ll prioritize adding more questions for your target certification!
            </p>
          </div>
        </div>

        {/* Graph */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[350px] max-h-[300px] md:max-w-[450px] md:h-[400px] aspect-square rounded-lg p-4 relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-black dark:to-black">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className="border border-black-200/50 dark:border-white/50"
                />
              ))}
            </div>
            
            {/* Growth Line */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59558" />
                    <stop offset="100%" stopColor="#F59558" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M10,70 Q30,65 50,55 T90,25"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  filter="url(#glow)"
                  className="drop-shadow-[0_0_8px_rgba(245,149,88,0.5)]"
                />
              </svg>

              {/* End Point Circle */}
              <div 
                className="absolute top-[25%] right-[10%] w-3 h-3 bg-[#F59558] rounded-full 
                          shadow-lg shadow-[#F59558]/30 transform translate-x-1/2 -translate-y-1/2
                          ring-2 ring-[#F59558]/20 ring-offset-2 ring-offset-black/5"
              />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top gradient */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
              
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
              
              {/* Left gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
              
              {/* Right gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection; 