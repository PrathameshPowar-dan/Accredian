"use client";

import React from "react";
import {
    ChartNoAxesColumnIncreasing,
    Monitor,
    MonitorPlay,
} from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            id: "1",
            title: "Skill Gap Analysis",
            desc: "Assess team skill gaps and developmental needs.",
            icon: ChartNoAxesColumnIncreasing,
        },
        {
            id: "2",
            title: "Customized Training Plan",
            desc: "Create a tailored roadmap addressing organizational goals.",
            icon: Monitor,
        },
        {
            id: "3",
            title: "Flexible Program Delivery",
            desc: "Deliver adaptable programs aligned with industry and organizational needs.",
            icon: MonitorPlay,
        },
    ];

    return (
        <section
            id="how-it-works"
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10"
        >
            {/* Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-[#111827] leading-tight">
                    How We{" "}
                    <span className="text-[#1A73E8]">Deliver Results</span>{" "}
                    That Matter?
                </h2>

                <p className="mt-2 text-sm md:text-lg text-gray-700">
                    A Structured Three-Step Approach to{" "}
                    <span className="text-[#1A73E8]">Skill Development</span>
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.id}
                            className="relative bg-[#eef3fb] border border-[#9dc4ff] rounded-2xl shadow-sm px-1 py-1 h-55 flex flex-col items-center text-center"
                        >
                            {/* Number */}
                            <div className="absolute text-black top-4 left-4 w-8 h-8 rounded-full border border-[#7db0ff] bg-white text-sm font-semibold flex items-center justify-center">
                                {step.id}
                            </div>

                            {/* Side Bars */}
                            <div className="absolute left-0 top-12 w-2 h-20 bg-[#1A73E8] rounded-r-sm" />
                            <div className="absolute right-0 top-12 w-2 h-20 bg-[#1A73E8] rounded-l-sm" />

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-[#1A73E8] flex items-center justify-center shadow-md mb-6 mt-2">
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-[20px] font-semibold text-gray-900 mb-3 leading-snug">
                                {step.title}
                            </h3>

                            <p className="text-[14px] text-gray-700 leading-relaxed max-w-57.5">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-5">
                {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.id}
                            className="relative w-[73%] m-auto bg-[#eef3fb] border border-[#9dc4ff] rounded-xl shadow-sm px-4 py-5 mb-2 min-h-30 flex flex-col items-center text-center"
                        >
                            {/* Number */}
                            <div className="absolute text-black top-2 left-2 w-6 h-6 rounded-full border border-[#7db0ff] bg-white text-xs font-semibold flex items-center justify-center">
                                {step.id}
                            </div>

                            {/* Side bars */}
                            <div className="absolute left-0 top-9 w-1.5 h-9 bg-[#1A73E8] rounded-r-sm" />
                            <div className="absolute right-0 top-9 w-1.5 h-9 bg-[#1A73E8] rounded-l-sm" />

                            {/* Icon */}
                            <div className="w-11 h-11 rounded-full bg-[#1A73E8] flex items-center justify-center mb-3">
                                <Icon className="w-5 h-5 text-white" />
                            </div>

                            <h3 className="text-[15px] font-medium text-gray-900 mb-1">
                                {step.title}
                            </h3>

                            <p className="text-[12px] text-gray-700 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}