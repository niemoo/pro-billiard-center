export default function ContactInfoCard({ index, info }) {
    return (
        <div key={index} className="flex gap-5">
            <div className="text-3xl text-gold">{info.icon}</div>
            <div className="font-semibold text-white">
                <p className="text-xl text-gold mb-2">{info.title}</p>
                {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                ))}
            </div>
        </div>
    );
}
