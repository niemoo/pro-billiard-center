export default function SkeletonCard() {
    return (
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 animate-pulse">
            <div className="absolute inset-0 flex w-full h-full">
                <div className="w-1/2 relative">
                    <div className="w-full h-full bg-gray-700 rounded-lg"></div>
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0) 70%)",
                        }}
                    ></div>
                </div>

                <div className="w-1/2 flex justify-center items-center p-6">
                    <div className="max-w-lg w-full">
                        <div className="h-6 w-3/4 bg-gray-600 rounded-md"></div>
                        <div className="mt-4 space-y-2">
                            <div className="h-4 w-full bg-gray-600 rounded-md"></div>
                            <div className="h-4 w-5/6 bg-gray-600 rounded-md"></div>
                            <div className="h-4 w-4/6 bg-gray-600 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
