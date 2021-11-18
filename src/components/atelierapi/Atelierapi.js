import axios from "axios";
import { useState, useEffect } from "react";
import Pokemonitem from "./Pokemonitem";

function Atelierapi() {
    // Etat pour le tableau de pokemons renvoyé par l'API
    let [pokemons, setPokemons] = useState([]);
    // Etat qui représente une éventuelle erreur dans la réponse serveur
    let [error, setError] = useState(null);
    // Etat qui permet de déterminer quand la réponse est arrivée
    let [isLoaded, setIsLoaded] = useState(false);

    // Hook déclenché à chaque changement du DOM
    // Ici on ne souhaite le lancer qu'au démarrage donc on passe un tableau vide en deuxième paramètre
    useEffect(() => {
            // Lancement de la requête avec Axios
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
            // Récupération de la réponse et mise à jour des états
            .then(function(response){
                setPokemons(response.data.results);
                setIsLoaded(true);
            })
            // Cas où une erreur est levée
            .catch(function(error){
                setError(error)
            })
    }, [])

    // Trois affichages différents selon :
    // - qu'on a reçu une erreur
    // - que la réponse n'est pas encore arrivée
    // - qu'on a reçu les données
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

    // Affiche des pokemons, chaque li de la liste est un composant à part
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