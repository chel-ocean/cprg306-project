"use client";
import { useState, useEffect } from 'react'
import CardList from './card-list'

export default function Page() {

    return (
        <main>
            <div className="m-3 mt-10">
                <h1 className="text-4xl text-center mb-5">Cards List</h1>
                <CardList />
            </div>
        </main>
    )
}