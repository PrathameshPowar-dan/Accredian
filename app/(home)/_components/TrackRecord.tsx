import React from 'react';

export default function TrackRecord() {
    const stats = [
        {
            number: "10K+",
            text: "Professionals Trained For Exceptional Career Success",
        },
        {
            number: "250+",
            text: "Top-tier Corporate Partnerships Formed",
        },
        {
            number: "40+",
            text: "In-Demand Programs & Specializations",
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 md:mt-6">
            {/* Section Headers */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                    Our <span className="text-[#1A73E8]">Track Record</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    The Numbers Behind <span className="text-[#1A73E8]">Our Success</span>
                </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-row md:flex-col justify-center items-center md:text-center w-full md:w-1/3 gap-4 md:gap-5 py-6 md:py-2 md:px-4 ${index !== stats.length - 1 ? 'border-b border-gray-300 md:border-b-0 md:border-r' : ''
                            }`}
                    >
                        {/* Number Pill */}
                        <div className="bg-[#E8F0FE] text-[#1A73E8] font-bold text-lg md:text-xl py-2 px-6 rounded-full shrink-0">
                            {stat.number}
                        </div>

                        {/* Text */}
                        <p className="text-gray-800 text-sm md:text-base font-medium text-left md:text-center max-w-55 md:max-w-62.5">
                            {stat.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}