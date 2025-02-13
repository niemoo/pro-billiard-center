import { Head } from "@inertiajs/react";
import InfoSection from "./Sections/InfoSection";
import GallerySection from "./Sections/GallerySection";
import HeroSection from "./Sections/HeroSection";

export default function Welcome({ title }) {
    return (
        <>
            <Head title={title} />

            {/* Body Page */}
            <div>
                <HeroSection />
                <InfoSection />
                <GallerySection />
            </div>
        </>
    );
}
