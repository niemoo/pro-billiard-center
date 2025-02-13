import { Head } from "@inertiajs/react";
import ProductsSection from "./Sections/ProductsSection";

export default function Shop({ title }) {
    return (
        <>
            <Head title={title} />

            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10">
                <ProductsSection />
            </div>
        </>
    );
}
