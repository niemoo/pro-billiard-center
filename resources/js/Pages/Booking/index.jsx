import { Head } from "@inertiajs/react";
import HighlightSection from "./Sections/HighlightSection";
import BenefitSection from "./Sections/BenefitSection";
import BookSection from "./Sections/BookSection";

export default function Booking({ title }) {
    return (
        <>
            <Head title={title} />

            {/* Body Page */}
            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full pb-10">
                <HighlightSection />
                <BenefitSection />
                <BookSection />
            </div>
        </>
    );
}
