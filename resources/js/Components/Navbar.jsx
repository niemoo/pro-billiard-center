import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { url } = usePage(); // Get the current page URL
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to check if a link is active
    const isActive = (path) => (url === path ? "text-[#EFBF04]" : "text-white");

    return (
        <nav className="bg-black/50 w-full py-3">
            <ul className="md:flex hidden justify-center items-center space-x-20">
                {["/", "/booking", "/shop", "/contact"].map((path, index) => (
                    <li
                        key={index}
                        className={`text-lg font-semibold hover:text-[#EFBF04] ${isActive(
                            path
                        )}`}
                    >
                        <Link href={path}>
                            {path === "/"
                                ? "Home"
                                : path.slice(1).charAt(0).toUpperCase() +
                                  path.slice(2)}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-end items-center">
                <label className="btn swap swap-rotate md:hidden">
                    {/* this hidden checkbox controls the state */}
                    <input
                        type="checkbox"
                        className="hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className="swap-on fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                    {isMenuOpen && (
                        <ul className="absolute top-16 right-0 bg-white w-full md:hidden">
                            <li className="text-lg font-semibold hover:text-[#EFBF04]">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-[#EFBF04]">
                                <Link href="/booking">Booking</Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-[#EFBF04]">
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-[#EFBF04]">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    )}
                </label>
            </div>
        </nav>
    );
}
