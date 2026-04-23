import React from "react";

type Props = {
    id: string;
    titleBlack?: string;
    titleBlue: string;
    subtitleBlack?: string;
    subtitleBlue?: string;
    desktopImage: string;
    mobileImage: string;
    desktopMaxWidth?: string;
    mobileMaxWidth?: string;
};

export default function ImageSection({
    id,
    titleBlack = "",
    titleBlue,
    subtitleBlack = "",
    subtitleBlue = "",
    desktopImage,
    mobileImage,
    desktopMaxWidth = "max-w-6xl",
    mobileMaxWidth = "max-w-[320px]",
}: Props) {
    return (
        <section
            id={id}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10"
        >
            {/* Heading */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    {titleBlack} <span className="text-[#1A73E8]">{titleBlue}</span>
                </h2>

                <p className="text-sm md:text-lg text-gray-600 font-medium">
                    {subtitleBlack}{" "}
                    <span className="text-[#1A73E8]">{subtitleBlue}</span>
                </p>
            </div>

            {/* Images */}
            <div className="w-full flex justify-center items-center">
                <img
                    src={desktopImage}
                    alt={titleBlue}
                    className={`hidden md:block w-full ${desktopMaxWidth} object-contain`}
                />

                <img
                    src={mobileImage}
                    alt={titleBlue}
                    className={`block md:hidden w-full ${mobileMaxWidth} object-contain`}
                />
            </div>
        </section>
    );
}