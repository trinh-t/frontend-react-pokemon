import React, {useEffect, useState} from "react";
import './PokeCard.css';
import axios from "axios";

function PokeCard() {
    const [pokecard, setPokecard] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
                setPokecard(result.data)
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData()
    }, []);

    return (
        <>
            <div>
                <h1>{pokecard.name}</h1>
                <img src={pokecard.sprites.front_default} alt="udawdiuawbd dwaiudhwui"/>
                <h3>Moves</h3>
                <span>{pokecard.moves.length}</span>
                <h3>Weight</h3>
                <span>{pokecard.weight}</span>
                <h3>Abilities</h3>
                <ul>
                    {pokecard && pokecard.abilities.map((ability) => {
                        return <li key={ability.ability.name}>{ability.ability.name}</li>
                    })}
                </ul>
            </div>
        </>

    );
}

export default PokeCard;