'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Logo {
  id: number;
  url: string;
  alt: string;
}

const logos: Logo[] = [
  { id: 1, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569903/aws_j3pabf.png', alt: 'AWS' },
  { id: 2, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569903/azure_n3yukg.png', alt: 'Azure' },
  { id: 3, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569903/google_cloud_p4rd3o.png', alt: 'GCP' },
  { id: 4, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569903/cisco_nzz32w.png', alt: 'Cisco' },
  { id: 5, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569903/salesforce_qumm5y.png', alt: 'Salesforce' },
  { id: 6, url: 'https://res.cloudinary.com/dkpkykbfx/image/upload/v1733569902/servicenow_q6zubr.png', alt: 'ServiceNow' },
];

const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Comprehensive Question Banks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Practice with our extensive collection of exam questions for these leading certification providers
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
          
          <div 
            className="flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className={`flex gap-8 infinite-scroll-animation ${isHovered ? 'paused' : ''}`}
              style={{ animationDuration: '20s' }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="inline-block w-[150px] h-[60px] flex-shrink-0"
                >
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain w-full h-full dark:brightness-0 dark:invert grayscale hover:grayscale-0 transition-all duration-300 dark:hover:brightness-100 dark:hover:invert-0"
                  />
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

export default LogoCarousel; 