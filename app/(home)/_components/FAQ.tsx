"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
    const tabs = [
        "About the Course",
        "About the Delivery",
        "Miscellaneous",
    ];

    const faqData = {
        "About the Course": [
            {
                q: "What types of corporate training programs does Accredian offer?",
                a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
            },
            {
                q: "What domain specializations are available?",
                a: "We offer specialized programs in Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech.",
            },
        ],

        "About the Delivery": [
            {
                q: "How are training sessions delivered?",
                a: "Programs are delivered through online live sessions, hybrid workshops, self-paced modules, and enterprise cohorts.",
            },
            {
                q: "Can programs be customized for our teams?",
                a: "Yes, all enterprise programs can be tailored according to team goals and skill gaps.",
            },
        ],

        Miscellaneous: [
            {
                q: "Do you provide certifications?",
                a: "Yes, completion certificates are available for eligible programs.",
            },
            {
                q: "How can we contact your team?",
                a: "Use the Enquire Now button below to connect with our enterprise specialists.",
            },
        ],
    };

    const [activeTab, setActiveTab] = useState("About the Course");
    const [openIndex, setOpenIndex] = useState(0);

    const currentFaqs = faqData[activeTab as keyof typeof faqData];

    return (
        <section
            id="faqs"
            className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-14 md:mt-20"
        >
            {/* Heading */}
            <div className="mb-8 md:mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-[#111827]">
                    Frequently Asked{" "}
                    <span className="text-[#1A73E8]">Questions</span>
                </h2>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-[250px_1fr] gap-10 items-start">

                {/* Tabs */}
                <div className="space-y-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setOpenIndex(0);
                            }}
                            className={`w-full h-16 rounded-md border text-[16px] font-medium transition ${activeTab === tab
                                ? "bg-white border-gray-200 text-[#1A73E8] shadow-sm"
                                : "border-gray-300 text-gray-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                <div>
                    <div className="space-y-6">
                        {currentFaqs.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index}>
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? -1 : index)
                                        }
                                        className="w-full flex justify-between gap-4 text-left"
                                    >
                                        <h3
                                            className={`text-[16px] font-semibold leading-snug ${isOpen
                                                ? "text-[#1A73E8]"
                                                : "text-[#111827]"
                                                }`}
                                        >
                                            {item.q}
                                        </h3>

                                        {isOpen ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 mt-1" />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <p className="mt-3 text-[14px] text-gray-700 leading-relaxed max-w-3xl">
                                            {item.a}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            {/* CTA */}
            <div className="hidden md:flex m-auto w-full justify-center items-center">
                <button className="bg-[#1A73E8] text-white text-sm font-medium px-6 py-3 rounded-md shadow">
                    Enquire Now
                </button>
            </div>

            {/* Mobile */}
            <div className="md:hidden">

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 mb-5 no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setOpenIndex(0);
                            }}
                            className={`shrink-0 px-4 py-2 rounded-md border text-[12px] font-medium whitespace-nowrap ${activeTab === tab
                                ? "bg-white text-[#1A73E8] border-gray-200 shadow-sm"
                                : "text-gray-500 border-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Accordions */}
                <div className="space-y-4">
                    {currentFaqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border-b border-gray-200 pb-3">
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    className="w-full flex justify-between gap-3 text-left"
                                >
                                    <h3
                                        className={`text-base font-semibold leading-snug ${isOpen
                                            ? "text-[#1A73E8]"
                                            : "text-[#111827]"
                                            }`}
                                    >
                                        {item.q}
                                    </h3>

                                    {isOpen ? (
                                        <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                                    )}
                                </button>

                                {isOpen && (
                                    <p className="mt-3 text-[12px] text-gray-700 leading-relaxed">
                                        {item.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-6 flex justify-center">
                    <button className="bg-[#1A73E8] text-white text-sm font-medium px-5 py-2.5 rounded-md shadow">
                        Enquire Now
                    </button>
                </div>
            </div>
        </section>
    );
}