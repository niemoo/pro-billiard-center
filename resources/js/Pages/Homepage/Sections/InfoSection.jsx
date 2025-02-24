import React, { useState, useRef, useEffect } from "react";
import { FaMotorcycle, FaCar, FaToiletPaper, FaWifi } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { LiaMosqueSolid } from "react-icons/lia";
import InfoDetailCard from "@/Pages/Homepage/Components/InfoDetailCard";
import FacilityDetailCard from "../Components/FacilityDetailCard";

export default function InfoSection({ venues }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedState, setSelectedState] = useState(
        venues ? venues[0] : null
    );
    const dropdownRef = useRef(null);

    const filteredStates = venues.filter((venue) =>
        venue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleStateSelect = (state) => {
        setSelectedState(state);
        setSearchTerm("");
        setIsOpen(false);
    };

    return (
        <section className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full">
            {/* FIRST */}
            <div className="md:flex grid gap-10 justify-between items-center mx-auto p-10">
                {/* Left Content */}
                <div>
                    <h3 className="text-left text-lg text-gold font-extrabold">
                        THE BIGGEST INDOOR
                    </h3>
                    <p className="text-left text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>

                {/* Center Content */}
                <div>
                    <h3 className="text-center text-lg text-gold font-extrabold">
                        EXCLUSIVE TABLE
                    </h3>
                    <p className="text-center text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>

                {/* Right Content */}
                <div>
                    <h3 className="text-right text-lg text-gold font-extrabold">
                        PREMIUM GEAR
                    </h3>
                    <p className="text-right text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </div>

            {/* SECOND */}
            <div className="lg:flex grid gap-10 items-center lg:justify-between mx-auto py-5 lg:px-20 px-5 w-full">
                {/* Left Image */}
                <div className="lg:w-2/5 w-full">
                    <img
                        src="images/info_section_kiri.png"
                        alt="Info Section"
                        className="w-full"
                    />
                </div>

                {/* Center Info */}
                <div className="lg:w-3/5 w-full">
                    {/* Info Title */}
                    <div
                        ref={dropdownRef}
                        className="relative max-w-xs mx-auto"
                    >
                        <div
                            role="combobox"
                            aria-expanded={isOpen}
                            className="relative w-full"
                        >
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between w-full px-2 bg-gold rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <input
                                    type="text"
                                    aria-autocomplete="list"
                                    autoComplete="off"
                                    className="select select-bordered w-full bg-gold text-xl text-center placeholder:text-black flex items-center font-semibold justify-center mx-auto border-none focus:outline-none"
                                    placeholder={selectedState?.name || ""}
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setIsOpen(true);
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(true);
                                    }}
                                />
                            </div>

                            {isOpen && (
                                <div
                                    role="listbox"
                                    className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                                >
                                    {filteredStates.map((venue) => (
                                        <div
                                            key={venue.id}
                                            role="option"
                                            aria-selected={
                                                selectedState === venue.name
                                            }
                                            onClick={() =>
                                                handleStateSelect(venue)
                                            }
                                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                                selectedState === venue.name
                                                    ? "bg-gray-50"
                                                    : ""
                                            }`}
                                        >
                                            {venue.name}
                                        </div>
                                    ))}
                                    {filteredStates.length === 0 && (
                                        <div className="px-4 py-2 text-black">
                                            No results found
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Info Details */}
                    <InfoDetailCard item={selectedState} />

                    {/* Facility Line */}
                    <div className="flex items-center justify-center my-5">
                        <div className="w-full h-[2px] bg-yellow-500"></div>
                        <h2 className="mx-4 text-yellow-500 font-bold text-lg">
                            Facility
                        </h2>
                        <div className="w-full h-[2px] bg-yellow-500"></div>
                    </div>

                    {/* Facility Details */}
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 justify-items-center w-full md:pl-5">
                        {facility.map((item, index) => (
                            <FacilityDetailCard key={index} item={item} />
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-2/5 w-full">
                    <img
                        src="images/info_section_kanan.png"
                        alt="Info Section"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}

const facility = [
    {
        icon: <FaMotorcycle className="text-3xl" />,
        description: "Parkir Motor",
    },
    {
        icon: <FaCar className="text-3xl" />,
        description: "Parkir Mobil",
    },
    {
        icon: <FaToiletPaper className="text-3xl" />,
        description: "Toilet",
    },
    {
        icon: <ImSpoonKnife className="text-3xl" />,
        description: "Cafe & Resto",
    },
    {
        icon: <LiaMosqueSolid className="text-3xl" />,
        description: "Musholla",
    },
    {
        icon: <FaWifi className="text-3xl" />,
        description: "Wifi",
    },
];
