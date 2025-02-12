export default function CardDetails(index, item) {
    return (
        <div
            key={index}
            className="flex gap-5 text-lg font-semibold text-white"
        >
            <div>{item.icon}</div>
            <p>{item.description}</p>
        </div>
    );
}
