export default function BenefitSection() {
    return (
        <div className="lg:flex grid gap-10 justify-between lg:px-20 px-10 py-10">
            {/* Left Side */}
            <div className="w-full">
                <img
                    src="images/benefit_section.png"
                    alt=""
                    className="w-full"
                />
                <h3 className="text-center text-2xl font-bold text-[#EFBF04]">
                    VIP
                </h3>
                <p className="text-lg font-bold text-[#EFBF04] mt-5">
                    Benefit :
                </p>
                <ul className="grid gap-2 text-white">
                    <li>
                        <span className="text-[#EFBF04]">-</span> Glove
                    </li>
                    <li>
                        <span className="text-[#EFBF04]">-</span> Sofa
                    </li>
                    <li>
                        <span className="text-[#EFBF04]">-</span> Snack
                    </li>
                    <li>
                        <span className="text-[#EFBF04]">-</span> Drink
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-full">
                <img
                    src="images/benefit_section.png"
                    alt=""
                    className="w-full"
                />
                <h3 className="text-center text-2xl font-bold text-[#EFBF04]">
                    REG
                </h3>
                <p className="text-lg font-bold text-[#EFBF04] mt-5">
                    Benefit :
                </p>
                <ul className="grid gap-2 text-white">
                    <li>
                        <span className="text-[#EFBF04]">-</span> Glove
                    </li>
                    <li>
                        <span className="text-[#EFBF04]">-</span> Drink
                    </li>
                </ul>
            </div>
        </div>
    );
}
