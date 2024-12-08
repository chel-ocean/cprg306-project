export default function Card({id, type, name, meaning_up, meaning_down}){
    return (
        <section>
            <div>
                <ul>
                    <li>Name: {name}</li>
                    <li>Meaning Up: {meaning_up}</li>
                    <li>Meaning Down: {meaning_down}</li>
                </ul>
            </div>
        </section>
    )
}