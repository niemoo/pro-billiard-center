import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-black">
            {/* First Footer */}
            <div className="w-full lg:flex grid lg:gap-0 gap-10 justify-between mx-auto p-10 border-y-2 border-gold">
                {/* Address */}
                <div className="flex lg:w-1/3 w-full text-white">
                    <div className="flex gap-5 mx-auto">
                        <div className="text-3xl text-gold">
                            <GrLocation />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-gold">Headquarters</p>
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
                        <div className="text-3xl text-gold">
                            <LuPhoneCall />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-gold">Contact</p>
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
                        <div className="text-3xl text-gold">
                            <CgDanger />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-gold">Help</p>
                            <div className="mt-2">
                                <p>FAQ</p>
                                <p>Terms and Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Cookies Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="flex lg:w-1/3 w-full text-white">
                    <div className="flex gap-5 lg:mx-auto">
                        <div className="text-3xl text-gold">
                            <RxDashboard />
                        </div>
                        <div className="text-white">
                            <p className="text-xl text-gold">Menu</p>
                            <ul className="mt-2">
                                <li className="hover:text-gold">
                                    <Link href="/">Home </Link>
                                </li>
                                <li className="hover:text-gold">
                                    <Link href="/booking">Booking</Link>
                                </li>
                                <li className="hover:text-gold">
                                    <Link href="/shop">Shop</Link>
                                </li>
                                <li className="hover:text-gold">
                                    <Link href="/events">Event</Link>
                                </li>
                                <li className="hover:text-gold">
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Footer */}
            <div className="lg:flex grid gap-10 lg:justify-between justify-center items-center py-5 px-10">
                {/* Tiktok */}
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <FaTiktok className="text-2xl text-gold" />
                    </div>
                    <p className="text-white">probilliardcenter</p>
                </div>

                {/* Website */}
                <div className="flex justify-center items-center gap-5">
                    <p className="text-white">www.probilliardcenter.com</p>
                </div>

                {/* Instagram */}
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <FaInstagram className="text-2xl text-gold" />
                    </div>
                    <p className="text-white">probilliardcenter</p>
                </div>
            </div>
        </footer>
    );
}
