export default function Header() {
    return (
        <div className="md:h-24 h-20 w-full bg-[#252525] flex justify-between items-center py-10 md:px-20 p-5 border-b-2 border-[#EFBF04] shadow-md">
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="md:h-24 h-14"
            />
            <div>
                <h1 className="text-4xl text-white font-black tracking-widest md:block hidden">
                    PRO BILLIARD CENTER
                </h1>
                <h1 className="text-4xl text-white font-black tracking-widest md:hidden block">
                    PBC
                </h1>
            </div>
            <img
                src="images/pbc_logo.png"
                alt="PRO BILLIARD CENTER"
                className="md:h-24 h-14"
            />
        </div>
    );
}
