export default function BookForm() {
    return (
        <>
            <select
                name="value"
                className="select select-bordered w-full max-w-xs bg-[#EFBF04] flex items-center font-semibold justify-center mx-auto"
            >
                <option disabled selected>
                    Venue
                </option>
                <option className="font-semibold">MNC Center</option>
                <option className="font-semibold">MNC Studios</option>
                <option className="font-semibold">Lido Lake Resort</option>
            </select>

            <form>
                {/* Input Form */}
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-5 mt-10">
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="name"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="rounded-md bg-[#FFFFFF]/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="email"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="rounded-md bg-[#FFFFFF]/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="phoneNumber"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="rounded-md bg-[#FFFFFF]/50"
                        />
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="category"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="rounded-md bg-[#FFFFFF]/50"
                        >
                            <option value="VIP" className="text-black">
                                VIP
                            </option>
                            <option value="REG" className="text-black">
                                REG
                            </option>
                        </select>
                    </div>
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="date"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Select Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="rounded-md bg-[#FFFFFF]/50"
                        />
                    </div>{" "}
                    <div className="text-black grid gap-2">
                        <label
                            htmlFor="hours"
                            className="text-[#EFBF04] font-semibold"
                        >
                            Select Hours
                        </label>
                        <input
                            type="time"
                            id="hours"
                            name="hours"
                            className="rounded-md bg-[#FFFFFF]/50"
                        />
                    </div>
                </div>

                {/* Payment Info and Button Book */}
                <div className="lg:flex justify-between items-center w-full mt-10">
                    {/* Payment Info */}
                    <div className="lg:flex-row flex flex-col lg:w-3/4 w-full lg:justify-between justify-center items-center lg:gap-2 gap-5">
                        <p className="text-white">Supported Payment</p>
                        <img src="images/mnc.png" alt="mnc" />
                        <img src="images/mandiri.png" alt="mandiri" />
                        <img src="images/bri.png" alt="bri" />
                        <img src="images/bni.png" alt="bni" />
                        <img src="images/bca.png" alt="bca" />
                    </div>

                    {/* Button Book Now */}
                    <button className="lg:w-1/4 w-full lg:ml-20 ml-0 lg:mt-0 mt-10 py-3 rounded-md bg-[#EFBF04] hover:bg-[#b69927] text-black font-semibold transition-all duration-300">
                        Book Now
                    </button>
                </div>
            </form>
        </>
    );
}
