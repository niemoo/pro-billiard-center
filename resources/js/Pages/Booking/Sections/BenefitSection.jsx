export default function BenefitSection() {
    return (
        <div className="lg:flex grid gap-10 justify-between lg:px-20 px-10 py-10">
            {/* Left Side */}
            <div className="w-full">
                <img
                    src="images/benefit_section.png"
                    alt="Left Side Image"
                    className="w-full"
                />
                <h3 className="text-center text-2xl font-bold text-gold">
                    VIP
                </h3>
                <p className="text-lg font-bold text-gold mt-5">Benefit :</p>
                <ul className="grid gap-2 text-white">
                    <li>
                        <span className="text-gold">-</span> Glove
                    </li>
                    <li>
                        <span className="text-gold">-</span> Sofa
                    </li>
                    <li>
                        <span className="text-gold">-</span> Snack
                    </li>
                    <li>
                        <span className="text-gold">-</span> Drink
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-full">
                <img
                    src="images/benefit_section.png"
                    alt="Right Side Image"
                    className="w-full"
                />
                <h3 className="text-center text-2xl font-bold text-gold">
                    REG
                </h3>
                <p className="text-lg font-bold text-gold mt-5">Benefit :</p>
                <ul className="grid gap-2 text-white">
                    <li>
                        <span className="text-gold">-</span> Glove
                    </li>
                    <li>
                        <span className="text-gold">-</span> Drink
                    </li>
                </ul>
            </div>
        </div>
    );
}
