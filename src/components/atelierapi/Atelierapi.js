import axios from "axios";
import { useState, useEffect } from "react";
import Pokemonitem from "./Pokemonitem";

function Atelierapi() {
    let [pokemons, setPokemons] = useState([]);
    let [error, setError] = useState(null);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(function(response){
             setPokemons(response.data.results);
             setIsLoaded(true);
            })
            .catch(function(error){
                setError(error)
            })
    }, [])

    if(error) {
        return (
            <div className="alert alert-danger">
                Une erreur est survenue le chargement a échoué : {error.message}
            </div>
        )
    }

    if(!isLoaded) {
        return (
            <div className="alert alert-info">
                Chargement de vos pokémons en cours
            </div>
        )
    }

    return (
        <section>
            <h2>Les pokémons c'est trop bien !!!!</h2>
            <ul>
                {pokemons.map(pokemon => <Pokemonitem name ={pokemon.name}/>)}
            </ul>
        </section>
    );
}

export default Atelierapi;