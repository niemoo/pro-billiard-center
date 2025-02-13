export default function FacilityDetailCard({ item }) {
    return (
        <div className="flex items-center gap-5 text-lg font-semibold text-white w-full">
            <div>{item.icon}</div>
            <p>{item.description}</p>
        </div>
    );
}
