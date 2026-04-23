"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Stats", href: "#stats", id: "stats" },
        { name: "Clients", href: "#clients", id: "clients" },
        { name: "Accredian Edge", href: "#edge", id: "edge" },
        { name: "CAT", href: "#cat", id: "cat" },
        { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
        { name: "FAQs", href: "#faqs", id: "faqs" },
        { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY + 100;

            // Default to home if we are at the very top
            if (window.scrollY < 50) {
                setActiveSection("home");
                return;
            }

            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
                        setActiveSection(link.id);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call it once on mount to set the initial state correctly
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // sticky
        <nav className="w-full bg-white sticky top-0 z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center">
                        <Link href="#home">
                            <img
                                src="/logo.webp"
                                alt="Accredian"
                                className="h-10 w-auto object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base transition-colors duration-200 ${isActive
                                        ? "text-[#1A73E8] font-bold border-b-2 border-[#1A73E8] pb-1"
                                        : "text-gray-800 font-normal hover:text-[#1A73E8]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A73E8] p-2"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-7 w-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-7 w-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 right-4 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-4 px-2">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive
                                            ? "text-[#1A73E8] bg-blue-50/50 underline underline-offset-4 decoration-2"
                                            : "text-gray-800 hover:text-[#1A73E8] hover:bg-gray-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}