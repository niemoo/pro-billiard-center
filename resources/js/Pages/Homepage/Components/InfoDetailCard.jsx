import { MdAttachMoney } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";

export default function InfoDetailCard({ item }) {
    const openTime = item.opening_time.split(":")[0];
    const closeTime = item.closing_time.split(":")[0];
    return (
        <div className="grid gap-5 mt-5">
            <div className="flex gap-5 text-lg font-semibold text-white">
                <div>
                    <MdAttachMoney className="text-3xl" />
                </div>
                <p>Start from Rp 100.000 / Hours</p>
            </div>
            <div className="flex gap-5 text-lg font-semibold text-white">
                <div>
                    <BiSolidTimeFive className="text-3xl" />
                </div>
                <p>{`Every Days : ${openTime}.00 AM - ${closeTime}.00 PM`}</p>
            </div>
            <div className="flex gap-5 text-lg font-semibold text-white">
                <div>
                    <FaMapLocationDot className="text-3xl" />
                </div>
                <p>{item.address}</p>
            </div>
        </div>
    );
}
