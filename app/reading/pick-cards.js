"use client";
import {useState, useEffect} from "react";
import PickedCard from "./picked-card";

export default function PickedCards() {    
    const [pickedCards, setPickedCards] = useState([]);

    const getDirection = () => {
        const num = Math.floor(Math.random() * 2);
        if (num === 0){
            return "Upright";
        } else {
            return "Reversed";
        }
    }

    const pickCards = async () => {
        const response = await fetch(`https://tarotapi.dev/api/v1/cards/random?n=5`);
        const data = await response.json();
    
        const pickedCards = data.cards;
        setPickedCards(pickedCards);
    }

    useEffect(() => {
        pickCards();
    },[]);

    return(
        <div className="justify-items-center">
            <ul className="grid grid-cols-2 gap-4" >
                {pickedCards.map((card) => (
                    <PickedCard 
                    key={card.id}
                    id={card.id}
                    type = {card.type}
                    name={card.name}
                    direction={getDirection()}
                    meaning={(getDirection() === "Upright") ? card.meaning_up : card.meaning_rev}/>
                ))}
            </ul>
        </div>
    )
}