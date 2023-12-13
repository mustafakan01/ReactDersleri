import { useState } from "react";


function InputExample() {

    const [name, setName]= useState("Mustafa")

    return ( 
         <div>
            <h1>Lütfen adınızı girin...</h1> <br />
            <input value={name} onChange={(event)=> setName(event.target.value)} /> <br />
            {name}
        </div>
     );
}

export default InputExample;