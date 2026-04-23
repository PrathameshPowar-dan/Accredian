"use client";

import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function DomainExpertise() {
    const domains = [
        { id: 1, title: "Product Management", iconUrl: "lightbulb" },
        { id: 2, title: "Data Science & AI", iconUrl: "brain" },
        { id: 3, title: "Project Management", iconUrl: "/icons/project.svg" },
        { id: 4, title: "Business Analytics", iconUrl: "/icons/analytics.svg" },
        { id: 5, title: "Digital Transformation", iconUrl: "/icons/digital.svg" },
        { id: 6, title: "Agile & Scrum", iconUrl: "/icons/agile.svg" },
        { id: 7, title: "Cloud Computing", iconUrl: "/icons/cloud.svg" }
    ];

    return (
        <section id="expertise" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10">
            
            {/* Section Headers */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    Our <span className="text-[#1A73E8]">Domain Expertise</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    Tailored Learning Paths across 12+ industry domains
                </p>
            </div>

            {/* Grid Container 
                - Mobile: 2 columns (grid-cols-2)
                - Tablet: 3 columns (md:grid-cols-3)
                - Desktop: 4 columns (lg:grid-cols-4)
            */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {domains.map((domain) => (
                    <div 
                        key={domain.id}
                        // Added 'group' for hover targeting, soft blue background, and a lift effect
                        className="bg-[#F8FBFF] border rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-100 cursor-pointer group"
                    >
                        {/* Icon Wrapper */}
                        <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <img 
                                src={domain.iconUrl} 
                                alt={domain.title}
                                className="w-6 h-6 md:w-8 md:h-8 object-contain"
                                // The fallback SVG if the real image isn't found
                                onError={(e) => {
                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A73E8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'%3E%3C/path%3E%3C/svg%3E";
                                }}
                            />
                        </div>
                        
                        {/* Card Title */}
                        <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                            {domain.title}
                        </h3>
                    </div>
                ))}
            </div>

        </section>
    );
}