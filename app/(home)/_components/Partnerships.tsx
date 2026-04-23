"use client";
import React from 'react';

export default function Partnerships() {
    const logos = [
        { id: 1, src: "/rel.png", alt: "RELIANCE", scaleClass: "scale-[1.5]" },
        { id: 2, src: "/hcl.png", alt: "HCL", scaleClass: "scale-[1.3]" },
        { id: 3, src: "/ibm.png", alt: "IBM", scaleClass: "scale-[1.3]" },
        { id: 4, src: "/crif.png", alt: "CRIF", scaleClass: "scale-100" },
        { id: 5, src: "/adp.svg", alt: "ADP", scaleClass: "scale-100" },
        { id: 6, src: "/bayer.svg", alt: "BAYER", scaleClass: "scale-100" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
            
            {/* Section Headers */}
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                    Our Proven <span className="text-[#1A73E8]">Partnerships</span>
                </h2>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                    Network of 20,000+ top-tier partners
                </p>
            </div>

            {/* Desktop: Static Row */}
            <div className="hidden md:flex justify-between items-center gap-8 flex-wrap px-8">
                {logos.map((logo) => (
                    <div key={logo.id} className="flex justify-center items-center h-12 w-32">
                        <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className={`object-contain w-full h-full ${logo.scaleClass}`}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile: Continuous Scrolling */}
            <div className="md:hidden overflow-hidden w-full relative">
                <div className="flex w-max animate-marquee items-center">
                    {/* First Set of Logos */}
                    {logos.map((logo) => (
                        <div key={`set1-${logo.id}`} className="flex justify-center items-center h-10 w-28 shrink-0 mr-12">
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className={`object-contain w-full h-full ${logo.scaleClass}`}
                            />
                        </div>
                    ))}

                    {/* Second Set of Logos */}
                    {logos.map((logo) => (
                        <div key={`set2-${logo.id}`} className="flex justify-center items-center h-10 w-28 shrink-0 mr-12">
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className={`object-contain w-full h-full ${logo.scaleClass}`}
                            />
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}