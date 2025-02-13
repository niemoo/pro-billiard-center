export default function ImageCard({ description }) {
    return (
        <div className="text-center w-full">
            <img src="images/gallery_section.png" alt="" className="w-full" />
            <p className="text-white text-xl font-bold">{description}</p>
        </div>
    );
}
