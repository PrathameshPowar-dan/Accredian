import React from "react";
import ImageSection from "@/components/ImageSection";

export default function CATFramework() {
    return (
        <ImageSection
            id="cat"
            titleBlack="The"
            titleBlue="CAT Framework"
            subtitleBlack="Our Proven Approach to"
            subtitleBlue="Learning Excellence"
            desktopImage="/catV2.svg"
            mobileImage="/catV2.svg"
            desktopMaxWidth="max-w-5xl"
            mobileMaxWidth="max-w-sm"
        />
    );
}