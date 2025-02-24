export default function ContactForm() {
    return (
        <form className="grid gap-5 lg:w-1/2 w-full">
            <input
                type="text"
                className="w-full rounded-sm bg-darkgrey/50 font-semibold text-black placeholder:text-zinc-700"
                placeholder="Full Name"
                required
            />
            <input
                type="number"
                className="w-full rounded-sm bg-darkgrey/50 font-semibold text-black placeholder:text-zinc-700"
                placeholder="Phone Number"
                required
            />
            <input
                type="email"
                className="w-full rounded-sm bg-darkgrey/50 font-semibold text-black placeholder:text-zinc-700"
                placeholder="Email"
                required
            />
            <textarea
                type="text"
                className="w-full rounded-sm bg-darkgrey/50 font-semibold text-black placeholder:text-zinc-700"
                placeholder="Message"
                rows="5"
                required
            ></textarea>
            <button className="w-full rounded-full bg-gold hover:bg-darkgold text-black font-semibold py-2 mt-5 transition-all duration-300">
                SUBMIT MESSAGE
            </button>
        </form>
    );
}
