import ImageCard from "../Components/ImageCard";

export default function GallerySection() {
    return (
        <section className="bg-black p-5">
            {/* Title */}
            <h2 className="text-center text-4xl text-[#EFBF04] font-extrabold">
                Gallery
            </h2>

            {/* Card Array */}
            <div className="md:flex grid gap-10 py-10">
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <ImageCard key={index} description="Event Description" />
                ))}
            </div>
        </section>
    );
}
