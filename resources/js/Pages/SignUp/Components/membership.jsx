export default function Membership({ selectedMembership, onSelectMembership }) {
    return (
        <>
            {/* Title */}
            <h3 className="text-lg font-semibold text-white text-center">
                Select Membership
            </h3>

            {/* Membership */}
            <div className="flex lg:flex-row flex-col justify-center gap-5">
                {/* Left Platinum Card */}
                <button
                    type="button"
                    onClick={() => onSelectMembership("PLATINUM")}
                    className={`text-center w-full rounded-md px-5 py-3 text-white hover:bg-blue-500 transition-all duration-300 border border-blue-500 ${
                        selectedMembership === "PLATINUM"
                            ? "bg-blue-500"
                            : "bg-black"
                    }`}
                >
                    <div
                        className="bg-center"
                        style={{
                            backgroundImage: "url('/images/pbc_logo.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <p className="underline text-lg font-semibold">
                            PLATINUM
                        </p>
                        <p className="font-semibold text-left">
                            Rp 10.000.000 / Year
                        </p>
                        <ul className="text-left list-disc list-inside mt-5 text-sm">
                            <li>VIP Table</li>
                            <li>Free 1 Hour/Month</li>
                            <li>Free Snack & Drink</li>
                        </ul>
                    </div>
                </button>

                {/* Center Gold Card */}
                <button
                    type="button"
                    onClick={() => onSelectMembership("GOLD")}
                    className={`text-center w-full rounded-md px-5 py-3 text-white hover:bg-gold transition-all duration-300 border border-gold ${
                        selectedMembership === "GOLD" ? "bg-gold" : "bg-black"
                    }`}
                >
                    <div
                        className="bg-center"
                        style={{
                            backgroundImage: "url('/images/pbc_logo.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <p className="underline text-lg font-semibold">GOLD</p>
                        <p className="font-semibold text-left">
                            Rp 5.000.000 / Year
                        </p>
                        <ul className="text-left list-disc list-inside mt-5 text-sm">
                            <li>VIP Table</li>
                            <li>Free 1 Hour/3 Months</li>
                            <li>Free Snack & Drink</li>
                        </ul>
                    </div>
                </button>

                {/* Right Silver Card */}
                <button
                    type="button"
                    onClick={() => onSelectMembership("SILVER")}
                    className={`text-center w-full rounded-md px-5 py-3 text-white hover:bg-green-500 transition-all duration-300 border border-green-500 ${
                        selectedMembership === "SILVER"
                            ? "bg-green-500"
                            : "bg-black"
                    }`}
                >
                    <div
                        className="bg-center"
                        style={{
                            backgroundImage: "url('/images/pbc_logo.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <p className="underline text-lg font-semibold">
                            SILVER
                        </p>
                        <p className="font-semibold text-left">
                            Rp 1.000.000 / Year
                        </p>
                        <ul className="text-left list-disc list-inside mt-5 text-sm">
                            <li>VIP Table</li>
                            <li>Free 1 Hour/6 Months</li>
                            <li>Free Drink</li>
                        </ul>
                    </div>
                </button>
            </div>
        </>
    );
}
