import React from 'react';
import { FaCheckCircle, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaShieldAlt,
    title: "Future is Secured",
    description: "100% Pass Guarantee",
  },
  {
    icon: FaHeadset,
    title: "24/7 Customer Support",
    description: "Contact us for support!",
  },
  {
    icon: FaCheckCircle,
    title: "Verified Updates",
    description: "Lifetime Updates!",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-black dark:text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="flex justify-center space-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#F59558]/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-[#F59558]" />
              </div>
              <h3 className="md:text-xl font-semibold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="hidden lg:block text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 