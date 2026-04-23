"use client";
import React from 'react';

export default function Partnerships() {
    const logos = [
        { id: 1, src: "/rel.png", alt: "RELIANCE", scaleClass: "scale-[2.0]" }, 
        { id: 2, src: "/hcl.png", alt: "HCL", scaleClass: "scale-[2.1]" },      
        { id: 3, src: "/ibm.png", alt: "IBM", scaleClass: "scale-[1.7]" },      
        { id: 4, src: "/crif.png", alt: "CRIF", scaleClass: "scale-100" },
        { id: 5, src: "/adp.svg", alt: "ADP", scaleClass: "scale-100" },
        { id: 6, src: "/bayer.svg", alt: "BAYER", scaleClass: "scale-100" },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
            
            {/* Section Headers */}
            <div className="text-center mb-8 md:mb-12">
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
                            onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Crect width='100' height='40' fill='%23e5e7eb'/%3E%3Ctext x='50' y='20' font-family='sans-serif' font-size='12' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ELogo%3C/text%3E%3C/svg%3E";
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile: Continuous Scrolling */}
            <div className="md:hidden overflow-hidden w-full relative">
                <div className="flex w-[200%] animate-marquee">
                    
                    {/* First Set of Logos */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {logos.map((logo) => (
                            <div key={`set1-${logo.id}`} className="flex justify-center items-center h-8 w-24 mx-4">
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className={`object-contain w-full h-full ${logo.scaleClass}`}
                                    onError={(e) => {
                                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Crect width='100' height='40' fill='%23e5e7eb'/%3E%3Ctext x='50' y='20' font-family='sans-serif' font-size='12' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ELogo%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Set of Logos */}
                    <div className="flex w-1/2 justify-around items-center px-4">
                        {logos.map((logo) => (
                            <div key={`set2-${logo.id}`} className="flex justify-center items-center h-8 w-24 mx-4">
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt}
                                    className={`object-contain w-full h-full ${logo.scaleClass}`}
                                    onError={(e) => {
                                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Crect width='100' height='40' fill='%23e5e7eb'/%3E%3Ctext x='50' y='20' font-family='sans-serif' font-size='12' fill='%239ca3af' text-anchor='middle' dy='.3em'%3ELogo%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}