import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10">
            <div className="bg-[#F0F7FF] rounded-4xl overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between relative px-6 py-10 md:p-16">

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 mt-8 md:mt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                        Next-Gen <span className="text-[#1A73E8]">Expertise</span> <br className="hidden md:block" />
                        For Your <span className="text-[#1A73E8]">Enterprise</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                        Cultivate high-performance teams through expert learning.
                    </p>

                    {/* Features / Checkmarks */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                        {['Tailored Solutions', 'Industry Insights', 'Expert Guidance'].map((feature) => (
                            <div key={feature} className="flex items-center text-sm md:text-base font-medium text-gray-800">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="#enquire"
                        className="bg-[#1A73E8] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md"
                    >
                        Enquire Now
                    </Link>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                    <div className="relative w-full max-w-75 md:max-w-125 aspect-4/3 md:aspect-4/4">
                        <img
                            src="/corporate-big-hero-v4.webp"
                            alt="Accredian Experts"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}