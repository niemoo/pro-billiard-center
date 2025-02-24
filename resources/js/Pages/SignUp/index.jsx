import { Head } from "@inertiajs/react";
import SignUpForm from "./Components/SignUpForm";

export default function SignUp({ title }) {
    return (
        <>
            <Head title={title} />

            <div className="bg-gradient-to-b from-black via-[#000000BF] to-black w-full py-10">
                <div className="max-w-screen-md mx-auto lg:px-0 px-5">
                    <h1 className="text-center text-3xl font-extrabold text-gold mb-5">
                        REGISTER
                    </h1>

                    <SignUpForm />
                </div>
            </div>
        </>
    );
}
