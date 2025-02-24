import { authItems, menuItems } from "@/Data/menu";
import { Link, useForm, usePage } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import toast from "react-hot-toast";

export default function Navbar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    const user = usePage().props.auth.user;
    console.log(user);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const isActive = (path) => (url === path ? "text-gold" : "text-white");

    console.log(errors);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                setIsOpen(false);
                toast.success("Berhasil login");
            },
            onFinish: () => {
                reset("password");
            },
        });
    };

    return (
        <nav className="bg-black/50 w-full lg:py-3 p-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="w-1/12"></div>

                <ul className="md:flex hidden justify-center items-center space-x-20">
                    {menuItems.map(({ name, path }, index) => (
                        <li
                            key={index}
                            className={`text-lg font-semibold hover:text-gold ${isActive(
                                path
                            )}`}
                        >
                            <Link href={path}>{name}</Link>
                        </li>
                    ))}
                </ul>

                {user ? (
                    <div>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:text-gold focus:outline-none"
                                    >
                                        {user.name}

                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    onClick={() => {
                                        toast.success("Berhasil logout");
                                    }}
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="md:flex hidden justify-center items-center space-x-2 font-semibold">
                        {authItems.map(({ name, path }, index) => (
                            <div
                                key={index}
                                className="flex gap-2 items-center"
                            >
                                <p className="hover:text-gold">
                                    <Link href={path}>{name}</Link>
                                </p>
                            </div>
                        ))}
                        <p className="text-gold">|</p>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-black hover:text-gold"
                            type="button"
                        >
                            SIGN IN
                        </button>
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md bg-black rounded-lg shadow-sm">
                        {/* Modal header */}
                        <div className="flex items-center justify-end rounded-t dark:border-gray-600 border-gray-200">
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

                        <div className="flex justify-center">
                            <img src="/images/pbc_logo.png" alt="" />
                        </div>

                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form
                                onSubmit={onSubmitHandler}
                                className="space-y-4"
                            >
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
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
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
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                {/* <div className="flex justify-between">
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
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full text-black bg-gold hover:bg-[#b49414] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Login to your account
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?{" "}
                                    <Link
                                        href="/signup"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gold hover:text-[#b49414] hover:underline"
                                    >
                                        Create account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
