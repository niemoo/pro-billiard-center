import { Head } from "@inertiajs/react";
import ContactSection from "./Sections/ContactSection";
import LocationSection from "./Sections/LocationSection";

export default function Contact({ title }) {
    return (
        <>
            <Head title={title} />

            {/* Body Page */}
            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10">
                <ContactSection />
                <LocationSection />
            </div>
        </>
    );
}
