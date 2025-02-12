import { Head } from "@inertiajs/react";
import HighlightSection from "./Layouts/HighlightSection";
import BenefitSection from "./Layouts/BenefitSection";
import BookSection from "./Layouts/BookSection";

export default function Booking({ title }) {
    return (
        <div>
            <Head title={title} />

            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10">
                <HighlightSection />
                <BenefitSection />
                <BookSection />
            </div>
        </div>
    );
}
