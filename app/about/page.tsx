import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { FaRegClock, FaRegLightbulb, FaRegClipboard } from 'react-icons/fa';
import { IoRefreshOutline } from 'react-icons/io5';
import { MdOutlineQuiz } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';

const About = () => {
    return (
        <>
            <Header />
            <main className="bg-white dark:bg-black">
                {/* Hero Section */}
                <div className="w-full py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                                <span>About </span>
                                <span className='text-black dark:text-white font-semibold'>EXAM</span>
                                <span className='text-[#F59558] font-semibold'>AURA</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                Your trusted companion for certification exam preparation, helping professionals achieve their career goals through comprehensive practice materials.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="w-full py-16 bg-gray-50 dark:bg-neutral-900">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-black dark:text-white">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    At ExamAura, we&apos;re committed to providing high-quality, up-to-date practice materials for certification exams. Our mission is to help professionals succeed in their certification journey by offering:
                                </p>
                                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-start">
                                        <span className="text-[#F59558] mr-2">•</span>
                                        Comprehensive question banks that mirror actual exam patterns
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#F59558] mr-2">•</span>
                                        Detailed explanations for each answer to enhance understanding
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#F59558] mr-2">•</span>
                                        Regular updates to reflect the latest exam changes
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#F59558] mr-2">•</span>
                                        Affordable access to quality preparation materials
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/about-mission.jpg"
                                    alt="Our Mission"
                                    fill
                                    className="object-cover"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="w-full py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
                            <span>Why Choose </span>
                            <span className='text-black dark:text-white font-semibold'>EXAM</span>
                            <span className='text-[#F59558] font-semibold'>AURA</span>
                            <span>?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-50 dark:bg-neutral-900 rounded-xl space-y-4"
                                >
                                    <div className="w-12 h-12 bg-[#F59558]/10 rounded-lg flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-[#F59558]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="w-full py-16 bg-gray-50 dark:bg-neutral-900">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-black dark:text-white">
                                Ready to Start Your Certification Journey?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Join thousands of successful professionals who have trusted ExamAura for their exam preparation.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/topics"
                                    className="px-6 py-3 bg-[#F59558] text-white rounded-lg hover:bg-[#F59558]/90 transition-colors duration-200"
                                >
                                    Explore Exam Topics
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-6 py-3 border border-[#F59558] text-[#F59558] rounded-lg hover:bg-[#F59558]/10 transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

const features = [
    {
        icon: IoRefreshOutline,
        title: "Updated Content",
        description: "Our question banks are regularly updated to reflect the latest exam patterns and topics."
    },
    {
        icon: FaRegLightbulb,
        title: "Detailed Explanations",
        description: "Each answer comes with comprehensive explanations to help you understand the concepts better."
    },
    {
        icon: MdOutlineQuiz,
        title: "Practice Environment",
        description: "Experience exam-like conditions with our realistic practice environment."
    },
    {
        icon: FaRegClock,
        title: "Time Management",
        description: "Learn to manage your time effectively with our timed practice tests."
    },
    {
        icon: FaRegClipboard,
        title: "Progress Tracking",
        description: "Monitor your progress and identify areas that need improvement."
    },
    {
        icon: TbCertificate,
        title: "Certification Ready",
        description: "Get fully prepared for your certification exam with our comprehensive materials."
    }
];

export default About; 