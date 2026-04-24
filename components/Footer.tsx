"use client";

import React from "react";
import {
    FaFacebookSquare,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Desktop */}
            <div className="hidden md:block bg-[#ffffff]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

                    {/* Top Row */}
                    <div className="flex justify-between items-start gap-10">

                        {/* Left */}
                        <div>
                            <div className="mb-5">
                                <h2 className="text-[#1A73E8] text-3xl font-bold leading-none">
                                    accredian
                                </h2>

                                <p className="text-gray-500 text-[9px] tracking-[0.22em] mt-1 lowercase">
                                    credentials that matter
                                </p>
                            </div>

                            <div className="flex items-center gap-4 text-gray-700">
                                <FaFacebookSquare className="w-4 h-4" />
                                <FaLinkedin className="w-4 h-4" />
                                <FaTwitter className="w-4 h-4" />
                                <FaInstagram className="w-4 h-4" />
                                <FaYoutube className="w-4 h-4" />
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <button className="bg-[#1A73E8] text-white text-lg font-medium px-7 py-2.5 rounded-xl">
                                Enquire Now
                            </button>

                            <p className="text-gray-700 text-sm mt-3">
                                Speak with our Advisor
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-400 my-7" />

                    {/* Middle */}
                    <div className="grid grid-cols-2 gap-14">

                        <div>
                            <h3 className="text-xl text-gray-900 font-semibold mb-4">
                                Accredian
                            </h3>

                            <div className="space-y-3 text-lg text-gray-800">
                                <p>About</p>
                                <p>Blog</p>
                                <p>Why Accredian</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-gray-900 font-semibold mb-4">
                                Contact Us
                            </h3>

                            <div className="space-y-3 text-lg text-gray-800 leading-relaxed">
                                <p>
                                    Email us:{" "}
                                    <span className="text-[#1A73E8]">
                                        enterprise@accredian.com
                                    </span>
                                </p>

                                <p>
                                    Office Address: 4th Floor, 250, Phase IV,
                                    Udyog Vihar, Sector 18, Gurugram, Haryana
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-400 my-7" />

                    {/* Bottom */}
                    <p className="text-center text-base text-gray-800">
                        © 2026 Accredian A Brand of FullStack Education Pvt Ltd.
                        All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden bg-[#111111] text-white px-5 py-9">

                {/* Logo */}
                <div className="mb-7">
                    <h2 className="text-3xl font-bold leading-none">
                        accredian
                    </h2>

                    <p className="text-gray-400 text-[9px] tracking-[0.25em] mt-1 lowercase">
                        credentials that matter
                    </p>
                </div>

                {/* Social */}
                <div className="flex items-center gap-5 mb-7">
                    <FaFacebookSquare className="w-4 h-4" />
                    <FaLinkedin className="w-4 h-4" />
                    <FaTwitter className="w-4 h-4" />
                    <FaInstagram className="w-4 h-4" />
                    <FaYoutube className="w-4 h-4" />
                </div>

                {/* CTA */}
                <button className="bg-[#1A73E8] text-white text-xs font-medium px-4 py-2 rounded-md">
                    Enquire Now
                </button>

                <p className="text-xs mt-3 mb-8">
                    Speak with our Advisor
                </p>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-8" />

                {/* Links */}
                <div className="mb-9">
                    <h3 className="text-xl font-semibold mb-5">
                        Accredian
                    </h3>

                    <div className="space-y-4 text-sm">
                        <p>About</p>
                        <p>Blog</p>
                        <p>Why Accredian</p>
                    </div>
                </div>

                {/* Contact */}
                <div className="mb-9">
                    <h3 className="text-xl font-semibold mb-5">
                        Contact Us
                    </h3>

                    <div className="space-y-4 text-sm leading-relaxed">
                        <p>
                            Email us:{" "}
                            <span className="text-[#1A73E8]">
                                enterprise@accredian.com
                            </span>
                        </p>

                        <p>
                            Office Address: 4th Floor, 250, Phase IV,
                            Udyog Vihar, Sector 18, Gurugram, Haryana
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-7" />

                {/* Copyright */}
                <p className="text-center text-sm font-medium leading-relaxed">
                    © 2026 Accredian A Brand of FullStack Education Pvt Ltd.
                    All Rights Reserved
                </p>
            </div>
        </footer>
    );
}