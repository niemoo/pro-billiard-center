import { useState, useEffect } from "react";
import ComingSoonCard from "../Components/ComingSoonCard";
import SkeletonCard from "../Components/SkeletonCard";

export default function ComingSoonSection({ events, images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        if (events) {
            setIsLoading(false);
        }
    }, [events]);

    return (
        <>
            {/* Coming Soon */}
            <div className="relative w-full mt-10">
                {/* Carousel Wrapper Version 1 */}
                {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {images.map((src, index) => (
                            <>
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute block w-full transition-opacity duration-700 ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                                        index === currentIndex
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 70%)",
                                    }}
                                ></div>
                                <div className="relative z-10 flex justify-start items-center h-full max-w-6xl mx-auto px-6 md:px-5">
                                    <div className="bg-transparent text-white max-w-lg">
                                        <h2 className="text-2xl md:text-3xl text-gold font-bold">
                                            Title
                                        </h2>

                                        <p className="mt-4 text-sm md:text-base leading-relaxed">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div> */}

                {/* Carousel Wrapper Version 2 */}
                {isLoading ? (
                    <SkeletonCard />
                ) : (
                    <ComingSoonCard
                        events={events}
                        currentIndex={currentIndex}
                        setCurrentIndex={setSlide}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
                    />
                )}
            </div>
        </>
    );
}
