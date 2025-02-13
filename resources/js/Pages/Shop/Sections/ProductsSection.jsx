import { useState } from "react";
import ProductsList from "../Components/ProductsList";

export default function ProductsSection() {
    const [items, setItems] = useState("table");

    return (
        <>
            {/* Desktop Menu Tab */}
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

            {/* Mobile Menu Tab */}
            <select
                name="value"
                className="lg:hidden select select-bordered w-full max-w-xs bg-[#EFBF04] flex items-center font-semibold justify-center mx-auto"
                onChange={(e) => setItems(e.target.value)}
            >
                {menuItems.map((item) => (
                    <option value={item} key={item}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </option>
                ))}
            </select>

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
