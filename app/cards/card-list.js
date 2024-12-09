"use client";
import {useState, useEffect} from "react";
import Card from "./card";

export default function CardList() {    
    const [cards, setCards] = useState([]);

    const getCards = async () => {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards`);
    const data = await response.json();
    
    const cards = data.cards;
        setCards(cards);
    }

    useEffect(() => {
        getCards();
    });

    return(
        <div className="justify-items-center">
            <ul className="grid grid-cols-2 gap-4" >
                {cards.map((card) => (
                    <Card 
                    key={card.id}
                    id={card.id}
                    type = {card.type}
                    name={card.name}
                    meaning_up = {card.meaning_up}
                    meaning_down = {card.meaning_rev}/>
                ))}
            </ul>
        </div>
    )
}