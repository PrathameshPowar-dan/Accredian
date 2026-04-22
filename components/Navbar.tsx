"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Array of navigation links to keep the code DRY
    const navLinks = [
        { name: "Home", href: "/", isActive: true },
        { name: "Stats", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Accredian Edge", href: "#" },
        { name: "CAT", href: "#" },
        { name: "How It Works", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Testimonials", href: "#" },
    ];

    return (
        <nav className="w-full bg-white shadow-md relative z-50">
            {/* Desktop & Mobile Top Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <img
                                src="/logo.webp"
                                alt="Accredian"
                                className="h-10 w-auto object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-base transition-colors duration-200 ${link.isActive
                                        ? "text-[#1A73E8] font-bold border-b-2 border-[#1A73E8] pb-1"
                                        : "text-gray-800 font-normal hover:text-[#1A73E8]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-black focus:outline-none p-2"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h- 8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-22 right-4 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-1 px-1">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-base font-semibold rounded-md transition-colors ${link.isActive
                                        ? "text-[#1A73E8] bg-blue-50/50 underline underline-offset-4 decoration-2"
                                        : "text-gray-800 hover:text-[#1A73E8] hover:bg-gray-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}