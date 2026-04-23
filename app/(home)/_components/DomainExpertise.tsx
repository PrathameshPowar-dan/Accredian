"use client";

import {
    Lightbulb,
    Brain,
    Users,
    ChartNoAxesColumnIncreasing,
    Settings,
    Globe,
    Banknote
} from 'lucide-react';

export default function DomainExpertise() {
    const domains = [
        { id: 1, title: "Product & Innovation Hub", icon: Lightbulb },
        { id: 2, title: "Gen-AI Mastery", icon: Brain },
        { id: 3, title: "Leadership Elevation", icon: Users },
        { id: 4, title: "Tech & Data Insights", icon: ChartNoAxesColumnIncreasing },
        { id: 5, title: "Operations Excellence", icon: Settings },
        { id: 6, title: "Digital Enterprise", icon: Globe },
        { id: 7, title: "Fintech Innovation Lab", icon: Banknote }
    ];

    return (
        <section id="expertise" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10">

            {/* Section Headers */}
            <div className="text-center mb-10 md:mb-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    Our <span className="text-[#1A73E8]">Domain Expertise</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    <span className="text-[#1A73E8]">Specialized Programs</span> Designed to Fuel Innovation
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
                                    bg-[#FFFFFF] border border-black/10 shadow-2xl md:shadow-2xl rounded-2xl p-0 md:p-2 flex flex-row md:flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group
                                    ${isLastItem ? 'w-[calc(50%-8px)] sm:w-[calc(50%-8px)] md:w-full' : 'w-full'}
                                `}
                            >
                                {/* Icon Wrapper */}
                                <div className="w-12 h-12 md:w-16 md:h-16 mb-1 flex items-center justify-center rounded-full">
                                    <domain.icon className="w-7 h-7 md:w-13 md:h-13 text-[#1A73E8]" />
                                </div>

                                {/* Card Title */}
                                <h3 className="text-[11px] md:text-base font-semibold text-gray-800 leading-tight">
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