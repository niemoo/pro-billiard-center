import { MdAttachMoney } from "react-icons/md";
import { FaMotorcycle, FaCar, FaToiletPaper, FaWifi } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { LiaMosqueSolid } from "react-icons/lia";
import CardDetails from "@/Components/CardDetails";

export default function InfoSection() {
    return (
        <section className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full">
            {/* FIRST */}
            <div className="md:flex grid gap-10 justify-between items-center mx-auto p-10">
                <div>
                    <h3 className="text-left text-lg text-[#EFBF04] font-extrabold">
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
                <div>
                    <h3 className="text-center text-lg text-[#EFBF04] font-extrabold">
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
                <div>
                    <h3 className="text-right text-lg text-[#EFBF04] font-extrabold">
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
                        src="images/info_section.png"
                        alt="Info Section"
                        className="w-full"
                    />
                </div>
                {/* Center Info */}
                <div className="lg:w-3/5 w-full">
                    {/* Info Title */}
                    <h2 className="text-center text-4xl text-[#EFBF04] font-extrabold">
                        PBC iNews Tower
                    </h2>

                    {/* Info Details */}
                    <div className="grid gap-5 mt-5">
                        {info.map((item, index) => (
                            <CardDetails index={index} item={item} />
                        ))}
                    </div>

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
                            <div
                                key={index}
                                className="flex items-center gap-5 text-lg font-semibold text-white w-full"
                            >
                                <div>{item.icon}</div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Image */}
                <div className="lg:w-2/5 w-full">
                    <img
                        src="images/info_section.png"
                        alt="Info Section"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}

const info = [
    {
        icon: <MdAttachMoney className="text-3xl" />,
        description: "Start from 100.000 / Hours",
    },
    {
        icon: <BiSolidTimeFive className="text-3xl" />,
        description: "Every Days : 10.00 Am - 10.00 Pm",
    },
    {
        icon: <FaMapLocationDot className="text-3xl" />,
        description:
            "Jl. K.H. Wahid Hasyim No.36-38, RT.15/RW.7, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340",
    },
];

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
