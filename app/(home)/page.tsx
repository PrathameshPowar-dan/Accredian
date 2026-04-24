"use client";

import { useState } from "react";
import Hero from "./_components/Main";
import TrackRecord from "./_components/TrackRecord";
import Partnerships from "./_components/Partnerships";
import AccredianEdge from "./_components/AccredianEdge";
import DomainExpertise from "./_components/DomainExpertise";
import Course from "./_components/Course";
import SkillEnhancement from "./_components/SkillEnhancement";
import SkillDev from "./_components/SkillDev";
import CATFramework from "./_components/CATFramework";
import Testimonials from "./_components/Testimonials";
import FAQ from "./_components/FAQ";
import Contact from "./_components/Contact";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <main className="flex bg-white flex-col gap-8 md:gap-18 pb-20 w-full">
            <Hero onOpenModal={handleOpenModal} />
            <TrackRecord />
            <Partnerships />
            <AccredianEdge />
            <DomainExpertise />
            <Course />
            <SkillEnhancement />
            <CATFramework />
            <SkillDev />
            <FAQ onOpenModal={handleOpenModal} />
            <Testimonials />
            <Contact onOpenModal={handleOpenModal} />

            <EnquiryModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </main>
    );
}