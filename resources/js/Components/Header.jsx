import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Header() {
    const { url } = usePage(); // Get the current page URL
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log(isMenuOpen);

    // Function to check if a link is active
    const isActive = (path) =>
        url === path ? "bg-[#EFBF04] text-black" : "text-white";

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
        <div className="md:h-24 h-20 w-full bg-[#252525] flex justify-between items-center py-10 md:px-20 p-5 border-b-2 border-[#EFBF04] shadow-md">
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="md:h-24 h-14"
            />
            <div>
                <h1 className="text-4xl text-white font-black tracking-widest md:block hidden">
                    PRO BILLIARD CENTER
                </h1>
            </div>
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="md:h-24 h-14 md:block hidden"
            />

            <div className="flex justify-end items-center text-white lg:hidden">
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {/* hamburger icon */}
                    <svg
                        className={`fill-current ${
                            !isMenuOpen ? "block" : "hidden"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className={`fill-current ${
                            isMenuOpen ? "block" : "hidden"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </button>
            </div>

            {/* Drawer Menu */}
            <div
                id="mobile-menu"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-full dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                tabIndex="-1"
                aria-labelledby="drawer-label"
            >
                <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    Menu
                </h5>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <ul className="grid gap-1 my-5 text-sm text-gray-500 dark:text-gray-400">
                    {menuItems.map(({ name, path }, index) => (
                        <button
                            key={index}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-semibold hover:bg-[#EFBF04] px-3 py-2 rounded-md ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>
                                <p>{name}</p>
                            </Link>
                        </button>
                    ))}

                    {authItems.map(({ name, path }, index) => (
                        <button
                            key={index}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-semibold hover:bg-[#EFBF04] px-3 py-2 rounded-md ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>
                                <p>{name}</p>
                            </Link>
                        </button>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    );
}
