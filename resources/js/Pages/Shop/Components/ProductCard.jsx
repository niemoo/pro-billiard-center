export default function ProductCard({ product }) {
    return (
        <div className="lg:flex grid gap-10">
            {/* Image */}
            <img
                src={product.image}
                alt={product.title}
                className="lg:w-1/2 w-full"
            />

            {/* Details Side */}
            <div className="w-full">
                {/* Title */}
                <div className="flex items-center gap-5">
                    <h2 className="text-[#EFBF04] text-2xl font-semibold w-full">
                        {product.title}
                    </h2>
                    <div className="w-full h-[2px] bg-yellow-500"></div>
                </div>

                {/* Description */}
                <div className="text-white lg:mt-10 mt-5">
                    {product.description.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>

                <div className="flex items-center gap-10 lg:mt-10 mt-5">
                    {/* Price */}
                    <p className="text-[#EFBF04] font-semibold ">
                        {formatPrice(product.price)}
                    </p>

                    {/* Button Coming Soon */}
                    <button
                        className="bg-[#EFBF04] px-7 py-2 rounded font-semibold"
                        disabled
                    >
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>
    );
}

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
