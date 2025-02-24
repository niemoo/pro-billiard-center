import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function EventPage(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10 lg:px-0 px-10">
            <Head title={props.title} />

            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-center text-3xl font-extrabold text-gold">
                    EVENT
                </h1>

                <div className="flex items-center justify-end my-5 mt-20">
                    <h2 className="text-2xl md:text-3xl text-gold font-bold pl-4 lg:w-1/3 w-full">
                        COMING SOON
                    </h2>
                    <div className="w-full h-[2px] bg-yellow-500"></div>
                </div>

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
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 flex w-full h-full transition-opacity duration-700 ease-in-out ${
                                    index === currentIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                {/* Left Side - Image */}
                                <div className="w-1/2 relative">
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 70%)",
                                        }}
                                    ></div>
                                </div>

                                {/* Right Side - Text */}
                                <div className="w-1/2 flex justify-center items-center p-6">
                                    <div className="text-white max-w-lg">
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
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                        {images.map((_, index) => (
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
                </div>

                <div className="flex items-center justify-end my-5 mt-20">
                    <div className="w-full h-[2px] bg-yellow-500"></div>
                    <h2 className="text-2xl md:text-3xl text-gold font-bold pl-4 text-right">
                        NEWS
                    </h2>
                </div>

                {props.events.data.map((event, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-5 lg:space-y-0 py-10"
                    >
                        <div className="lg:w-1/2">
                            <img
                                src="images/event.png"
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="lg:w-1/2 grid gap-5">
                            <h2 className="text-2xl lg:w-1/2 w-full font-semibold text-gold">
                                {event.title}
                            </h2>
                            <div>
                                <p className="text-white">
                                    {event.description
                                        .split(". ")
                                        .slice(0, 2)
                                        .join(". ")}
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <p className="text-white">
                                    {event.date.split(" ")[0]}
                                </p>
                                <p className="text-white">|</p>
                                <div className="group relative h-6 overflow-hidden text-gold">
                                    <button className="w-full transform text-left text-sm font-semibold transition-all duration-300 group-hover:-translate-y-6">
                                        See More This Event →
                                    </button>
                                    <button className="absolute left-0 top-0 w-full translate-y-6 transform text-left text-sm font-semibold transition-all duration-300 group-hover:translate-y-0">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center">
                    <Pagination meta={props.events.meta} />
                </div>
            </div>
        </div>
    );
}

const images = [
    "images/event.png",
    "images/info_section_kanan.png",
    "images/info_section_kiri.png",
    "images/table_one.png",
    "images/table_two.png",
];
