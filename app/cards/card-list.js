"use client";
import {useState, useEffect} from "react";
import Card from "./card";

export default function CardList() {    
    const [cards, setCards] = useState([]);
    const [filterBy, setFilterBy] = useState("all");
    
    const getCards = async () => {
        const response = await fetch(`https://tarotapi.dev/api/v1/cards`);
        const data = await response.json();
        const cards = data.cards;
        setCards(cards);
    }

    const getFilteredCards = () => {
        if (filterBy === "major") {
            setCards(cards.filter((card) => card.type.indexOf("The") > -1));
        } else if (filterBy === "wands") {
            setCards(cards.filter((card) => card.type.indexOf("Wands") > -1));
        } else if (filterBy === "cups") {
            setCards(cards.filter((card) => card.type.indexOf("Cups") > -1));
        } else if (filterBy === "swords") {
            setCards(cards.filter((card) => card.type.indexOf("Swords") > -1));
        } else if (filterBy === "pentacles") {
            setCards(cards.filter((card) => card.type.indexOf("Pentacles") > -1));
        } else {
            getCards();
        }
    }

    useEffect(() => {
        getCards();
    });

    useEffect(() => {
        getFilteredCards(filterBy);
    }, [filterBy]);

    return(
        <div className="justify-items-center">
            <div className="flex space-x-4">
                <p>Filter by: </p>
                <select className="text-black w-[200px]" onChange={(e) => setFilterBy(e.target.value)}>
                    <option key="value" value="all">Show All</option>
                    <option key="major" value="major">Major Arcana</option>
                    <option key="wands" value="wands">Wands</option>
                    <option key="cups" value="cups">Cups</option>
                    <option key="swords" value="swords">Swords</option>
                    <option key="pentacles" value="pentacles">Pentacles</option>
                </select>
            </div>
            <ul className="grid grid-cols-2 gap-4" >
                {cards.map((card) => (
                    <Card 
                    key={card.id}
                    value={card.value}
                    type = {card.type}
                    name={card.name}
                    meaning_up = {card.meaning_up}
                    meaning_down = {card.meaning_rev}
                    />
                ))}
            </ul>
        </div>
    )
}