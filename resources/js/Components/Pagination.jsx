import { Link } from "@inertiajs/react";

export default function Pagination({ meta }) {
    if (!meta || !meta.links) return null;

    const current = meta.current_page;
    const last = meta.last_page;

    const visiblePages = [];
    if (current > 3) visiblePages.push("...");

    for (
        let i = Math.max(1, current - 1);
        i <= Math.min(last, current + 1);
        i++
    ) {
        visiblePages.push(i);
    }

    if (current < last - 2) visiblePages.push("...");

    return (
        <div className="join bg-white">
            {/* Tombol Previous */}
            {current > 1 && (
                <Link
                    href={meta.links[current - 1].url}
                    className="join-item btn hover:bg-gold"
                >
                    &laquo;
                </Link>
            )}

            {/* Halaman Pertama */}
            {current > 3 && (
                <Link
                    href={meta.links[1].url}
                    className={`join-item btn ${
                        current === 1 ? "btn-active" : "hover:bg-gold"
                    }`}
                >
                    1
                </Link>
            )}

            {/* Ellipsis & Dynamic Pages */}
            {visiblePages.map((page, index) =>
                page === "..." ? (
                    <button key={index} className="join-item btn btn-disabled">
                        ...
                    </button>
                ) : (
                    <Link
                        key={index}
                        href={meta.links[page].url}
                        className={`join-item btn ${
                            current === page
                                ? "btn-active bg-gold"
                                : "hover:bg-gold"
                        }`}
                    >
                        {page}
                    </Link>
                )
            )}

            {/* Halaman Terakhir */}
            {current !== last - 1 && current !== last && (
                <Link
                    href={meta.links[last].url}
                    className={`join-item btn ${
                        current === last ? "btn-active" : "hover:bg-gold"
                    }`}
                >
                    {last}
                </Link>
            )}

            {/* Tombol Next */}
            {current < last && (
                <Link
                    href={meta.links[current + 1].url}
                    className="join-item btn hover:bg-gold"
                >
                    &raquo;
                </Link>
            )}
        </div>
    );
}
