import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { authItems, menuItems } from "@/Data/menu";

export default function Header() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) =>
        url === path ? "bg-gold text-black" : "text-white";

    return (
        <div className="lgh-24 h-20 w-full bg-[#252525] flex justify-between items-center py-10 lgpx-20 p-5 border-b-2 border-gold shadow-md">
            {/* Left Image */}
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="lg:h-24 h-14"
            />

            {/* Text center */}
            <div>
                <h1 className="text-4xl text-white font-black tracking-widest md:block hidden">
                    PRO BILLIARD CENTER
                </h1>
            </div>

            {/* Right Image */}
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="md:h-24 h-14 md:block hidden"
            />

            {/* Mobile Menu Button */}
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
                            className={`text-lg font-semibold hover:bg-gold px-3 py-2 rounded-md ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>
                                <p className="text-black dark:text-white">
                                    {name}
                                </p>
                            </Link>
                        </button>
                    ))}

                    {authItems.map(({ name, path }, index) => (
                        <button
                            key={index}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-semibold hover:bg-gold px-3 py-2 rounded-md ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>
                                <p className="text-black dark:text-white">
                                    {name}
                                </p>
                            </Link>
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsOpen(true);
                        }}
                        className="text-lg font-semibold hover:bg-gold px-3 py-2 rounded-md "
                        type="button"
                    >
                        SIGN IN
                    </button>
                </ul>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 lg:mx-0 mx-5 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
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
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <label
                                            htmlFor="remember"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Lost Password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-gold hover:bg-[#b49414] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Login to your account
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?{" "}
                                    <Link
                                        href="/signup"
                                        onClick={() => setIsOpen(false)}
                                        className="text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Create account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

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
