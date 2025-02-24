import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import ComingSoonSection from "./Sections/ComingSoonSection";
import NewsSection from "./Sections/NewsSection";

export default function EventPage(props) {
    const [events, setEvents] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/events"
                );
                const data = await response.json();

                setEvents(data);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10 lg:px-0 px-10">
            <Head title={props.title} />

            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-center text-3xl font-extrabold text-gold">
                    EVENT
                </h1>

                {/* Coming Soon Title */}
                <div className="flex items-center justify-end my-5 mt-20">
                    <h2 className="text-2xl md:text-3xl text-gold font-bold pl-4 lg:w-1/3 w-full">
                        COMING SOON
                    </h2>
                    <div className="w-full h-[2px] bg-yellow-500"></div>
                </div>

                {/* Coming Soon Section */}
                <ComingSoonSection
                    events={events?.data?.events}
                    images={images}
                />

                {/* News Title */}
                <div className="flex items-center justify-end my-5 mt-20">
                    <div className="w-full h-[2px] bg-yellow-500"></div>
                    <h2 className="text-2xl md:text-3xl text-gold font-bold pl-4 text-right">
                        NEWS
                    </h2>
                </div>

                {/* News Section */}
                <NewsSection events={events?.data?.events} />

                {/* <div className="flex justify-center">
                    <Pagination meta={props.events.meta} />
                </div> */}
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
