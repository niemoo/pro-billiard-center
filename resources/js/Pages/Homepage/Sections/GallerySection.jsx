import React from "react";
import Marquee from "react-fast-marquee";

const GallerySection = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 1",
            headline: "Event Headline 1",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 2",
            headline: "Event Headline 2",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 3",
            headline: "Event Headline 3",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 4",
            headline: "Event Headline 4",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 1",
            headline: "Event Headline 1",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 2",
            headline: "Event Headline 2",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 3",
            headline: "Event Headline 3",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 4",
            headline: "Event Headline 4",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 1",
            headline: "Event Headline 1",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 2",
            headline: "Event Headline 2",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 3",
            headline: "Event Headline 3",
        },
        {
            src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Event Description 4",
            headline: "Event Headline 4",
        },
    ];

    const ImageCard = ({ image }) => (
        <div className={`transition-opacity duration-500`}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img
                    src={image.src}
                    alt={image.headline}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">
                        {image.headline}
                    </h3>
                    <p className="text-white text-sm">{image.description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-black p-5">
            <h2 className="text-center text-4xl text-gold font-extrabold mb-8">
                Gallery
            </h2>

            <div className="relative max-w-6xl mx-auto">
                <div className="flex overflow-hidden">
                    <Marquee
                        pauseOnHover="true"
                        className="rounded-2xl py-3 overflow-hidden grid"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className=" flex pr-10 flex-col justify-center items-center"
                            >
                                <ImageCard image={image} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
