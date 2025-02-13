import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { CgDanger } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../Components/ContactForm";
import ContactInfoCard from "../Components/ContactInfoCard";

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
                        <ContactInfoCard key={index} info={info} />
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
