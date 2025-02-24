export default function ComingSoonCard({
    events,
    currentIndex,
    setCurrentIndex,
    nextSlide,
    prevSlide,
}) {
    return (
        <>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        className={`absolute inset-0 flex w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="w-1/2 relative">
                            <img
                                src="images/event.png"
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />

                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 70%)",
                                }}
                            ></div>
                        </div>

                        <div className="w-1/2 flex justify-center items-center p-6">
                            <div className="text-white max-w-lg">
                                <h2 className="text-2xl md:text-3xl text-gold font-bold">
                                    {event.title}
                                </h2>
                                <p className="mt-4 text-sm md:text-base leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {events.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index
                                ? "bg-gray-800"
                                : "bg-gray-400"
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </span>
            </button>
        </>
    );
}
