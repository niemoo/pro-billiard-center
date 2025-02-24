import { Head } from "@inertiajs/react";
import HeroSection from "./Sections/HeroSection";
import InfoSection from "./Sections/InfoSection";
import GallerySection from "./Sections/GallerySection";

export default function Welcome(props) {
    return (
        <>
            <Head title={props.title} />

            {/* Body Page */}
            <div>
                <HeroSection />
                <InfoSection venues={props.venues.data} />
                <GallerySection />
            </div>
        </>
    );
}
