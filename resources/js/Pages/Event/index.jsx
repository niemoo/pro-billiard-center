import Pagination from "@/Components/Pagination";
import { Head } from "@inertiajs/react";

export default function EventPage(props) {
    console.log(`props: `, props.events.data);
    return (
        <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10 lg:px-0 px-10">
            <Head title={props.title} />

            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-center text-3xl font-extrabold text-[#EFBF04]">
                    EVENT
                </h1>

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
                            <h2 className="text-2xl lg:w-1/2 w-full font-semibold text-[#EFBF04]">
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
                                <div className="group relative h-6 overflow-hidden text-[#EFBF04]">
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
