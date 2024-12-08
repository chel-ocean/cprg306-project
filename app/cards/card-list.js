"use client";
import {useState, useEffect} from "react";

const [cards, setCards] = useState([]);

const fetchCards = async () => {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards`)
    const data = await response.json();
    return data.data;
}

export default function CardList(){

    return()
}