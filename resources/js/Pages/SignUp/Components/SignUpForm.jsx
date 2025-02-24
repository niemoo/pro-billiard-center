import { useState } from "react";
import Membership from "./Membership";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        company: "",
        membership: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMembershipChange = (membership) => {
        setFormData({ ...formData, membership });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Full Name */}
            <div className="grid gap-1">
                <label
                    htmlFor="name"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 text-white font-semibold"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-md border border-gold bg-darkgrey/50"
                    required
                />
            </div>

            {/* Phone Number */}
            <div className="grid gap-1">
                <label
                    htmlFor="phoneNumber"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 text-white font-semibold"
                >
                    Phone Number
                </label>
                <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="rounded-md border border-gold bg-darkgrey/50"
                    required
                />
            </div>

            {/* Email */}
            <div className="grid gap-1">
                <label
                    htmlFor="email"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 text-white font-semibold"
                >
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md border border-gold bg-darkgrey/50"
                    required
                />
            </div>

            {/* Company */}
            <div className="grid gap-1">
                <label htmlFor="company" className="text-white font-semibold">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="rounded-md border border-gold bg-darkgrey/50"
                />
            </div>

            <Membership
                selectedMembership={formData.membership}
                onSelectMembership={handleMembershipChange}
            />

            <div className="flex items-start justify-center my-5">
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
                    I agree to the term and condition and privacy policy.
                </label>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="lg:w-1/3 w-full bg-gold hover:bg-darkgold text-black font-semibold py-2 px-5 rounded-md transition-all duration-300"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
