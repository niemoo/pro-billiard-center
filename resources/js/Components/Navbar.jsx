import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const { url } = usePage(); // Get the current page URL
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to check if a link is active
    const isActive = (path) => (url === path ? "text-[#EFBF04]" : "text-white");

    // Menu List
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Booking", path: "/booking" },
        { name: "Shop", path: "/shop" },
        { name: "Contact", path: "/contact" },
    ];

    const authItems = [
        { name: "Register", path: "/register" },
        { name: "Login", path: "/login" },
    ];

    return (
        <nav className="bg-black/50 w-full lg:py-3 p-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Placeholder agar navbar tetap di tengah */}
                <div className="w-1/12"></div>

                {/* Navbar di tengah */}
                <ul className="md:flex hidden justify-center items-center space-x-20">
                    {menuItems.map(({ name, path }, index) => (
                        <li
                            key={index}
                            className={`text-lg font-semibold hover:text-[#EFBF04] ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>{name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Register/Login di kanan */}
                <div className="md:flex hidden justify-center items-center space-x-2 font-semibold">
                    {authItems.map(({ name, path }, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            {index !== 0 && <p className="text-[#EFBF04]">|</p>}
                            <p className="hover:text-[#EFBF04]">
                                <Link href={path}>{name}</Link>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navbar */}
        </nav>
    );
}
