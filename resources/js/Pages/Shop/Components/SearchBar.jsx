import { IoSearch, IoCartOutline } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className="mx-auto my-10 max-w-screen-sm lg:px-0 px-10">
            {/* <div className="flex items-center mx-auto rounded-md bg-[#EFBF04] lg:w-1/2 w-full">
                <div className="flex items-center bg-zinc-400 rounded-l-md w-full">
                    <div className="px-2">
                        <IoSearch className="text-black" />
                    </div>
                    <input
                        type="search"
                        className="w-full bg-zinc-400 text-black font-semibold placeholder-black placeholder:text-sm border border-none"
                        placeholder="Search"
                    />
                </div>
                <button className="flex gap-2 items-center px-3 h-full">
                    <p className="font-semibold">Cart</p>
                    <div>
                        <IoCartOutline className="text-black text-xl" />
                    </div>
                </button>
            </div> */}

            <div className="max-w-md mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                    />
                    <button className="flex items-center gap-2 h-full text-black absolute end-0 bottom-0 bg-[#EFBF04] hover:bg-[#d6b329] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-2 ">
                        <p className="font-semibold">Cart</p>
                        <div>
                            <IoCartOutline className="text-black text-xl" />
                        </div>
                    </button>
                    {/* <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button> */}
                </div>
            </div>
        </div>
    );
}
