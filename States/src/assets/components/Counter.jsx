import { useState } from "react";

const [count, setCount]= useState(0)

function Counter() {
    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={setCount(count+1)} >Arttır</button>
            <button onClick={setCount(count-1)}>Azalt</button>
        </div>
     );
}

export default Counter;