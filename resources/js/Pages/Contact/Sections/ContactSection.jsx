import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../Components/ContactForm";

export default function ContactSection() {
    return (
        <>
            {/* Title */}
            <h1 className="text-3xl text-center font-extrabold text-[#EFBF04]">
                CONTACT
            </h1>

            <div className="lg:flex grid gap-10 p-10">
                {/* Info Side */}
                <div className="lg:w-1/2 w-full grid gap-5">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex gap-5">
                            <div className="text-3xl text-[#EFBF04]">
                                {info.icon}
                            </div>
                            <div className="font-semibold text-white">
                                <p className="text-xl text-[#EFBF04] mb-2">
                                    {info.title}
                                </p>
                                {info.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <ContactForm />
            </div>
        </>
    );
}

const contactInfo = [
    {
        icon: <LuPhoneCall />,
        title: "Call",
        details: ["081322137643"],
    },
    {
        icon: <MdOutlineEmail />,
        title: "Email",
        details: ["PBC@gmail.com"],
    },
    {
        icon: <GrLocation />,
        title: "Address",
        details: [
            "Jl. K.H. Wahid Hasyim No.36-38, RT.15/RW.7, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340",
        ],
    },
    {
        icon: <CgDanger />,
        title: "Help",
        details: [
            "FAQ",
            "Terms and Conditions",
            "Privacy Policy",
            "Cookies Policy",
        ],
    },
];
