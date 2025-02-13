export default function HeroSection() {
    return (
        <>
            <section
                className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero_section.png')" }}
            >
                {/* Dark Overlay with Stronger Gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to left, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 70%)",
                    }}
                ></div>

                {/* Content Container */}
                <div className="relative z-10 flex justify-end items-center h-full max-w-6xl mx-auto px-6 md:px-5">
                    <div className="bg-transparent text-white max-w-lg text-right">
                        {/* Title */}
                        <div className="flex items-center justify-end my-5">
                            <div className="w-full h-[2px] bg-yellow-500"></div>
                            <h2 className="text-2xl md:text-3xl font-bold pl-4 w-full">
                                About Us
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
