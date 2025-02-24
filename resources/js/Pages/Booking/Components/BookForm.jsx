import React, { useState, useRef, useEffect } from "react";

export default function BookForm({ venues }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedState, setSelectedState] = useState(
        venues ? venues[0] : null
    );
    const dropdownRef = useRef(null);

    const filteredStates = venues?.filter((state) =>
        state.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <>
            <div ref={dropdownRef} className="relative max-w-xs mx-auto">
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
                            className="select select-bordered w-full bg-gold placeholder:text-black flex items-center font-semibold justify-center mx-auto border-none focus:outline-none"
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
                                    key={venue?.id}
                                    role="option"
                                    aria-selected={
                                        selectedState === venue?.name
                                    }
                                    onClick={() => handleStateSelect(venue)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                        selectedState === venue?.name
                                            ? "bg-gray-50"
                                            : ""
                                    }`}
                                >
                                    {venue?.name}
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

            <form>
                {/* Input Form */}
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-5 mt-10">
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="name"
                            className="text-gold font-semibold"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md bg-darkgrey/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="email"
                            className="text-gold font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="rounded-md bg-darkgrey/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="phoneNumber"
                            className="text-gold font-semibold"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="rounded-md bg-darkgrey/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="category"
                            className="text-gold font-semibold"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            className="rounded-md bg-darkgrey/50"
                        >
                            <option value="VIP" className="text-black">
                                VIP
                            </option>
                            <option value="REG" className="text-black">
                                REG
                            </option>
                        </select>
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="date"
                            className="text-gold font-semibold"
                        >
                            Select Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="rounded-md bg-darkgrey/50"
                        />
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="text-black grid gap-2 w-full">
                            <label
                                htmlFor="hours"
                                className="text-gold font-semibold"
                            >
                                Start Time
                            </label>
                            <input
                                type="time"
                                id="hours"
                                name="hours"
                                className="rounded-md bg-darkgrey/50"
                            />
                        </div>
                        <div className="text-black grid gap-2 w-full">
                            <label
                                htmlFor="hours"
                                className="text-gold font-semibold"
                            >
                                End Time
                            </label>
                            <input
                                type="time"
                                id="hours"
                                name="hours"
                                className="rounded-md bg-darkgrey/50"
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Info and Button Book */}
                <div className="lg:flex justify-between items-center w-full mt-10">
                    {/* Payment Info */}
                    <div className="lg:flex-row flex flex-col lg:w-3/4 w-full lg:justify-between justify-center items-center lg:gap-2 gap-5">
                        <p className="text-white">Supported Payment</p>
                        <img src="images/mnc.png" alt="mnc" />
                        <img src="images/mandiri.png" alt="mandiri" />
                        <img src="images/bri.png" alt="bri" />
                        <img src="images/bni.png" alt="bni" />
                        <img src="images/bca.png" alt="bca" />
                    </div>

                    {/* Button Book Now */}
                    <button className="lg:w-1/4 w-full lg:ml-20 ml-0 lg:mt-0 mt-10 py-3 rounded-md bg-gold hover:bg-[#b69927] text-black font-semibold transition-all duration-300">
                        Book Now
                    </button>
                </div>
            </form>
        </>
    );
}
