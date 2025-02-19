import BookForm from "../Components/BookForm";

export default function BookSection({ venues }) {
    return (
        <div className="lg:px-20 px-10">
            <BookForm venues={venues} />
        </div>
    );
}
