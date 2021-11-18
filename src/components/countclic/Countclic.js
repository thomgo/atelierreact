import { useState } from "react";

function Countclic() {
    // Déclaration de l'état qui stocke les clique
    // C'est une donnée qui change en fonction des actions utilisateurs
    // Déclaration également de la fonction de mise à jour de l'état, par défaut clic à 0
    let [count, setCount] = useState(0);

    // Fonction déclenchée au clic sur le boutton
    // Elle appelle le setter pour mettre à jour l'état ce qui met aussi à jour le DOM
    let handleClick = function() {
        setCount(count + 1);
    }

    // Affichage avec un évènement onclick qui déclenche la fonction handleClick
    return (
        <section>
           <h2>Un compteur de clics</h2>
            <div className="my-5">
                <boutton onClick={handleClick} className="btn btn-secondary">Cliquez moi</boutton>
                <p className="my-3">Vous avez cliqué {count} fois</p>
            </div>
             
        </section>
    );
}

export default Countclic;