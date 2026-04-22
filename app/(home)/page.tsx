import Hero from "./_components/hero";
import TrackRecord from "./_components/TrackRecord";

export default function Home() {
    return (
        <div className="flex bg-white flex-col gap-16 md:gap-24 pb-20">
            <Hero />
            <TrackRecord />
        </div>
    );
}