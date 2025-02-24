export default function HighlightSection() {
    return (
        <div className="lg:flex w-full justify-between gap-10 lg:pl-10 lg:px-0 px-10">
            {/* Left Side Description */}
            <div className="text-white lg:w-1/2 w-full pt-10">
                {/* Highlight */}
                <div>
                    <h2 className="text-3xl font-bold text-gold">Highlight</h2>

                    <div className="flex w-full justify-between mt-5">
                        <div>
                            <h3 className="font-bold text-gold">REG:</h3>
                            <ul className="grid gap-2">
                                <li>Weekdays Rp 50.000/Hours</li>
                                <li>Weekdays Rp 100.000/Hours</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gold">VIP:</h3>
                            <ul className="grid gap-2">
                                <li>Weekdays Rp 100.000/Hours</li>
                                <li>Weekdays Rp 200.000/Hours</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Booking Policy */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-gold">
                        Booking Policy
                    </h2>

                    <div className="flex w-full justify-between mt-5">
                        <div>
                            <ul className="grid gap-2">
                                {bookingPolicy.map((item, index) => (
                                    <li key={index}>
                                        <span className="text-gold">-</span>{" "}
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="lg:mt-0 mt-10 lg:w-1/2 w-full">
                <img src="images/booking_highlight_section.png" alt="" />
            </div>
        </div>
    );
}

const bookingPolicy = [
    {
        description: "Online booking must be paid within 15 minutes",
    },
    {
        description:
            "Bookings cannot be cancelled, if you want to cancel, the money cannot be refunded.",
    },
    {
        description: "For reschedule please contact the admin maximum H-1",
    },
];
