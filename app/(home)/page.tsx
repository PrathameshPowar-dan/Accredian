import AccredianEdge from "./_components/AccredianEdge";
import CATFramework from "./_components/CATFramework";
import CourseSeg from "./_components/Course";
import DomainExpertise from "./_components/DomainExpertise";
import FAQ from "./_components/FAQ";
import Hero from "./_components/hero";
import Partnerships from "./_components/Partnerships";
import SkillDevelopment from "./_components/SkillDev";
import SkillEnhancement from "./_components/SkillEnhancement";
import TrackRecord from "./_components/TrackRecord";

export default function Home() {
    return (
        <div className="flex bg-white flex-col gap-8 md:gap-18 pb-20">
            <Hero />
            <TrackRecord />
            <Partnerships />
            <AccredianEdge />
            <DomainExpertise />
            <CourseSeg />
            <SkillEnhancement />
            <CATFramework />
            <SkillDevelopment />
            <FAQ />
        </div>
    );
}