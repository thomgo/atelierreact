import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="nav">
            <li className="mx-2"><Link to="/home">Compteur de clics</Link></li>
            <li className="mx-2"><Link to="/atelierapi">Atelier API</Link></li>
            <li className="mx-2"><Link to="/colorselector">Selecteur de couleurs</Link></li>
        </ul>
    )
}

export default Nav;