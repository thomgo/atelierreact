import { useState } from "react";

function Countclic() {
    let [count, setCount] = useState(0);

    let handleClick = function() {
        setCount(count + 1);
    }

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