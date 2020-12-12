import React, {useEffect, useState} from "react";
import './PokeCard.css';
import axios from "axios";

function PokeCard() {
    const [pokecard, setPokecard] = useState(null);
    const [loading, toggleLoading] = useState(false)

    useEffect(() => {

        async function fetchData() {
            toggleLoading(true);
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
                setPokecard(result.data)
                console.log(result.data);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleLoading(false);
            }
        }
        fetchData()
    }, []);

    return (
        <>
            {!loading && pokecard && (
            <div>
                <h1>{pokecard.name}</h1>
                <img src={pokecard.sprites.front_default} alt="udawdiuawbd dwaiudhwui"/>
                <h3>Moves</h3>
                <span>{pokecard.moves.length}</span>
                <h3>Weight</h3>
                <span>{pokecard.weight}</span>
                <h3>Abilities</h3>
                <ul>
                    {pokecard.abilities.map((ability) => {
                        return <li key={ability.ability.name}>{ability.ability.name}</li>
                    })}
                </ul>
                {loading && <p>Loading...</p>}
            </div>
        )}
        </>

    );
};

export default PokeCard;