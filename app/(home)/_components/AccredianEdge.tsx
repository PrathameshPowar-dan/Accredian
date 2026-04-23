import React from 'react';

export default function AccredianEdge() {
    return (
        <section id='edge' className="w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 mt-4 md:mt-10">
            
            {/* Section Headers */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    The <span className="text-[#1A73E8]">Accredian Edge</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    Key Aspects of <span className="text-[#1A73E8]">Our Strategic Training</span>
                </p>
            </div>

            {/* Images Container */}
            <div className="w-full flex justify-center items-center">
                
                {/* Desktop View */}
                <img
                    src="/accredian-edge-usp-v3.svg" 
                    alt="The Accredian Edge Process"
                    className="hidden md:block w-full max-w-6xl object-contain"
                />

                {/* Mobile View */}
                <img
                    src="/accredian-edge-usp-mobile.svg" 
                    alt="The Accredian Edge Process"
                    className="block md:hidden w-full max-w-100 sm:max-w-sm object-contain"
                />
                
            </div>
            
        </section>
    );
}