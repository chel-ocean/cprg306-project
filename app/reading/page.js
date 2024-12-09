"use state";
import PickedCards from "./pick-cards"

export default function Page() {
    return (
        <div className="m-3 mt-10">
            <h1 className="text-4xl text-center mb-5">My Cards</h1>
            <PickedCards />
        </div>
    );
}