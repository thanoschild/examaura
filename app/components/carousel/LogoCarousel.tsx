'use client';

import { useEffect, useState } from 'react';
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
    <div className="relative max-w-5xl mx-auto overflow-hidden bg-white dark:bg-black py-10">
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
              className="inline-block w-[120px] h-[48px] flex-shrink-0"
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain w-full h-full dark:brightness-0 dark:invert grayscale hover:grayscale-0 transition-all duration-300 dark:hover:brightness-100 dark:hover:invert-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right shadow overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
    </div>
  );
};

export default LogoCarousel; 