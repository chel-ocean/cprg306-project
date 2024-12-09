export default function Card({value, type, name, meaning_up, meaning_down}){
    return (
        <section>
            <div>
                <ul key={value} className="bg-fuchsia-950 p-2 mt-3 rounded-md w-[400px] h-auto" >
                    <li className="font-extrabold text-center leading-tight border-t-2 border-b-2 border-white p-2 mb-2 mt-2">{name}</li>
                    <li>Type: {type}</li>
                    <li>Meaning Up: {meaning_up}</li>
                    <li>Meaning Down: {meaning_down}</li>
                </ul>
            </div>
        </section>
    )
}