"use client";

import React from "react";
import {
    MonitorCheck,
    MonitorX,
    GraduationCap,
    BriefcaseBusiness,
} from "lucide-react";

export default function SkillEnhancement() {
    const points = [
        {
            title: "Tech Professionals",
            desc: "Enhance expertise, embrace tech, drive innovation.",
            icon: MonitorCheck,
        },
        {
            title: "Non-Tech Professionals",
            desc: "Adapt digitally, collaborate in tech environments.",
            icon: MonitorX,
        },
        {
            title: "Emerging Professionals",
            desc: "Develop powerful skills for rapid career growth.",
            icon: GraduationCap,
        },
        {
            title: "Senior Professionals",
            desc: "Strengthen leadership, enhance strategic decisions.",
            icon: BriefcaseBusiness,
        },
    ];

    return (
        <section
            id="career"
            className="w-full max-w-300 mx-auto px-0 md:px-4 mt-4 md:mt-10"
        >
            {/* Desktop */}
            <div className="hidden md:block md:rounded-2xl bg-[#1A73E8] px-8 pt-10">
                <div className="bg-[#1A73E8] overflow-hidden">

                    <div className="hidden md:grid grid-cols-[0.9fr_1.3fr] gap-10 items-center">

                        {/* Left */}
                        <div>
                            <p className="text-white text-lg mb-3">
                                Who Should Join?
                            </p>

                            <h2 className="text-white text-4xl font-extrabold leading-tight mb-6 max-w-sm">
                                Strategic Skill Enhancement
                            </h2>

                            <img
                                src="/imagehuman.png"
                                alt="professionals"
                                className="w-full max-w-65 object-contain"
                            />
                        </div>

                        {/* Right */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                            {points.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div key={index}>
                                        <Icon className="w-14 h-14 text-white mb-2" />

                                        <h3 className="text-white text-xl font-semibold mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-white text-[14px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden bg-[#1A73E8] md:rounded-2xl overflow-hidden px-4 py-8 md:px-8 md:py-0">
                <div className="md:hidden">
                    <p className="text-white text-base mb-3">
                        Who Should Join?
                    </p>

                    <h2 className="text-white text-[18px] font-bold leading-snug mb-7">
                        Strategic Skill Enhancement
                    </h2>

                    <div className="space-y-9">
                        {points.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex gap-3 items-start">
                                    <Icon className="w-8 h-8 text-white shrink-0 mt-1" />

                                    <div>
                                        <h3 className="text-white text-[15px] font-semibold mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-white text-[12px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}