export default function InfoDetailCard({ item }) {
    return (
        <div className="flex gap-5 text-lg font-semibold text-white">
            <div>{item.icon}</div>
            <p>{item.description}</p>
        </div>
    );
}
