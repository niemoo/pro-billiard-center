import { useState } from "react";
import ProductsList from "../Components/ProductsList";

export default function ProductsSection() {
    const [items, setItems] = useState("table");

    return (
        <>
            {/* Items Menu */}
            <div className="lg:flex hidden px-10 border border-[#EFBF04] rounded-lg bg-black w-fit mx-auto">
                {menuItems.map((item) => (
                    <button
                        key={item}
                        className={`px-5 py-5 ${
                            items === item
                                ? "bg-[#EFBF04] font-semibold text-black"
                                : "font-semibold text-white hover:text-black hover:bg-[#EFBF04]"
                        }`}
                        onClick={() => setItems(item)}
                    >
                        {item.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* List of Products */}
            <ProductsList items={items} />
        </>
    );
}

const menuItems = [
    "table",
    "cue",
    "glove",
    "jersey",
    "cap",
    "ball",
    "accessories",
];
