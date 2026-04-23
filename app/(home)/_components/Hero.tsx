import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="w-full max-w-8xl mx-auto px-0 md:px-6 lg:px-8 mt-0 md:mt-8">
            <div className="bg-[#F0F7FF] shadow-2xl rounded-none md:rounded-4xl overflow-hidden flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between relative px-6 pt-6 pb-8 md:px-14 md:pt-16 md:pb-0">

                {/* Left Side: Text Content */}
                <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left z-10 md:pb-16 mt-6 md:mt-0">

                    <h1 className="text-3xl sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.2] md:leading-[1.1] tracking-tight mb-4 md:mb-6">
                        Next-Gen <span className="text-[#1A73E8]">Expertise</span> <br className="hidden md:block" />
                        For Your <span className="text-[#1A73E8]">Enterprise</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 md:mb-8 font-medium">
                        Cultivate high-performance <br className="hidden md:block" />
                        teams through expert learning.
                    </p>

                    {/* Features / Checkmarks */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:flex md:flex-wrap justify-items-start md:justify-start md:gap-x-6 md:gap-y-3 mb-8 md:mb-10 w-full max-w-85 md:max-w-none mx-auto md:mx-0">
                        {['Tailored Solutions', 'Industry Insights', 'Expert Guidance', 'Measurable Impact'].map((feature) => (
                            <div key={feature} className="flex items-center text-[13px] sm:text-sm md:text-base font-medium text-gray-700 text-left">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="#enquire"
                        className="w-full md:w-auto block md:inline-block bg-[#1A73E8] hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded-lg md:rounded-md transition-colors duration-200"
                    >
                        Enquire Now
                    </Link>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-end items-end relative">
                    <img
                        src="/corporate-big-hero-v4.webp"
                        alt="Accredian Experts"
                        className="object-contain object-bottom w-full mx-auto max-w-87.5 md:max-w-112.5 lg:max-w-125 scale-110 md:scale-125 origin-bottom"
                    />
                </div>
            </div>
        </section>
    );
}