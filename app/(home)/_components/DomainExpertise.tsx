"use client";

import React from 'react';
import {
    Lightbulb,
    Brain,
    Briefcase,
    LineChart,
    Cpu,
    Repeat,
    Cloud
} from 'lucide-react';

export default function DomainExpertise() {
    const domains = [
        { id: 1, title: "Product & Innovation Hub", icon: Lightbulb },
        { id: 2, title: "Gen-AI Mastery", icon: Brain },
        { id: 3, title: "Leadership Elevation", icon: Briefcase },
        { id: 4, title: "Tech & Data Insights", icon: LineChart },
        { id: 5, title: "Operations Excellence", icon: Cpu },
        { id: 6, title: "Digital Enterprise", icon: Repeat },
        { id: 7, title: "Fintech Innovation Lab", icon: Cloud }
    ];

    return (
        <section id="expertise" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">

            {/* Section Headers */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    Our <span className="text-[#1A73E8]">Domain Expertise</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    Tailored Learning Paths across 7+ industry domains
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
                {domains.map((domain, index) => {
                    const isLastItem = index === 6;

                    return (
                        <div
                            key={domain.id}
                            className={isLastItem ? "col-span-2 md:col-span-1 md:col-start-2 flex justify-center" : ""}
                        >
                            <div
                                className={`
                                    bg-[#F8FBFF] border border-black/10 rounded-2xl p-6 md:p-2 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer group
                                    ${isLastItem ? 'w-[calc(50%-8px)] sm:w-[calc(50%-8px)] md:w-full' : 'w-full'}
                                `}
                            >
                                {/* Icon Wrapper */}
                                <div className="w-12 h-12 md:w-16 md:h-16 mb-1 flex items-center justify-center rounded-full">
                                    <domain.icon className="w-8 h-8 md:w-11 md:h-11 text-[#1A73E8]" />
                                </div>

                                {/* Card Title */}
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                                    {domain.title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}