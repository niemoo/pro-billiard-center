import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { FaTiktok, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black">
            {/* First Footer */}
            <div className="w-full lg:flex grid lg:gap-0 gap-10 justify-between mx-auto p-10 border-y-2 border-[#EFBF04]">
                {/* Address */}
                <div className="flex lg:w-1/3 w-full text-white">
                    <div className="flex gap-5 mx-auto">
                        <div className="text-3xl text-[#EFBF04]">
                            <GrLocation />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-[#EFBF04]">Address</p>
                            <p className="mt-2">
                                Jl. K.H. Wahid Hasyim No.36-38, RT.15/RW.7, Kb.
                                Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah
                                Khusus Ibukota Jakarta 10340
                            </p>
                        </div>
                    </div>
                </div>
                {/* Contact */}
                <div className="flex lg:w-1/3 w-full text-white">
                    <div className="flex gap-5 lg:mx-auto">
                        <div className="text-3xl text-[#EFBF04]">
                            <LuPhoneCall />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-[#EFBF04]">Contact</p>
                            <div className="mt-2">
                                <p>08123456789</p>
                                <p>PBC@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Help */}
                <div className="flex lg:w-1/3 w-full text-white">
                    <div className="flex gap-5 lg:mx-auto">
                        <div className="text-3xl text-[#EFBF04]">
                            <CgDanger />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-[#EFBF04]">Help</p>
                            <div className="mt-2">
                                <p>FAQ</p>
                                <p>Terms and Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Cookies Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Footer */}
            <div className="lg:flex grid gap-10 lg:justify-between justify-center items-center py-5 px-10">
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <FaTiktok className="text-2xl text-[#EFBF04]" />
                    </div>
                    <p className="text-white">ProBilliardCenter</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <p className="text-white">www.ProBilliardCenter.com</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <FaInstagram className="text-2xl text-[#EFBF04]" />
                    </div>
                    <p className="text-white">ProBilliardCenter_</p>
                </div>
            </div>
        </footer>
    );
}
