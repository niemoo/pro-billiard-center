import { products } from "@/Data/products";
import ProductCard from "./ProductCard";

export default function ProductsList({ items }) {
    const filteredProducts = products.filter(
        (product) => product.category === items
    );

    return (
        <div className="grid gap-10 items-center mx-auto py-5 lg:px-20 px-5 w-full mt-10">
            {filteredProducts.length === 0 ? (
                <p className="text-center text-xl text-white">
                    - Item tidak tersedia -
                </p>
            ) : (
                filteredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            )}
        </div>
    );
}
