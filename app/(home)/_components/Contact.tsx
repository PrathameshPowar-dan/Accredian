"use client";

import React from "react";
import { Headset, ChevronRight } from "lucide-react";

export default function TrainingCTA() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10 mb-8 md:mb-14">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-[#1A73E8]">

                {/* Background Rings */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-45 h-45 md:w-130 md:h-130 rounded-full border-28 md:border-60 border-white/8" />
                    <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-65 h-65 md:w-180 md:h-180 rounded-full border-28 md:border-60 border-white/6" />
                    <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-85 h-85 md:w-230 md:h-230 rounded-full border-28 md:border-60 border-white/5" />
                </div>

                {/* Desktop */}
                <div className="hidden md:flex relative z-10 items-center justify-between px-12 py-10">

                    {/* Left */}
                    <div className="flex items-center gap-8">
                        {/* Icon Box */}
                        <div className="w-24 h-24 rounded-2xl bg-white/90 shadow-md flex items-center justify-center shrink-0">
                            <Headset className="w-12 h-12 text-[#1A73E8]" strokeWidth={2.2} />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-white text-3xl font-bold leading-tight">
                                Want to Learn More About Our Training Solutions?
                            </h2>

                            <p className="text-white text-xl mt-3 font-medium">
                                Get Expert Guidance for Your Teams Success!
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-white hover:bg-gray-100 text-[#1A73E8] text-xl font-semibold px-3 py-3 rounded-xl flex items-center gap-3 transition shrink-0">
                        Contact Us
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </div>

                {/* Mobile */}
                <div className="md:hidden relative z-10 px-5 py-6 text-center">

                    {/* Icon */}
                    <div className="mx-auto mb-7 w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center shadow-md">
                        <Headset className="w-8 h-8 text-[#1A73E8]" strokeWidth={2.2} />
                    </div>

                    {/* Text */}
                    <h2 className="text-white text-[16px] font-semibold leading-snug max-w-60 mx-auto">
                        Want to Learn More About Our Training Solutions?
                    </h2>

                    {/* Button */}
                    <button className="mt-7 bg-white text-[#1A73E8] text-[15px] font-semibold px-6 py-2.5 rounded-lg inline-flex items-center gap-1.5">
                        Contact Us
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}