export default function ContactForm() {
    return (
        <form className="grid gap-5 lg:w-1/2 w-full">
            <input
                type="text"
                className="w-full rounded-sm bg-[#FFFFFF]/50 font-semibold text-black"
                placeholder="Full Name"
            />
            <input
                type="text"
                className="w-full rounded-sm bg-[#FFFFFF]/50 font-semibold text-black"
                placeholder="Phone Number"
            />
            <input
                type="email"
                className="w-full rounded-sm bg-[#FFFFFF]/50 font-semibold text-black"
                placeholder="Email"
            />
            <textarea
                type="text"
                className="w-full rounded-sm bg-[#FFFFFF]/50 font-semibold text-black"
                placeholder="Message"
                rows="5"
            ></textarea>
            <button className="w-full rounded-full bg-[#EFBF04] hover:bg-[#AC9330] text-black font-semibold py-2 mt-5">
                SUBMIT MESSAGE
            </button>
        </form>
    );
}
