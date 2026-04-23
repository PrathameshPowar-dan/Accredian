"use client";

import React, { useState } from "react";

export default function CourseSeg() {
    const [activeIndex, setActiveIndex] = useState(0);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const skills = [
        {
            title: "Program Specific",
            desc: "Certificate, Executive, Post Graduate Certificate",
            image: "/project-management-v2.webp",
        },
        {
            title: "Industry Specific",
            desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
            image: "/digital-transformation-v2.webp",
        },
        {
            title: "Topic Specific",
            desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
            image: "/data-science-v2.webp",
        },
        {
            title: "Level Specific",
            desc: "Senior Leadership, Mid-Career Professionals, Freshers",
            image: "/senior-management-v2.webp",
        },
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        if (distance > 50) {
            setActiveIndex((prev) =>
                prev === skills.length - 1 ? 0 : prev + 1
            );
        }

        if (distance < -50) {
            setActiveIndex((prev) =>
                prev === 0 ? skills.length - 1 : prev - 1
            );
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10 md:mb-9">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                        Tailored{" "}
                        <span className="text-[#1A73E8]">
                            Course Segmentation
                        </span>
                    </h2>

                    <p className="mt-3 text-sm md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Explore{" "}
                        <span className="text-[#1A73E8] font-medium">
                            Custom-fit Courses
                        </span>{" "}
                        Designed to Address Every Professional Focus
                    </p>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 w-full"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold text-[#1A73E8] mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="transition-all duration-300"
                    >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                            <img
                                src={skills[activeIndex].image}
                                alt={skills[activeIndex].title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-5 text-center">
                                <h3 className="text-2xl font-semibold text-[#1A73E8] mb-2">
                                    {skills[activeIndex].title}
                                </h3>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {skills[activeIndex].desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-5">
                        {skills.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? "w-2.5 bg-[#1A73E8]"
                                    : "w-2.5 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}