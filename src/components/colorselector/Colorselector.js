import { useState } from 'react';
import Button from './Button';
import Showcolor from './Showcolor';

function Colorselector() {
   let [color, setColor] = useState("success");

   function handleClick(color) {
       setColor(color);
   }

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