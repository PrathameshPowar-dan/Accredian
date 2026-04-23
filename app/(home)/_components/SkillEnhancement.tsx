"use client";

import React, { useState } from 'react';

export default function SkillEnhancement() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Swipe state for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Swapped Lucide components for image URLs
    const skills = [
        {
            title: "Program Specific",
            desc: "Certificate, Executive, Post Graduate Certificate",
            iconUrl: "/project-management-v2.webp" 
        },
        {
            title: "Industry Specific",
            desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
            iconUrl: "/digital-transformation-v2.webp"
        },
        {
            title: "Topic Specific",
            desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
            iconUrl: "/data-science-v2.webp"
        },
        {
            title: "Level Specific",
            desc: "Senior Leadership, Mid-Career Professionals, Freshers",
            iconUrl: "/senior-management-v2.webp"
        }
    ];

    // Handlers for mobile swipe functionality
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setActiveIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
        }
        if (isRightSwipe) {
            setActiveIndex((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
        }
        
        // Reset states
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="w-full mt-16 md:mt-24 py-12 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Title - Updated text color since the background is no longer blue */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                        Strategic <span className="text-[#1A73E8]">Skill Enhancement</span>
                    </h2>
                </div>

                {/* DESKTOP VIEW: 3-Column Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            // Added border so they pop slightly against the white background
                            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="rounded-full mb-6">
                                <img 
                                    src={skill.iconUrl} 
                                    alt={skill.title}
                                    className="w-10 h-10 object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A73E8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'%3E%3C/path%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {skill.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* MOBILE VIEW: Dotted Slider / Carousel */}
                <div className="block md:hidden">
                    <div 
                        className="relative w-full pb-4"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* The Active Card */}
                        <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl mx-auto max-w-sm transition-all duration-300 border border-gray-100">
                            <div className="p-5 rounded-full mb-4">
                                <img 
                                    src={skills[activeIndex].iconUrl} 
                                    alt={skills[activeIndex].title}
                                    className="w-12 h-12 object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A73E8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'%3E%3C/path%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                {skills[activeIndex].title}
                            </h3>
                        </div>
                    </div>

                    {/* Navigation Dots (Using your exact updated styling) */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        {skills.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    activeIndex === index 
                                    ? "w-2 h-2 bg-blue-500" 
                                    : "w-2 h-2 bg-gray-500/50 hover:bg-gray-500/70"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}