import AccredianEdge from "./_components/AccredianEdge";
import DomainExpertise from "./_components/DomainExpertise";
import Hero from "./_components/hero";
import Partnerships from "./_components/Partnerships";
import TrackRecord from "./_components/TrackRecord";

export default function Home() {
    return (
        <div className="flex bg-white flex-col gap-8 md:gap-18 pb-20">
            <Hero />
            <TrackRecord />
            <Partnerships />
            <AccredianEdge />
            <DomainExpertise />
        </div>
    );
}