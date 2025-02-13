import { Head, Link } from "@inertiajs/react";
import InfoSection from "./Sections/InfoSection";
import GallerySection from "./Sections/GallerySection";

export default function Welcome({ title }) {
    return (
        <>
            <Head title={title} />
            <div>
                <section
                    style={{
                        backgroundImage: "url('/images/hero_section.png')",
                    }}
                    className="h-screen bg-cover bg-center"
                >
                    <div className="px-5 relative z-10 flex justify-center items-center">
                        <h1 className="font-bold text-3xl text-center text-white mb-5 md:text-4xl"></h1>
                    </div>
                </section>
                <InfoSection />
                <GallerySection />
            </div>
        </>
    );
}
