"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            logo: "/adp.svg",
            scaleClass: "scale-70",
            text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
        },
        {
            logo: "/bayer.svg",
            scaleClass: "scale-100",
            text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
        },
        {
            logo: "/rel.png",
            scaleClass: "scale-[1.50]",
            text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."`,
        },
    ];

    const [page, setPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const startX = useRef<number | null>(null);
    const endX = useRef<number | null>(null);

    useEffect(() => {
        const resize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setPage(0);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const totalPages = isMobile ? 3 : 2;

    const nextSlide = () =>
        setPage((prev) => Math.min(prev + 1, totalPages - 1));

    const prevSlide = () =>
        setPage((prev) => Math.max(prev - 1, 0));

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (startX.current === null || endX.current === null) return;

        const diff = startX.current - endX.current;

        if (diff > 50) nextSlide();
        if (diff < -50) prevSlide();

        startX.current = null;
        endX.current = null;
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 md:mt-10">
            {/* Heading */}
            <div className="mb-6 md:mb-8">
                <h2 className="text-xl text-center md:text-4xl font-bold text-[#111827]">
                    Testimonials from{" "}
                    <span className="text-[#1A73E8]">Our Partners</span>
                </h2>

                <p className="mt-2 text-center text-sm md:text-lg text-gray-700">
                    What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
                </p>
            </div>

            {/* Slider */}
            <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* MOBILE */}
                {isMobile ? (
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: "300%",
                            transform: `translateX(-${page * 33.333}%)`,
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <div key={index} className="w-1/3 shrink-0">
                                <div className="bg-white border border-gray-200 rounded-xl px-5 py-7 min-h-42.5">
                                    <div className="h-10 w-28 flex items-center justify-start mb-6">
                                        <img
                                            src={item.logo}
                                            alt="logo"
                                            className={`object-contain w-full h-full ${item.scaleClass}`}
                                        />
                                    </div>

                                    <p className="text-[14px] text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* DESKTOP */
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: "150%",
                            transform: `translateX(-${page * 33.333}%)`,
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <div key={index} className="w-1/3 shrink-0 px-2">
                                <div className="bg-white border border-gray-200 rounded-2xl px-10 py-10 min-h-70">
                                    <div className="h-14 w-36 flex items-center justify-start mb-6">
                                        <img
                                            src={item.logo}
                                            alt="logo"
                                            className={`object-contain w-full h-full ${item.scaleClass}`}
                                        />
                                    </div>

                                    <p className="text-[18px] text-gray-700 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${page === index ? "bg-[#1A73E8]" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}