import { products } from "@/Data/products";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Shop({ title }) {
    const [items, setItems] = useState("table");

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
            .format(price)
            .replace("IDR", "RP");
    };

    return (
        <div>
            <Head title={title} />
            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10">
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
                <div className="grid gap-10 items-center mx-auto py-5 lg:px-20 px-5 w-full mt-10">
                    {products
                        .filter((product) => product.category === items)
                        .map((product) => (
                            <div
                                key={product.title}
                                className="lg:flex grid gap-10"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="lg:w-1/2 w-full"
                                />
                                <div className="w-full">
                                    <div className="flex items-center gap-5">
                                        <h2 className="text-[#EFBF04] text-2xl font-semibold w-full">
                                            {product.title}
                                        </h2>
                                        <div className="w-full h-[2px] bg-yellow-500"></div>
                                    </div>
                                    <div className="text-white lg:mt-10 mt-5">
                                        {product.description
                                            .split("\n")
                                            .map((line, index) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                    </div>
                                    <div className="flex items-center gap-10 lg:mt-10 mt-5">
                                        <p className="text-[#EFBF04] font-semibold ">
                                            {formatPrice(product.price)}
                                        </p>
                                        <button
                                            className="bg-[#EFBF04] px-7 py-2 rounded font-semibold"
                                            disabled
                                        >
                                            Coming Soon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
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
