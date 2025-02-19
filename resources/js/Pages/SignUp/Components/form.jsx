import { useState } from "react";
import Membership from "./membership";

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
        // Send `formData` to your backend or API here
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-5">
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
                    className="rounded-md border border-[#EFBF04] bg-[#FFFFFF]/50"
                    required
                />
            </div>
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
                    className="rounded-md border border-[#EFBF04] bg-[#FFFFFF]/50"
                    required
                />
            </div>
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
                    className="rounded-md border border-[#EFBF04] bg-[#FFFFFF]/50"
                    required
                />
            </div>
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
                    className="rounded-md border border-[#EFBF04] bg-[#FFFFFF]/50"
                />
            </div>

            {/* Pass setMembership function to Membership */}
            <Membership
                selectedMembership={formData.membership}
                onSelectMembership={handleMembershipChange}
            />

            <div className="flex justify-center mt-5">
                <button
                    type="submit"
                    className="lg:w-1/3 w-full bg-[#EFBF04] hover:bg-[#aa8e1e] text-black font-semibold py-2 px-5 rounded-md transition-all duration-300"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
