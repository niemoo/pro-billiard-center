import { useEffect, useState } from "react";
import SkeletonCard from "../Components/SkeletonCard";
import NewsCard from "../Components/NewsCard";

export default function NewsSection({ events }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (events) {
            setIsLoading(false);
        }
    }, [events]);

    return (
        <>
            {isLoading ? (
                <div className="grid gap-5">
                    {Array(5)
                        .fill(null)
                        .map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                </div>
            ) : (
                events.map((event) => <NewsCard event={event} key={event.id} />)
            )}
        </>
    );
}
