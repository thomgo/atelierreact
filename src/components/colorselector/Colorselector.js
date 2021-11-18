import { useState } from 'react';
import Button from './Button';
import Showcolor from './Showcolor';

// Composant parent qui représente le sélecteur dans son ensemble 
// il appelle deux composants enfants Button et Showcolor
function Colorselector() {
    // etat qui représente la couleur sélectionnée au clic
   let [color, setColor] = useState("success");

   // Fonction pour assigner la couleur sélectionnée à l'état
   // Cette fonction est envoyée dans l'enfant Button à l'aide des props
   function handleClick(color) {
       setColor(color);
   }

    // remarquez comment on passe la fonction handleclick en props 3 fois
    // Show color attend quant à lui la couleur sélectionnée
   return(
       <section>
           <Button handleClick={handleClick} color="success"/>
           <Button handleClick={handleClick} color="warning"/>
           <Button handleClick={handleClick} color="danger"/>

           <Showcolor color={color}/>
       </section>
   ) 
}

export default Colorselector;