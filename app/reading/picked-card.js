export default function PickedCard({id, type, name, direction, meaning}){
    return (
        <section>
            <div>
                <ul key={id} className="bg-fuchsia-950 p-2 mt-3 rounded-md w-[400px] h-auto" >
                    <li className="font-extrabold text-center leading-tight border-t-2 border-b-2 border-white p-2 mb-2 mt-2">{name}</li>
                    <li>Type: {type}</li>
                    <li>Direction: {direction}</li>
                    <li>Meaning: {meaning}</li>
                </ul>
            </div>
        </section>
    )
}