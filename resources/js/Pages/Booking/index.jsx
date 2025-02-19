import { Head } from "@inertiajs/react";
import HighlightSection from "./Sections/HighlightSection";
import BenefitSection from "./Sections/BenefitSection";
import BookSection from "./Sections/BookSection";

export default function Booking(props) {
    return (
        <>
            <Head title={props.title} />

            {/* Body Page */}
            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full pb-10">
                <HighlightSection />
                <BenefitSection />
                <BookSection venues={props.venues.data} />
            </div>
        </>
    );
}
